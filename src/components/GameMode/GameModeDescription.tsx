import React from 'react'
import type { GameModeDetail } from '../../data/gameModes'
import bagCoins from '/bag-coins.svg'

const SubHeaderText = ({ children }: { children: string }) => <h3 className='text-[10px] md:text-[11px] text-[#57E8D3] font-medium uppercase tracking-[0.14em]'>
   {children}
</h3>

const Container: React.FC<{ children: React.ReactNode }> = ({ children }: { children: React.ReactNode }) => (
    <div className='border border-[#1A2429] rounded-sm p-3 md:p-3.5 w-full text-left flex flex-col gap-2.5 leading-[100%] bg-[#0A1117] shadow-[inset_0_0_14px_rgba(4,17,22,0.65)]'>
        {children}
    </div>
)

const Paragraph = ({ children }: { children: string }) => (
    <p className='text-[#D8E3E5] text-[11px] md:text-xs font-light text-left leading-relaxed uppercase'>
        {children}
    </p>
)

const StatItem = ({ label, value }: { label: string; value: string | number }) => (
  <div className='flex flex-col gap-1 items-center min-w-[3.7rem]'>
    <span className='text-[#5FD9CB] text-[9px] uppercase tracking-[0.12em]'>{label}</span>
    <span className='text-white text-[11px] md:text-xs font-medium'>{value}</span>
  </div>
)

interface GameModeDescriptionProps {
  currentMode: GameModeDetail | null
}

const GameModeDescription = ({ currentMode }: GameModeDescriptionProps) => {
  if (!currentMode) {
    return null
  }

  return (
    <div className='w-full xl:flex-1 flex flex-col gap-3 transition-all duration-300 ease-out'>
      <article
        key={currentMode.id}
        className='w-full text-white font-light uppercase flex flex-col gap-2.5 opacity-100 translate-y-0 transition-all duration-300 ease-out'
      >
        <section className='border border-[#162029] rounded-sm p-3 bg-[#090F15]'>
          <div className='flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4'>
            <img src={bagCoins} alt='' className='h-12 w-12 md:h-14 md:w-14 object-contain select-none pointer-events-none' />
            <div className='grid grid-cols-3 gap-2 sm:gap-3 w-full sm:w-auto'>
              <StatItem label='Questions' value={currentMode.questionCount === 0 ? '∞' : currentMode.questionCount} />
              <StatItem label='Duration' value={currentMode.duration} />
              <StatItem label='Max Score' value={currentMode.maxScore === 0 ? '∞' : currentMode.maxScore.toLocaleString()} />
            </div>
          </div>
        </section>

        <section>
          <SubHeaderText>{currentMode.name}</SubHeaderText>
        </section>

        <section>
          <Container>
            <SubHeaderText>Description</SubHeaderText>
            <Paragraph>{currentMode.description}</Paragraph>
          </Container>
        </section>

        <section>
          <Container>
            <SubHeaderText>Features</SubHeaderText>
            <ul className='list-disc list-inside text-[#D8E3E5] text-[11px] md:text-xs font-light space-y-1 leading-relaxed'>
              {currentMode.features.map((feature: string, idx: number) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </Container>
        </section>

        <section>
          <Container>
            <SubHeaderText>Instruction</SubHeaderText>
            <ul className='list-disc list-inside text-[#D8E3E5] text-[11px] md:text-xs font-light space-y-1 leading-relaxed'>
              {currentMode.instructions.map((instruction: string, idx: number) => (
                <li key={idx}>{instruction}</li>
              ))}
            </ul>
          </Container>
        </section>
      </article>
    </div>
  )
}

export default GameModeDescription
