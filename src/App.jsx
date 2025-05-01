import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import Quiz from './pages/Quiz.jsx'
import Results from './pages/Results.jsx'
import Footer from './components/Footer.jsx'

import './styles/App.css'

function App() {
  const [quizResults, setQuizResults] = useState(null)
  const [userResponses, setUserResponses] = useState({})

  const handleQuizComplete = (responses, results) => {
    setUserResponses(responses)
    setQuizResults(results)
  }

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/quiz" 
              element={<Quiz onQuizComplete={handleQuizComplete} />} 
            />
            <Route 
              path="/results" 
              element={
                quizResults ? 
                <Results results={quizResults} responses={userResponses} /> : 
                <Navigate to="/quiz" replace />
              } 
            />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default App