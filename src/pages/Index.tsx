import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Blog from '../components/Blog';
import { AnimatePresence, motion } from 'framer-motion';

const Index = () => {
  const [activeTab, setActiveTab] = useState<'portfolio' | 'about' | 'blog'>('portfolio');

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3 }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black text-white px-4 py-8 md:px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="lg:col-span-1"
          >
            <Sidebar />
          </motion.div>
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
            </motion.div>
            
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab}
                {...fadeInUp}
                className="mb-8"
              >
                {activeTab === 'portfolio' && <Portfolio />}
                {activeTab === 'about' && <About />}
                {activeTab === 'blog' && <Blog />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Index;
