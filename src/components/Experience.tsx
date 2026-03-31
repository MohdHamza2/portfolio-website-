import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { experiences } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 z-10 relative">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-20 text-center bg-gradient-to-r from-green-400 to-teal-500 text-transparent bg-clip-text"
        >
          Professional Experience
        </motion.h2>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl hover:border-green-500/50 transition-colors group relative"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex flex-col md:flex-row items-start gap-6 relative z-10">
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 shrink-0">
                  {exp.icon}
                </div>
                <div className="flex-1 w-full">
                  <div className="flex flex-col gap-2 mb-4">
                    <h3 className="text-2xl font-bold text-gray-100">{exp.title}</h3>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="text-xl font-medium text-green-400">{exp.organization}</span>
                      <span className="text-sm bg-white/5 px-3 py-1 rounded-full text-gray-300 border border-white/5">{exp.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed italic border-l-2 border-green-500/30 pl-4">{exp.description}</p>
                  
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <motion.li 
                        key={idx} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index * 0.1) + (idx * 0.1) }}
                        className="flex items-start gap-3"
                      >
                        <ChevronRight size={18} className="text-green-500 mt-0.5 shrink-0" />
                        <span className="text-gray-300 text-sm md:text-base leading-relaxed">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
