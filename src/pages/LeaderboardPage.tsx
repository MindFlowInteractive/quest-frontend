import Leaderboard from "../components/Leaderboard";
import { mockLeaderboardPlayers } from "../data/mockLeaderboardData";

const LeaderboardPage = () => {
  return (
    <div className="bg-[#0F0F0F] min-h-screen text-white">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#CFFDED] mb-2">
            Leaderboard
          </h1>
          <p className="text-gray-400">
            See how you rank against other players
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content Area - can be used for other content */}
          <div className="lg:col-span-2">
            {/* Placeholder for future content */}
          </div>

          {/* Leaderboard Sidebar */}
          <div className="lg:col-span-2">
            <Leaderboard players={mockLeaderboardPlayers} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;