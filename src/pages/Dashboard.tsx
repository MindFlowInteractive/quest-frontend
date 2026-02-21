import { RecentActivity } from '../components/RecentActivity';
import Leaderboard from '../components/Leaderboard';
import { mockLeaderboardPlayers } from '../data/mockLeaderboardData';
import { mockActivities } from '../models/recentActivity';

const Dashboard = () => {
  return (
    <div className="bg-[#0F0F0F] min-h-screen text-white">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#CFFDED] mb-2">
            Dashboard
          </h1>
          <p className="text-gray-400">
            Welcome back! Here's your gaming overview.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-[#141516] border border-[#323336] rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Points</p>
                <p className="text-2xl font-bold text-[#CFFDED]">1,250</p>
              </div>
              <div className="w-12 h-12 bg-[#F9BC07] rounded-full flex items-center justify-center">
                <span className="text-black font-bold">P</span>
              </div>
            </div>
          </div>

          <div className="bg-[#141516] border border-[#323336] rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Games Played</p>
                <p className="text-2xl font-bold text-[#CFFDED]">42</p>
              </div>
              <div className="w-12 h-12 bg-[#F9BC07] rounded-full flex items-center justify-center">
                <span className="text-black font-bold">G</span>
              </div>
            </div>
          </div>

          <div className="bg-[#141516] border border-[#323336] rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Current Level</p>
                <p className="text-2xl font-bold text-[#CFFDED]">15</p>
              </div>
              <div className="w-12 h-12 bg-[#F9BC07] rounded-full flex items-center justify-center">
                <span className="text-black font-bold">L</span>
              </div>
            </div>
          </div>

          <div className="bg-[#141516] border border-[#323336] rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Achievements</p>
                <p className="text-2xl font-bold text-[#CFFDED]">8</p>
              </div>
              <div className="w-12 h-12 bg-[#F9BC07] rounded-full flex items-center justify-center">
                <span className="text-black font-bold">A</span>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Section */}
        <div className="bg-[#141516] border border-[#323336] rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-[#CFFDED]">Level Progress</h2>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Level 15</span>
              <span className="text-gray-400">750 / 1000 XP</span>
            </div>
            <div className="w-full bg-[#323336] rounded-full h-2">
              <div className="bg-[#F9BC07] h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>

        {/* Recent Activity and Leaderboard */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <RecentActivity activities={mockActivities.slice(0, 4)} />
          </div>
          <div>
            <Leaderboard players={mockLeaderboardPlayers.slice(0, 5)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;