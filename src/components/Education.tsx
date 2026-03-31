import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data';

export default function Education() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 z-10 relative">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-20 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
        >
          Educational Journey
        </motion.h2>
        <div className="space-y-12 max-w-5xl mx-auto relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-500/30 before:to-transparent">
          {education.map((edu, index) => (
            <div key={edu.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-gray-900 bg-blue-500/20 text-blue-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:inline-flex md:group-even:translate-x-1/2 z-10 absolute left-0 md:left-1/2 -mt-3 md:mt-0">
                <div className="scale-75">{edu.icon}</div>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl hover:border-blue-500/50 transition-colors ml-auto md:ml-0"
              >
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-100">{edu.degree}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="text-lg font-medium text-blue-400">{edu.institution}</span>
                    <span className="text-sm px-3 py-1 bg-white/5 rounded-full text-gray-300 w-fit">{edu.period}</span>
                  </div>
                  <p className="text-sm font-medium text-gray-400 flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {edu.location}
                  </p>
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">{edu.details}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
