import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import image1 from '../../assets/screencapture-plant-management-client-web-app-2025-06-29-14_05_16.png'
import image2 from '../../assets/screencapture-service-hub-ffbec-web-app-2025-06-29-14_06_15.png'

const projects = [
  {
    name: "PlantNest",
    year: "Apr2025",
    align: "right",
    image: image1,
    link: "https://plant-management-client.web.app/",
  },
  {
    name: "ServiceHub",
    year: "May2025",
    align: "left",
    image: image2,
    link: "https://service-hub-ffbec.web.app/",
  },
  // {
  //   name: "Tourzania",
  //   year: "Jan2023",
  //   align: "right",
  //   image: "../../public/images/website-img-3.jpg",
  //   link: "#",
  // },
  // {
  //   name: "Bank of Luck",
  //   year: "May2024",
  //   align: "left",
  //   image: "../../public/images/website-img-4.jpg",
  //   link: "#",
  // },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link} 
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
