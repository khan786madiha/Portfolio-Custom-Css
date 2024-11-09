"use client";

import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from 'react';
import AOS from 'aos';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiNextdotjs } from 'react-icons/si';
import styles from './Skills.module.css'; // Importing the custom CSS module

// Define the interface for SkillCard props
interface SkillCardProps {
  title: string;
  description: string;
  colorClass: string;
  svgIcon: React.ReactNode; // React.ReactNode is used for any valid React element
  dataAos?: string;
  dataAosDelay?: string;
}

// SkillCard component definition
function SkillCard({
  title,
  description,
  colorClass,
  svgIcon,
  dataAos,
  dataAosDelay
}: SkillCardProps) {
  return (
    <div
      className={`${styles.skillCard} ${colorClass}`} // Applying custom CSS class
      data-aos={dataAos}
      data-aos-delay={dataAosDelay}
    >
      <div className={`${styles.iconContainer} ${colorClass}`}>
        {svgIcon}
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-3">{title}</h2>
        <p className={styles.skillDescription}>{description}</p> {/* Applying custom CSS class */}
      </div>
      <div className={styles.overlayGradient} /> {/* Gradient overlay */}
    </div>
  );
}

// Main Skills component
export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration
  }, []);

  return (
    <section className={styles.skillsSection}>
      <div className="container px-6 mx-auto">
        <h1 className={styles.skillsTitle}>
          <span className="text-pink-600 text-5xl hover:text-white">S</span>kills
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <SkillCard
            title="HTML"
            description="HTML is the standard markup language for creating web pages. It provides the basic structure for web documents and helps in defining the content and structure of a web page."
            colorClass="bg-orange-500 hover:bg-orange-600 transition duration-300 ease-in-out"
            svgIcon={<FaHtml5 size={80} className="bg-red-700 rounded-full animate-pulse" />}
            dataAos="fade-up"
          />
          <SkillCard
            title="CSS"
            description="CSS is used to style and layout web pages. It controls the look and feel of the web pages, including the design, colors, fonts, and spacing, making them visually appealing."
            colorClass="bg-blue-500 hover:bg-indigo-600 transition duration-300 ease-in-out"
            svgIcon={<FaCss3Alt size={80} className="bg-pink-300 rounded-full animate-spin" />}
            dataAos="fade-left"
            dataAosDelay="100"
          />
          <SkillCard
            title="Tailwind CSS"
            description="Tailwind CSS is a utility-first CSS framework that allows for rapid design and customization of web pages without writing custom CSS. It promotes consistency and efficiency in styling."
            colorClass="bg-teal-500 hover:bg-cyan-600 transition duration-300 ease-in-out"
            svgIcon={<SiTailwindcss size={80} className="bg-lime-400 rounded-full animate-bounce" />}
            dataAos="fade-right"
            dataAosDelay="200"
          />
          <SkillCard
            title="JavaScript"
            description="JavaScript is a versatile scripting language that enables interactive web features. It is used to create dynamic content, control multimedia, and handle events on web pages."
            colorClass="bg-yellow-400 hover:bg-amber-500 transition duration-300 ease-in-out"
            svgIcon={<FaJsSquare size={80} className="bg-purple-500 rounded-full animate-pulse" />}
            dataAos="zoom-in"
            dataAosDelay="300"
          />
          <SkillCard
            title="TypeScript"
            description="TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds static typing to JavaScript, which improves code quality and development experience."
            colorClass="bg-blue-700 hover:bg-blue-800 transition duration-300 ease-in-out"
            svgIcon={<SiTypescript size={80} className="bg-pink-700 rounded-full animate-spin" />}
            dataAos="flip-left"
            dataAosDelay="400"
          />
          <SkillCard
            title="React.js"
            description="React.js is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage application state efficiently."
            colorClass="bg-cyan-300 hover:bg-sky-300 transition duration-300 ease-in-out"
            svgIcon={<FaReact size={80} className="bg-purple-400 rounded-full animate-bounce" />}
            dataAos="flip-right"
            dataAosDelay="500"
          />
          <SkillCard
            title="Next.js"
            description="Next.js is a React framework that provides server-side rendering and static site generation capabilities. It helps in building optimized, fast, and scalable web applications."
            colorClass="bg-gray-600 hover:bg-slate-900 transition duration-300 ease-in-out"
            svgIcon={<SiNextdotjs size={80} className="bg-black rounded-full animate-pulse" />}
            dataAos="slide-up"
            dataAosDelay="600"
          />
          <SkillCard
            title="Node.js"
            description="Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows for server-side scripting and building scalable network applications using JavaScript."
            colorClass="bg-emerald-600 hover:bg-lime-600 transition duration-300 ease-in-out"
            svgIcon={<FaNodeJs size={80} className="bg-green-900 rounded-full animate-spin" />}
            dataAos="slide-down"
            dataAosDelay="700"
          />
        </div>
      </div>
    </section>
  );
}
