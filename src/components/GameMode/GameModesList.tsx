import React from 'react'
import gameModeCategory from '../../assets/game-mode-categories.png'

interface GameMode {
    id: string;
    name: string;
}
const gameModes: GameMode[] = [{
    id: 'classic',
    name: 'Classic Mode'
}, {
    id: 'challenge',
    name: 'Challenge Mode'
}, {
    id: 'daily',
    name: 'Daily Challenge'
}, {
    id: 'timed-blitz',
    name: 'Timed Blitz'
}, {
    id: 'puzzle',
    name: 'puzzle mode'
}, {
    id: 'practice',
    name: 'Practice Mode'
}, {
    id: 'adventure',
    name: 'Adventure Mode'
}, {
    id: 'endless',
    name: 'Endless Mode'
}]
const GameModesList = () => {

    const lists = gameModes.map((mode) => (
        <li key={mode.id} className='border border-[#323336] rounded-sm p-2 xl:p-4 active:bg-[#01100F] focus-within:bg-[#01100F] active:text-[#43AD6C] focus:text-[#43AD6C] hover:bg-[#01100F] hover:text-[#43AD6C] w-full text-center leading-[100%] cursor-pointer'>
            {mode.name}
        </li>
    ))
    
  return (
    <aside className='w-82 xl:w-100 2xl:w-122.5 flex flex-col gap-9 justify-center items-center m-3'>
        <figure>
            <img src={gameModeCategory} alt="Game Mode Categories" className='h-auto select-none pointer-events-none '/>
        </figure>

        <ol className='flex flex-col gap-5 lg:gap-7 justify-center items-center w-full text-white uppercase text-xl md:text-2xl xl:text-3xl font-medium '>
            {lists}
        </ol>
    </aside>
  )
}

export default GameModesList
