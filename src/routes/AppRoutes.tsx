import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import Gameplay from '../pages/Gameplay';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      
      <Route path="/gameplay" element={<Gameplay />} />
      
      <Route path="*" element={
        <div className="h-screen bg-black flex items-center justify-center text-white text-2xl">
          404 - Page Not Found
        </div>
      } />
    </Routes>
  );
};

export default AppRoutes;