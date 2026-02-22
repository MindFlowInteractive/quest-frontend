import { Link } from "react-router-dom";
import hero from "../assets/hero-image.png";
import laptop from "../assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-[#02352e] overflow-hidden px-6 py-12 lg:px-20"
      aria-label="Hero Section"
    >
      {/* Background-image  */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none bg-cover bg-center"
        style={{ backgroundImage: `url(${laptop})` }}
        aria-hidden="true"
      ></div>

      {/* content-container */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center relative z-10">
        {/* Left Content: text and button */}
        <div className="text-white space-y-8 text-center lg:text-left lg:w-[45%] z-20">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold leading-tight tracking-tight">
              Welcome to LogiQuest!
            </h1>
            <p className="text-md md:text-xl text-gray-200 font-normal max-w-sm mx-auto lg:mx-0 leading-relaxed">
              Are you ready to challenge your logical thinking and reasoning
              skills?
              <br />
              Join the Adventure!
            </p>
          </div>
          <Link
            to="/get-started"
            className="bg-[#ca8a04]! hover:bg-[#b07803]! text-white hover:text-white/90! font-bold py-2 px-4 lg:py-3 lg:px-12 rounded-4xl
             text-lg inline-block transition-all duration-300 shadow-xl cursor-pointer"
          >
            Get Started
          </Link>

          <p className="text-sm text-gray-300 font-normal max-w-md mx-auto lg:mx-0">
            Dive into a fun and engaging world of cause-and-effect puzzles and
            logical challenges!
          </p>

        </div>

        {/* Right Content: Hero Image */}
        <div className="hidden lg:block lg:w-[40%] relative lg:-ml-10">
          <div className="relative w-[130%] h-auto transform rotate-[-10deg] scale-110 drop-shadow-[0_50px_50px_rgba(0,0,0,0.5)]">
            <img
              src={hero}
              alt="LogiQuest Gameplay on Laptop"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
