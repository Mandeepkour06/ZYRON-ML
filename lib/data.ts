export interface Challenge {
  day: number;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
  xpReward: number;
  skills: string[];
  tags: string[];
  instructions: Instruction[];
  requirements: Requirement[];
  resources: Resource[];
}

export interface Instruction {
  step: number;
  title: string;
  description: string;
  code?: string;
}

export interface Requirement {
  id: string;
  text: string;
  completed: boolean;
}

export interface Resource {
  title: string;
  url: string;
  type: 'documentation' | 'tutorial' | 'video' | 'tool';
}

export interface Student {
  isAuthenticated: boolean;
  currentDay: number;
  xp: number;
  streak: number;
  completedDays: number[];
  joinedDate: string;
}

export interface AIMentor {
  name: string;
  greeting: string;
  tips: string[];
}

export interface Submission {
  dayId: number;
  githubUrl: string;
  liveUrl: string;
  submittedAt: string;
}

export const mockStudent: Student = {
  isAuthenticated: false,
  currentDay: 1,
  xp: 0,
  streak: 0,
  completedDays: [],
  joinedDate: "2026-08-07"
};

export const aiMentor: AIMentor = {
  name: "CodeMentor AI",
  greeting: "Hi! I'm your AI mentor for the next 60 days.",
  tips: [
    "Start with Day 1 to build your foundation",
    "Consistency beats intensity - show up daily",
    "Share your progress on LinkedIn with #ABTalks",
    "Don't skip days - your streak matters!"
  ]
};

