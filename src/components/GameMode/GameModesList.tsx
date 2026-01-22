import gameModeCategory from '../../assets/game-mode-categories.png'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { setGameMode } from './gameSliceStore'
import type { GameModeDetail } from './gameSliceStore'

const GameModesList = () => {
  const dispatch = useAppDispatch()
  const { allModes, selectedModeId } = useAppSelector((state) => state.game)

  return (
    <aside className='w-82 xl:w-100 2xl:w-122.5 flex flex-col gap-9 justify-center items-center m-3'>
      <figure>
        <img
          src={gameModeCategory}
          alt="Game Mode Categories"
          className='h-auto select-none pointer-events-none'
        />
      </figure>

      <ol className='flex flex-col gap-3 lg:gap-5 justify-center items-center w-full text-white uppercase text-xl md:text-2xl xl:text-3xl font-medium'>
        {allModes.map((mode: GameModeDetail) => (
          <li
            key={mode.id}
            onClick={() => dispatch(setGameMode(mode.id))}
            className={`border border-[#323336] rounded-sm p-3 md:p-4 xl:p-4 w-full text-center leading-[100%] cursor-pointer transition-colors ${
              selectedModeId === mode.id
                ? 'bg-[#01100F] text-[#43AD6C]'
                : 'hover:bg-[#01100F] hover:text-[#43AD6C]'
            }`}
          >
            {mode.name}
          </li>
        ))}
      </ol>
    </aside>
  )
}

export default GameModesList
