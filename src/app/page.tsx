

import Image from "next/image";
import About from "./About/page";
  import Skills from "./Skills/page";
import Contact from "./Contact/page";
import Services from "./Services/page";
import Hero from "./Hero/page";

export default function Home() {
  return (
    <div>
      <Hero/>
      <About />
      <Skills/>
      <Services/>
      <Contact/>
    </div>

  );
}
