import React, { useState, useMemo } from 'react';
import GameHeader from '../components/gameplay/GameHeader';
import GameLevelContainer from '../components/gameplay/GameLevelContainer';
import QuestionContainer from '../components/gameplay/QuestionContainer';
import { MOCK_GAME_DATA } from '../data/mockGameData';

const Gameplay: React.FC = () => {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [isGameOver, setIsGameOver] = useState(false);

  const currentQuestionData = useMemo(() => {
    return MOCK_GAME_DATA.find(q => q.level === currentLevel) || MOCK_GAME_DATA[0];
  }, [currentLevel]);

  const handleLevelSelection = (level: number) => {
    console.log(`Level selected: ${level}`);
  };

  const handleAnswerSubmit = (_letter: string, isCorrect: boolean, timeUsed: number) => {
    if (isCorrect) {
      if (currentLevel < 15) {
        setCurrentLevel(prev => prev + 1);
      } else {
        alert("CONGRATULATIONS! You are a LogiQuest Millionaire!");
      }
    } else {
      setIsGameOver(true);
      console.log(`Game Over at Level ${currentLevel}. Time used: ${timeUsed}s`);
    }
  };

  return (
    <div className="h-screen w-full bg-[#0f0f0f] flex flex-col overflow-hidden font-sans">
      <GameHeader />

      <div className="flex flex-1 flex-row px-12 py-10 gap-16 items-start justify-center overflow-hidden">
        
        <div className="w-87.5 shrink-0 h-full">
          <GameLevelContainer 
            currentLevel={currentLevel} 
            levelsData={MOCK_GAME_DATA} 
            onLevelSelect={handleLevelSelection} 
          />
        </div>

        <div className="flex-1 h-full flex flex-col overflow-hidden">
          
          <div className="w-full h-1/2 flex flex-col"> 
          
            <QuestionContainer 
              key={currentLevel} 
              questionText={currentQuestionData.text}
              answers={currentQuestionData.answers}
              onAnswerSubmit={handleAnswerSubmit}
              timeLimit={29 * 60 + 59} 
            />
          </div>

          <div className="flex-1 w-full" /> 
        </div>
      </div>

      {isGameOver && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="text-center p-10 border-2 border-red-500 bg-gray-900 rounded-2xl">
            <h2 className="text-4xl font-bold text-white mb-4">GAME OVER</h2>
            <button 
              onClick={() => { setCurrentLevel(1); setIsGameOver(false); }}
              className="px-6 py-2 bg-red-600 text-white rounded-lg font-bold hover:bg-red-500 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gameplay;
