const quizQuestions = [
    {
      id: 1,
      question: "How do you prefer to solve problems?",
      options: [
        {
          id: "a",
          text: "Analyze data and find patterns",
          categories: ["analytical", "logical", "data-oriented"]
        },
        {
          id: "b",
          text: "Create something innovative or artistic",
          categories: ["creative", "artistic", "innovation"]
        },
        {
          id: "c",
          text: "Work with others to find a solution",
          categories: ["social", "collaborative", "people-oriented"]
        },
        {
          id: "d",
          text: "Follow established procedures and best practices",
          categories: ["structured", "detail-oriented", "procedural"]
        },
        {
          id: "e",
          text: "Come up with practical solutions based on past experience",
          categories: ["practical", "experiential", "hands-on"]
        }
      ]
    },
    {
      id: 2,
      question: "In a team setting, which role do you naturally take on?",
      options: [
        {
          id: "a",
          text: "The organizer who keeps everything on track",
          categories: ["structured", "leadership", "management"]
        },
        {
          id: "b",
          text: "The visionary who comes up with new ideas",
          categories: ["creative", "innovation", "vision"]
        },
        {
          id: "c",
          text: "The analyzer who evaluates options objectively",
          categories: ["analytical", "logical", "critical-thinking"]
        },
        {
          id: "d",
          text: "The harmonizer who ensures everyone works well together",
          categories: ["social", "empathetic", "collaborative"]
        },
        {
          id: "e",
          text: "The doer who makes sure things get done",
          categories: ["practical", "action-oriented", "hands-on"]
        }
      ]
    },
    {
      id: 3,
      question: "What kind of work environment do you thrive in?",
      options: [
        {
          id: "a",
          text: "Fast-paced and dynamic with new challenges",
          categories: ["adaptable", "innovation", "dynamic"]
        },
        {
          id: "b",
          text: "Structured and organized with clear expectations",
          categories: ["structured", "procedural", "stability"]
        },
        {
          id: "c",
          text: "Collaborative and people-focused",
          categories: ["social", "collaborative", "people-oriented"]
        },
        {
          id: "d",
          text: "Independent where I can focus deeply on tasks",
          categories: ["analytical", "independent", "focused"]
        },
        {
          id: "e",
          text: "Creative and open to experimentation",
          categories: ["creative", "artistic", "innovation"]
        }
      ]
    },
    {
      id: 4,
      question: "What aspects of a job are most important to you?",
      options: [
        {
          id: "a",
          text: "Making a positive impact on others or society",
          categories: ["social", "service-oriented", "meaningful"]
        },
        {
          id: "b",
          text: "Intellectual challenges and continuous learning",
          categories: ["analytical", "learning", "intellectual"]
        },
        {
          id: "c",
          text: "Stability, clear advancement paths, and good work-life balance",
          categories: ["structured", "stability", "balance"]
        },
        {
          id: "d",
          text: "Freedom to innovate and express creativity",
          categories: ["creative", "innovation", "independence"]
        },
        {
          id: "e",
          text: "Practical outcomes and seeing tangible results of my work",
          categories: ["practical", "results-oriented", "tangible"]
        }
      ]
    },
    {
      id: 5,
      question: "How do you prefer to learn new skills?",
      options: [
        {
          id: "a",
          text: "Hands-on practice and experimentation",
          categories: ["practical", "experiential", "hands-on"]
        },
        {
          id: "b",
          text: "Studying theories and conceptual frameworks",
          categories: ["analytical", "theoretical", "intellectual"]
        },
        {
          id: "c",
          text: "In a structured course with clear learning objectives",
          categories: ["structured", "procedural", "methodical"]
        },
        {
          id: "d",
          text: "Through collaboration and discussion with others",
          categories: ["social", "collaborative", "interactive"]
        },
        {
          id: "e",
          text: "By exploring freely and following my curiosity",
          categories: ["creative", "exploratory", "self-directed"]
        }
      ]
    },
    {
      id: 6,
      question: "Which tasks energize you the most?",
      options: [
        {
          id: "a",
          text: "Solving complex problems or puzzles",
          categories: ["analytical", "problem-solving", "complexity"]
        },
        {
          id: "b",
          text: "Creating or designing something new",
          categories: ["creative", "artistic", "innovation"]
        },
        {
          id: "c",
          text: "Teaching or helping others develop",
          categories: ["social", "service-oriented", "development"]
        },
        {
          id: "d",
          text: "Organizing systems or information",
          categories: ["structured", "detail-oriented", "systematic"]
        },
        {
          id: "e",
          text: "Building or fixing tangible things",
          categories: ["practical", "hands-on", "building"]
        }
      ]
    },
    {
      id: 7,
      question: "How do you handle change and uncertainty?",
      options: [
        {
          id: "a",
          text: "Embrace it as an opportunity for growth and innovation",
          categories: ["adaptable", "innovation", "growth-oriented"]
        },
        {
          id: "b",
          text: "Analyze the situation and plan methodically for different scenarios",
          categories: ["analytical", "strategic", "planning"]
        },
        {
          id: "c",
          text: "Focus on maintaining stability and minimizing disruption",
          categories: ["structured", "stability", "security"]
        },
        {
          id: "d",
          text: "Collaborate with others to navigate challenges together",
          categories: ["social", "collaborative", "supportive"]
        },
        {
          id: "e",
          text: "Take practical action based on immediate needs",
          categories: ["practical", "action-oriented", "responsive"]
        }
      ]
    },
    {
      id: 8,
      question: "Which of these best describes your communication style?",
      options: [
        {
          id: "a",
          text: "Direct, logical, and focused on facts",
          categories: ["analytical", "logical", "factual"]
        },
        {
          id: "b",
          text: "Expressive, imaginative, and inspirational",
          categories: ["creative", "expressive", "visionary"]
        },
        {
          id: "c",
          text: "Warm, empathetic, and focused on building rapport",
          categories: ["social", "empathetic", "relationship-oriented"]
        },
        {
          id: "d",
          text: "Structured, detailed, and methodical",
          categories: ["structured", "detail-oriented", "procedural"]
        },
        {
          id: "e",
          text: "Straightforward, action-oriented, and pragmatic",
          categories: ["practical", "action-oriented", "direct"]
        }
      ]
    },
    {
      id: 9,
      question: "What would you enjoy doing in your free time?",
      options: [
        {
          id: "a",
          text: "Learning about new topics or developing skills",
          categories: ["analytical", "learning", "intellectual"]
        },
        {
          id: "b",
          text: "Creating art, music, or other creative expressions",
          categories: ["creative", "artistic", "expressive"]
        },
        {
          id: "c",
          text: "Socializing and spending time with friends or family",
          categories: ["social", "people-oriented", "community"]
        },
        {
          id: "d",
          text: "Organizing your space or planning future activities",
          categories: ["structured", "planning", "organizing"]
        },
        {
          id: "e",
          text: "Working on hands-on projects or physical activities",
          categories: ["practical", "hands-on", "physical"]
        }
      ]
    },
    {
      id: 10,
      question: "When making decisions, what do you value most?",
      options: [
        {
          id: "a",
          text: "Logic and objective analysis of facts",
          categories: ["analytical", "logical", "objective"]
        },
        {
          id: "b",
          text: "Intuition and considering new possibilities",
          categories: ["creative", "intuitive", "innovation"]
        },
        {
          id: "c",
          text: "How the decision will affect people involved",
          categories: ["social", "empathetic", "people-oriented"]
        },
        {
          id: "d",
          text: "Following established procedures and best practices",
          categories: ["structured", "procedural", "conventional"]
        },
        {
          id: "e",
          text: "Practical outcomes and what has worked before",
          categories: ["practical", "results-oriented", "experiential"]
        }
      ]
    }
  ]
  
  export default quizQuestions