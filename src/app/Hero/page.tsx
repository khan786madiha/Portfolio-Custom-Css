import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from "next/image";
import Link from "next/link";
import styles from './Hero.module.css'; // Import the CSS module

const Hero = () => {
    return (
        <section className={styles.heroSection}>
            <div className={`${styles.container} mx-auto flex px-5 py-24 md:flex-row flex-col items-center`}>
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className={`${styles.title} text-5xl mb-5 font-serif font-bold ml-5`}>
                        Hello, I am Madiha Khan
                    </h1>
                    <p className={`${styles.description} mb-8 leading-relaxed ml-10`}>
                        I am a Full Stack Web Developer and UI/UX Designer with a B.Com background and a passion for integrating business and technology. As a Hafiz-e-Quran, I bring a unique perspective to my work. Currently, I am expanding my expertise in Generative AI Engineering at the Governor Sindh IT Initiative (GIAIC).
                    </p>
                    <div className="flex justify-center">
                        <button className={`${styles.githubButton}`}>
                            <Link href="https://github.com/khan786madiha?page=2&tab=following">
                                <FaGithub size={26} />
                            </Link>
                        </button>
                        <button className={`${styles.linkedinButton} ml-4`}>
                            <Link href="https://www.linkedin.com/in/madiha-khan-14027a2b7/">
                                <FaLinkedin size={26} />
                            </Link>
                        </button>
                    </div>
                </div>

                <div className={`${styles.imageContainer} lg:max-w-lg lg:w-full md:w-1/2 w-5/5 flex justify-center items-center`}>
                    <Image
                        src="/me2.jpeg"
                        alt="me"
                        width={500}
                        height={500}
                        className={styles.profileImage}
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;
