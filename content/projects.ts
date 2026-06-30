/**
 * Single source of truth for every project shown on the site.
 */

export type Metric = { label: string; value: string };

export type ProjectStatus =
  | "Flagship"
  | "Open source"
  | "Research"
  | "Full stack"
  | "Prototype"
  | "Paid product";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  year: string;
  role: string;
  status: ProjectStatus;
  summary: string;
  cover: string;
  coverAlt: string;
  tech: string[];
  links: {
    github?: string;
    demo?: string;
    video?: string;
  };
  metrics: Metric[];
  featured: boolean;
  caseStudy: {
    problem: string;
    approach: string;
    architecture: string[];
    challenges: string[];
    results: string[];
  };
};

export const projects: Project[] = [
  {
    slug: "aura-ai",
    name: "AURA-AI",
    tagline: "AI-powered email intelligence and personal workflow assistant",
    year: "2026",
    role: "AI Engineer · Full-stack developer",
    status: "Flagship",
    summary:
      "An intelligent email and productivity assistant that understands inbox context, extracts tasks, summarizes conversations, detects priorities, and helps users manage decisions across daily workflows.",
    cover: "/images/cover-goldilocks.svg?v=2",
    coverAlt:
      "AI email assistant dashboard with inbox intelligence and task extraction",
    tech: [
      "Python",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "LLMs",
      "RAG",
      "Gmail API",
      "Calendar API",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    links: {
      github: "https://github.com/Sankalp-gupta1/Goldilocks--HNI-ledger-board-SDE-",
    },
    metrics: [
      { label: "Domain", value: "Email AI" },
      { label: "Core", value: "LLM + RAG" },
      { label: "Workflow", value: "Task extraction" },
      { label: "Type", value: "Agentic AI" },
    ],
    featured: true,
    caseStudy: {
      problem:
        "Modern inboxes contain tasks, decisions, deadlines, follow-ups, and important context scattered across multiple email threads. Manually reading every email and converting it into actions is slow and easy to miss.",
      approach:
        "I designed Goldilocks AI as an intelligent assistant that reads email context, summarizes long conversations, identifies important items, extracts actionable tasks, and helps the user understand what needs attention first.",
      architecture: [
        "Next.js frontend for dashboard, inbox summaries, and task views",
        "FastAPI backend for AI orchestration and API handling",
        "Gmail integration for fetching and processing email threads",
        "LLM-based summarization for long email conversations",
        "Task extraction pipeline for deadlines, follow-ups, and commitments",
        "RAG-style context retrieval for grounding answers in user data",
        "Database layer for storing processed summaries and extracted actions",
      ],
      challenges: [
        "Email language is messy, so the system needs to separate useful action items from normal conversation.",
        "Long threads require summarization without losing deadlines, names, or decisions.",
        "The assistant must be useful without overwhelming the user with too many low-priority tasks.",
      ],
      results: [
        "Created a strong AI productivity system around real-world inbox use cases.",
        "Built a foundation for a personal AI operating system that can reason over private workflow context.",
        "Demonstrated practical use of LLMs beyond simple chat by connecting them with real tools and user data.",
      ],
    },
  },

  {
    slug: "achilles",
    name: "Achilles",
    tagline: "White-label tactical AI assistant, shipped as a desktop app",
    year: "2026",
    role: "Solo developer · Product Owner",
    status: "Paid product",
    summary:
      "A premium, voice-driven AI assistant delivered to a paying US client as a one-click Windows desktop application with conversational AI, voice interaction, RAG memory, intelligent automation, and a futuristic assistant experience.",
    cover: "/images/achilles-orb.png",
    coverAlt:
      "The Achilles assistant interface, a glowing blue tactical orb with concentric HUD rings",
    tech: [
      "FastAPI",
      "Python",
      "Groq · Llama 3.3 70B",
      "LangChain",
      "FAISS RAG",
      "HuggingFace embeddings",
      "Tavily search",
      "edge-tts / ElevenLabs",
      "SSE streaming",
      "React + Tailwind",
      "WebGL / GLSL",
      "PyInstaller",
      "n8n",
    ],
    links: {
      video:
        "https://drive.google.com/file/d/1R4GmY0C6kF3x6kmVcyM-N8fHuG4hVsOh/view?usp=sharing",
    },
    metrics: [
      { label: "Client", value: "US" },
      { label: "Platform", value: "Windows" },
      { label: "Delivery", value: "Completed" },
      { label: "Type", value: "White-label" },
    ],
    featured: true,
    caseStudy: {
      problem:
        "A US client wanted a personal, premium AI assistant they could run on their own PC and trigger through a desktop-style workflow, not another browser tab. It had to feel like a product, support voice-style interaction, carry custom branding, and connect AI responses with real automation workflows.",
      approach:
        "I built a FastAPI-based AI assistant system that connects a modern desktop-style interface with LLM responses, retrieval-based memory, voice output, and automation-ready workflows. The project was designed to be polished, configurable, and deliverable as a real client-facing AI assistant rather than a basic chatbot demo.",
      architecture: [
        "FastAPI app serving AI assistant endpoints and application logic",
        "Groq Llama model integration for fast LLM responses",
        "General and realtime modes for normal conversation and web-grounded answering",
        "FAISS vector store for retrieval-augmented memory using local embeddings",
        "Inline TTS pipeline for converting assistant responses into spoken audio",
        "React and Tailwind frontend with futuristic assistant interface",
        "Automation hooks for connecting assistant commands with workflow actions",
        "Desktop-style packaging approach for client delivery",
      ],
      challenges: [
        "Latency: voice assistants feel weak if responses arrive slowly, so the system was designed around streaming and fast response output.",
        "Reliability: AI assistant workflows need stable API handling, fallback planning, and predictable response behavior.",
        "Memory: the assistant needed a way to answer with context instead of behaving like a stateless chatbot.",
        "Delivery: the project had to look and feel like a usable product, not only a basic AI demo.",
      ],
      results: [
        "Successfully delivered the AI desktop assistant to a paying US client.",
        "Built a production-ready desktop AI assistant supporting voice interaction, conversational intelligence, and retrieval-based memory.",
        "Designed the application to be easily rebrandable for future client deployments.",
        "Established a reusable architecture for future AI assistant products.",
      ],
    },
  },

  {
    slug: "multilingual-emotion-detection",
    name: "Multilingual Emotion Detection",
    tagline: "Transformer-based emotion understanding across text and facial signals",
    year: "2025",
    role: "AI / NLP developer",
    status: "Research",
    summary:
      "A multilingual emotion detection system combining transformer-based text understanding with facial-emotion analysis to identify human emotions across languages and visual expressions.",
    cover: "/images/cover-emotion-detection.jpg?v=2",
    coverAlt: "Multilingual text and facial emotion AI visualization",
    tech: [
      "Python",
      "Transformers",
      "NLP",
      "Computer Vision",
      "Hugging Face",
      "OpenCV",
      "Deep Learning",
      "Scikit-learn",
    ],
    links: {
      github: "https://github.com/Sankalp-gupta1/Multilingual-emotion-detection",
    },
    metrics: [
      { label: "Mode", value: "Text + Face" },
      { label: "AI Area", value: "NLP + CV" },
      { label: "Model", value: "Transformer" },
      { label: "Focus", value: "Emotion AI" },
    ],
    featured: true,
    caseStudy: {
      problem:
        "Emotion detection becomes difficult when users communicate in different languages, informal text, mixed language, sarcasm, and facial expressions. A single-language or single-modal model cannot understand the full emotional context.",
      approach:
        "I built a system that uses transformer-based language understanding for multilingual text and computer vision for facial expression analysis, creating a stronger emotion-detection pipeline for both text and visual signals.",
      architecture: [
        "Text preprocessing pipeline for multilingual and mixed-language input",
        "Transformer model for semantic emotion classification",
        "Cosine Similarity Attention mechanism for improved emotion representation",
        "Computer vision pipeline for facial emotion analysis",
        "CNN and OpenCV-based facial emotion recognition for live video analytics",
        "Streamlit and FastAPI platform for real-time interaction and analytics",
        "Evaluation pipeline to compare predictions and improve reliability",
      ],
      challenges: [
        "Mixed-language text can confuse simple keyword-based emotion detection.",
        "Sarcasm and informal writing require deeper contextual understanding.",
        "Facial expressions vary between people, lighting conditions, and camera quality.",
        "Combining text emotion and visual emotion requires careful interpretation.",
      ],
      results: [
        "Built a research-style AI project combining NLP and Computer Vision.",
        "Demonstrated transformer-based emotion understanding across multilingual inputs.",
        "Integrated facial emotion recognition for live video-based emotional analytics.",
        "Created a strong portfolio project showing human-centered AI and multimodal intelligence.",
      ],
    },
  },

  {
    slug: "autonomous-digital-newspaper",
    name: "AI-Powered Autonomous Digital Newspaper",
    tagline: "Multi-agent AI system for automated news brief generation",
    year: "2025",
    role: "Agentic AI developer",
    status: "Research",
    summary:
      "An autonomous AI news system that uses AI agents, APIs, summarization, strict hallucination suppression, and modular orchestration to collect, process, and generate structured digital news briefs.",
    cover: "/images/cover-ai-news.jpg?v=2",
    coverAlt: "Autonomous AI news agents collecting and summarizing digital information",
    tech: [
      "Python",
      "FastAPI",
      "LLMs",
      "AI Agents",
      "Agentic Workflows",
      "REST APIs",
      "Prompt Engineering",
      "Microservices",
    ],
    links: {
      github:
        "https://github.com/Sankalp-gupta1/Multi-Agent-AI-News-brief-Summarizer",
      demo: "https://multi-ai-agent-news-summarizer.streamlit.app/",
    },
    metrics: [
      { label: "Architecture", value: "Multi-agent" },
      { label: "Core", value: "LLM workflow" },
      { label: "Focus", value: "News AI" },
      { label: "Safety", value: "Low hallucination" },
    ],
    featured: false,
    caseStudy: {
      problem:
        "Reading and summarizing large volumes of news manually is slow, repetitive, and error-prone. A useful AI news system must gather information, reason over it, summarize it clearly, and avoid hallucinated claims.",
      approach:
        "I implemented autonomous AI agents for data collection, summarization, and content generation. The system uses modular orchestration pipelines, structured prompts, conditional tool invocation, and temperature-controlled inference to produce reliable digital news briefs.",
      architecture: [
        "Autonomous data-gathering agents for collecting news information",
        "LLM-based summarization pipeline for converting raw content into concise briefs",
        "Conditional tool invocation for dynamic API orchestration",
        "Structured reasoning prompts for consistent output generation",
        "Temperature-controlled inference for hallucination reduction",
        "Modular microservice-style architecture for scalable AI processing",
      ],
      challenges: [
        "Preventing hallucinations while summarizing fast-changing information.",
        "Coordinating multiple AI agents without creating inconsistent outputs.",
        "Designing prompts that keep the generated news brief structured and useful.",
      ],
      results: [
        "Built a multi-agent AI project around autonomous information processing.",
        "Implemented modular orchestration for data collection, summarization, and generation.",
        "Demonstrated practical Agentic AI workflows beyond simple chatbot use cases.",
      ],
    },
  },

  {
    slug: "workbench-rbac",
    name: "Workbench RBAC",
    tagline: "Full-stack role-based access control system",
    year: "2026",
    role: "Full-stack developer",
    status: "Full stack",
    summary:
      "A production-style RBAC platform with authentication, authorization, protected routes, role permissions, admin controls, and clean full-stack architecture.",
    cover: "/images/cover-rbac.svg?v=2",
    coverAlt: "Role based access control dashboard with users and permissions",
    tech: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "RBAC",
      "Tailwind CSS",
    ],
    links: {
      github: "https://github.com/Sankalp-gupta1/workbench-rbac",
      demo: "https://workbench-rbac.vercel.app/",
    },
    metrics: [
      { label: "Type", value: "Full stack" },
      { label: "Security", value: "RBAC" },
      { label: "Auth", value: "JWT" },
      { label: "Deploy", value: "Vercel" },
    ],
    featured: false,
    caseStudy: {
      problem:
        "Real applications need different access levels for admins, users, and team members. Without a proper RBAC system, sensitive routes and actions become hard to secure.",
      approach:
        "I developed a full-stack RBAC prototype with protected routes, role checks, authentication flow, permission-based UI rendering, and admin-level control over access.",
      architecture: [
        "Next.js frontend for dashboard and protected pages",
        "Backend API for authentication and authorization",
        "JWT-based login session handling",
        "Role-based permission checks for sensitive actions",
        "Database models for users, roles, and permissions",
        "Reusable middleware for route protection",
      ],
      challenges: [
        "Keeping frontend route protection and backend authorization consistent.",
        "Designing clean role logic without overcomplicating the permission system.",
        "Making the project understandable as an assignment while still looking production-ready.",
      ],
      results: [
        "Built a complete full-stack RBAC application.",
        "Demonstrated authentication, authorization, protected APIs, and secure UI logic.",
        "Created a strong industry-style project useful for SDE internship and full-stack roles.",
      ],
    },
  },

  {
  slug: "nl2sql-vanna-ai",
  name: "NL2SQL using Vanna AI",
  tagline: "AI System that converts natural language into SQL queries",
  year: "2026",
  role: "AI Engineer · Backend Developer",
  status: "Flagship",

  summary:
    "An AI-powered Natural Language to SQL system that allows users to query databases using plain English instead of SQL. The application understands the user's question, generates the correct SQL query using Vanna AI, executes it on the database, and returns structured results through a FastAPI backend.",

  cover: "/images/cover-nlp.jpg?v=2",

  coverAlt:
    "Natural Language to SQL system using Vanna AI, FastAPI and SQLite",

  tech: [
    "Python",
    "FastAPI",
    "Vanna AI",
    "SQLite",
    "LLMs",
    "REST APIs",
    "Pandas",
    "Uvicorn",
  ],

  links: {
    github:
      "https://github.com/Sankalp-gupta1/nl2sql-vanna-fastapi",
  },

  metrics: [
    {
      label: "Input",
      value: "Natural Language",
    },
    {
      label: "Output",
      value: "SQL Query",
    },
    {
      label: "Backend",
      value: "FastAPI",
    },
    {
      label: "AI Engine",
      value: "Vanna AI",
    },
  ],

  featured: true,

  caseStudy: {
    problem:
      "Organizations store huge amounts of valuable information inside relational databases, but accessing that information usually requires SQL knowledge. Business users, doctors, managers, and analysts often know what they want to ask but don't know how to write SQL queries. As a result, they depend on developers or database administrators even for simple questions, making data access slow and inefficient.",

    approach:
      "To solve this problem, I built an AI-powered Natural Language to SQL system using Vanna AI and FastAPI. Instead of writing SQL, users simply ask questions in everyday English such as 'Show all doctors', 'List today's appointments', or 'Count total patients'. The system understands the user's intent, analyzes the database schema, generates the correct SQL query, executes it on the SQLite database, and returns the results as structured JSON through REST APIs. This creates a much more natural and user-friendly way to interact with databases.",

    architecture: [
      "FastAPI backend that exposes REST APIs for natural language queries.",
      "Vanna AI integrated as the LLM-based SQL generation engine.",
      "SQLite database containing healthcare-related tables including doctors, patients, appointments, and treatments.",
      "Schema-aware training module that teaches Vanna AI about the database structure before generating SQL.",
      "Memory-based learning using example questions and SQL pairs to improve query accuracy.",
      "Automatic SQL execution pipeline that safely runs generated queries and returns structured responses.",
      "Interactive Swagger API interface for testing the entire system without writing frontend code.",
    ],

    challenges: [
      "Teaching the AI model to understand custom database schemas instead of generating generic SQL.",
      "Reducing incorrect SQL generation by providing schema training and memory examples.",
      "Handling different ways users ask the same question while still producing accurate SQL queries.",
      "Designing a modular backend architecture where database setup, AI configuration, memory training, and API services remain independent and reusable.",
    ],

    results: [
      "Built a complete end-to-end AI system that converts natural language into executable SQL queries.",
      "Successfully integrated Vanna AI with FastAPI and SQLite into a production-style backend application.",
      "Allowed users with no SQL knowledge to retrieve database information using simple English questions.",
      "Created a reusable architecture that can easily be extended to PostgreSQL, MySQL, enterprise databases, and business intelligence platforms.",
      "Demonstrated practical skills in LLM integration, backend API development, database engineering, prompt-based AI systems, and software architecture.",
    ],
  },
},
];