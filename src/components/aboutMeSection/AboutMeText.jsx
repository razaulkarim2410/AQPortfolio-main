import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        Hi, I’m Razaul Karim — a passionate Frontend Web Developer with a strong focus on building clean, responsive, and user-friendly web applications.
        <br />
        I enjoy turning ideas into real-world digital experiences using modern technologies like React, JavaScript, HTML5, and Tailwind CSS. I'm also familiar with Node.js, MongoDB, and Firebase, which help me connect frontend interfaces to backend services.
        <br />
        I’m constantly learning and improving my skills to keep up with the fast-moving tech world. My goal is to build meaningful projects and grow as a developer through hands-on experience and continuous learning.
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
