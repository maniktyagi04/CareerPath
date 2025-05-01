import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import '../styles/Home.css'

const Home = () => {
  const navigate = useNavigate()

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

  return (
    <motion.div 
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover Your Ideal Career Path
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Take our personality quiz to find career options that match your skills and interests
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <button 
              className="btn-primary start-quiz-btn"
              onClick={() => navigate('/quiz')}
            >
              Start Career Quiz
            </button>
          </motion.div>
        </div>
        <div className="hero-image-container">
          <motion.img 
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Person exploring career options" 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>
      </section>

      <section className="features-section" id="about">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          How It Works
        </motion.h2>

        <motion.div 
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="feature-card" variants={itemVariants}>
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
            </div>
            <h3>Take The Quiz</h3>
            <p>Answer questions about your personality, skills, and interests to help us understand you better.</p>
          </motion.div>

          <motion.div className="feature-card" variants={itemVariants}>
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path><polyline points="10 2 10 10 13 7 16 10 16 2"></polyline></svg>
            </div>
            <h3>Get Your Results</h3>
            <p>Receive personalized career recommendations that match your unique profile and interests.</p>
          </motion.div>

          <motion.div className="feature-card" variants={itemVariants}>
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><path d="M15 4v16"></path><path d="M4 15h16"></path></svg>
            </div>
            <h3>Explore Opportunities</h3>
            <p>Learn about different career paths, required skills, and potential job opportunities in each field.</p>
          </motion.div>
        </motion.div>
      </section>

      <section className="testimonials-section">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Success Stories
        </motion.h2>

        <motion.div 
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="testimonial-card" variants={itemVariants}>
            <div className="testimonial-content">
              <p>"This quiz helped me discover my passion for UX design. I'm now working at a tech company and loving it!"</p>
              <div className="testimonial-author">
                <h4>Emma S.</h4>
                <p>UX Designer</p>
              </div>
            </div>
          </motion.div>

          <motion.div className="testimonial-card" variants={itemVariants}>
            <div className="testimonial-content">
              <p>"I was stuck in a career I didn't enjoy. The Career Path Finder showed me options I never considered before."</p>
              <div className="testimonial-author">
                <h4>Michael T.</h4>
                <p>Data Scientist</p>
              </div>
            </div>
          </motion.div>

          <motion.div className="testimonial-card" variants={itemVariants}>
            <div className="testimonial-content">
              <p>"As a recent graduate, I was overwhelmed with choices. This tool helped me find direction and purpose."</p>
              <div className="testimonial-author">
                <h4>Sarah L.</h4>
                <p>Marketing Specialist</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="cta-section">
        <motion.div 
          className="cta-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Ready to Find Your Ideal Career?</h2>
          <p>Take our personality quiz and discover career paths that align with your unique skills and interests.</p>
          <button 
            className="btn-primary"
            onClick={() => navigate('/quiz')}
          >
            Start The Quiz
          </button>
        </motion.div>
      </section>
    </motion.div>
  )
}

export default Home