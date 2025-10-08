import { motion } from "framer-motion";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { fadeIn } from "../../framerMotion/variants";

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
  onViewDetail,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className={`flex w-full gap-8 items-stretch sm:flex-col ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Text Card */}
      <div className="w-full md:w-1/2 flex flex-col justify-between p-6 rounded-2xl shadow-lg border border-gray-800 bg-gray-900/30">
        <div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-orange">{name}</h3>
          <p className="text-sm text-gray-400 mt-1">{year}</p>
          {description && (
            <p className="mt-4 text-gray-300 leading-relaxed">{description}</p>
          )}
          {technologies.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm rounded-full bg-white/6 border border-white/6 text-gray-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

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
                clientLink,
                serverLink,
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

      {/* Image Card */}
      <div className="w-full md:w-1/2 flex">
        <div className="w-full rounded-2xl overflow-hidden border border-white/5 shadow-md relative">
          <img
            src={image}
            alt={`${name} screenshot`}
            className="w-full h-full object-cover object-top absolute inset-0"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SingleProject;
