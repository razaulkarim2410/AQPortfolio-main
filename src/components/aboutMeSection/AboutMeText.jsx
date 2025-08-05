import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
       Hi, I’m Razaul Karim — a passionate **MERN Stack Developer** with hands-on experience in building scalable, responsive, and secure web applications.
        <br />
        I specialize in developing clean, user-friendly interfaces using **React.js**, **Tailwind CSS**, and **JavaScript**, while confidently working with **Node.js**, **Express.js**, **MongoDB**, and **Firebase** on the backend. I’ve also implemented features like **JWT authentication**, **Stripe payment integration**, and real-time data handling, giving me a solid full-stack foundation.
        <br />
        I'm constantly learning and staying up to date with the latest technologies to build impactful digital solutions. Let’s turn ideas into real-world web experiences!
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
