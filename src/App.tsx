import "./App.css";
import NavBar from "./components/Navbar";
import FaqsSection from "./components/FaqsSection";
import ContributorsSection from "./components/ContributorsSection";
import SignInPage from "./pages/SignIn";

function App() {
  return (
    <>
      <NavBar />
      <ContributorsSection />
      <FaqsSection />
      <SignInPage />
    </>
  );
}

export default App;
