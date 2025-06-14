import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, GraduationCap, Code, Award, Cloud, Globe, Users, Trophy, Brain, Phone, MapPin, BookOpen, Star, ChevronRight, Heart, Lightbulb, Rocket } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  category: string;
}

interface Event {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  highlight?: string;
  year: string;
  impact?: string;
}

interface Experience {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string;
  achievements: string[];
  icon: React.ReactNode;
}

interface Education {
  id: number;
  institution: string;
  degree: string;
  period: string;
  location: string;
  details: string;
  icon: React.ReactNode;
}

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "CD Diagnosis Predictor",
      description: "Revolutionary AI-powered diagnostic system that predicts CD test results (positive/negative) based on input parameters, achieving high accuracy in medical predictions and contributing to healthcare innovation.",
      image: "/cd-diagnosis.jpg",
      technologies: ["Python", "Machine Learning", "TensorFlow", "Scikit-learn", "Medical AI"],
      link: "https://github.com/MohdHamza2/CVD-Diangnosis.git",
      category: "AI/ML"
    },
    {
      id: 2,
      title: "Rural Development Platform",
      description: "Open-source platform designed to bridge the digital divide in rural areas, focusing on education and healthcare accessibility.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=800",
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Open Source"],
      link: "#",
      category: "Social Impact"
    },
    {
      id: 3,
      title: "Medical Startup MVP",
      description: "Innovative healthcare solution prototype focusing on remote patient monitoring and telemedicine capabilities.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=800",
      technologies: ["Python", "AWS EC2", "React", "Oracle DB", "IoT"],
      link: "#",
      category: "Healthcare"
    }
  ];

  const experiences: Experience[] = [
    {
      id: 1,
      title: "AWS Cloud Practitioner & Instructor",
      organization: "AWS CC MJCET Hyderabad",
      period: "2024 - Present",
      description: "Leading cloud computing initiatives and education programs",
      achievements: [
        "Completed AWS Cloud Practitioner certification",
        "Instructed 3-5 technical events as primary speaker",
        "Guided over 20 students in cloud computing concepts",
        "Expertise in IAM, S3, VPC, and other core AWS services"
      ],
      icon: <Cloud size={32} />
    },
    {
      id: 2,
      title: "GRSS Member & Event Organizer",
      organization: "IEEE GRSS MJCET Hyderabad",
      period: "2024 - Present",
      description: "Contributing to geoscience and remote sensing research",
      achievements: [
        "Organized the prestigious Richard Memorial Lecture",
        "Participating in Student Development Program (SDP)",
        "Gained expertise in geoscience and remote sensing technologies",
        "Active contributor to IEEE GRSS community initiatives"
      ],
      icon: <Globe size={32} />
    },
    {
      id: 3,
      title: "Lead Organizer - Datanyx",
      organization: "MJCET Hyderabad",
      period: "2024",
      description: "Spearheaded Telangana's first 24-hour mega datathon",
      achievements: [
        "Organized Telangana's first 24-hour DATATHON",
        "Focused on Agrotech, Fintech, Edtech, and Medtech domains",
        "Managed large-scale technical event logistics",
        "Brought together data enthusiasts and innovators statewide"
      ],
      icon: <Trophy size={32} />
    }
  ];

  const education: Education[] = [
    {
      id: 1,
      institution: "MJCET Hyderabad",
      degree: "B.Tech in Artificial Intelligence and Machine Learning",
      period: "2022 - Present (3rd Year)",
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

  const events: Event[] = [
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

  const skills = [
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
      category: "Programming & Development",
      icon: <Code size={32} />,
      items: ["Python", "Java", "Frontend Development", "React", "Node.js", "Full Stack Development"],
      color: "from-green-500 to-teal-500"
    },
    {
      category: "Geoscience & Remote Sensing",
      icon: <Globe size={32} />,
      items: ["Remote Sensing", "GIS", "Spatial Analysis", "IEEE GRSS", "Geospatial Technology", "Earth Observation"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const interests = [
    { icon: <Rocket size={24} />, title: "Startup Innovation", desc: "Building solutions for real-world problems" },
    { icon: <Heart size={24} />, title: "Medical Technology", desc: "AI applications in healthcare" },
    { icon: <Users size={24} />, title: "Rural Development", desc: "Technology for underserved communities" },
    { icon: <Lightbulb size={24} />, title: "Open Source", desc: "Contributing to community projects" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Dynamic Background */}
      <div 
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1), transparent 40%)`
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              HAMZA
            </h1>
            <div className="flex space-x-6">
              {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-400 transition-colors relative group cursor-pointer"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className={`min-h-screen flex items-center justify-center relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="mb-8">
            <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-pulse">
              HAMZA MOHAMMED
            </h1>
            <div className="text-3xl text-gray-300 mb-4 typing-animation">
              AI/ML Student & Cloud Computing Expert
            </div>
            <p className="text-xl text-gray-400 mb-6">
              Passionate about <span className="text-blue-400">Startups</span> • <span className="text-green-400">Medical AI</span> • <span className="text-purple-400">Rural Development</span> • <span className="text-orange-400">Open Source</span>
            </p>
            <div className="flex justify-center items-center space-x-4 mb-8">
              <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full">
                <MapPin size={16} className="text-blue-400" />
                <span className="text-sm">MJCET Hyderabad, India</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full">
                <BookOpen size={16} className="text-green-400" />
                <span className="text-sm">3rd Year AI/ML</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/MohdHamza2/CVD-Diangnosis.git" target="_blank" rel="noopener noreferrer" className="group">
              <div className="p-4 bg-gray-500/20 rounded-full hover:bg-gray-500/30 transition-all group-hover:scale-110">
                <Github size={24} className="text-gray-400" />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/hamza-mohammed-246a98323" target="_blank" rel="noopener noreferrer" className="group">
              <div className="p-4 bg-blue-500/20 rounded-full hover:bg-blue-500/30 transition-all group-hover:scale-110">
                <Linkedin size={24} className="text-blue-400" />
              </div>
            </a>
            <a href="mailto:Mohammedhamza.2k19@gmail.com" className="group">
              <div className="p-4 bg-red-500/20 rounded-full hover:bg-red-500/30 transition-all group-hover:scale-110">
                <Mail size={24} className="text-red-400" />
              </div>
            </a>
            <a href="tel:+916303837037" className="group">
              <div className="p-4 bg-green-500/20 rounded-full hover:bg-green-500/30 transition-all group-hover:scale-110">
                <Phone size={24} className="text-green-400" />
              </div>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {interests.map((interest, index) => (
              <div key={index} className="bg-gray-800/30 p-4 rounded-lg hover:bg-gray-800/50 transition-all hover:scale-105">
                <div className="text-blue-400 mb-2">{interest.icon}</div>
                <h3 className="font-bold text-sm mb-1">{interest.title}</h3>
                <p className="text-xs text-gray-400">{interest.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Education Section */}
      <section id="about" className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Educational Journey
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={edu.id} className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="flex-1 bg-gray-800/30 rounded-lg p-8 hover:bg-gray-800/50 transition-all">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-blue-500/20 rounded-lg text-blue-400">
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                      <p className="text-xl text-blue-400 mb-2">{edu.institution}</p>
                      <p className="text-gray-400 mb-2">{edu.period} • {edu.location}</p>
                      <p className="text-gray-300">{edu.details}</p>
                    </div>
                  </div>
                </div>
                <div className="w-4 h-4 bg-blue-500 rounded-full flex-shrink-0"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-green-500 to-teal-500 text-transparent bg-clip-text">
            Professional Experience
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {experiences.map((exp) => (
              <div key={exp.id} className="bg-gray-800/30 rounded-lg p-8 hover:bg-gray-800/50 transition-all hover:scale-105">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-green-500/20 rounded-lg text-green-400">
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                    <p className="text-xl text-green-400 mb-2">{exp.organization}</p>
                    <p className="text-gray-400 mb-4">{exp.period}</p>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <ChevronRight size={16} className="text-green-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text">
            Events & Leadership
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div key={event.id} className="bg-gray-800/30 rounded-lg p-6 hover:bg-gray-800/50 transition-all hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-500/20 rounded-lg text-orange-400">
                    {event.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold">{event.title}</h3>
                      {event.highlight && (
                        <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs">
                          {event.highlight}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 mb-3">{event.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{event.year}</span>
                      {event.impact && (
                        <span className="text-sm text-orange-400 font-semibold">{event.impact}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-800/30 rounded-lg p-8 hover:bg-gray-800/50 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 bg-gradient-to-r ${skill.color} bg-opacity-20 rounded-lg`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{skill.category}</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {skill.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Star size={12} className="text-yellow-400" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
            Featured Projects
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-800/30 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-black/70 text-cyan-400 rounded-full text-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Let's Connect & Collaborate
          </h2>
          <p className="text-gray-300 mb-12 max-w-3xl mx-auto text-lg">
            I'm always excited to discuss innovative projects, AI/ML solutions, startup opportunities, 
            or collaborations in medical technology and rural development. Let's build something amazing together!
          </p>
          
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="bg-gray-800/30 p-6 rounded-lg hover:bg-gray-800/50 transition-all">
              <Github size={32} className="text-gray-400 mx-auto mb-4" />
              <h3 className="font-bold mb-2">GitHub</h3>
              <a href="https://github.com/MohdHamza2/CVD-Diangnosis.git" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
                CVD Diagnosis Project
              </a>
            </div>
            <div className="bg-gray-800/30 p-6 rounded-lg hover:bg-gray-800/50 transition-all">
              <Mail size={32} className="text-blue-400 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Email</h3>
              <a href="mailto:Mohammedhamza.2k19@gmail.com" className="text-blue-400 hover:text-blue-300">
                Mohammedhamza.2k19@gmail.com
              </a>
            </div>
            <div className="bg-gray-800/30 p-6 rounded-lg hover:bg-gray-800/50 transition-all">
              <Phone size={32} className="text-green-400 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Phone</h3>
              <a href="tel:+916303837037" className="text-green-400 hover:text-green-300">
                +91 6303 837 037
              </a>
            </div>
            <div className="bg-gray-800/30 p-6 rounded-lg hover:bg-gray-800/50 transition-all">
              <Linkedin size={32} className="text-blue-400 mx-auto mb-4" />
              <h3 className="font-bold mb-2">LinkedIn</h3>
              <a href="https://www.linkedin.com/in/hamza-mohammed-246a98323" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                Connect with me
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <a href="mailto:Mohammedhamza.2k19@gmail.com" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-full inline-flex items-center gap-3 text-lg font-semibold transition-all hover:scale-105">
              <Mail size={24} />
              Start a Conversation
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-400 border-t border-gray-800 bg-black/50">
        <div className="container mx-auto px-4">
          <p className="text-lg mb-4">
            © {new Date().getFullYear()} Hamza Mohammed. Crafted with passion for innovation.
          </p>
          <p className="text-sm">
            "Technology is best when it brings people together and solves real-world problems."
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;