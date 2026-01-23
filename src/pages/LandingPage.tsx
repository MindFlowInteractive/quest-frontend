import { Link } from "react-router-dom";
import FaqsSection from "../components/FaqsSection"
import ContributorsSection from "../components/ContributorsSection"

const LandingPage = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <ContributorsSection/>
      <FaqsSection/>
      <section className="bg-black py-24 px-4 border-t border-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to test your logic?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Join the quest and see if you have what it takes to reach Level 15.
          </p>
          
          <Link 
            to="/gameplay"
            className="inline-block px-12 py-5 bg-linear-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500 text-white font-black text-2xl rounded-xl transition-all transform hover:scale-110 active:scale-95 shadow-[0_0_30px_rgba(234,179,8,0.2)]"
          >
            PLAY LOGIQUEST NOW
          </Link>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-600 text-sm border-t border-gray-900">
        © {new Date().getFullYear()} LogiQuest. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
