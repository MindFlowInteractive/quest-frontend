import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../store';
import { setGameMode } from '../GameMode/gameSliceStore';

const GameModeDropdown: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const modes = useSelector((state: RootState) => state.game.allModes);
  const selectedModeId = useSelector((state: RootState) => state.game.selectedModeId);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setGameMode(e.target.value));
  };

  return (
    <div className="w-full max-w-xs">
      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="game-mode-select">
        Game Mode
      </label>
      <div className="relative">
        <select
          id="game-mode-select"
          aria-label="Select game mode"
          value={selectedModeId}
          onChange={handleChange}
          className="block w-full appearance-none rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        >
          {modes.map((mode) => (
            <option key={mode.id} value={mode.id}>
              {mode.name}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <svg className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 011.414-1.414L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3A1 1 0 0110 12z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default GameModeDropdown;
