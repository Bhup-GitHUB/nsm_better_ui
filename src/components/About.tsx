
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#111] border border-[#333] rounded-xl p-8 hover:border-[#444] transition-all duration-300"
    >
      <h2 className="text-3xl font-bold mb-6 text-white bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        About Me
      </h2>
      <div className="space-y-4">
        <p className="text-gray-300 text-lg leading-relaxed">
          I'm a passionate developer focused on building great Android apps.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          My tech stack includes Kotlin and Java for native development.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          I love working with modern tools and frameworks to create exceptional user experiences.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
