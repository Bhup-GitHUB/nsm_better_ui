
import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import SkillTag from "./SkillTag";
import { motion } from "framer-motion";
import { Globe, Github, Instagram } from "lucide-react";

const ProfileDrawer = () => {
  const skills = ["Android", "Kotlin", "Java", "Flutter", "Firebase", "MongoDB", "Express", "React", "Node.js"];

  return (
    <Drawer>
      <DrawerTrigger className="w-full">
        <motion.div 
          className="flex flex-col items-center cursor-pointer hover:opacity-90 transition-opacity"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div 
            className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-[#333]"
            whileHover={{ borderColor: "#555" }}
          >
            <img
              src="https://avatars.githubusercontent.com/u/145711585?v=4"
              alt="Bhupesh Kumar"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-2xl font-bold mb-1">Bhupesh Kumar</h1>
            <p className="text-gray-400 mb-3">Android Developer</p>
            
            <div className="space-y-3 text-gray-300 mb-4">
              <p className="text-sm">bkumar_b232@thapar.edu</p>
              <p className="text-sm">Patiala, India</p>
              <p className="text-sm">Flock Saftey</p>
            </div>

            <div className="flex justify-center gap-6 mb-4">
              <motion.a
                href="https://bhupeshkumar.tech"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe size={20} />
              </motion.a>
              <motion.a
                href="https://github.com/Bhup-GitHUB"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/diaryofbhupesh/"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram size={20} />
              </motion.a>
            </div>
          </motion.div>
          <motion.div 
            className="flex flex-wrap gap-2 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {skills.map((skill, index) => (
              <SkillTag key={index} skill={skill} />
            ))}
          </motion.div>
        </motion.div>
      </DrawerTrigger>
      <DrawerContent className="p-6 bg-[#111] border-t border-[#333]">
        <div className="max-w-md mx-auto">
          <h2 className="text-lg font-bold mb-4">More About Me</h2>
          <p className="text-gray-300">
            Passionate Android Developer with experience in building mobile applications
            using Kotlin and Java. Currently working at Flock Safety, focusing on
            creating innovative solutions for community safety.
          </p>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ProfileDrawer;
