import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense } from 'react';
import HeroSection from "./components/HeroSection";
import "./App.css";
import FaqsSection from "./components/FaqsSection";
import ContributorsSection from "./components/ContributorsSection";
import AboutUsSection from "./components/AboutUsSection";
import WhyShouldYouPlaySection from "./components/why-should-you-play-section";
import GameModeSection from "./components/GameMode/GameModeSection";
import Footer from "./components/Footer";
import { RecentActivity } from "./components/RecentActivity";
import { mockActivities } from "./models/recentActivity";
import HowToPlay from "./components/HowToPlay";
import ToastViewport from "./components/toasts/ToastViewport";
import Navbar from "./components/Navbar";
import GameplayNavbar from "./components/GameplayNavbar";
import { routeConfig } from "./config/routes";

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
  const isSignInPage = location.pathname === "/sign-in";
  const isHomePage = location.pathname === "/";

  return (
    <>
      {!isSignInPage && (isHomePage ? <GameplayNavbar /> : <Navbar />)}
      <ToastViewport />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          {routeConfig
            .filter((route) => route.isLazy && route.component)
            .map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            ))}
          <Route
            path="*"
            element={
              <div className="h-screen flex items-center justify-center text-white text-2xl">
                404 — Page Not Found
              </div>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;