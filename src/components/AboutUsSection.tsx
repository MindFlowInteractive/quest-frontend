const AboutUsSection = () => {
  return (
    <section
      id="about"
      className="bg-[#121212] py-16 md:py-24 text-white"
      aria-labelledby="about-us-title"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2
          id="about-us-title"
          className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-8"
        >
          About US
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          LogiQuest an engaging web-based game designed to challenge your logic
          and knowledge! Whether you're a trivia master or just looking to have
          some fun, LogiQuest offers a variety of game modes to suit every
          player.
        </p>
      </div>
    </section>
  );
};

export default AboutUsSection;
