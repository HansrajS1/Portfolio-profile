import React from 'react';
import { motion } from 'framer-motion';
import profilePic2 from '../assets/images/profile2.jpg';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center bg-black text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">

        <motion.div
          className="md:w-1/3 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.05, rotate: 3 }}
        >
          <img
            src={profilePic2}
            alt="Hans Raj"
            className="rounded-full cursor-pointer w-72 h-72 md:w-96 md:h-96 object-cover shadow-2xl shadow-cyan-500/40 transition-shadow duration-300 hover:shadow-cyan-400/60"
          />
        </motion.div>

        <motion.div
          className="md:w-2/3 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-4">About <span className="text-cyan-400">Me</span></h2>
          <p className="text-lg text-gray-300 leading-relaxed text-justify">
            I’m Hans Raj, a B.Tech Computer Science and Engineering student specializing in Artificial Intelligence & Machine Learning, graduating in 2026.

            I build end-to-end intelligent systems that combine machine learning, backend engineering, and user-focused design. My work spans ML, Generative AI, and full-stack mobile development, with projects like a AU Exam App full-stack mobile application for uploading and managing academic papers, built for Alliance University Students, cardiovascular risk prediction system (MLOps-enabled), a RAG-based AI assistant, and a real-time face mask detection system using CNNs.

          </p>
          <br />
          <p className="text-lg text-gray-300 leading-relaxed text-justify">
            Currently, I’m working as an Android Developer Apprentice at NEC Corporation, where I develop and optimize scalable mobile applications, focusing on performance, usability, and clean architecture.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;