import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface GameModeDetail {
    id: string;
    name: string;
    description: string;
    features: string[];
    instructions: string[];
}

interface GameState {
    selectedModeId: string;
    allModes: GameModeDetail[];
}

const initialState: GameState = {
    selectedModeId: 'classic',
    allModes: [{
        id: 'classic',
        name: 'Classic Mode',
        description: 'you to answer a series of questions in a timed format. Each question has four options, and players must select the correct one.',
        features: [
            'Standard scoring based on accuracy and time.',
            'Leaderboards to encourage competition.'
        ],
        instructions : [
            'Start the game and read the question.',
            'Select one of the four options (A, B, C, or D).',
            'You have 2 minutes per question. Make your choice before time runs out.',
            'Your score is based on accuracy and speed',
            'Answer the questions correctly within the time limit.'
        ]
    }, {
        id: 'challenge',
        name: 'Challenge Mode',
        description: 'Players face a set number of questions (e.g., 10) with a limited time for each.',
        features: [
            'Players can earn bonus points for speed.',
            'Option to use lifelines (e.g., removing two wrong answers).'
        ],
        instructions: [
            'Complete a set number of questions as fast as possible.',
            'Choose the number of questions (e.g., 10).',
            'Answer each question within the given time.',
            'Use lifelines to remove two wrong answers if needed.',
            'Earn bonus points for quick responses'
        ]
    }, {
        id: 'daily',
        name: 'Daily Challenge',
        description: 'Players face a set number of questions (e.g., 10) with a limited time for each.',
        features: [
            'Players can earn bonus points for speed.',
            'Option to use lifelines (e.g., removing two wrong answers).'
        ],
        instructions: [
            'Complete a set number of questions as fast as possible.',
            'Choose the number of questions (e.g., 10).',
            'Answer each question within the given time.',
            'Use lifelines to remove two wrong answers if needed.',
            'Earn bonus points for quick responses'
        ]
    }, {
        id: 'timedBlitz',
        name: 'Timed Blitz',
        description: 'Players face a set number of questions (e.g., 10) with a limited time for each.',
        features: [
            'Players can earn bonus points for speed.',
            'Option to use lifelines (e.g., removing two wrong answers).'
        ],
        instructions: [
            'Complete a set number of questions as fast as possible.',
            'Choose the number of questions (e.g., 10).',
            'Answer each question within the given time.',
            'Use lifelines to remove two wrong answers if needed.',
            'Earn bonus points for quick responses'
        ]
    }, {
        id: 'puzzle',
        name: 'puzzle mode',
        description: 'Players face a set number of questions (e.g., 10) with a limited time for each.',
        features:[
            'Players can earn bonus points for speed.',
            'Option to use lifelines (e.g., removing two wrong answers).'
        ],
        instructions: [
            'Complete a set number of questions as fast as possible.',
            'Choose the number of questions (e.g., 10).',
            'Answer each question within the given time.',
            'Use lifelines to remove two wrong answers if needed.',
            'Earn bonus points for quick responses'
        ]
    }, {
        id: 'practice',
        name: 'Practice Mode',
        description: 'Players face a set number of questions (e.g., 10) with a limited time for each.',
        features: [
            'Players can earn bonus points for speed.',
            'Option to use lifelines (e.g., removing two wrong answers).'
        ],
        instructions: [
            'Complete a set number of questions as fast as possible.',
            'Choose the number of questions (e.g., 10).',
            'Answer each question within the given time.',
            'Use lifelines to remove two wrong answers if needed.',
            'Earn bonus points for quick responses'
        ]
    }, {
        id: 'adventure',
        name: 'Adventure Mode',
        description: 'Players face a set number of questions (e.g., 10) with a limited time for each.',
        features: [
            'Players can earn bonus points for speed.',
            'Option to use lifelines (e.g., removing two wrong answers).'
        ],
        instructions: [
            'Complete a set number of questions as fast as possible.',
            'Choose the number of questions (e.g., 10).',
            'Answer each question within the given time.',
            'Use lifelines to remove two wrong answers if needed.',
            'Earn bonus points for quick responses'
        ]
    }, {
        id: 'endless',
        name: 'Endless Mode',
        description: 'Players face a set number of questions (e.g., 10) with a limited time for each.',
        features: [
            'Players can earn bonus points for speed.',
            'Option to use lifelines (e.g., removing two wrong answers).'
        ],
        instructions: [
            'Complete a set number of questions as fast as possible.',
            'Choose the number of questions (e.g., 10).',
            'Answer each question within the given time.',
            'Use lifelines to remove two wrong answers if needed.',
            'Earn bonus points for quick responses'
        ]
    }]
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setGameMode: (state, action: PayloadAction<string>) => {
            state.selectedModeId = action.payload;
        }
    }
});

export const { setGameMode } = gameSlice.actions;
export default gameSlice.reducer;