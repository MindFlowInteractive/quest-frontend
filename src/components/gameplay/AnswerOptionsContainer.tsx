import React, { useState, useEffect } from 'react';
import AnswerOption from './AnswerOption';

export type AnswerState = {
  letter: string;
  text: string;
  state: 'default' | 'selected' | 'correct' | 'incorrect';
};

interface AnswerOptionsContainerProps {
  answers: any[]; 
  onAnswerSelect?: (index: number) => void;
  disabled?: boolean;
}

const AnswerOptionsContainer: React.FC<AnswerOptionsContainerProps> = ({
  answers,
  onAnswerSelect,
  disabled = false,
}) => {

  const [localSelectedIndex, setLocalSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    setLocalSelectedIndex(null);
  }, [answers]);

  const handlePress = (index: number) => {
    if (disabled || localSelectedIndex !== null) return;
    
    setLocalSelectedIndex(index);
    
    setTimeout(() => {
      onAnswerSelect?.(index);
    }, 100); 
  };

  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-3 md:gap-4 min-h-0">
      {answers.map((answer, index) => {
        let visualState: 'default' | 'selected' | 'correct' | 'incorrect' = 'default';
        
        if (localSelectedIndex === index) {
          visualState = 'selected';
        }

        return (
          <div key={answer.letter} className="w-full h-full min-h-0">
            <AnswerOption
              letter={answer.letter}
              text={answer.text}
              state={visualState} 
              onClick={() => handlePress(index)}
              disabled={disabled || localSelectedIndex !== null}
            />
          </div>
        );
      })}
    </div>
  );
};

export default AnswerOptionsContainer;

