import { useState } from "react";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import ProjectDetail from "./ProjectDetails";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

import image1 from '../../assets/screencapture-plant-management-client-web-app-2025-06-29-14_05_16.png';
import image2 from '../../assets/screencapture-service-hub-ffbec-web-app-2025-07-31-13_20_02.png';
import image3 from '../../assets/screencapture-hr-pulse-b9fea-web-app-2025-07-31-17_49_49.png';

const projects = [
  {
    name: "HRPulse",
    year: "July 2025",
    description: "Full-stack HR management with role-based dashboards, payroll, analytics, and secure employee data management for streamlined operations.",
    features: [
      "Role-based authentication & access control",
      "Payroll requests & approvals",
      "Interactive charts and reports"
    ],
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
    image: image3,
    liveLink: "https://hr-pulse-b9fea.web.app/",
    clientLink: "https://github.com/razaulkarim2410/hr-pulse-client",
    serverLink: "https://github.com/razaulkarim2410/hr-pulse-server",
    align: "right",
  },
  {
    name: "ServiceHub",
    year: "June 2025",
    description: "Service marketplace where providers list services and users can easily browse, book, and manage them efficiently online.",
    features: [
      "Bookings with status tracking",
      "Responsive UI with Tailwind CSS",
      "Provider dashboard and booking management"
    ],
    technologies: ["React.js", "Express.js", "MongoDB", "Node.js"],
    image: image2,
    liveLink: "https://service-hub-ffbec.web.app/",
    clientLink: "https://github.com/razaulkarim2410/service-hub-client",
    serverLink: "https://github.com/razaulkarim2410/service-hub-server",
    align: "left",
  },
  {
    name: "PlantNest",
    year: "May 2025",
    description: "PlantNest is a full-stack web app for plant lovers. Track watering, monitor health, and explore a themed interface for houseplant enthusiasts.",
    features: [
      "Plant listing with detailed descriptions and images",
      "Search and filter plants by category or name",
      "Firestore / MongoDB hybrid data handling"
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    image: image1,
    liveLink: "https://plant-management-client.web.app/",
    clientLink: "https://github.com/razaulkarim2410/plant-management-client",
    serverLink: "https://github.com/razaulkarim2410/plant-management-server",
    align: "right",
  },
];

const ProjectsMain = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  if (selectedProject) {
    return (
      <ProjectDetail
        project={selectedProject}
        goBack={() => setSelectedProject(null)}
      />
    );
  }

  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4 py-16">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>

      <div className="flex flex-col  gap-20 mt-12">
        {projects.map((p, i) => (
          <SingleProject
            key={p.name + i}
            {...p}
            delay={i * 0.15}
            onViewDetail={() => setSelectedProject(p)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;
