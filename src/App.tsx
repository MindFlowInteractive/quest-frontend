import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
// import HeroSection from "./components/HeroSection"
// import "./App.css";
// import NavBar from "./components/Navbar";
// import FaqsSection from "./components/FaqsSection";
// import ContributorsSection from "./components/ContributorsSection";
// import SignInPage from "./pages/SignIn";
// import WhyShouldYouPlaySection from "./components/why-should-you-play-section";
// import GameModeDescription from "./components/GameMode/GameModeDescription";
// import GameModesList from "./components/GameMode/GameModesList";

  


function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      {/* <HeroSection/>
      <ContributorsSection/>
      <FaqsSection/>
      <NavBar />
      <WhyShouldYouPlaySection />
      <ContributorsSection />
      <FaqsSection />
      <SignInPage />
      <GameModeDescription/>
      <GameModesList/> */}
    </BrowserRouter>
  );
}

export default App;
