import React from 'react';
import { Code, Award, Cloud, Globe, Users, Trophy, Brain, BookOpen, Star, Heart, Lightbulb, Rocket, GraduationCap } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  category: string;
}

export interface Event {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  highlight?: string;
  year: string;
  impact?: string;
}

export interface Experience {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string;
  achievements: string[];
  icon: React.ReactNode;
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  period: string;
  location: string;
  details: string;
  icon: React.ReactNode;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "LexiScan Enterprise RAG Application",
    description: "Built a scalable RAG-based document intelligence system using Celery, Redis, Qdrant, and Hybrid Search (Dense + SPLADE sparse vectors), improving retrieval accuracy and system performance.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
    technologies: ["Python", "Celery", "Redis", "Qdrant", "RAG", "Hybrid Search"],
    link: "https://github.com/MohdHamza2/frontend",
    category: "AI/Enterprise"
  },
  {
    id: 2,
    title: "VisionSpec QC: AI-Powered Industrial QC",
    description: "Production-grade visual inspection system designed to bring high-speed, perfectly explainable Artificial Intelligence to modern manufacturing lines. It automates the tedious visual PCB inspection process.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    technologies: ["Computer Vision", "Deep Learning", "Python", "Industrial AI"],
    link: "https://github.com/MohdHamza2/industrydet",
    category: "Computer Vision"
  },
  {
    id: 3,
    title: "AGRI - TWIN MVP",
    description: "An end-to-end agricultural monitoring system that uses satellite imagery, Deep learning, and interactive visualization to provide farm intelligence and irrigation recommendations.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=800",
    technologies: ["Deep Learning", "Satellite Imagery", "Visualization", "AgriTech"],
    link: "#",
    category: "AgriTech"
  },
  {
    id: 4,
    title: "DAN Electrical Company Official Website",
    description: "Developed Full Stack Website for DAN Company in Sharjah, UAE with successful integration of backend, frontend, and a personalized DAN Chatbot.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    technologies: ["React", "Node.js", "Full Stack", "AI Chatbot"],
    link: "https://v0-project-two-black.vercel.app/",
    category: "Web & AI"
  },
  {
    id: 5,
    title: "CVD Diagnosis Prediction System",
    description: "CVD Disease prediction system developed in python through various supervised learning algorithms such as Support Vector Machine (SVM) and Linear Regression.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    technologies: ["Python", "SVM", "Linear Regression", "Machine Learning"],
    link: "https://health-assistent-m6tjkrei8elfkljrhwqh5a.streamlit.app/",
    category: "Medical AI"
  },
  {
    id: 6,
    title: "IEEE GRSS MJCET Official Website",
    description: "Developed and deployed the official website for IEEE GRSS MJCET, showcasing events, activities, and chapter initiatives.",
    image: "https://images.unsplash.com/photo-1531297172868-2244c1665822?auto=format&fit=crop&q=80&w=800",
    technologies: ["React", "Web Dev", "Frontend"],
    link: "https://web-nu-navy-19.vercel.app/",
    category: "Web Dev"
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Governing Body (Webmaster) & Executive Member",
    organization: "IEEE GRSS MJCET",
    period: "2024 - 2026",
    description: "Managed technical operations, web infrastructure, and served on the executive leadership committee.",
    achievements: [
      "Serving as the Webmaster for the 2025-2026 term",
      "Executive Committee Member (2024-2025)",
      "Developed and deployed the official website for IEEE GRSS MJCET",
      "Contributed to organizational and technical initiatives"
    ],
    icon: <Globe size={32} />
  },
  {
    id: 2,
    title: "Technical (Data Science) Member",
    organization: "TSIG - Technology Special Interest Group MJCET",
    period: "2025 - 2026",
    description: "Actively contributing to data science models and analytical innovation groups.",
    achievements: [
      "Analyzing data pipelines and participating in data science workshops",
      "Collaborating on advanced technical computing projects"
    ],
    icon: <Code size={32} />
  },
  {
    id: 3,
    title: "ML Intern",
    organization: "LABMENTIX",
    period: "Sep 2025 - Nov 2025",
    description: "Applied Machine Learning engineering intern.",
    achievements: [
      "Developed and optimized Machine Learning pipelines",
      "Contributed to core ML infrastructure and modeling for production systems"
    ],
    icon: <Brain size={32} />
  },
  {
    id: 4,
    title: "AI & Web Dev Intern",
    organization: "CODSOFT",
    period: "Jul 2025 - Sep 2025",
    description: "Full-stack development with a focus on Artificial Intelligence integration.",
    achievements: [
      "Built interactive, responsive web applications",
      "Integrated AI features seamlessly into user-facing web platforms"
    ],
    icon: <Code size={32} />
  },
  {
    id: 5,
    title: "Technical (Machine Learning) Member",
    organization: "Amazon Web Services CC MJCET",
    period: "2024 - 2025",
    description: "Core member of the AWS Cloud Club focusing on ML applications.",
    achievements: [
      "Facilitated Machine Learning track technical sessions",
      "Explored AWS AI/ML services alongside cloud architecture concepts"
    ],
    icon: <Cloud size={32} />
  },
  {
    id: 6,
    title: "Organizer",
    organization: "DATANYX (Hackathon) AWS x IEEE SMC",
    period: "2024 & 2025",
    description: "Spearheaded organizational and logistical efforts for major technical hackathons.",
    achievements: [
      "Organized large-scale hackathons bringing together developers and visionaries",
      "Coordinated efforts between AWS CC and IEEE SMC societies"
    ],
    icon: <Trophy size={32} />
  }
];

