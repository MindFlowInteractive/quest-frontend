import React, { useState, useEffect } from 'react';
import Question from './Question';
import AnswerOptionsContainer from './AnswerOptionsContainer';
import type { AnswerState } from './AnswerOptionsContainer';

interface QuestionContainerProps {
  questionText: string;
  answers: Array<{
    letter: string;
    text: string;
    isCorrect: boolean;
  }>;
  timeLimit?: number;
  onAnswerSelect?: (selectedLetter: string) => void;
  onAnswerSubmit?: (selectedLetter: string, isCorrect: boolean, timeUsed: number) => void;
}

const QuestionContainer: React.FC<QuestionContainerProps> = ({
  questionText,
  answers,
  timeLimit = 29 * 60 + 59,
  onAnswerSelect,
  onAnswerSubmit,
}) => {
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 1. Reset state when the question changes (New Level)
  useEffect(() => {
    setSelectedAnswerIndex(null);
    setIsSubmitted(false);
    setTimeLeft(timeLimit);
  }, [questionText, timeLimit]);

  // 2. Logic: Evaluation Sequence
  useEffect(() => {
    if (selectedAnswerIndex !== null && !isSubmitted) {
      // Step A: Brief pause to show 'Selected' (Yellow)
      const evaluationDelay = setTimeout(() => {
        setIsSubmitted(true); // This triggers the 'Correct/Incorrect' colors in formattedAnswers

        // Step B: Longer pause to show the Result (Green/Red) before moving level
        const progressDelay = setTimeout(() => {
          const selectedAnswer = answers[selectedAnswerIndex];
          const timeUsed = timeLimit - timeLeft;
          
          // CRITICAL: This fires the logic in Gameplay.tsx to increment the level
          onAnswerSubmit?.(selectedAnswer.letter, selectedAnswer.isCorrect, timeUsed);
        }, 1500); // 1.5s to celebrate or mourn the result

        return () => clearTimeout(progressDelay);
      }, 800); // 0.8s of suspense while selected

      return () => clearTimeout(evaluationDelay);
    }
  }, [selectedAnswerIndex, isSubmitted, answers, onAnswerSubmit, timeLeft, timeLimit]);

  // 3. Timer logic
  useEffect(() => {
    if (timeLeft > 0 && !isSubmitted) {
      const interval = setInterval(() => {
        setTimeLeft(prev => (prev <= 1 ? 0 : prev - 1));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timeLeft, isSubmitted]);

  // Map raw data to the visual states your UI uses
  const formattedAnswers: AnswerState[] = answers.map((answer, index) => ({
    letter: answer.letter,
    text: answer.text,
    state: isSubmitted 
      ? answer.isCorrect ? 'correct' : index === selectedAnswerIndex ? 'incorrect' : 'default'
      : index === selectedAnswerIndex ? 'selected' : 'default'
  }));

  const handleAnswerSelect = (index: number) => {
    if (!isSubmitted && selectedAnswerIndex === null) {
      setSelectedAnswerIndex(index);
      onAnswerSelect?.(answers[index].letter);
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-between gap-6 max-w-4xl mx-auto">
      <div className="w-full min-h-0">
        <Question questionText={questionText} timeLeft={timeLeft} />
      </div>

      <div className="w-full flex-1 min-h-0 overflow-y-auto scrollbar-hide">
        <AnswerOptionsContainer
          answers={formattedAnswers}
          onAnswerSelect={handleAnswerSelect}
          disabled={isSubmitted || selectedAnswerIndex !== null}
        />
      </div>
    </div>
  );
};

export default QuestionContainer;

