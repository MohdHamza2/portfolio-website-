import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { interests } from '../data';

interface HeroProps {
  isVisible: boolean;
}

export default function Hero({ isVisible }: HeroProps) {
  return (
    <header id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-4 py-16 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-8xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            HAMZA MOHAMMED
          </h1>
          <div className="text-xl md:text-3xl font-medium text-gray-200 mb-4 h-10">
            <span className="typing-animation pr-2">AI/ML Student & Cloud Computing Expert</span>
          </div>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about <span className="text-blue-400 font-semibold">Startups</span> • 
            <span className="text-green-400 font-semibold"> Medical AI</span> • 
            <span className="text-purple-400 font-semibold"> Rural Development</span> • 
            <span className="text-orange-400 font-semibold"> Open Source</span>
          </p>
          
          <div className="flex justify-center flex-wrap items-center gap-4 mb-10">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2 backdrop-blur-md bg-white/5 border border-white/10 px-5 py-2.5 rounded-full shadow-lg">
              <MapPin size={18} className="text-blue-400" />
              <span className="text-sm font-medium">MJCET Hyderabad, India</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2 backdrop-blur-md bg-white/5 border border-white/10 px-5 py-2.5 rounded-full shadow-lg">
              <BookOpen size={18} className="text-green-400" />
              <span className="text-sm font-medium">4th Year AI/ML</span>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex justify-center space-x-4 md:space-x-6 mb-16"
        >
          {[
            { icon: <Github size={24} />, color: "text-gray-300", bg: "hover:bg-white/10 hover:border-white/30", href: "https://github.com/MohdHamza2" },
            { icon: <Linkedin size={24} />, color: "text-blue-400", bg: "hover:bg-blue-500/20 hover:border-blue-500/50", href: "https://www.linkedin.com/in/hamza-mohammed-246a98323" },
            { icon: <Mail size={24} />, color: "text-purple-400", bg: "hover:bg-purple-500/20 hover:border-purple-500/50", href: "mailto:Mohammedhamza.2k19@gmail.com" },
            { icon: <Phone size={24} />, color: "text-pink-400", bg: "hover:bg-pink-500/20 hover:border-pink-500/50", href: "tel:+916303837037" }
          ].map((social, i) => (
            <motion.a 
              key={i}
              whileHover={{ y: -5, scale: 1.1 }}
              href={social.href} 
              target={social.href.startsWith('http') ? "_blank" : "_self"} 
              rel="noopener noreferrer" 
              className={`p-4 rounded-full backdrop-blur-md bg-white/5 border border-white/10 shadow-lg transition-all ${social.bg} ${social.color}`}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto"
        >
          {interests.map((interest, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -8 }}
              className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl shadow-xl transition-all"
            >
              <div className="text-blue-400 mb-4 flex justify-center animate-float">{interest.icon}</div>
              <h3 className="font-semibold text-sm md:text-base mb-2 text-gray-200">{interest.title}</h3>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed">{interest.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </header>
  );
}
