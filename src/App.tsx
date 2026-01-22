import "./App.css";
import NavBar from "./components/Navbar";
import FaqsSection from "./components/FaqsSection";
import ContributorsSection from "./components/ContributorsSection";
import SignInPage from "./pages/SignIn";
import WhyShouldYouPlaySection from "./components/why-should-you-play-section";

function App() {
  return (
    <>
      <NavBar />
      <WhyShouldYouPlaySection />
      <ContributorsSection />
      <FaqsSection />
      <SignInPage />
    </>
  );
}

export default App;
