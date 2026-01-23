import React from 'react';
import GameLevel from './GameLevel';
import type { GameLevelState } from './GameLevel'; 
import type { QuestionData } from '../../data/mockGameData'; 

interface GameLevelContainerProps {
  currentLevel: number;
  onLevelSelect?: (level: number) => void;
  levelsData: QuestionData[]; 
}

const GameLevelContainer: React.FC<GameLevelContainerProps> = ({
  currentLevel,
  onLevelSelect,
  levelsData,
}) => {

  const levels = levelsData.map((data) => {
    let state: GameLevelState = 'locked';
    if (data.level < currentLevel) state = 'unlocked';
    if (data.level === currentLevel) state = 'current';

    return { 
      level: data.level, 
      reward: data.reward, 
      state 
    };
  });

  return (
    <div className="w-full flex justify-center">
      <div
        className="
          w-full max-w-105
          h-[72vh] md:h-[76vh]
          overflow-y-auto overflow-x-hidden
          px-2
          scrollbar-thin
          scrollbar-thumb-gray-700
          scrollbar-track-transparent
        "
      >
        <div className="flex flex-col gap-3">
          {[...levels].reverse().map((item) => (
            <GameLevel
              key={item.level}
              level={item.level}
              reward={item.reward}
              state={item.state}
              onClick={onLevelSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameLevelContainer;
