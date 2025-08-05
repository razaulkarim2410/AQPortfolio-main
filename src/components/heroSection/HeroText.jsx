import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FileDown } from "lucide-react";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl  uppercase text-lightGrey "
      >
        MERN Stack Developer
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
      >
        RAZAUL
<br className="sm:hidden md:block" />
        KARIM
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4"
      >
        A Passionate MERN Stack Developer  <br /> with 8 Months of
        Experience.
      </motion.p>

       {/* Resume Button with Icon */}
      <motion.a
        href="/Razaul_Karim_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        whileInView="show"
        className="inline-flex items-center justify-center gap-2 mt-6 px-6 py-3 bg-cyan hover:bg-darkCyan text-white rounded-lg text-lg font-semibold transition duration-300"
      >
        <FileDown className="w-5 h-5" />
        View & Download Resume
      </motion.a>
    </div>
  );
};

export default HeroText;
