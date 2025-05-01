import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { generatePersonalityDescription } from '../utils/quizAnalyzer.js'
import '../styles/Results.css'

const Results = ({ results, responses }) => {
  const navigate = useNavigate()
  const [personalityDescription, setPersonalityDescription] = useState('')
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedCareer, setSelectedCareer] = useState(null)
  
  const { recommendedPaths, personalityProfile } = results || { recommendedPaths: [], personalityProfile: {} }
  
  // Get top 3 recommended career paths
  const topRecommendations = recommendedPaths.slice(0, 3)
  
  useEffect(() => {
    if (!results) {
      navigate('/quiz')
      return
    }
    
    // Generate personality description from profile
    if (personalityProfile) {
      const description = generatePersonalityDescription(personalityProfile)
      setPersonalityDescription(description)
    }
  }, [results, personalityProfile, navigate])
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  }
  
  const handleRetakeQuiz = () => {
    navigate('/quiz')
  }
  
  const renderCareerDetails = (career) => {
    return (
      <motion.div 
        className="career-details"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="career-details-header">
          <button className="btn-secondary back-button" onClick={() => setSelectedCareer(null)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            Back to careers
          </button>
          <h2>{career.title}</h2>
        </div>
        
        <p className="career-description">{career.description}</p>
        
        <div className="career-details-grid">
          <div className="detail-section">
            <h3>Key Skills</h3>
            <ul className="skills-list">
              {career.skills.map((skill, index) => (
                <li key={index} className="skill-tag">{skill}</li>
              ))}
            </ul>
          </div>
          
          <div className="detail-section">
            <h3>Education & Requirements</h3>
            <p>{career.education}</p>
          </div>
          
          <div className="detail-section">
            <h3>Job Outlook</h3>
            <p>{career.outlook}</p>
          </div>
          
          <div className="detail-section">
            <h3>Typical Salary Range</h3>
            <p>{career.salary}</p>
          </div>
        </div>
      </motion.div>
    )
  }
  
  const renderOverviewTab = () => {
    return (
      <div className="overview-tab">
        <motion.div
          className="personality-profile-section"
          variants={itemVariants}
        >
          <h2>Your Personality Profile</h2>
          <p>{personalityDescription}</p>
          
          <div className="traits-container">
            <h3>Your Top Traits</h3>
            <div className="traits-grid">
              {personalityProfile.dominantTraits.slice(0, 5).map((trait, index) => (
                <div key={index} className="trait-tag">
                  {trait.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="top-recommendations-section"
          variants={itemVariants}
        >
          <h2>Your Top Career Recommendations</h2>
          <div className="career-path-cards">
            {topRecommendations.map((path, index) => (
              <motion.div 
                key={index} 
                className="career-path-card"
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                transition={{ duration: 0.2 }}
              >
                <h3>{path.title}</h3>
                <p>{path.description}</p>
                <button 
                  className="btn-primary view-careers-btn"
                  onClick={() => setActiveTab(`careers-${path.id}`)}
                >
                  View Careers
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="all-paths-section"
          variants={itemVariants}
        >
          <h3>All Recommended Career Paths</h3>
          <div className="career-path-list">
            {recommendedPaths.map((path, index) => (
              <button 
                key={index}
                className={`career-path-button ${index < 3 ? 'top-recommendation' : ''}`}
                onClick={() => setActiveTab(`careers-${path.id}`)}
              >
                {path.title}
                {index < 3 && <span className="top-badge">Top Match</span>}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    )
  }
  
  const renderCareersTab = (pathId) => {
    const path = recommendedPaths.find(p => p.id === parseInt(pathId))
    
    if (!path) return null
    
    if (selectedCareer) {
      const career = path.careers.find(c => c.title === selectedCareer)
      if (career) {
        return renderCareerDetails(career)
      }
    }
    
    return (
      <div className="careers-tab">
        <div className="careers-tab-header">
          <button className="btn-secondary back-button" onClick={() => setActiveTab('overview')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            Back to overview
          </button>
          <h2>{path.title}</h2>
          <p>{path.description}</p>
        </div>
        
        <div className="careers-grid">
          {path.careers.map((career, index) => (
            <motion.div 
              key={index}
              className="career-card"
              whileHover={{ y: -5, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedCareer(career.title)}
            >
              <h3>{career.title}</h3>
              <p>{career.description}</p>
              <div className="career-meta">
                <div className="meta-item">
                  <span className="meta-label">Outlook:</span>
                  <span className="meta-value">{career.outlook.includes('growth') || career.outlook.includes('increase') ? '📈' : '📊'} {career.outlook.split(' ')[0]}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Salary:</span>
                  <span className="meta-value">{career.salary}</span>
                </div>
              </div>
              <button className="view-details-btn">View Details</button>
            </motion.div>
          ))}
        </div>
      </div>
    )
  }
  
  return (
    <motion.div 
      className="results-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="results-header">
        <h1>Your Career Path Results</h1>
        <p>Based on your responses, we've identified career paths that match your personality, interests, and strengths.</p>
        <button className="btn-secondary retake-btn" onClick={handleRetakeQuiz}>Retake Quiz</button>
      </div>
      
      <motion.div 
        className="results-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {activeTab === 'overview' ? (
          renderOverviewTab()
        ) : activeTab.startsWith('careers-') ? (
          renderCareersTab(activeTab.split('-')[1])
        ) : null}
      </motion.div>
    </motion.div>
  )
}

export default Results