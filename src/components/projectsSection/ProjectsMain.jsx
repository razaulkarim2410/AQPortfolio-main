import { useState } from "react";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import ProjectDetail from "./ProjectDetails";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png'

const projects = [
  {
    name: "NextTour",
    year: "October 2025",
    description: "Full-stack e-commerce platform offering seamless product browsing, cart management, and secure checkout using SSLCommerz for smooth user experience.",
    features: [
      "Complete e-commerce functionality with dynamic product listing and detailed views",
      "Interactive cart and order management system with real-time updates",
      "Secure OTP-based authentication using NextAuth for user access",
      "Seamless checkout and payment integration via SSLCommerz",
      "Responsive admin dashboard for managing products, orders, and users",
      "Scalable backend with MongoDB and Mongoose for efficient data handling",
      "SEO-friendly and optimized performance using Next.js App Router",
      "JWT-protected API routes ensuring robust data security",
      "Modern, responsive UI built with Tailwind CSS for a smooth user experience",
      "Deployed on Vercel with production-grade reliability and fast global delivery",
    ],
    technologies: ["Next.js", "MongoDB", "Mongoose", "NextAuth (OTP)", "SSLCommerz"],
    image: image1,
    liveLink: "https://next-tour-gamma.vercel.app/",
    
    align: "left",
  },
  {
    name: "HRPulse",
    year: "July 2025",
    description: "Full-stack HR management with role-based dashboards, payroll, analytics, and secure employee data management for streamlined operations.",
    features: [
      "Role-based dashboards for Employees, HRs, and Admins with JWT-protected routes and social login",
      "Integrated Stripe for secure salary payments with Admin-controlled payroll approval",
      "Data storage and management via Firestore and MongoDB for scalability and reliability",
      "Employee verification workflow for onboarding and access control",
      "Dynamic payroll requests, approvals, and history tracking",
      "Interactive charts and reports for performance and payroll analytics",
      "Responsive UI with Tailwind CSS for smooth experience on all devices",
      "Admin controls for employee management, role assignments, and salary updates",
      "REST API integration with Axios and React Query for real-time updates",
      "Deployed on Vercel with production-ready optimization and secure backend infrastructure",
    ],
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Stripe","Axios", "Context API"],
    image: image2,
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
      "Service listing, booking, and management with role-based provider dashboards",
      "Secure user authentication using Firebase Auth with protected client and provider routes",
      "Backend powered by Express.js and MongoDB ensuring scalability and data integrity",
      "Dynamic service search and filtering for easy user navigation",
      "Real-time booking notifications and status updates for clients and providers",
      "Responsive UI built with Tailwind CSS for seamless experience on all devices",
      "Admin dashboard for managing users, services, and bookings efficiently",
      "Integration with JWT for secure API communication",
      "Axios-powered API calls for smooth data fetching and updates",
      "Deployed on Vercel for production-ready performance and reliability",
    ],
    technologies: ["React.js", "Express.js", "MongoDB", "Node.js", "Axios", "Context API"],
    image: image4,
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
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API", "Context API"],
    image: image3,
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

