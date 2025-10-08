import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="lg:text-5xl text-orange text-4xl font-bold  mb-10">About Me</h2>
      <p className="text-lg">
        Hi, I’m Razaul Karim — an aspiring MERN Stack Developer passionate about building scalable, responsive, and secure web applications.
        <br />
        <br />
        I create clean, user-friendly interfaces with Next.js, React.js, Tailwind CSS, and JavaScript, and work confidently on the backend with Node.js, Express.js, MongoDB, Mongoose and Firebase.
        I’ve built projects featuring JWT and NextAuth OTP authentication, Stripe and SSLCommerz payment integration, and real-time data handling, giving me a strong full-stack foundation.
        <br />
        <br />
        Always eager to learn and adapt, I stay up to date with the latest technologies to craft impactful digital solutions. Let’s turn ideas into real-world web experiences!
      </p>
      <button className="border border-orange hover:border-white rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-darkOrange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-white  transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
