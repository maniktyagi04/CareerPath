// This utility analyzes quiz responses and recommends careers

// Helper to count category occurrences from responses
const countCategories = (responses) => {
    const categoryCounts = {}
    
    // Process each question response
    Object.values(responses).forEach(response => {
      // Each response has categories array
      response.categories.forEach(category => {
        if (categoryCounts[category]) {
          categoryCounts[category]++
        } else {
          categoryCounts[category] = 1
        }
      })
    })
    
    return categoryCounts
  }
  
  // Sort categories by count to find dominant traits
  const getDominantCategories = (categoryCounts) => {
    // Convert to array of [category, count] pairs and sort
    return Object.entries(categoryCounts)
      .sort((a, b) => b[1] - a[1])
      .map(entry => entry[0])
  }
  
  // Calculate match score for a career path based on categories
  const calculateMatchScore = (careerPath, dominantCategories) => {
    let score = 0
    const primaryWeight = 10
    const secondaryWeight = 5
    
    // Check primary categories (higher weight)
    careerPath.primaryCategories.forEach(category => {
      const categoryIndex = dominantCategories.indexOf(category)
      if (categoryIndex !== -1) {
        // Higher score for categories that appear earlier in the dominant list
        score += primaryWeight * (dominantCategories.length - categoryIndex) / dominantCategories.length
      }
    })
    
    // Check secondary categories (lower weight)
    careerPath.secondaryCategories.forEach(category => {
      const categoryIndex = dominantCategories.indexOf(category)
      if (categoryIndex !== -1) {
        score += secondaryWeight * (dominantCategories.length - categoryIndex) / dominantCategories.length
      }
    })
    
    return score
  }
  
  // Main analyzer function that returns recommended careers
  export const analyzeQuizResponses = (responses, careerPaths) => {
    // Count category occurrences
    const categoryCounts = countCategories(responses)
    
    // Get sorted categories by frequency
    const dominantCategories = getDominantCategories(categoryCounts)
    
    // Calculate match scores for each career path
    const scoredPaths = careerPaths.map(path => ({
      ...path,
      matchScore: calculateMatchScore(path, dominantCategories)
    }))
    
    // Sort by match score (descending)
    const sortedPaths = [...scoredPaths].sort((a, b) => b.matchScore - a.matchScore)
    
    // Generate personality profile based on top categories
    const topFiveCategories = dominantCategories.slice(0, 5)
    
    return {
      recommendedPaths: sortedPaths,
      personalityProfile: {
        dominantTraits: topFiveCategories,
        categoryCounts: categoryCounts
      }
    }
  }
  
  // Generate readable personality profile description
  export const generatePersonalityDescription = (personalityProfile) => {
    const traitDescriptions = {
      "analytical": "You have a strong analytical mindset and enjoy working with data and logic.",
      "logical": "You approach problems systematically and value rational decision-making.",
      "data-oriented": "You appreciate working with information and using data to guide decisions.",
      "creative": "You have a creative spirit and enjoy generating new ideas and solutions.",
      "artistic": "You have artistic sensibilities and appreciate aesthetic qualities in your work.",
      "innovation": "You value innovation and are drawn to novel approaches and solutions.",
      "social": "You enjoy working with people and building meaningful connections.",
      "collaborative": "You thrive in collaborative environments and team settings.",
      "people-oriented": "You're naturally drawn to roles that involve working with and helping others.",
      "structured": "You appreciate order, structure, and clear processes in your work.",
      "detail-oriented": "You have a keen eye for details and ensuring things are done correctly.",
      "procedural": "You value established procedures and methodical approaches.",
      "practical": "You have a practical mindset and enjoy tangible, real-world results.",
      "experiential": "You learn best through hands-on experience and direct engagement.",
      "hands-on": "You enjoy working directly with physical materials or systems.",
      "leadership": "You have natural leadership qualities and enjoy guiding others.",
      "management": "You're skilled at organizing resources and coordinating efforts.",
      "strategic": "You think strategically and can envision long-term outcomes.",
      "independent": "You value autonomy and can work effectively on your own.",
      "focused": "You have strong concentration abilities and can deeply engage with tasks.",
      "service-oriented": "You find satisfaction in serving others and meeting their needs.",
      "adaptable": "You're flexible and can adjust quickly to changing circumstances.",
      "learning": "You have a love of learning and continuous personal development.",
      "intellectual": "You enjoy intellectual challenges and theoretical concepts.",
      "vision": "You can envision possibilities and future states clearly.",
      "critical-thinking": "You excel at evaluating information and making sound judgments.",
      "empathetic": "You understand others' feelings and perspectives well.",
      "dynamic": "You thrive in fast-paced, changing environments.",
      "stability": "You value stability and predictability in your work.",
      "balance": "You seek balance between different aspects of life and work.",
      "results-oriented": "You focus on achieving tangible outcomes and results.",
      "tangible": "You appreciate concrete, measurable aspects of work.",
      "theoretical": "You enjoy exploring abstract concepts and theories.",
      "methodical": "You approach tasks in an organized, step-by-step manner.",
      "interactive": "You thrive in interactive, dynamic social settings.",
      "self-directed": "You can set your own direction and work autonomously.",
      "problem-solving": "You excel at finding solutions to complex problems.",
      "complexity": "You're comfortable working with complex systems and challenges.",
      "development": "You enjoy helping others grow and develop their potential.",
      "systematic": "You think systematically about how components work together.",
      "growth-oriented": "You're focused on growth and continuous improvement.",
      "planning": "You're skilled at planning and organizing future activities.",
      "security": "You value security and stability in your career path.",
      "supportive": "You naturally support others and contribute to team wellbeing.",
      "responsive": "You respond quickly and effectively to changing situations.",
      "factual": "You focus on facts and objective information.",
      "expressive": "You express yourself well and communicate with clarity.",
      "visionary": "You can envision future possibilities and inspiring directions.",
      "relationship-oriented": "You value building and maintaining relationships.",
      "direct": "You communicate directly and value straightforward approaches.",
      "community": "You value community connections and collective wellbeing.",
      "organizing": "You excel at organizing information, resources, or systems.",
      "physical": "You enjoy physical activity and hands-on engagement.",
      "objective": "You strive for objectivity and impartiality in your assessments.",
      "intuitive": "You trust your intuition and can sense solutions without linear analysis.",
      "conventional": "You appreciate conventional approaches and established methods.",
    }
    
    // Get descriptions for top 3 traits
    const topTraits = personalityProfile.dominantTraits.slice(0, 3)
    const traitParagraphs = topTraits.map(trait => traitDescriptions[trait] || `You show strong ${trait} tendencies.`)
    
    // Combine into cohesive description
    return `Based on your responses, you show a unique combination of strengths and preferences. ${traitParagraphs.join(' ')} This profile suggests you would thrive in roles that allow you to leverage these natural tendencies, and the career recommendations reflect paths where these qualities are particularly valued.`
  }