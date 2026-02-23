import { Routes, Route, useLocation } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import "./App.css";
import GameplayNavbar from "./components/GameplayNavbar";
import FaqsSection from "./components/FaqsSection";
import ContributorsSection from "./components/ContributorsSection";
import AboutUsSection from "./components/AboutUsSection";
import SignIn from "./pages/auth/SignIn";
import AccountSettings from "./components/AccountSettings";
import WhyShouldYouPlaySection from "./components/why-should-you-play-section";
import GameModeSection from "./components/GameMode/GameModeSection";
import Footer from "./components/Footer";
import { RecentActivity } from "./components/RecentActivity";
import { mockActivities } from "./models/recentActivity";
import LeaderboardPage from "./pages/LeaderboardPage";
import HowToPlay from './components/HowToPlay';
import { GetStarted } from './pages/GetStarted';


const Home = () => (
  <>
    <HeroSection />
    <HowToPlay />
    <WhyShouldYouPlaySection />
    <AboutUsSection />
    <ContributorsSection />
    <FaqsSection />
    <GameModeSection />
    <RecentActivity activities={mockActivities} />
    <Footer />
  </>
);

function App() {
  const location = useLocation();
  const showNavBar = location.pathname !== '/sign-in';

  return (
    <>
      {showNavBar && <GameplayNavbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/settings" element={<AccountSettings />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
         <Route path="/get-started" element={<GetStarted />} />
      </Routes>
    </>
  );
}

export default App;
