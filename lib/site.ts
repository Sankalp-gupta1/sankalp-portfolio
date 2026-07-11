export const site = {
  name: "Sankalp Gupta",
  url: "https://sankalp-portfolio.vercel.app",
  role: "AI Engineer • Agentic AI • Full-Stack Developer",
  tagline:
    "I build AI-powered products, agentic workflows, automation systems, and full-stack applications that solve real-world problems.",
  shortBio:
    "AI Engineer with hands-on experience building intelligent automation systems, LLM-powered applications, multilingual emotion intelligence, financial process automation, and scalable backend solutions using Python, FastAPI, React, SQL, REST APIs, and modern AI workflows.",
  heroBio:
    "I work across AI engineering, backend systems, and full-stack development. My projects include Aura AI Chief of Staff, multilingual emotion detection, autonomous AI news agents, financial statement automation, RBAC systems, and a delivered freelance AI desktop assistant project.",
  email: "sankalpgupta0011@gmail.com",
  location: "India · Remote",
  availability:
    "Open to AI Engineer, Full-Stack Developer, SDE, Research, and freelance AI automation opportunities",
  photo: "/images/sankalp.jpg",
  socials: {
    github: "https://github.com/Sankalp-gupta1",
    linkedin: "",
    fiverr: "",
  },
  stats: [
    { label: "AI Projects", value: "10+" },
    { label: "Freelance Delivery", value: "1+" },
    { label: "Current Role", value: "AI Engineer" },
    { label: "CGPA", value: "7.6" },
  ],
} as const;

export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: "AI / Machine Learning",
    items: [
      "Generative AI",
      "Large Language Models",
      "Prompt Engineering",
      "RAG Systems",
      "AI Agents",
      "Agentic Workflows",
      "NLP",
      "Deep Learning",
      "Neural Networks",
      "Model Evaluation",
      "Vector Databases",
      "Workflow Automation",
    ],
  },
  {
    title: "Backend & Data",
    items: [
      "Python",
      "FastAPI",
      "Flask",
      "Node.js",
      "REST APIs",
      "SQL",
      "MySQL",
      "Firebase",
      "Pandas",
      "Scikit-learn",
      "TensorFlow",
      "Keras",
    ],
  },
  {
    title: "Frontend & Apps",
    items: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Streamlit",
      "Flutter",
      "Power BI",
    ],
  },
  {
    title: "Core CS & Tools",
    items: [
      "Data Structures",
      "Algorithms",
      "OOP",
      "DBMS",
      "Computer Networks",
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Google Colab",
      "Hugging Face",
      "System Design",
    ],
  },
];

export const experience: {
  role: string;
  org: string;
  period: string;
  points: string[];
}[] = [


  {
  role: "Software Engineer Intern",
  org: "Ambiguity Labs (Bengaluru, India)",
  period: "Jul 2026 – Present",
  points: [
    "Building production-grade AI systems by transforming cutting-edge research into scalable, high-performance machine learning solutions.",
    "Designing, training, and fine-tuning deep learning models for real-world applications with a focus on accuracy, efficiency, and reliability.",
    "Optimizing ML training and inference pipelines to improve scalability, reduce latency, and accelerate deployment.",
    "Applying advanced AI and machine learning techniques to solve complex, ambiguous real-world problems across commercial use cases.",
    "Collaborating on research-driven development while engineering robust algorithms and end-to-end AI workflows for production environments.",
  ],
  },

  {
    role: "AI Engineer",
    org: "Goldilocks Tech Pvt. Ltd.(Gurugram, India)",
    period: "May 2026 to July",
    points: [
      "Built intelligent software systems by integrating APIs, databases, and automation workflows to support large-scale business operations.",
      "Designed and implemented data-processing pipelines that transformed raw information into actionable insights and decision-support systems.",
      "Improved system performance, reliability, and scalability through debugging, optimization, testing, and production engineering practices.",
      "Worked across architecture, development, testing, and deployment while focusing on automation and system intelligence.",
    ],
  },
  {
    role: "Freelance AI Developer",
    org: "Independent Client Project (Elise AI USA) ",
    period: "2025",
    points: [
      "Delivered an AI desktop assistant project for a freelance client with voice-style interaction, AI responses, automation-focused design, and desktop assistant experience.",
      "Worked on requirement understanding, AI workflow design, implementation, testing, and final delivery.",
      "Used the project to strengthen practical experience in building real AI applications beyond basic chatbot prototypes.",
    ],
  },
  {
    role: "Machine Learning Intern",
    org: "Infotact Solutions",
    period: "May 2025 to Aug 2025",
    points: [
      "Developed an AI-based Power BI dashboard for real-time data analysis and business insights.",
      "Applied K-Means Clustering and PCA for data cleaning, feature reduction, and pattern identification.",
      "Built an NLP pipeline to analyze text data and improve decision-making accuracy.",
    ],
  },
  {
    role: "AI/ML Summer Trainee",
    org: "IIIT Allahabad",
    period: "Apr 2025 to May 2025",
    points: [
      "Completed structured AI/ML training with practical assignments and real-world problem solving.",
      "Gained exposure to supervised learning, deep learning, NLP techniques, and model-building workflows.",
      "Strengthened fundamentals of AI/ML implementation through hands-on exercises and guided projects.",
    ],
  },
];

export const certifications: {
  name: string;
  issuer: string;
  date: string;
  link?: string;
}[] = [
  {
    name: "Software Engineer Certification",
    issuer: "HackerRank",
    date: "2025",
    link: "https://www.hackerrank.com/certificates/iframe/d09c23c87dc8",
  },
  {
    name: "Introduction to Generative AI and Agents",
    issuer: "Microsoft Learn",
    date: "Oct 2025",
    link: "https://drive.google.com/file/d/1Z7yFWbrv7L-18S-PL2fhGfC0FIhytICE/view",
  },
];

export const testimonials: {
  quote: string;
  author: string;
  location: string;
  rating: number;
  service: string;
  tags: string[];
}[] = [
  {
    quote:
      "Delivered the AI desktop assistant project with practical functionality and clear communication.",
    author: "Freelance Client",
    location: "Remote",
    rating: 5,
    service: "AI Desktop Assistant",
    tags: ["AI Assistant", "Automation", "Project Delivery"],
  },
];

export const education: {
  degree: string;
  school: string;
  location: string;
  period: string;
}[] = [
  {
    degree: "B.Tech, Computer Science Engineering (Artificial Intelligence)",
    school: "CSJM University",
    location: "Kanpur, Uttar Pradesh",
    period: "Jun 2022 to Jun 2026 · CGPA: 7.6",
  },
];