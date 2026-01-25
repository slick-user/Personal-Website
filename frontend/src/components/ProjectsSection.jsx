import { useRef, useState } from "react";

function ProjectsSection({ projects }) {
  const railRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const scroll = (direction) => {
    if (!railRef.current) return;
    const scrollAmount = 400;
    railRef.current.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="mt-20 py-10 px-4 bg-gradient-to-b from-horizon3/20 to-sunPaleYellow/70 rounded-3xl overflow-visible">
      <h2 className="text-4xl font-extrabold text-horizon1 text-center mb-12 uppercase tracking-wider">
        Featured Projects
      </h2>

      <div className="relative flex items-center max-w-7xl mx-auto px-4">
        {/* Left Scroll Button */}
        <button
          onClick={() => scroll("prev")}
          className="absolute -left-4 z-50 px-5 py-4 bg-horizon1 text-white rounded-full shadow-xl hover:bg-wallsMaroon transition-all border-2 border-white focus:outline-none"
        >
          ←
        </button>

        {/* Rail Container */}
        <div
          ref={railRef}
          className="flex gap-10 overflow-x-auto no-scrollbar flex-1 py-20 px-10 scroll-smooth overflow-visible"
          style={{ scrollbarWidth: 'none' }}
        >
          {projects.map((project, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                className="relative flex-shrink-0 w-72 h-80 cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Main Card */}
                <div
                  className={`relative w-full h-full bg-gray-900 rounded-2xl overflow-hidden transition-all duration-500 ease-out border-2
                    ${isHovered 
                      ? "scale-125 z-40 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border-horizon1" 
                      : "scale-100 z-10 shadow-lg border-white/20"}
                  `}
                >
                  {/* Image/GIF Layer */}
                  <div className="absolute inset-0 w-full h-full">
                    <img
                      src={project.img}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-all duration-700
                        ${isHovered ? "scale-110 blur-[1px] opacity-40" : "scale-100 blur-0 opacity-100"}
                        ${isHovered && project.gif ? "opacity-0" : ""}
                      `}
                    />
                    {project.gif && (
                      <img
                        src={project.gif}
                        alt={project.title + " demo"}
                        className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500
                          ${isHovered ? "opacity-100 scale-110" : "opacity-0 scale-100"}
                        `}
                      />
                    )}
                    
                    {/* Dynamic Gradient Overlay | Darker on bottom for text readability */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent transition-opacity duration-500 
                      ${isHovered ? "opacity-80" : "opacity-60"}`} 
                    />
                  </div>

                  {/* Text Content */}
                  <div className="relative h-full w-full p-6 flex flex-col justify-end items-start z-10">
                    
                    {/* Title */}
                    <h3 
                      className={`font-black text-2xl text-white transition-all duration-500 ease-in-out transform leading-tight
                        ${isHovered ? "-translate-y-24 text-horizon4" : "translate-y-0"}
                      `}
                    >
                      {project.title}
                    </h3>

                    {/* Description*/}
                    <p 
                      className={`absolute bottom-8 left-6 right-16 text-sm text-gray-200 font-medium leading-snug transition-all duration-500
                        ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
                      `}
                    >
                      {project.description}
                    </p>

                    {/* Action Button */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`absolute bottom-6 right-4 p-3 bg-white text-horizon1 rounded-full shadow-2xl transition-all duration-500 transform
                        ${isHovered ? "scale-100 opacity-100 rotate-0" : "scale-0 opacity-0 -rotate-90 pointer-events-none"}
                        hover:bg-horizon1 hover:text-white
                      `}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={() => scroll("next")}
          className="absolute -right-4 z-50 px-5 py-4 bg-horizon1 text-white rounded-full shadow-xl hover:bg-wallsMaroon transition-all border-2 border-white focus:outline-none"
        >
          →
        </button>
      </div>
    </section>
  );
}

export default ProjectsSection;
