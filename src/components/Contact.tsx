import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, Send, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate form submission delay so the user sees the animation
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000); // Reset after 3 seconds
    }, 1500);
  };

  return (
    <>
      <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-t from-gray-900 via-black to-black">
        <div className="absolute top-0 left-1/2 w-[800px] h-[400px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none -translate-x-1/2 opacity-50" />
        
        <div className="container mx-auto px-4 z-10 relative max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Let's Connect & Collaborate
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
              I'm always excited to discuss innovative projects, AI/ML solutions, startup opportunities, 
              or collaborations in medical technology. Let's build something amazing!
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side: Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <Github size={32} />, title: "GitHub", link: "https://github.com/MohdHamza2", text: "MohdHamza2", color: "text-gray-400", hover: "hover:border-gray-500/50" },
                { icon: <Mail size={32} />, title: "Email", link: "mailto:Mohammedhamza.2k19@gmail.com", text: "Mohammedhamza...", color: "text-blue-400", hover: "hover:border-blue-500/50" },
                { icon: <Phone size={32} />, title: "Phone", link: "tel:+916303837037", text: "+91 6303 837 037", color: "text-green-400", hover: "hover:border-green-500/50" },
                { icon: <Linkedin size={32} />, title: "LinkedIn", link: "https://www.linkedin.com/in/hamza-mohammed-246a98323", text: "Connect with me", color: "text-blue-500", hover: "hover:border-blue-500/50" }
              ].map((item, i) => (
                <motion.a 
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl shadow-xl transition-all group hover:-translate-y-2 ${item.hover} flex flex-col items-center text-center`}
                >
                  <div className={`${item.color} mb-4 group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-200">{item.title}</h3>
                  <span className="text-gray-400 group-hover:text-white transition-colors text-sm font-medium">
                    {item.text}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Right Side: Interactive Form UI */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden"
            >
              {/* Decorative gradient orb for the form background */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] pointer-events-none" />
              
              <h3 className="text-2xl font-bold text-gray-100 mb-6 font-sans">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Your Name</label>
                    <input required type="text" className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all font-sans" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Email Address</label>
                    <input required type="email" className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all font-sans" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Subject</label>
                  <input required type="text" className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all font-sans" placeholder="Collaboration / Job Opportunity" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Message</label>
                  <textarea required rows={4} className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none font-sans" placeholder="Hi Hamza, I would like to discuss..."></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={formStatus !== 'idle'}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                >
                  {formStatus === 'idle' && (
                    <>Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                  )}
                  {formStatus === 'submitting' && (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  )}
                  {formStatus === 'success' && (
                    <>Message Sent! <CheckCircle2 size={20} className="text-green-300" /></>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-500 border-t border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="container mx-auto px-4">
          <p className="text-base mb-4 font-medium">
            © {new Date().getFullYear()} Hamza Mohammed. Crafted with passion for innovation.
          </p>
          <p className="text-sm italic opacity-70">
            "Technology is best when it brings people together and solves real-world problems."
          </p>
        </div>
      </footer>
    </>
  );
}
