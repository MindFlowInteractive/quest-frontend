import type { LeaderboardPlayer } from "@/types";

type Props = {
  players: LeaderboardPlayer[];
};

export const Leaderboard = ({ players }: Props) => {
  return (
    <section className="w-full max-w-2xl">
      <h2 className="text-xl text-[#CFFDED] font-medium mb-6 uppercase tracking-wide border-b-2 border-[#CFFDED] pb-2 inline-block">
        PLAYERS
      </h2>
      <div className="border-2 border-[#323336] rounded-lg p-4 space-y-2">
        {players.map((player, index) => (
          <div
            key={player.id}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#252525] transition-colors border-b border-gray-900/50 last:border-b-0"
            role="row"
            tabIndex={0}
            aria-label={`Player ${index + 1}: ${player.name}, Level ${player.level}, Score ${player.score.toLocaleString()}`}
          >
            {/* Avatar */}
            <div className="w-12 h-12 shrink-0">
              <img
                src={player.avatar}
                alt={`${player.name}'s avatar`}
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  // Fallback to default avatar if image fails to load
                  e.currentTarget.src = "/avatar.svg";
                }}
              />
            </div>

            {/* Player Info */}
            <div className="flex-1 min-w-0 flex items-center justify-between gap-4 sm:gap-6">
              {/* Name */}
              <h3 className="text-[#717171] font-medium truncate text-sm sm:text-base">
                {player.name}
              </h3>

              {/* Level and Score Container */}
              <div className="flex items-center gap-4 sm:gap-6 lg:gap-20 shrink-0">
                {/* Level */}
                <span className="text-[#717171] text-xs sm:text-sm whitespace-nowrap">
                  Level {player.level}
                </span>

                {/* Score with Icon */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-[#717171] font-medium text-xs sm:text-sm whitespace-nowrap">
                    {player.score.toLocaleString()}
                  </span>
                  <img
                    src={player.scoreIcon}
                    alt="Score icon"
                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain shrink-0"
                    onError={(e) => {
                      // Fallback to coins icon if image fails to load
                      e.currentTarget.src = "/coins.svg";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Leaderboard;