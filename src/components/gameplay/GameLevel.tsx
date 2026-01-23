import React from 'react';
import { Coins, Lock } from 'lucide-react';

export type GameLevelState = 'locked' | 'unlocked' | 'current';

interface GameLevelProps {
  level: number;
  reward: string; 
  state: GameLevelState; 
  onClick?: (level: number) => void;
}

const GameLevel: React.FC<GameLevelProps> = ({
  level,
  reward,
  state,
  onClick,
}) => {
  const isLocked = state === 'locked';
  const isCurrent = state === 'current';

  return (
    <div className="flex justify-center py-1"> 
      <button
        disabled={isLocked}
        aria-disabled={isLocked}
        onClick={() => onClick?.(level)}
        className={`
          relative flex items-center justify-between
          min-w-75 px-10 py-3
          font-semibold transition-all duration-300
          ${
            isCurrent
              ? 'bg-linear-to-r from-yellow-400 to-orange-500 text-yellow-900 shadow-[0_0_20px_rgba(255,193,7,0.6)] z-10'
              : isLocked
              ? 'bg-gray-800/50 text-gray-500 opacity-70 cursor-not-allowed'
              : 'bg-linear-to-r from-green-600 to-emerald-500 text-white hover:scale-[1.02]'
          }
        `}
        style={{
          clipPath:
            'polygon(8% 0%, 92% 0%, 100% 50%, 92% 100%, 8% 100%, 0% 50%)',
        }}
      >
        {/* Level Number & Lock Status */}
        <div className="flex items-center gap-2 text-lg">
          <span className="font-bold">{level}</span>
          {isLocked && <Lock className="w-4 h-4" />}
        </div>

        {/* Reward Value */}
        <div className="flex items-center gap-2 text-lg">
          <span>{reward}</span> 
          <Coins className="w-4 h-4 text-yellow-300" />
        </div>
      </button>
    </div>
  );
};

export default GameLevel;

