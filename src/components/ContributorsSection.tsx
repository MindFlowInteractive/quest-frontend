import { useRef, useState, useEffect } from "react";

interface Contributor {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}

const ContributorsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch contributors
  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await fetch("https://api.github.com/repos/nnennaokoye/quest-frontend/contributors");
        if (!response.ok) throw new Error("Failed to fetch contributors");
        const data = await response.json();
        // Duplicate data to ensure infinite scrolling works seamlessly
        setContributors([...data, ...data]);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };
    fetchContributors();
  }, []);

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

    if (!isHovered && !isLoading && !error) {
      interval = setInterval(() => {
        if (containerRef.current) {
          containerRef.current.scrollLeft += 1.5;
          const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
          // Loop back
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
  }, [isHovered, isLoading, error]);

  return (
    <section
      id="contributors"
      ref={sectionRef}
      className="bg-[#121212] py-16 md:py-24 text-white overflow-hidden"
      aria-labelledby="contributors-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`mb-12 md:mb-16 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
          className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
        >
          {isLoading ? (
            <div className="flex overflow-x-hidden py-8 md:py-12 space-x-6 mx-auto justify-center">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex flex-col w-44 md:w-52 lg:w-60 shrink-0">
                  <div
                    className="h-56 md:h-72 lg:h-80 w-full bg-gray-800 animate-pulse rounded-md"
                    style={{ transform: i % 2 === 0 ? "skewY(-8deg)" : "skewY(8deg)" }}
                  ></div>
                  <div className="mt-6 flex flex-col gap-2">
                    <div className="h-4 w-3/4 bg-gray-800 animate-pulse rounded"></div>
                    <div className="h-3 w-1/2 bg-gray-800 animate-pulse rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12 text-red-500">
              <p>Failed to load contributors. {error}</p>
            </div>
          ) : (
            <div
              className="flex overflow-x-hidden py-8 md:py-12 touch-pan-x"
              ref={containerRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ scrollBehavior: "auto" }}
            >
              <div className="flex items-end mx-auto gap-4 md:gap-8 hover:gap-8">
                {contributors.map((person, index) => (
                  <div
                    key={`${person.id}-${index}`}
                    className={`group shrink-0 transition-all duration-500 contributor-float flex ${isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-16"
                      }`}
                    style={{
                      transitionDelay: `${(index % 10) * 150 + 400}ms`,
                      animationDelay: `${(index % 10) * 0.5}s`,
                    }}
                  >
                    <a
                      href={person.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col w-44 md:w-52 lg:w-60"
                    >
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
                          src={person.avatar_url}
                          alt={`${person.login} - Contributor`}
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
                        className={`text-left mt-6 transition-all duration-500 ${isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4"
                          }`}
                        style={{ transitionDelay: `${(index % 10) * 150 + 600}ms` }}
                      >
                        <h3 className="text-sm md:text-base font-bold text-white group-hover:text-[#ca8a04] transition-colors duration-300">
                          {person.login}
                        </h3>
                        <p className="text-xs md:text-sm mt-1 font-medium text-gray-400">
                          Contributor
                        </p>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContributorsSection;
