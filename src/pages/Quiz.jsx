import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import quizQuestions from '../data/quizQuestions.js'
import careerPaths from '../data/careerPaths.js'
import { analyzeQuizResponses } from '../utils/quizAnalyzer.js'
import '../styles/Quiz.css'

const Quiz = ({ onQuizComplete }) => {
  const navigate = useNavigate()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [responses, setResponses] = useState({})
  const [loading, setLoading] = useState(false)
  const [direction, setDirection] = useState(1) // 1 for forward, -1 for backward
  
  const totalQuestions = quizQuestions.length
  const currentQuestion = quizQuestions[currentQuestionIndex]
  const progress = ((currentQuestionIndex) / totalQuestions) * 100
  
  const handleOptionSelect = (option) => {
    // Store the response with both the option text and its categories
    setResponses({
      ...responses,
      [currentQuestion.id]: {
        question: currentQuestion.question,
        answer: option.text,
        categories: option.categories
      }
    })
    
    // If last question, process results
    if (currentQuestionIndex === totalQuestions - 1) {
      handleQuizComplete(option)
    } else {
      // Move to next question with forward animation
      setDirection(1)
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }
  
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setDirection(-1)
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }
  
  const handleQuizComplete = (finalOption) => {
    setLoading(true)
    
    // Add the final response if it was passed
    const finalResponses = { 
      ...responses,
      [currentQuestion.id]: {
        question: currentQuestion.question,
        answer: finalOption.text,
        categories: finalOption.categories
      }
    }
    
    // Simulate API delay for analysis
    setTimeout(() => {
      const results = analyzeQuizResponses(finalResponses, careerPaths)
      onQuizComplete(finalResponses, results)
      navigate('/results')
    }, 1500)
  }
  
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }
  
  return (
    <motion.div 
      className="quiz-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {loading ? (
        <div className="loading-container">
          <motion.div 
            className="loading-spinner"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <h2>Analyzing your responses...</h2>
          <p>We're finding career paths that match your unique profile.</p>
        </div>
      ) : (
        <>
          <div className="quiz-header">
            <h1>Career Path Finder Quiz</h1>
            <p>Answer honestly to get the most accurate career recommendations.</p>
            
            <div className="progress-container">
              <div className="progress-text">
                Question {currentQuestionIndex + 1} of {totalQuestions}
              </div>
              <div className="progress-bar">
                <motion.div 
                  className="progress-fill"
                  initial={{ width: `${((currentQuestionIndex) / totalQuestions) * 100}%` }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </div>
          
          <div className="question-container">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentQuestionIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="question-card"
              >
                <h2 className="question-text">{currentQuestion.question}</h2>
                <div className="options-container">
                  {currentQuestion.options.map((option) => (
                    <motion.button
                      key={option.id}
                      className="option-button"
                      onClick={() => handleOptionSelect(option)}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {option.text}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="quiz-navigation">
            {currentQuestionIndex > 0 && (
              <button 
                className="btn-secondary"
                onClick={handlePrevious}
              >
                Previous Question
              </button>
            )}
          </div>
        </>
      )}
    </motion.div>
  )
}

export default Quiz