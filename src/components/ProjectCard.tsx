import React from "react";
import { Github, ArrowRight } from "lucide-react";
import SkillTag from "./SkillTag";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type ProjectCardProps = {
  id?: string;
  title: string;
  description: string;
  image: string;
  skills: string[];
  liveDemo?: string;
  github?: string;
  isExperiment?: boolean;
};

const ProjectCard = ({
  id,
  title,
  description,
  image,
  skills,
  liveDemo,
  github,
  isExperiment = false,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="project-card group flex flex-col h-full rounded-xl overflow-hidden bg-[#111] border border-[#333] hover:border-[#555] transition-all duration-300 shadow-lg hover:shadow-xl"
    >
      {/* Image with gradient overlay */}
      <motion.div 
        className="relative aspect-[16/9] overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent opacity-50 z-10" />
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </motion.div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-3 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-gray-400 text-base mb-4 flex-grow leading-relaxed">
          {description}
        </p>

        {/* Skills */}
        {skills?.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <SkillTag key={index} skill={skill} />
            ))}
          </div>
        )}

        {/* Buttons */}
        <motion.div 
          className="mt-auto flex flex-wrap gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#222] hover:bg-[#333] text-white py-2 px-4 rounded-lg text-sm transition-all duration-300 hover:scale-105"
            >
              <Github size={16} /> GitHub
            </a>
          )}
          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#222] hover:bg-[#333] text-white py-2 px-4 rounded-lg text-sm transition-all duration-300 hover:scale-105"
            >
              View Demo
            </a>
          )}
          {isExperiment && id && (
            <Link
              to={`/${id}`}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white py-2 px-4 rounded-lg text-sm ml-auto transition-all duration-300 hover:scale-105"
            >
              View Code <ArrowRight size={16} />
            </Link>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