// Helper function to generate challenges for all 60 days
const generateAllChallenges = (): Challenge[] => {
  const challengeTemplates = [
    // Week 1: Fundamentals (Days 1-7)
    {
      day: 1,
      title: "Build Your Portfolio Website",
      description: "Create a personal portfolio website that showcases your skills, projects, and contact information. This is your digital identity as a developer.",
      difficulty: "beginner" as const,
      estimatedTime: "3-4 hours",
      xpReward: 100,
      skills: ["HTML Structure", "CSS Styling", "Responsive Design", "Deployment", "Git Basics"],
      tags: ["HTML", "CSS", "Deployment"],
      instructions: [
        { step: 1, title: "Set Up Your Project", description: "Create a new folder and initialize git repository.", code: "mkdir my-portfolio\ncd my-portfolio\ngit init\ntouch index.html style.css" },
        { step: 2, title: "Create HTML Structure", description: "Build semantic HTML5 structure with navigation, hero, about, projects, and contact sections." },
        { step: 3, title: "Style Your Portfolio", description: "Apply CSS for typography, colors, spacing, and layout using Flexbox or Grid." },
        { step: 4, title: "Make It Responsive", description: "Add media queries for mobile, tablet, and desktop views.", code: "@media (max-width: 768px) {\n  /* Mobile styles */\n}" },
        { step: 5, title: "Deploy Your Site", description: "Push to GitHub and deploy using Vercel, Netlify, or GitHub Pages." }
      ],
      requirements: [
        { id: "req-1", text: "Create an 'About Me' section with bio and photo", completed: false },
        { id: "req-2", text: "Add a 'Projects' section", completed: false },
        { id: "req-3", text: "Include contact section with email and social links", completed: false },
        { id: "req-4", text: "Make it responsive for mobile and desktop", completed: false },
        { id: "req-5", text: "Deploy to a free hosting service", completed: false }
      ],
      resources: [
        { title: "MDN HTML Basics", url: "https://developer.mozilla.org/en-US/docs/Learn/HTML", type: "documentation" as const },
        { title: "CSS Tricks Flexbox Guide", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/", type: "tutorial" as const },
        { title: "Responsive Design Tutorial", url: "https://www.youtube.com/watch?v=srvUrASNj0s", type: "video" as const }
      ]
    },
    {
      day: 2,
      title: "JavaScript Calculator",
      description: "Build a functional calculator using vanilla JavaScript. Learn DOM manipulation and event handling.",
      difficulty: "beginner" as const,
      estimatedTime: "2-3 hours",
      xpReward: 100,
      skills: ["JavaScript Fundamentals", "DOM Manipulation", "Event Listeners", "Functions", "Error Handling"],
      tags: ["JavaScript", "DOM", "Events"],
      instructions: [
        { step: 1, title: "Create HTML Structure", description: "Build calculator layout with display and buttons." },
        { step: 2, title: "Style the Calculator", description: "Use CSS Grid for clean layout." },
        { step: 3, title: "Add JavaScript Logic", description: "Write functions for calculations.", code: "function calculate(num1, op, num2) {\n  // Logic here\n}" },
        { step: 4, title: "Handle Edge Cases", description: "Add error handling for division by zero and invalid operations." },
        { step: 5, title: "Add Keyboard Support", description: "Make calculator keyboard accessible." }
      ],
      requirements: [
        { id: "req-1", text: "Calculator UI with numbers 0-9 and operators", completed: false },
        { id: "req-2", text: "Basic operations: +, -, ×, ÷", completed: false },
        { id: "req-3", text: "Clear button and decimal support", completed: false },
        { id: "req-4", text: "Handle division by zero", completed: false },
        { id: "req-5", text: "Keyboard accessibility", completed: false }
      ],
      resources: [
        { title: "JavaScript Events", url: "https://developer.mozilla.org/en-US/docs/Web/API/Event", type: "documentation" as const },
        { title: "DOM Manipulation", url: "https://javascript.info/dom-nodes", type: "tutorial" as const }
      ]
    },
    {
      day: 3,
      title: "Todo List App",
      description: "Create a todo list application with local storage persistence.",
      difficulty: "beginner" as const,
      estimatedTime: "3-4 hours",
      xpReward: 100,
      skills: ["LocalStorage API", "CRUD Operations", "Array Methods", "Event Delegation"],
      tags: ["JavaScript", "LocalStorage", "CRUD"],
      instructions: [
        { step: 1, title: "Build the Interface", description: "Create input, list container, and filter buttons." },
        { step: 2, title: "Implement Add", description: "Add todos and save to localStorage." },
        { step: 3, title: "Add Edit & Delete", description: "Allow editing and deleting todos." },
        { step: 4, title: "Implement Filters", description: "Filter by All, Active, Completed." },
        { step: 5, title: "Add Due Dates", description: "Enhance with date functionality." }
      ],
      requirements: [
        { id: "req-1", text: "Add, edit, and delete todos", completed: false },
        { id: "req-2", text: "Mark as complete/incomplete", completed: false },
        { id: "req-3", text: "Filter by status", completed: false },
        { id: "req-4", text: "Persist to localStorage", completed: false },
        { id: "req-5", text: "Add due dates", completed: false }
      ],
      resources: [
        { title: "LocalStorage API", url: "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage", type: "documentation" as const }
      ]
    },
    {
      day: 4,
      title: "Weather Dashboard",
      description: "Build a weather app that fetches data from an API.",
      difficulty: "beginner" as const,
      estimatedTime: "3-4 hours",
      xpReward: 100,
      skills: ["API Integration", "Async/Await", "Fetch API", "JSON Parsing"],
      tags: ["API", "JavaScript", "Fetch"],
      instructions: [
        { step: 1, title: "Get API Key", description: "Sign up for OpenWeatherMap API." },
        { step: 2, title: "Build UI", description: "Create search and display sections." },
        { step: 3, title: "Fetch Data", description: "Use fetch() to get weather data.", code: "async function getWeather(city) {\n  const res = await fetch(url);\n  return await res.json();\n}" },
        { step: 4, title: "Display Data", description: "Show temperature, humidity, wind speed." },
        { step: 5, title: "Add Forecast", description: "Display 5-day forecast." }
      ],
      requirements: [
        { id: "req-1", text: "Use weather API", completed: false },
        { id: "req-2", text: "Display current weather", completed: false },
        { id: "req-3", text: "Show temp, humidity, wind", completed: false },
        { id: "req-4", text: "Search functionality", completed: false },
        { id: "req-5", text: "5-day forecast", completed: false }
      ],
      resources: [
        { title: "OpenWeatherMap API", url: "https://openweathermap.org/api", type: "tool" as const }
      ]
    },
    {
      day: 5,
      title: "Responsive Landing Page",
      description: "Design and build a fully responsive landing page.",
      difficulty: "beginner" as const,
      estimatedTime: "3-5 hours",
      xpReward: 100,
      skills: ["Responsive Design", "CSS Grid", "Flexbox", "Mobile-First"],
      tags: ["HTML", "CSS", "Responsive"],
      instructions: [
        { step: 1, title: "Plan Layout", description: "Sketch sections: hero, features, testimonials, CTA." },
        { step: 2, title: "Build Hero", description: "Create hero with headline and CTA." },
        { step: 3, title: "Add Features", description: "Use Grid/Flexbox for features section." },
        { step: 4, title: "Testimonials", description: "Add social proof section." },
        { step: 5, title: "Make Responsive", description: "Add media queries.", code: "@media (min-width: 768px) {\n  /* Styles */\n}" }
      ],
      requirements: [
        { id: "req-1", text: "Hero with CTA", completed: false },
        { id: "req-2", text: "Features section", completed: false },
        { id: "req-3", text: "Testimonials", completed: false },
        { id: "req-4", text: "Mobile-first design", completed: false },
        { id: "req-5", text: "CSS Grid or Flexbox", completed: false }
      ],
      resources: [
        { title: "CSS Grid Guide", url: "https://css-tricks.com/snippets/css/complete-guide-grid/", type: "tutorial" as const }
      ]
    },
    {
      day: 6,
      title: "Quiz Application",
      description: "Create an interactive quiz app with score tracking and timer.",
      difficulty: "beginner" as const,
      estimatedTime: "3-4 hours",
      xpReward: 100,
      skills: ["JavaScript Logic", "State Management", "Timers", "Score Tracking"],
      tags: ["JavaScript", "Logic", "Interactive"],
      instructions: [
        { step: 1, title: "Create Quiz Data", description: "Store questions in JSON format." },
        { step: 2, title: "Build Quiz UI", description: "Display questions and answer options." },
        { step: 3, title: "Add Timer", description: "Implement countdown timer.", code: "let timer = setInterval(() => {\n  time--;\n}, 1000);" },
        { step: 4, title: "Track Score", description: "Calculate and display score." },
        { step: 5, title: "Show Results", description: "Display final results with feedback." }
      ],
      requirements: [
        { id: "req-1", text: "At least 10 questions", completed: false },
        { id: "req-2", text: "Multiple choice answers", completed: false },
        { id: "req-3", text: "Countdown timer", completed: false },
        { id: "req-4", text: "Score tracking", completed: false },
        { id: "req-5", text: "Results page", completed: false }
      ],
      resources: [
        { title: "JavaScript Timers", url: "https://javascript.info/settimeout-setinterval", type: "tutorial" as const }
      ]
    },
    {
      day: 7,
      title: "Markdown Blog",
      description: "Build a simple blog that renders markdown to HTML.",
      difficulty: "intermediate" as const,
      estimatedTime: "4-5 hours",
      xpReward: 100,
      skills: ["Markdown Parsing", "File Handling", "Routing", "Content Management"],
      tags: ["JavaScript", "Markdown", "Blog"],
      instructions: [
        { step: 1, title: "Set Up Project", description: "Initialize project with markdown parser library." },
        { step: 2, title: "Create Blog Structure", description: "Build navigation and post listing." },
        { step: 3, title: "Parse Markdown", description: "Convert .md files to HTML.", code: "import marked from 'marked';\nconst html = marked(markdown);" },
        { step: 4, title: "Add Routing", description: "Create routes for individual posts." },
        { step: 5, title: "Style Blog", description: "Apply typography and layout styles." }
      ],
      requirements: [
        { id: "req-1", text: "Parse markdown to HTML", completed: false },
        { id: "req-2", text: "Blog post listing page", completed: false },
        { id: "req-3", text: "Individual post pages", completed: false },
        { id: "req-4", text: "Navigation menu", completed: false },
        { id: "req-5", text: "Clean typography", completed: false }
      ],
      resources: [
        { title: "Marked.js", url: "https://marked.js.org/", type: "tool" as const }
      ]
    }
  ];

  // Generate all 60 challenges
  const allChallenges: Challenge[] = [];

  for (let day = 1; day <= 60; day++) {
    // Use template if available, otherwise generate
    const template = challengeTemplates.find(t => t.day === day);

    if (template) {
      allChallenges.push(template);
    } else {
      // Generate challenge based on day range
      const difficulty: 'beginner' | 'intermediate' | 'advanced' =
        day <= 20 ? 'beginner' : day <= 45 ? 'intermediate' : 'advanced';

      const projectTypes = [
        "E-commerce Product Page", "Chat Application", "Music Player",
        "Image Gallery", "Expense Tracker", "Pomodoro Timer",
        "Recipe Finder", "Workout Tracker", "Book Library",
        "Movie Database", "Budget Planner", "Social Media Dashboard",
        "GitHub Profile Viewer", "Cryptocurrency Tracker", "News Aggregator",
        "Code Snippet Manager", "File Upload System", "Real-time Notifications",
        "Video Streaming UI", "Analytics Dashboard", "Search Autocomplete",
        "Drag and Drop Builder", "Kanban Board", "Calendar App",
        "Survey Form Builder", "QR Code Generator", "URL Shortener",
        "Password Generator", "Unit Converter", "Color Palette Generator",
        "Memory Card Game", "Snake Game", "Typing Speed Test",
        "Drawing App", "Audio Visualizer", "Map Integration",
        "Authentication System", "Payment Gateway UI", "Admin Panel",
        "CMS Dashboard", "Blog Comment System", "Rating System",
        "Notification Center", "Multi-step Form", "Data Visualization",
        "REST API Documentation", "Websocket Chat", "GraphQL Client",
        "Progressive Web App", "Chrome Extension", "Desktop App",
        "Mobile App UI", "Component Library", "Design System"
      ];

      const projectIndex = (day - 8) % projectTypes.length;
      const projectName = projectTypes[projectIndex];

      allChallenges.push({
        day,
        title: `Build ${projectName}`,
        description: `Create a functional ${projectName.toLowerCase()} with modern web technologies. Focus on user experience, responsive design, and clean code architecture.`,
        difficulty,
        estimatedTime: difficulty === 'beginner' ? '3-4 hours' : difficulty === 'intermediate' ? '4-6 hours' : '6-8 hours',
        xpReward: 100,
        skills: [
          difficulty === 'beginner' ? 'HTML/CSS' : difficulty === 'intermediate' ? 'React/Vue' : 'Advanced Frameworks',
          'JavaScript',
          'Responsive Design',
          'State Management',
          'API Integration'
        ],
        tags: [difficulty === 'beginner' ? 'HTML' : difficulty === 'intermediate' ? 'React' : 'Advanced', 'JavaScript', 'CSS'],
        instructions: [
          { step: 1, title: "Project Setup", description: `Initialize your ${projectName.toLowerCase()} project with necessary dependencies.` },
          { step: 2, title: "Build Core UI", description: "Create the main user interface components." },
          { step: 3, title: "Add Functionality", description: "Implement core features and interactions." },
          { step: 4, title: "Style & Polish", description: "Apply styling and ensure responsive design." },
          { step: 5, title: "Test & Deploy", description: "Test functionality and deploy your project." }
        ],
        requirements: [
          { id: `req-${day}-1`, text: "Complete project setup", completed: false },
          { id: `req-${day}-2`, text: "Implement core features", completed: false },
          { id: `req-${day}-3`, text: "Responsive design", completed: false },
          { id: `req-${day}-4`, text: "Error handling", completed: false },
          { id: `req-${day}-5`, text: "Deploy and test", completed: false }
        ],
        resources: [
          { title: "MDN Web Docs", url: "https://developer.mozilla.org/", type: "documentation" as const },
          { title: "Web.dev", url: "https://web.dev/", type: "tutorial" as const },
          { title: "CSS Tricks", url: "https://css-tricks.com/", type: "tutorial" as const }
        ]
      });
    }
  }

  return allChallenges;
};

export const challenges: Challenge[] = generateAllChallenges();

export const getDayChallenge = (day: number): Challenge | undefined => {
  return challenges.find(c => c.day === day);
};

export const getTodayChallenge = (student: Student): Challenge | undefined => {
  return getDayChallenge(student.currentDay);
};

export const getProgressPercentage = (student: Student): number => {
  return Math.round((student.completedDays.length / 60) * 100);
};

export const calculateXP = (completedDays: number): number => {
  return completedDays * 100;
};
