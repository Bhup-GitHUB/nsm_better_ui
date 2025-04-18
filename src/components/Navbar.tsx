import React, { useState } from "react";
import { Search, X } from "lucide-react";
// import ThemeToggle from "./ThemeToggle";
import { getExperiments } from "../data/experiments";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

type NavbarProps = {
  activeTab: "portfolio" | "about" | "blog";
  setActiveTab: (tab: "portfolio" | "about" | "blog") => void;
};

const Navbar = ({ activeTab, setActiveTab }: NavbarProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<
    Array<{ id: string; title: string }>
  >([]);
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);

    const experiments = getExperiments();
    const results = experiments.filter(
      (exp) =>
        exp.title.toLowerCase().includes(query.toLowerCase()) ||
        exp.description.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(results.map((exp) => ({ id: exp.id, title: exp.title })));
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
    setIsSearching(false);
  };

  const handleResultClick = (id: string) => {
    navigate(`/${id}`);
    clearSearch();
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
      {/* Tabs */}
      <div className="flex space-x-2">
        {["portfolio", "about", "blog"].map((tab) => (
          <motion.button
            key={tab}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-5 py-2 rounded-lg font-medium transition-all duration-200 ${
              activeTab === tab
                ? "bg-[#222] text-white"
                : "text-gray-400 hover:text-white hover:bg-[#1a1a1a]"
            }`}
            onClick={() => setActiveTab(tab as "portfolio" | "about" | "blog")}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </motion.button>
        ))}
      </div>

      {/* Search + Theme */}
      <motion.div 
        className="flex items-center gap-4 w-full md:w-auto"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="relative w-full md:max-w-sm">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>

          {searchQuery && (
            <button
              className="absolute inset-y-0 right-3 flex items-center"
              onClick={clearSearch}
            >
              <X size={18} className="text-gray-400 hover:text-white" />
            </button>
          )}

          <input
            type="search"
            placeholder="Search Projects..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full bg-[#111] border border-[#333] text-white text-sm rounded-md pl-10 pr-10 py-2 focus:border-[#555] focus:outline-none placeholder:text-gray-500"
          />

          {/* Dropdown Results */}
          {searchResults.length > 0 && (
            <div className="absolute z-10 mt-1 w-full bg-[#111] border border-[#333] rounded-md shadow-lg overflow-hidden">
              <ul className="divide-y divide-[#222]">
                {searchResults.map((result) => (
                  <li key={result.id}>
                    <button
                      className="w-full text-left px-4 py-2 text-sm text-white hover:bg-[#222] transition-all duration-150"
                      onClick={() => handleResultClick(result.id)}
                    >
                      {result.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* <ThemeToggle /> */}
      </motion.div>
    </div>
  );
};

export default Navbar;
