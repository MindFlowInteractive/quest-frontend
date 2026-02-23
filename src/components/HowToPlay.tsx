import howtoplay from "../../public/howtoplay.png";

const HowToPlay = () => {
  return (
    <section
      id="how-to-play"
      className="relative overflow-hidden px-6 py-32 lg:px-20 text-white"
      aria-label="Hero Section"
    >
      <div className="mt-[20px] mb-[80px]">
        <h1 className="text-[45px] text-center mb-[30px]">How To Play</h1>
        <h3 className="text-[38px]">Welcome to LogiQuest</h3>
        <p className="text-[28px]">Get ready to test your logic and knowledge! Here’s a quick guide to help you start your journey.</p>
      </div>

      <div>
        <img src={howtoplay} alt="How to play LogiQuest" className="w-full h-auto object-contain mt-8" />
      </div>
    </section>
  );
};

export default HowToPlay;
