import contributor2 from "../assets/contributor2.jpg";
import contributor3 from "../assets/contributor3.jpg";
import contributor4 from "../assets/contributor4.jpg";
import contributor5 from "../assets/contributor5.jpg";


const contributors = [
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
  // Add more contributors if needed
];

const ContributorsSection = () => {
  return (
    <section
      className=" bg-[#121212] py-16 text-white "
      aria-labelledby="contributors-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-22 text-center">
          <h2
            id="contributors-title"
            className="text-xllg:text-2xl font-bold tracking-tight  sm:text-2xl"
          >
            Our Contributors
          </h2>
        </div>

        {/* Horizontal Scrollable Container */}
        <div className="flex gap-2 overflow-x-auto snap-x snap-mandatory mt-12 px-2 pb-4 scroll-px-6 scrollbar-hide  scroll-smooth touch-pan-x">
          {contributors.map((person, index) => (
            <div
              key={person.id}
              className="group block min-w-75 mx-auto shrink-0 snap-start"
            >
              <div className="flex flex-col gap-3 pt-8 mx-auto pr-1">
                <div
                  className="h-90 w-full overflow-hidden bg-gray-900"
                  style={{
                    transform: index % 2 === 0 ? "skewY(-8deg)" : "skewY(8deg)",
                    transformOrigin: index % 2 === 0 ? "top left" : "top right",
                  }}
                >
                  <img
                    src={person.avatarUrl}
                    alt={`${person.name} - ${person.role}`}
                    className="h-full w-full object-cover object-center select-none pointer-events-none"
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
                <div className="text-left">
                  <h3 className="text-lg font-bold text-white">
                    {person.name}
                  </h3>
                  <p className="text-sm mt-2 font-medium text-gray-400">
                    {person.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContributorsSection;
