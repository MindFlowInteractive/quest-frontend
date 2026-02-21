import React from 'react';
import { Link } from 'react-router-dom';
import RecentActivity from '../components/RecentActivity';
import Leaderboard from '../components/Leaderboard';
import { mockLeaderboardPlayers } from '../data/mockLeaderboardData';
import { mockActivities } from '../models/recentActivity';

const Dashboard = () => {
  return (
    <div className="bg-[#0F0F0F] min-h-screen text-white">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#CFFDED] mb-2">
            Dashboard
          </h1>
          <p className="text-gray-400">
            Welcome back! Here's your gaming overview.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* User Stats or Profile */}
          <div className="lg:col-span-1">
            <div className="bg-[#141516] border border-[#323336] rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-[#CFFDED]">Your Stats</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Level</span>
                  <span className="text-white">15</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Points</span>
                  <span className="text-white">1250</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Games Played</span>
                  <span className="text-white">42</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <RecentActivity activities={mockActivities} />
          </div>
        </div>

        <div className="mt-8">
          <Leaderboard players={mockLeaderboardPlayers.slice(0, 5)} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;