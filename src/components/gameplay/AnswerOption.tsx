import React from 'react';

export type AnswerOptionState = 'default' | 'selected' | 'correct' | 'incorrect';

interface AnswerOptionProps {
  letter: string;
  text: string;
  state: AnswerOptionState;
  onClick?: () => void;
  disabled?: boolean;
}

const AnswerOption: React.FC<AnswerOptionProps> = ({
  letter,
  text,
  state,
  onClick,
  disabled = false,
}) => {
  const isSelected = state === 'selected';
  const isCorrect = state === 'correct';
  const isIncorrect = state === 'incorrect';
  
  const isInteractive = !disabled && state === 'default';

  return (
    <div className="w-full h-full flex items-center justify-center min-h-0">
      <button
        onClick={() => isInteractive && onClick?.()}
        type="button"
        className={`
          relative flex items-center
          w-full h-full px-6 py-2
          font-medium transition-all duration-300
          
          /* 1. Dynamic Backgrounds & Borders */
          ${
            isCorrect 
              ? 'bg-[#064e3b] text-white border-2 border-[#10b981]' 
              : isIncorrect
                ? 'bg-[#7f1d1d] text-white border-2 border-[#f87171]' 
                : isSelected
                  ? 'bg-[#065f46] text-white border-2 border-[#fbbf24] shadow-[0_0_15px_rgba(251,191,36,0.4)]' 
                  : 'bg-[#064e3b] text-white border-2 border-[#047857]' 
          }

          /* 2. Pointer Logic - This is the fix for your cursor issue */
          ${isInteractive 
            ? 'cursor-pointer hover:border-[#059669] hover:scale-[1.02] hover:brightness-110 active:scale-95' 
            : 'cursor-default pointer-events-none opacity-90'
          }
        `}
        style={{
          clipPath: 'polygon(3% 0%, 97% 0%, 100% 50%, 97% 100%, 3% 100%, 0% 50%)',
        }}
      >
        <span className={`
          font-bold text-lg min-w-6 transition-colors duration-300
          ${isSelected ? 'text-[#fbbf24]' : 'text-[#d1fae5]'}
        `}>
          {letter})
        </span>

        <div className="flex-1 text-left ml-4 text-sm md:text-base text-gray-100 flex items-center min-h-0 overflow-hidden">
          <span className="w-full line-clamp-2 leading-tight select-none">
            {text}
          </span>
        </div>

        {(isCorrect || isIncorrect || isSelected) && (
          <div className="ml-2 w-7 h-7 rounded-full flex items-center justify-center shrink-0 self-center transition-all duration-300 transform scale-110">
            {isCorrect && (
              <span className="bg-[#10b981] w-full h-full rounded-full flex items-center justify-center text-white text-sm font-bold">
                ✓
              </span>
            )}
            {isIncorrect && (
              <span className="bg-[#ef4444] w-full h-full rounded-full flex items-center justify-center text-white text-sm font-bold">
                ✗
              </span>
            )}
            {isSelected && !isCorrect && !isIncorrect && (
               <div className="w-full h-full rounded-full border-2 border-[#fbbf24] flex items-center justify-center animate-pulse">
                  <div className="w-3 h-3 rounded-full bg-[#fbbf24]"></div>
               </div>
            )}
          </div>
        )}
      </button>
    </div>
  );
};

export default AnswerOption;
