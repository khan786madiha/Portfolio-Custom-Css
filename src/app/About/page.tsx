"use client";

import Image from "next/image";
import Link from "next/link";
import Typewriter from 'typewriter-effect';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import styles from './About.module.css';
import style from "./About.module.css";
const About = () => {
  return (
    <>
      <section className={styles.heroSection}>
        <div className={`${styles.container} mx-auto flex px-5 py-24 items-center justify-center flex-col`}>
          {/* Profile Image */}
          <div className={`${styles.profileContainer}`}>
            <Image
              src="/me1.jpg"
              alt="me1"
              height={400}
              width={400}
              className={styles.profileImage}
            />
          </div>

          {/* Text Content */}
          <div className="text-center lg:w-2/3 w-full mt-10">
            <h1 className={`${styles.title}`}>
              <span className={styles.highlight}>A</span>bout Me
            </h1>
            <h2 className={`${styles.subtitle}`}>
              <Typewriter
                options={{
                  strings: ['Building the Future with Generative AI and Web Development!'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
            <p className={`${styles.description}`}>
              I am an experienced frontend developer, currently diving deeper into full stack development with Next.js. My tech journey accelerated through the Governor Sindh IT Initiative (GIAIC) where I mastered TypeScript and began exploring Generative AI technologies.
            </p>
            <div className="flex justify-center space-x-4 mt-6">
              <button className={styles.socialButton}>
                <Link href="https://www.facebook.com/profile.php?id=61554005503269">
                  <FaFacebookF size={26} />
                </Link>
              </button>
              <button className={styles.socialButton}>
                <Link href="https://www.instagram.com/iqk.nowledge/">
                  <FaInstagram size={26} />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
