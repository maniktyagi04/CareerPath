const careerPaths = [
    {
      id: 1,
      title: "Data Science & Analytics",
      description: "Use analytical skills to extract insights from data and help organizations make data-driven decisions.",
      primaryCategories: ["analytical", "logical", "data-oriented"],
      secondaryCategories: ["problem-solving", "technical", "strategic"],
      careers: [
        {
          title: "Data Scientist",
          description: "Combine statistics, programming, and domain expertise to extract knowledge and insights from structured and unstructured data.",
          skills: ["Python", "R", "Machine Learning", "Statistics", "Data Visualization", "SQL"],
          education: "Bachelor's or Master's in Computer Science, Statistics, Mathematics, or related field",
          outlook: "High demand with 31% growth projected through 2030",
          salary: "$100,000 - $150,000"
        },
        {
          title: "Business Intelligence Analyst",
          description: "Transform data into actionable insights that drive business strategy and decision-making.",
          skills: ["SQL", "Data Visualization", "Statistical Analysis", "Business Acumen", "Power BI/Tableau"],
          education: "Bachelor's in Business, Computer Science, Statistics, or related field",
          outlook: "Strong growth with 14% increase projected through 2030",
          salary: "$85,000 - $115,000"
        },
        {
          title: "Machine Learning Engineer",
          description: "Design and implement machine learning models to solve complex problems and automate tasks.",
          skills: ["Python", "TensorFlow/PyTorch", "Algorithm Design", "Software Engineering", "Data Modeling"],
          education: "Master's or PhD in Computer Science, Mathematics, or related field",
          outlook: "Excellent with 35% growth projected through 2030",
          salary: "$110,000 - $170,000"
        }
      ]
    },
    {
      id: 2,
      title: "Creative & Design",
      description: "Express creativity and innovation through visual, interactive, and artistic mediums.",
      primaryCategories: ["creative", "artistic", "innovation"],
      secondaryCategories: ["expressive", "visual", "conceptual"],
      careers: [
        {
          title: "UX/UI Designer",
          description: "Create user-centered digital experiences that are both functional and aesthetically pleasing.",
          skills: ["User Research", "Wireframing", "Prototyping", "Visual Design", "Figma/Sketch", "User Testing"],
          education: "Bachelor's in Design, Human-Computer Interaction, or related field",
          outlook: "Growing field with 13% increase projected through 2030",
          salary: "$85,000 - $130,000"
        },
        {
          title: "Graphic Designer",
          description: "Communicate ideas visually through layouts, typography, and imagery.",
          skills: ["Adobe Creative Suite", "Typography", "Color Theory", "Composition", "Brand Identity"],
          education: "Bachelor's in Graphic Design, Visual Communication, or related field",
          outlook: "Steady with 3% growth projected through 2030",
          salary: "$50,000 - $85,000"
        },
        {
          title: "Creative Director",
          description: "Lead creative teams and establish the artistic vision for projects and campaigns.",
          skills: ["Leadership", "Art Direction", "Brand Strategy", "Project Management", "Client Relations"],
          education: "Bachelor's in Design plus extensive experience",
          outlook: "Moderate growth with 10% increase projected through 2030",
          salary: "$100,000 - $180,000"
        }
      ]
    },
    {
      id: 3,
      title: "People & Community",
      description: "Work directly with people to support, educate, heal, or build community connections.",
      primaryCategories: ["social", "empathetic", "people-oriented"],
      secondaryCategories: ["collaborative", "service-oriented", "community"],
      careers: [
        {
          title: "Human Resources Manager",
          description: "Oversee HR functions including recruitment, employee relations, and organizational development.",
          skills: ["Interpersonal Communication", "Conflict Resolution", "Employment Law", "Talent Management", "Leadership"],
          education: "Bachelor's in HR, Business, Psychology, or related field",
          outlook: "Growing with 9% increase projected through 2030",
          salary: "$70,000 - $125,000"
        },
        {
          title: "Social Worker",
          description: "Help individuals, families, and communities enhance well-being and solve problems.",
          skills: ["Empathy", "Active Listening", "Crisis Intervention", "Case Management", "Advocacy"],
          education: "Bachelor's or Master's in Social Work",
          outlook: "Strong growth with 12% increase projected through 2030",
          salary: "$50,000 - $80,000"
        },
        {
          title: "Community Outreach Coordinator",
          description: "Develop and implement programs that connect organizations with the communities they serve.",
          skills: ["Program Development", "Public Speaking", "Networking", "Grant Writing", "Cultural Competence"],
          education: "Bachelor's in Communications, Public Relations, or related field",
          outlook: "Stable with 8% growth projected through 2030",
          salary: "$45,000 - $70,000"
        }
      ]
    },
    {
      id: 4,
      title: "Organization & Administration",
      description: "Create structure, ensure efficiency, and maintain systems within organizations.",
      primaryCategories: ["structured", "detail-oriented", "procedural"],
      secondaryCategories: ["management", "planning", "systematic"],
      careers: [
        {
          title: "Project Manager",
          description: "Plan, execute, and close projects by managing resources, timelines, and stakeholders.",
          skills: ["Planning", "Risk Management", "Budgeting", "Team Leadership", "Communication", "Problem-Solving"],
          education: "Bachelor's in Business or related field, PMP certification valued",
          outlook: "Strong with 11% growth projected through 2030",
          salary: "$75,000 - $130,000"
        },
        {
          title: "Operations Manager",
          description: "Oversee daily operations to ensure efficiency, quality, and performance.",
          skills: ["Process Improvement", "Strategic Planning", "Cross-functional Coordination", "Data Analysis"],
          education: "Bachelor's in Business, Operations Management, or related field",
          outlook: "Steady with 6% growth projected through 2030",
          salary: "$70,000 - $120,000"
        },
        {
          title: "Quality Assurance Specialist",
          description: "Ensure products and services meet quality standards through systematic testing and evaluation.",
          skills: ["Attention to Detail", "Documentation", "Testing Methodologies", "Process Analysis", "Problem-Solving"],
          education: "Bachelor's in relevant field to industry served",
          outlook: "Stable with 5% growth projected through 2030",
          salary: "$60,000 - $95,000"
        }
      ]
    },
    {
      id: 5,
      title: "Practical & Hands-on",
      description: "Apply practical skills to build, fix, maintain, or improve tangible things.",
      primaryCategories: ["practical", "hands-on", "experiential"],
      secondaryCategories: ["technical", "building", "physical"],
      careers: [
        {
          title: "Software Engineer",
          description: "Design, develop, and maintain software systems and applications.",
          skills: ["Programming Languages", "Data Structures", "Algorithms", "Software Architecture", "Problem-Solving"],
          education: "Bachelor's in Computer Science, Software Engineering, or related field",
          outlook: "Excellent with 22% growth projected through 2030",
          salary: "$85,000 - $150,000"
        },
        {
          title: "Civil Engineer",
          description: "Design, build, and maintain infrastructure projects like buildings, roads, and bridges.",
          skills: ["CAD Software", "Structural Analysis", "Project Management", "Technical Drawing", "Mathematics"],
          education: "Bachelor's in Civil Engineering",
          outlook: "Steady with 8% growth projected through 2030",
          salary: "$70,000 - $120,000"
        },
        {
          title: "Healthcare Technician",
          description: "Operate and maintain medical equipment and assist healthcare professionals.",
          skills: ["Equipment Operation", "Technical Aptitude", "Attention to Detail", "Patient Care", "Communication"],
          education: "Associate's degree or certification in relevant healthcare technology",
          outlook: "Strong with 15% growth projected through 2030",
          salary: "$45,000 - $75,000"
        }
      ]
    },
    {
      id: 6,
      title: "Business & Entrepreneurship",
      description: "Create, develop, and manage businesses and business strategies.",
      primaryCategories: ["strategic", "leadership", "action-oriented"],
      secondaryCategories: ["innovation", "management", "results-oriented"],
      careers: [
        {
          title: "Marketing Manager",
          description: "Develop and implement marketing strategies to promote products or services.",
          skills: ["Market Research", "Strategic Planning", "Campaign Management", "Analytics", "Creativity"],
          education: "Bachelor's in Marketing, Business, or related field",
          outlook: "Growing with 10% increase projected through 2030",
          salary: "$70,000 - $135,000"
        },
        {
          title: "Financial Analyst",
          description: "Evaluate financial data to guide investment decisions and business strategy.",
          skills: ["Financial Modeling", "Data Analysis", "Market Research", "Excel/Financial Software", "Critical Thinking"],
          education: "Bachelor's in Finance, Economics, or related field",
          outlook: "Strong with 6% growth projected through 2030",
          salary: "$65,000 - $110,000"
        },
        {
          title: "Entrepreneur/Business Owner",
          description: "Start and run your own business ventures, taking on risk for the potential of profit.",
          skills: ["Vision", "Risk Management", "Leadership", "Financial Acumen", "Adaptability", "Networking"],
          education: "Various backgrounds; formal business education helpful but not required",
          outlook: "Variable depending on industry and economic conditions",
          salary: "Highly variable"
        }
      ]
    },
    {
      id: 7,
      title: "Education & Training",
      description: "Share knowledge, develop skills, and facilitate learning for others.",
      primaryCategories: ["service-oriented", "development", "people-oriented"],
      secondaryCategories: ["social", "collaborative", "intellectual"],
      careers: [
        {
          title: "Teacher/Educator",
          description: "Facilitate learning in classroom settings from elementary to post-secondary education.",
          skills: ["Curriculum Development", "Classroom Management", "Assessment Design", "Adaptability", "Communication"],
          education: "Bachelor's in Education or subject area; teaching certification",
          outlook: "Stable with 7% growth projected through 2030",
          salary: "$45,000 - $85,000 (varies by level and location)"
        },
        {
          title: "Corporate Trainer",
          description: "Develop and deliver training programs to improve employee skills and performance.",
          skills: ["Instructional Design", "Presentation", "Needs Assessment", "Program Development", "Evaluation"],
          education: "Bachelor's in relevant field; certifications in training methodologies",
          outlook: "Growing with 11% increase projected through 2030",
          salary: "$55,000 - $95,000"
        },
        {
          title: "Educational Consultant",
          description: "Advise educational institutions, parents, or students on learning strategies and educational planning.",
          skills: ["Assessment", "Research", "Consulting", "Program Evaluation", "Problem-Solving"],
          education: "Master's or Doctorate in Education or related field",
          outlook: "Moderate growth with 8% increase projected through 2030",
          salary: "$60,000 - $110,000"
        }
      ]
    }
  ]
  
  export default careerPaths