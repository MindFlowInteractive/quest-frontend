import { useRef, useState, useEffect } from "react";
import contributor2 from "../assets/contributor2.jpg";
import contributor3 from "../assets/contributor3.jpg";
import contributor4 from "../assets/contributor4.jpg";
import contributor5 from "../assets/contributor5.jpg";

interface Contributor {
  id: number;
  name: string;
  role: string;
  avatarUrl: string;
}

const contributors: Contributor[] = [
  {
    id: 1,
    name: "Abdulrazik Abdulsamad",
    role: "Full Stack Web Developer",
    avatarUrl: contributor5,
  },
  {
    id: 2,
    name: "Hamid Khalid",
    role: "Full Stack Web Developer",
    avatarUrl: contributor4,
  },
  {
    id: 3,
    name: "Jamilu Abbas",
    role: "Full Stack Web Developer",
    avatarUrl: contributor3,
  },
  {
    id: 4,
    name: "Aisha Ahmed",
    role: "Full Stack Web Developer",
    avatarUrl: contributor2,
  },
];

const ContributorsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection observer for entrance animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-scroll on hover
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    if (isHovered) {
      interval = setInterval(() => {
        if (containerRef.current) {
          containerRef.current.scrollLeft += 1.5;
          const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
          if (scrollLeft + clientWidth >= scrollWidth - 1) {
            containerRef.current.scrollLeft = 0;
          }
        }
      }, 20);
    } else {
      if (interval) clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovered]);

  return (
    <section
      ref={sectionRef}
      className="bg-[#121212] py-16 md:py-24 text-white overflow-hidden"
      aria-labelledby="contributors-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`mb-12 md:mb-16 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2
            id="contributors-title"
            className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight"
          >
            Contributors
          </h2>
        </div>

        {/* Accordion Cards Container */}
        <div
          className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Horizontal Scrollable Container */}
          <div
            className="flex overflow-x-auto py-8 md:py-12 scrollbar-hide touch-pan-x"
            ref={containerRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ scrollBehavior: "auto" }}
          >
            <div className="flex items-end mx-auto">
              {contributors.map((person, index) => (
                <div
                  key={person.id}
                  className={`group shrink-0 transition-all duration-500 contributor-float ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-16"
                  }`}
                  style={{
                    transitionDelay: `${index * 150 + 400}ms`,
                    animationDelay: `${index * 0.5}s`,
                  }}
                >
                  <div className="flex flex-col w-44 md:w-52 lg:w-60">
                    {/* Skewed image container - parallelogram shape */}
                    <div
                      className="relative h-56 md:h-72 lg:h-80 w-full overflow-hidden shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:z-10 contributor-card-hover"
                      style={{
                        transform:
                          index % 2 === 0 ? "skewY(-8deg)" : "skewY(8deg)",
                        transformOrigin:
                          index % 2 === 0 ? "top left" : "top right",
                      }}
                    >
                      {/* Counter-skew the image to keep it straight */}
                      <img
                        src={person.avatarUrl}
                        alt={`${person.name} - ${person.role}`}
                        className="h-full w-full object-cover object-center select-none pointer-events-none transition-transform duration-500 group-hover:scale-110"
                        draggable={false}
                        style={{
                          transform:
                            index % 2 === 0
                              ? "skewY(8deg) scale(1.15)"
                              : "skewY(-8deg) scale(1.15)",
                          transformOrigin: "center center",
                        }}
                      />
                    </div>

                    {/* Contributor info - left aligned */}
                    <div
                      className={`text-left mt-6 transition-all duration-500 ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                      style={{ transitionDelay: `${index * 150 + 600}ms` }}
                    >
                      <h3 className="text-sm md:text-base font-bold text-white group-hover:text-[#ca8a04] transition-colors duration-300">
                        {person.name}
                      </h3>
                      <p className="text-xs md:text-sm mt-1 font-medium text-gray-400">
                        {person.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContributorsSection;
