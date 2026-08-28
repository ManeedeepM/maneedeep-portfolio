// src/data/portfolioData.js

export const portfolioData = {
  name: "Maneedeep Mangapoti",
  headline: "Full-Stack Developer | React.js, Node.js, Python, PostgreSQL/MySQL | Ex-Intern @ Dhee Coding Lab | CSE '26",
  location: "Bengaluru, Karnataka, India",
  contact: {
    email: "maneedeepdev@gmail.com",
    mobile: "9848961205",
    linkedin: "https://www.linkedin.com/in/mangapoti-maneedeep",
    github: "https://github.com/ManeedeepM"
  },
  summary:
    "I am a 2026 B.Tech Computer Science graduate based in Bengaluru, passionate about developing reliable web applications, integrating AI capabilities, and building robust test automation pipelines. With hands-on experience spanning product development, an internship, and independent engineering projects, I focus on delivering scalable, maintainable solutions across the full stack.",
  skills: {
    frontend: ["React.js", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3"],
    backend: ["Node.js", "Python (FastAPI)", "REST APIs"],
    databases: ["PostgreSQL", "MySQL", "SQLite3"],
    testingQA: ["Playwright (E2E automation, manual test cases, bug tracking)"],
    toolsPractices: ["Git/GitHub", "Agile/Scrum", "Cloud deployments", "Generative AI", "Oracle Cloud Infrastructure (OCI)"]
  },
  experience: [
    {
      company: "webvera.",
      role: "Software Developer",
      duration: "December 2025 - Present",
      location: "Bengaluru",
      bullets: [
        "Contributing to the end-to-end development of Sutrana Analytics, a scalable full-stack analytics platform.",
        "Developed robust backend APIs and data endpoints using FastAPI and PostgreSQL.",
        "Built responsive, high-performance web frontends leveraging Next.js and React.",
        "Integrated core platform capabilities including AI-driven features and automated subscription billing workflows.",
        "Managed application deployment across cloud environments to ensure reliable performance and user experience."
      ]
    },
    {
      company: "Dhee Coding Lab",
      role: "Python Full-Stack Development With Generative AI Intern",
      duration: "December 2025 - May 2026",
      location: "Bengaluru",
      bullets: [
        "Developed full-stack web application features using React.js for frontend interfaces and Python / Node.js for backend services.",
        "Integrated secure REST APIs and implemented data validation pipelines across layers.",
        "Designed relational schemas in MySQL, writing optimized SQL queries for data retrieval, validation, and database integrity.",
        "Applied object-oriented programming (OOP) principles to ensure modular, maintainable, and clean codebases.",
        "Collaborated in an Agile/Scrum setup, contributing to daily stand-ups, Git/GitHub branching workflows, pull requests, and technical documentation."
      ]
    }
  ],
  projects: [
    {
      id: "sutrana",
      title: "Sutrana Analytics (webvera)",
      category: "Full-Stack & AI",
      stack: ["Next.js", "FastAPI", "PostgreSQL", "AI Integration"],
      description: "Developed full-stack analytics features using Next.js, FastAPI, and PostgreSQL with integrated AI and subscription billing workflows.",
      metrics: "Proprietary Product Feature"
    },
    {
      id: "chatbot",
      title: "AI Chatbot Web App",
      category: "Full-Stack & AI",
      stack: ["React.js", "Node.js", "SQLite3", "REST APIs"],
      description: "Built an interactive conversational web platform utilizing React.js, Node.js, and SQLite3 backed by custom REST endpoints.",
      metrics: "Interactive Conversational App",
      github: "https://github.com/ManeedeepM"
    },
    {
      id: "orangehrm",
      title: "Accuknox User Management tests (OrangeHRM)",
      category: "QA & Automation",
      stack: ["Playwright", "E2E Testing", "Manual Test Plans"],
      description: "Engineered automated end-to-end CRUD test suites using Playwright alongside documented manual test plans.",
      metrics: "Automated E2E Suite",
      github: "https://github.com/Maneedeep"
    },
    
  ],
  education: [
    {
      institution: "Srinivasa Ramanujan Institute of Technology",
      degree: "Undergraduate, Computer Science",
      duration: "August 2023 - May 2026"
    },
    {
      institution: "Government polytechnic Dharamvaram",
      degree: "Diploma, Computer Science",
      duration: "December 2020 - August 2023"
    },
    {
      institution: "Good Children EM High School",
      degree: "Class 10 (Secondary School Certificate)",
      duration: "June 2019 - June 2020"
    }
  ],
  certifications: [
    "Cisco Networking Academy: Python Essentials 1",
    "Oracle Cloud Infrastructure 2025 Generative AI Professional",
    "PwC (Cybersecurity & Assurance) Job Simulation",
    "Quantium (Data Analytics) Job Simulation",
    "Tata Data Visualisation: Empowering Business with Effective Insights Job Simulation",
    "Talent Acquisition: HR Planning, Recruiting and Onboarding"
  ]
};