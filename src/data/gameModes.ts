export interface GameModeDetail {
  id: string
  name: string
  description: string
  questionCount: number
  duration: string
  maxScore: number
  features: string[]
  instructions: string[]
}

export const gameModes: GameModeDetail[] = [
  {
    id: 'classic',
    name: 'Classic Mode',
    description:
      'Answer a series of timed questions. Each question has four options, and you must choose the correct one before time runs out.',
    questionCount: 10,
    duration: '15 min',
    maxScore: 5000,
    features: [
      'Standard scoring based on accuracy and speed.',
      'Leaderboard ranking for competitive play.',
    ],
    instructions: [
      'Start the game and read the question carefully.',
      'Select one of the four options (A, B, C, or D).',
      'You have 2 minutes per question to submit your answer.',
      'Your final score combines accuracy and response speed.',
      'Complete as many correct answers as possible before time expires.',
    ],
  },
  {
    id: 'challenge',
    name: 'Challenge Mode',
    description:
      'Play a fixed number of high-pressure questions with limited time for each attempt.',
    questionCount: 12,
    duration: '12 min',
    maxScore: 6000,
    features: [
      'Bonus points for faster correct answers.',
      'Optional lifelines such as removing two wrong options.',
    ],
    instructions: [
      'Choose the challenge length before starting.',
      'Answer each question within the given time limit.',
      'Use lifelines strategically when needed.',
      'Aim for perfect accuracy while keeping pace.',
      'Finish with the highest possible score.',
    ],
  },
  {
    id: 'daily',
    name: 'Daily Challenge',
    description:
      'Take on a fresh daily set of questions and compare your performance with other players.',
    questionCount: 10,
    duration: '10 min',
    maxScore: 5500,
    features: [
      'New challenge set every day.',
      'Daily leaderboard tracking and rewards.',
    ],
    instructions: [
      'Open the daily mode to access the current challenge set.',
      'Answer all questions in one run.',
      'Your run is scored immediately after completion.',
      'Return tomorrow for a new question set.',
      'Improve your daily rank over time.',
    ],
  },
  {
    id: 'timed-blitz',
    name: 'Timed Blitz',
    description:
      'Rapid-fire mode where you answer as many questions as possible within a strict global timer.',
    questionCount: 20,
    duration: '8 min',
    maxScore: 6500,
    features: [
      'Fast pace with short response windows.',
      'Combo-style scoring for consecutive correct answers.',
    ],
    instructions: [
      'Start the blitz and monitor the global countdown.',
      'Answer quickly to maximize total attempts.',
      'Keep a streak to earn score multipliers.',
      'Avoid slow responses that waste valuable time.',
      'Submit your run when the timer ends.',
    ],
  },
  {
    id: 'puzzle',
    name: 'Puzzle Mode',
    description:
      'Solve logic-focused puzzles that emphasize reasoning over speed.',
    questionCount: 8,
    duration: '18 min',
    maxScore: 5200,
    features: [
      'Higher-difficulty logic and pattern questions.',
      'Hints available for selected puzzle types.',
    ],
    instructions: [
      'Read each puzzle carefully before answering.',
      'Use hints only when necessary to avoid penalties.',
      'Take time to reason through each option.',
      'Submit the best answer based on your deduction.',
      'Complete the set for your puzzle score.',
    ],
  },
  {
    id: 'practice',
    name: 'Practice Mode',
    description:
      'Low-pressure mode designed for learning and experimentation without rank penalties.',
    questionCount: 15,
    duration: 'No limit',
    maxScore: 0,
    features: [
      'No leaderboard impact.',
      'Great for reviewing concepts and strategies.',
    ],
    instructions: [
      'Pick a category or difficulty level.',
      'Answer at your own pace without time pressure.',
      'Review feedback after each question.',
      'Repeat questions to improve retention.',
      'Use this mode to prepare for ranked play.',
    ],
  },
  {
    id: 'adventure',
    name: 'Adventure Mode',
    description:
      'Progress through themed stages with increasing difficulty and milestone rewards.',
    questionCount: 14,
    duration: '20 min',
    maxScore: 7000,
    features: [
      'Stage-based progression system.',
      'Unlockables and milestone bonuses.',
    ],
    instructions: [
      'Begin at stage one and complete all questions.',
      'Meet score targets to unlock the next stage.',
      'Use earned rewards to support later stages.',
      'Track your progress on the adventure path.',
      'Complete all stages for full completion.',
    ],
  },
  {
    id: 'endless',
    name: 'Endless Mode',
    description:
      'Play continuously until you miss, with difficulty scaling over time.',
    questionCount: 0,
    duration: 'Endless',
    maxScore: 0,
    features: [
      'Infinite question stream.',
      'Difficulty ramps up as your streak grows.',
    ],
    instructions: [
      'Start the run and answer each question correctly.',
      'Continue building your streak for a higher score.',
      'Expect harder questions as the run progresses.',
      'One wrong answer ends the session.',
      'Set a new personal best and try again.',
    ],
  },
]
