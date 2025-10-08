import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

const ProjectDetail = ({ project, goBack }) => {
  if (!project) return null;

  const {
    name,
    year,
    description,
    features = [],
    technologies = [],
    liveLink,
    clientLink,
    serverLink,
    image,
  } = project;

  return (
    <div className="min-h-screen bg-gray-900 px-6 py-12 max-w-5xl mx-auto text-white">
      {/* Back Button */}
      <button
        onClick={goBack}
        className="mb-6 px-4 py-2 bg-gray-800 hover:border-white hover:bg-darkOrange border border-orange hover:bg-gray-700 text-white rounded-lg transition"
      >
        ← Back to Projects
      </button>

      {/* Title */}
      <h1 className="text-4xl font-bold text-orange mb-2">{name}</h1>
      <p className="text-gray-400 mb-6">{year}</p>

     {/* Full-page Screenshot */}
<div className="w-full h-screen overflow-auto p-4 bg-gray-800 mb-8 rounded-lg border border-gray-700">
  <img
    src={image}
    alt={`${name} screenshot`}
    className="w-full h-auto object-contain"
  />
</div>



      {/* Description */}
      <p className="text-gray-300 mb-6">{description}</p>

      {/* Features */}
      {features.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold text-cyan-400 text-orange mb-2">Features:</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-300">
            {features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
            
            <li>Real-time updates and notifications</li>
          </ul>
        </>
      )}

      {/* Technologies */}
      {technologies.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-2 text-orange">Technologies Used:</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/20 text-gray-100"
              >
                {tech}
              </span>
            ))}
            <span className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/20 text-gray-100">JWT</span>

          </div>
        </>
      )}

      {/* GitHub Links at Bottom */}
      <div className="flex flex-wrap gap-4 mt-12 border-t border-gray-700 pt-6">
        {clientLink && (
          <a
            href={clientLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white hover:border-white hover:bg-darkOrange border border-orange rounded-lg transition"
          >
            Client GitHub
          </a>
        )}
        {serverLink && (
          <a
            href={serverLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white hover:border-white hover:bg-darkOrange border border-orange rounded-lg transition"
          >
            Server GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
