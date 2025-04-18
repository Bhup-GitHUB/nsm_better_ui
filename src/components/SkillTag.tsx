import React from "react";

type SkillTagProps = {
  skill: string;
};

const SkillTag = ({ skill }: SkillTagProps) => {
  // Choose different tag colors based on the skill
  const getTagColor = (skill: string) => {
    const skillLower = skill.toLowerCase();

    if (skillLower.includes("android") || skillLower.includes("kotlin")) {
      return "bg-green-700 text-white";
    } else if (skillLower.includes("java") || skillLower.includes("flutter")) {
      return "bg-blue-700 text-white";
    } else if (
      skillLower.includes("firebase") ||
      skillLower.includes("mongodb")
    ) {
      return "bg-amber-700 text-white";
    } else if (skillLower.includes("react") || skillLower.includes("node")) {
      return "bg-cyan-700 text-white";
    } else if (
      skillLower.includes("express") ||
      skillLower.includes("javascript")
    ) {
      return "bg-indigo-700 text-white";
    } else if (skillLower.includes("matlab")) {
      return "bg-blue-800 text-white";
    } else if (skillLower.includes("processing")) {
      return "bg-green-800 text-white";
    } else if (
      skillLower.includes("data") ||
      skillLower.includes("visualization")
    ) {
      return "bg-purple-800 text-white";
    } else if (
      skillLower.includes("numerical") ||
      skillLower.includes("signal")
    ) {
      return "bg-red-800 text-white";
    }

    return "bg-[#333] text-white";
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-medium m-1 inline-block ${getTagColor(
        skill
      )} hover:scale-105 transition-transform`}
    >
      {skill}
    </span>
  );
};

export default SkillTag;
