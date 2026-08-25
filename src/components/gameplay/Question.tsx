import React from 'react';
import timerIcon from '../../assets/images/pngs/clock.png'; 

interface QuestionProps {
  questionText: string;
  timeLeft?: number;
}

const Question: React.FC<QuestionProps> = ({
  questionText,
  timeLeft = 29 * 60 + 59,
}) => {
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')} : ${secs.toString().padStart(2, '0')}`;
  };

  const isTimeWarning = timeLeft <= 30;

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-6 rounded-xl bg-linear-to-b from-green-900 to-emerald-900 border-2 border-green-800 shadow-lg overflow-hidden">
      
      <div className="flex items-center justify-start gap-2 mb-2">
        <img src={timerIcon} alt="Timer" className="w-6 h-6 object-contain" />
        <span 
          role="timer" 
          aria-live="polite" 
          aria-atomic="true"
          className={`text-xl font-bold font-mono ${isTimeWarning ? 'text-red-400 animate-pulse' : 'text-yellow-400'}`}
        >
          {formatTime(timeLeft)}
        </span>
      </div>

      <div className="flex-1 flex items-center justify-center overflow-y-auto px-2">
        <h3 className="text-xl md:text-2xl font-bold text-white text-center leading-tight py-2">
          {questionText}
        </h3>
      </div>

      <div className="w-full border-t border-green-800/50 pt-2"></div>
    </div>
  );
};

export default Question;
