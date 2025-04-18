import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import CodeBlock from '../components/CodeBlock';
import { motion } from 'framer-motion';
import { getExperimentById } from '../data/experiments';

const Experiment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const experiment = getExperimentById(id);

  if (!experiment) {
    return (
      <div className="min-h-screen bg-black text-white px-4 py-8 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center h-96">
            <h1 className="text-3xl font-bold mb-4">Experiment Not Found</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black text-white px-4 py-8 md:px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="lg:col-span-1"
          >
            <Sidebar />
          </motion.div>
          
          <div className="lg:col-span-3">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="bg-[#111] border border-[#333] rounded-xl p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.button
                  onClick={() => navigate('/')}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#222] rounded-lg hover:bg-[#333] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                  Back
                </motion.button>
                <h1 className="text-2xl font-bold">{experiment.title}</h1>
              </div>
              
              <p className="text-gray-300 mb-4">{experiment.description}</p>
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="mb-6"
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Matlab Code</h2>
                </div>
                <CodeBlock code={experiment.code} language="matlab" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experiment;
