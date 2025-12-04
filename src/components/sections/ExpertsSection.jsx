import React from "react";

const techRows = [
    ["Node.js", "Java", "React", ".NET", "Python", "C#", "Rails", "Next.js", "TypeScript"],
    ["Swift", "Angular", "PHP", "Android", "iOS", "Golang", "Vue.js", "C++", "Ruby"],
    ["Kotlin", "Flutter", "AWS", "Azure", "Docker", "Kubernetes", "Terraform", "GraphQL", "Redis"]
];

const ExpertsSection = () => {
    return (
        <div className="py-12 sm:py-16 md:py-20 overflow-hidden relative">

            {/* Heading */}
            <div className="text-center mb-8 sm:mb-10 md:mb-12 relative z-10 px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                    Powering Innovation with a <span className="text-[var(--color-primary)]">Global Tech Stack</span>
                </h2>
            </div>

            {/* Scrolling Rows */}
            <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 relative z-0">
                {techRows.map((row, rowIndex) => (
                    <div
                        key={rowIndex}
                        className="relative w-full overflow-hidden"
                        style={{
                            maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                        }}
                    >
                        <div
                            className={`flex items-center gap-12 md:gap-20 whitespace-nowrap min-w-max ${rowIndex % 2 === 0 ? "animate-scroll-left" : "animate-scroll-right"
                                }`}
                        >
                            {[...row, ...row, ...row].map((tech, i) => (
                                <span
                                    key={`${tech}-${i}`}
                                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-600 hover:text-white transition-colors duration-300 cursor-default select-none"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
        .animate-scroll-left {
          animation: scrollLeft 40s linear infinite;
        }
        .animate-scroll-right {
          animation: scrollRight 40s linear infinite;
        }
        
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        
        @keyframes scrollRight {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
      `}</style>
        </div>
    );
};

export default ExpertsSection;
