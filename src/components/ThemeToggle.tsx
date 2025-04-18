// import { Moon, Sun } from "lucide-react";
// import { useState, useEffect } from "react";

// const ThemeToggle = () => {
//   const [isDark, setIsDark] = useState(true);

//   useEffect(() => {
//     // Check for saved theme preference or use system preference
//     const savedTheme = localStorage.getItem("theme");
//     const prefersDark = window.matchMedia(
//       "(prefers-color-scheme: dark)"
//     ).matches;
//     const initialIsDark = savedTheme ? savedTheme === "dark" : prefersDark;

//     setIsDark(initialIsDark);
//     updateTheme(initialIsDark);
//   }, []);

//   const updateTheme = (darkMode) => {
//     // Apply theme to document
//     document.documentElement.classList.toggle("dark", darkMode);
//     document.documentElement.classList.toggle("light", !darkMode);
//     localStorage.setItem("theme", darkMode ? "dark" : "light");
//   };

//   const toggleTheme = () => {
//     const newTheme = !isDark;
//     setIsDark(newTheme);
//     updateTheme(newTheme);
//   };

//   return (
//     <button
//       onClick={toggleTheme}
//       className="flex items-center justify-between bg-gray-800 rounded-full p-1 h-8 w-16 relative cursor-pointer"
//       aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
//       title={`Switch to ${isDark ? "light" : "dark"} mode`}
//     >
//       <Sun
//         className={`h-4 w-4 z-10 ml-1 transition-colors duration-300 ${
//           !isDark ? "text-yellow-300" : "text-gray-500"
//         }`}
//       />
//       <Moon
//         className={`h-4 w-4 z-10 mr-1 transition-colors duration-300 ${
//           isDark ? "text-blue-300" : "text-gray-500"
//         }`}
//       />
//       <div
//         className={`h-6 w-6 rounded-full bg-white shadow-md absolute top-1 transition-all duration-300 ease-in-out ${
//           isDark ? "left-1" : "translate-x-8"
//         }`}
//       />
//     </button>
//   );
// };

// export default ThemeToggle;
