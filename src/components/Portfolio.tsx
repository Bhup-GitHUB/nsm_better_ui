import React from "react";
import ProjectCard from "./ProjectCard";
import { getExperiments } from "../data/experiments";

const Portfolio = () => {
  const experiments = getExperiments();

  return (
    <div className="space-y-6">
      {/* Header / Intro */}
      <div className="bg-[#111] border border-[#333] rounded-xl p-6 mb-6">
        <h2 className="text-xl font-bold mb-2">
          NUMERICAL AND STATISTICAL METHODS - MATLAB Code Collection
        </h2>
        <p className="text-gray-300 mb-3">
          This curated collection features MATLAB code examples focused on{" "}
          <span className="text-white font-medium">Signals and Systems</span>,
          specifically built for students and enthusiasts from the{" "}
          <span className="text-white font-medium">ECE</span> (Electronics &
          Communication Engineering),{" "}
          <span className="text-white font-medium">ENC</span> (Electronics and
          Computer), and <span className="text-white font-medium">EVD</span>{" "}
          (Electronics in VLSI Design) branches.
        </p>
        <p className="text-gray-400">
          Use these practical snippets and projects to better understand
          concepts like signal processing, system behavior, convolution,
          sampling, Fourier analysis, and more.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiments.map((experiment) => (
          <ProjectCard
            key={experiment.id}
            id={experiment.id}
            title={experiment.title}
            description={experiment.description}
            image={experiment.image}
            skills={experiment.skills}
            isExperiment={true}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