export const education: Education[] = [
  {
    id: 1,
    institution: "MJCET Hyderabad",
    degree: "B.Tech in Artificial Intelligence and Machine Learning",
    period: "2022 - Present",
    location: "Telangana, India",
    details: "Specializing in AI/ML with focus on medical applications and startup innovation",
    icon: <Brain size={32} />
  },
  {
    id: 2,
    institution: "MS IoT Branch",
    degree: "Intermediate Studies",
    period: "2021 - 2022",
    location: "India",
    details: "Successfully completed with over 80% marks, strong foundation in technology",
    icon: <BookOpen size={32} />
  },
  {
    id: 3,
    institution: "Indian Excellent School",
    degree: "CBSE Curriculum (K-10)",
    period: "2010 - 2020",
    location: "Sharjah, UAE",
    details: "Comprehensive education from kindergarten to 10th grade under CBSE curriculum",
    icon: <GraduationCap size={32} />
  }
];

export const events: Event[] = [
  {
    id: 1,
    title: "24-Hour DATATHON - Datanyx",
    description: "Organized Telangana's first 24-hour mega DATATHON, focusing on Agrotech, Fintech, Edtech, and Medtech domains.",
    icon: <Trophy size={32} />,
    highlight: "First in Telangana",
    year: "2024",
    impact: "500+ participants"
  },
  {
    id: 2,
    title: "ML-API Workshop",
    description: "Led comprehensive workshop on Machine Learning APIs, providing hands-on experience with real-world implementations.",
    icon: <Code size={32} />,
    year: "2024",
    impact: "50+ developers trained"
  },
  {
    id: 3,
    title: "Amazon Top Services Deep Dive",
    description: "Conducted detailed sessions on Amazon's flagship services, focusing on practical cloud implementations.",
    icon: <Cloud size={32} />,
    year: "2024",
    impact: "100+ cloud enthusiasts"
  },
  {
    id: 4,
    title: "Spatial Technology Summit",
    description: "Organized innovative event focusing on spatial technology applications in modern computing and geoscience.",
    icon: <Globe size={32} />,
    year: "2024",
    impact: "200+ attendees"
  },
  {
    id: 5,
    title: "Richard Memorial Lecture",
    description: "Organized prestigious IEEE GRSS memorial lecture, bringing renowned speakers to share cutting-edge research.",
    icon: <Award size={32} />,
    year: "2024",
    impact: "Academic excellence"
  }
];

export const skills = [
  {
    category: "AI/ML & Data Science",
    icon: <Brain size={32} />,
    items: ["Machine Learning", "Deep Learning", "Neural Networks", "Medical AI", "Predictive Analytics", "Data Mining"],
    color: "from-purple-500 to-pink-500"
  },
  {
    category: "Cloud & DevOps",
    icon: <Cloud size={32} />,
    items: ["AWS (S3, EC2, RDS, IAM, VPC)", "Cloud Architecture", "Database Management", "Oracle DB", "MongoDB"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    category: "Frontend & Full Stack Dev",
    icon: <Code size={32} />,
    items: ["React", "Python", "Java", "Node.js", "Web Development", "AI Integration"],
    color: "from-green-500 to-teal-500"
  },
  {
    category: "Geoscience & Remote Sensing",
    icon: <Globe size={32} />,
    items: ["Remote Sensing", "GIS", "Spatial Analysis", "IEEE GRSS", "Geospatial Technology", "Earth Observation"],
    color: "from-orange-500 to-red-500"
  }
];

export const interests = [
  { icon: <Rocket size={24} />, title: "Startup Innovation", desc: "Building solutions for real-world problems" },
  { icon: <Heart size={24} />, title: "Medical Technology", desc: "AI applications in healthcare" },
  { icon: <Users size={24} />, title: "Rural Development", desc: "Technology for underserved communities" },
  { icon: <Lightbulb size={24} />, title: "Open Source", desc: "Contributing to community projects" }
];
