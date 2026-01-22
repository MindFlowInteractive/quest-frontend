import React from 'react'
import { useAppSelector } from '../../hooks'
import type { GameModeDetail } from './gameSliceStore'

const SubHeaderText = ({ children }: { children: string }) => <h3 className='text-lg lg:text-xl text-white font-medium'>
   {children}
</h3>

const Container: React.FC<{ children: React.ReactNode }> = ({ children }: { children: React.ReactNode }) => (
    <div className='border border-[#323336] rounded-sm p-4 xl:p-5 w-full text-left flex flex-col gap-5 leading-[100%] cursor-pointer'>
        {children}
    </div>
)

const Paragraph = ({ children }: { children: string }) => (
    <p className='text-white text-md md:text-base lg:text-lg font-light text-left'>
        {children}
    </p>
)

const GameModeDescription = () => {
  const gameState = useAppSelector((state) => state.game)
  const { allModes, selectedModeId } = gameState
  const selectedMode = allModes.find((mode: GameModeDetail) => mode.id === selectedModeId)
  const currentMode = selectedMode || allModes[0]

  // Guard against missing data to avoid runtime errors
  if (!currentMode) {
    return null
  }

  return (
    <div className='flex flex-col gap-4 lg:gap-8'>
      <div className='relative text-xl font-light uppercase'>
        <div className='w-full block shadow-[inset_3px_3px_24px_#033330] bg-[#02211F] h-14 lg:h-16 xl:h-18.25 mix-blend-color rounded-[11px] [clip-path:polygon(0%_0%,100%_0%,100%_73%,0%_100%)] -skew-x-20 text-white -top-10 xl:-top-20 '></div>
        <h4 className='absolute top-1/2 left-2/7 lg:left-1/7 transform -translate-x-1/2 -translate-y-1/2 text-white text-md md:text-base lg:text-lg font-light text-left tracking-wide '>
          {currentMode.name}
        </h4>
      </div>
      <article className='w-[97%] lg:w-151.5 text-white font-light uppercase flex flex-col gap-4'>
        <section>
          <Container>
            <SubHeaderText>Description</SubHeaderText>
            <Paragraph>{currentMode.description}</Paragraph>
          </Container>
        </section>

        <section>
          <Container>
            <SubHeaderText>Features</SubHeaderText>
            <ul className='list-disc list-inside text-white text-sm lg:text-base font-light'>
              {currentMode.features.map((feature: string, idx: number) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </Container>
        </section>

        <section>
          <Container>
            <SubHeaderText>Instructions</SubHeaderText>
            <ul className='list-disc list-inside text-white text-sm lg:text-base font-light'>
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
