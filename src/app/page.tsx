'use client';

import { motion } from 'framer-motion';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="h-screen flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Josh McAuley
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Computer Science Graduate
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
          {/* Project cards will go here */}
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 bg-gray-900">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          {/* About content will go here */}
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Contact</h2>
          {/* Contact form will go here */}
        </section>
      </main>
    </>
  );
} 