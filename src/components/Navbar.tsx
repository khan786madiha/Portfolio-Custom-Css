// import React from 'react'
// import Link from "next/link";
// import Image from "next/image";
// import styles from "./Navbar.module.css";  

// const Navbar = () => {
//   return (
//     <div>
//         <header className={styles.header}>
//           <div className={styles.container}>
//             <a className={styles.flex}>
//               <div className={styles.avatar}>
//                 <Image
//                   src="/me1.jpg"
//                   alt="logo"
//                   width={80}
//                   height={80}
//                   className={styles.avatarImg}
//                 />
//               </div>
//               <h1 className={styles.title}>Portfolio</h1>
//             </a>
//             <nav className={styles.nav}>
//               <Link href="/">Home</Link>
//               <Link href="/About">About</Link>
//               <Link href="/Skills">Skills</Link>
//               <Link href="/Services">Services</Link>
//               <Link href="/Contact">Contact</Link>
//             </nav>
//           </div>
//         </header>
    
//     </div>
//   )
// }

// export default Navbar

import React from 'react';
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";  

const Navbar = () => {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.avatarTitleContainer}> {/* Wrapper for logo and title */}
            <div className={styles.avatar}>
              <Image
                src="/me1.jpg"
                alt="logo"
                width={80}
                height={80}
                className={styles.avatarImg}
              />
            </div>
            <h1 className={styles.title}>Portfolio</h1>
          </div>
          <nav className={styles.nav}>
            <Link href="/">Home</Link>
            <Link href="/About">About</Link>
            <Link href="/Skills">Skills</Link>
            <Link href="/Services">Services</Link>
            <Link href="/Contact">Contact</Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
