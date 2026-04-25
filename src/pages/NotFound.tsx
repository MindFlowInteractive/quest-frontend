import { Link, useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0F0F0F] min-h-screen flex flex-col items-center justify-center text-white px-4">
      <img src="/logo.svg" alt="LogiQuest" className="w-16 h-16 mb-8 opacity-80" />

      <h1 className="text-8xl font-black text-[#F9BC07] mb-2">404</h1>
      <p className="text-[#CFFDED] text-2xl font-semibold mb-2">Page Not Found</p>
      <p className="text-gray-400 text-sm mb-10">
        The route you're looking for doesn't exist.
      </p>

      <div className="flex gap-4">
        <Link
          to="/"
          className="px-6 py-3 bg-[#F9BC07] text-black font-bold rounded-lg hover:bg-yellow-400 transition-colors"
        >
          Go Home
        </Link>
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 border border-[#323336] text-gray-300 font-bold rounded-lg hover:border-gray-500 hover:text-white transition-colors"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
