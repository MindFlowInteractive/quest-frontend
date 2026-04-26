import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4 text-white">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl text-gray-400">Page not found</p>
      <Link
        to="/"
        className="mt-4 px-6 py-2 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
