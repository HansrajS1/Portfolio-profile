import React from "react";
import { motion } from "framer-motion";
import project1 from "../assets/images/AU Exam App.png";
import project2 from "../assets/images/pro1.png";
import project3 from "../assets/images/pro2.png";
import project4 from "../assets/images/pro4.png";
import project5 from "../assets/images/pro5.png";
import project6 from "../assets/images/pro6.png";
import face from "../assets/images/face.png"

import projectsBgImage from "../assets/images/background1.jpg";

const projects = [
  {
    title: "AU Exam App",
    description:
      "A full-stack mobile application for uploading and managing academic papers, built for Alliance University Students.",
    imageUrl: project1,
    liveUrl: "http://auexamapp.tech/",
    codeUrl: "https://github.com/HansrajS1/Au-Exam-App",
  },
  {
    title: "Face Mask Detection Using CNN and Real-Time Camera Input",
    description:
      "This project focuses on developing an intelligent system that automatically detects whether a person is wearing a face mask or not using Convolutional Neural Networks (CNNs) and real-time video input. The system leverages deep learning techniques in computer vision to ensure public safety, especially in environments where mask compliance is essential.",
    imageUrl: face,
    liveUrl: "https://face-mask.hansrajvvs.me/",
    codeUrl: "https://github.com/HansrajS1/Face-Mask-Detection",
  },
  {
    title: "Cardiovascular Risk Prediction",
    description:
      "Predicts the 10-year risk of coronary heart disease (CHD) using machine learning to assist healthcare professionals in early risk assessment.",
    imageUrl: project3,
    liveUrl:
      "https://cardiovascular-risk-prediction.hansrajvvs.me/",
    codeUrl:
      "https://github.com/HansrajS1/Cardiovascular-Risk-Prediction-in-ml",
  },
  {
    title: "AI Booking Assistant",
    description:
      "AI-powered conversational booking system that handles Hotels, Doctor appointments, Restaurant tables, Spa, Salon, Events & Classes through natural language chat.",
    imageUrl: project4,
    liveUrl:
      "https://ai-booking-assistant.streamlit.app/",
    codeUrl:
      "https://github.com/HansrajS1/AI-Booking-Assistant",
  },
  {
    title: "ContextAI AI Assistant",
    description:
      "ContextAI is a production-ready, ChatGPT-style conversational AI application built using Streamlit.It combines Retrieval-Augmented Generation (RAG), live web search fallback, and configurable response modes to deliver accurate, contextual, and reliable answers.",
    imageUrl: project5,
    liveUrl:
      "https://contextai-ai-chatbot.streamlit.app/",
    codeUrl:
      "https://github.com/HansrajS1/ContextAI-AI-Chatbot",
  },
  {
    title: "Spring Boot API for Product Management",
    description:
      "A Spring Boot REST API project with CRUD operations with Pagination + Filters, layered architecture (Controller-Service-Repository), and integrated with JPA for database management.",
    imageUrl: project6,
    liveUrl:
      "https://github.com/HansrajS1/Spring-Boot-API",
    codeUrl:
      "https://github.com/HansrajS1/Spring-Boot-API",
  }
];

const ProjectCard = ({ title, description, imageUrl, liveUrl, codeUrl }) => (
  <motion.div
    className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-56 object-fit cursor-pointer"
      onClick={() => window.open(liveUrl, "_blank")}
    />
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex justify-between">
        <a
          href={liveUrl}
          target="_blank"
          className="bg-cyan-500 text-black font-semibold py-2 px-4 rounded hover:bg-cyan-400 transition duration-300"
        >
          Live Demo
        </a>
        <a
          href={codeUrl}
          target="_blank"
          className="bg-gray-700 text-white font-semibold py-2 px-4 rounded hover:bg-gray-600 transition duration-300"
        >
          View Code
        </a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${projectsBgImage})` }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          My <span className="text-cyan-400">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
