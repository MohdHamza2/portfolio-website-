import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { skills } from '../data';

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      
      <div className="container mx-auto px-4 z-10 relative">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-20 text-center bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text"
        >
          Skills & Expertise
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 shadow-2xl transition-all group"
            >
              <div className="flex items-center gap-5 mb-8 border-b border-white/5 pb-6">
                <div className={`p-4 bg-gradient-to-br ${skill.color} bg-opacity-10 opacity-90 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform`}>
                  {skill.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-100">{skill.category}</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skill.items.map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.1) + (i * 0.05) }}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <Star size={14} className="text-yellow-400/80 fill-yellow-400/20 shrink-0" />
                    <span className="text-gray-300 font-medium text-sm md:text-base">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
