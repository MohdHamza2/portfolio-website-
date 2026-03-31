import React from 'react';
import { motion } from 'framer-motion';
import { events } from '../data';

export default function Events() {
  return (
    <section id="events" className="py-24 relative overflow-hidden bg-black/30 w-full">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 z-10 relative">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-20 text-center bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text"
        >
          Events & Leadership
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div 
              key={event.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl hover:border-orange-500/50 transition-all hover:-translate-y-2 group flex flex-col h-full"
            >
              <div className="flex items-start gap-5 mb-4">
                <div className="p-3.5 bg-orange-500/10 border border-orange-500/20 rounded-xl text-orange-400 group-hover:scale-110 group-hover:bg-orange-500/20 transition-all shrink-0">
                  {event.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-100 mb-2 leading-tight">{event.title}</h3>
                  {event.highlight && (
                    <span className="inline-block px-3 py-1 bg-orange-500/10 border border-orange-500/20 text-orange-400 rounded-full text-xs font-semibold tracking-wide">
                      {event.highlight}
                    </span>
                  )}
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed flex-1">{event.description}</p>
              
              <div className="flex justify-between items-center pt-4 border-t border-white/5">
                <span className="text-sm font-medium text-gray-500 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                  {event.year}
                </span>
                {event.impact && (
                  <span className="text-sm text-orange-400 font-semibold bg-orange-400/10 px-3 py-1 rounded-lg">
                    {event.impact}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
