import { motion } from "framer-motion";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { fadeIn } from "../../framerMotion/variants";

// Add a new prop: onViewDetail
const SingleProject = ({
  name,
  year,
  description,
  features = [],
  technologies = [],
  liveLink,
  clientLink,   
  serverLink,   
  image,
  align = "left",
  delay = 0,
  onViewDetail, // new prop
}) => {
  return (
    <motion.div
      variants={fadeIn("up", delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className={`flex w-full gap-8 items-center sm:flex-col ${align === "left" ? "md:flex-row" : "md:flex-row-reverse"
        }`}
    >
      <div className="w-full md:w-1/2 p-6 rounded-2xl shadow-lg border border-gray-800">
        <h3 className="text-2xl md:text-3xl font-extrabold text-orange">{name}</h3>
        <p className="text-sm text-gray-400 mt-1">{year}</p>
        {description && (
          <p className="mt-4 text-gray-300 leading-relaxed">{description}</p>
        )}
        {technologies.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.map((tech, i) => (
              <span key={i} className="px-3 py-1 text-sm rounded-full bg-white/6 border border-white/6 text-gray-100">
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={() =>
              onViewDetail({
                name,
                year,
                description,
                features,
                technologies,
                liveLink,
                image,
                clientLink, // pass client GitHub link
                serverLink, // pass server GitHub link
              })
            }
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 border border-orange hover:border-white hover:bg-darkOrange text-white rounded-lg transition"
          >
            View Details
          </button>

          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center btn border border-orange hover:border-white hover:bg-darkOrange gap-2 px-4 py-2 bg-cyan-500/95 hover:bg-cyan-600 text-white rounded-lg transition"
            >
              Live <BsFillArrowUpRightCircleFill />
            </a>
          )}
        </div>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2 max-w-[520px] rounded-xl overflow-hidden border border-white/5 shadow-md transform transition-all duration-500 hover:scale-105">
        <img
          src={image}
          alt={`${name} screenshot`}
          className="w-full h-56 md:h-64 lg:h-72 object-cover"
        />
      </div>
    </motion.div>
  );
};

export default SingleProject;
