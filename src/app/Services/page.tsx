"use client";

import { FaCode, FaPaintBrush, FaRocketchat } from 'react-icons/fa';
import Link from "next/link";
import styles from './Services.module.css'; // Importing the custom CSS module

export default function Services() {
  return (
    <>
      <section className={styles.servicesSection}>
        <div className={styles.overlay}></div> {/* Overlay effect */}
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <h1 className={`${styles.title} flex justify-center items-center pb-14 hover:text-pink-600 animate-bounce hover:uppercase`}>
              <span className="text-pink-600">S</span>ervices
            </h1>
            <div className="flex justify-center"></div>
          </div>
          <div className="flex flex-wrap -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            {/* Web Development Card */}
            <div className={`p-4 md:w-1/3 flex flex-col text-center items-center ${styles.serviceCard}`}>
              <div className={`${styles.iconContainer} bg-gradient-to-br from-blue-400 to-teal-700 text-white mb-5 shadow-2xl`}>
                <FaCode size={40} />
              </div>
              <div className="flex-grow">
                <h2 className="text-white text-xl title-font mb-3 font-semibold">
                  Web Development
                </h2>
                <p className="leading-relaxed text-base text-gray-300">
                  I build scalable, secure, and high-performance web applications tailored to your business needs.
                </p>
              </div>
            </div>
            {/* Web Design Card */}
            <div className={`p-4 md:w-1/3 flex flex-col text-center items-center ${styles.serviceCard}`}>
              <div className={`${styles.iconContainer} bg-gradient-to-br from-pink-500 to-yellow-600 text-white mb-5 shadow-2xl`}>
                <FaPaintBrush size={40} />
              </div>
              <div className="flex-grow">
                <h2 className="text-white text-xl title-font mb-3 font-semibold">
                  UI/UX Designer
                </h2>
                <p className="leading-relaxed text-base text-gray-300">
                  I design intuitive and visually appealing user interfaces that enhance user experience.
                </p>
              </div>
            </div>
            {/* AI chatbot Card */}
            <div className={`p-4 md:w-1/3 flex flex-col text-center items-center ${styles.serviceCard}`}>
              <div className={`${styles.iconContainer} bg-gradient-to-br from-green-600 to-yellow-600 text-white mb-5 shadow-2xl`}>
                <FaRocketchat size={40}/>
              </div>
              <div className="flex-grow">
                <h2 className="text-white text-xl title-font mb-3 font-semibold">
                  AI-Powered Chatbot Integration
                </h2>
                <p className="leading-relaxed text-base text-gray-300">
                  Deliver intelligent, AI-driven chat solutions to enhance customer interaction.
                </p>
              </div>
            </div>
          </div>
          <Link href="../contact">
            <button className={styles.contactButton}>
              CONTACT ME
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
