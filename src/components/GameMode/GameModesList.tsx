import type { GameModeDetail } from '../../data/gameModes'

interface GameModesListProps {
  allModes: GameModeDetail[]
  selectedModeId: string
  onModeSelect: (modeId: string) => void
}

const GameModesList = ({ allModes, selectedModeId, onModeSelect }: GameModesListProps) => {
  return (
    <aside className='w-full xl:max-w-[16rem] flex flex-col gap-3'>
      <div className='relative flex items-center justify-center h-9'>
        <span className='text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-[#57E8D3] border border-[#2A4A4A] px-4 py-1 rounded-sm bg-[#061315]'>
          Categories
        </span>
      </div>

      <ol className='flex flex-col gap-1.5 w-full text-white uppercase text-[11px] md:text-xs font-normal tracking-wide'>
        {allModes.map((mode: GameModeDetail) => {
          const isActive = selectedModeId === mode.id

          return (
            <li key={mode.id} className='w-full'>
              <button
                type='button'
                aria-pressed={isActive}
                onClick={() => onModeSelect(mode.id)}
                className={`w-full border rounded-sm px-3 py-2 text-left leading-tight cursor-pointer transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#43AD6C]/70 ${
                  isActive
                    ? 'border-[#1D3B3E] bg-[#0F2D2B] text-white shadow-[inset_0_0_20px_rgba(20,101,92,0.35)]'
                    : 'border-[#1D2529] bg-[#0B1014] text-[#D9E2E1] hover:border-[#2D5052] hover:bg-[#0D2022] hover:text-white'
                }`}
              >
                {mode.name}
              </button>
            </li>
          )
        })}
      </ol>
    </aside>
  )
}

export default GameModesList
