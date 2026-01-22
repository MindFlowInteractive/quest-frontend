import React from 'react'

interface DescriptionList {
    id: string;
    description: string;
    features: string[];
    instructions: string[];
}

const descriptionLists: DescriptionList[] = [{
    id: 'classic',
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
}]

const SubHeaderText = ({ children }: { children: string }) => <h3 className='text-lg lg:text-xl text-white font-medium'>
   {children}
</h3>

const Container: React.FC<{ children: React.ReactNode }> = ({ children }: { children: React.ReactNode }) => (
    <div className='border border-[#323336] rounded-sm p-4 xl:p-5 w-full text-left flex flex-col gap-5 leading-[100%] cursor-pointer'>
        {children}
    </div>
)

const Paragraph = ({ children }: { children: string }) => (
    <p className='text-white text-base lg:text-lg font-light text-left'>
        {children}
    </p>
)

/* Vector 26 */

/* Vector 26 */



const GameModeDescription = () => {
  return (
    <div className='flex flex-col gap-4 lg:gap-8'>


        {descriptionLists.map((desc) => (
        <>
            <div className='relative text-xl font-light uppercase'>
                <div className='w-full block shadow-[inset_3px_3px_24px_#033330] bg-[#02211F] h-14 lg:h-16 xl:h-18.25 mix-blend-color rounded-[11px] [clip-path:polygon(0%_0%,100%_0%,100%_73%,0%_100%)] -skew-x-20 text-white -top-10 xl:-top-20'></div>
                <h2 className='absolute top-1/2 left-1/7 transform -translate-x-1/2 -translate-y-1/2 text-white text-base lg:text-lg font-light text-left'>
                    {desc.id.replace(/-/g, ' ').toUpperCase()}
                </h2>
            </div>
            <article key={desc.id}  className='w-[97%] lg:w-151.5 text-white font-light uppercase flex flex-col gap-4'>
                <section>
                    <Container>
                        <SubHeaderText>Description</SubHeaderText>
                        <Paragraph>{desc.description}</Paragraph>
                    </Container>
                </section>

                <section>
                    <Container>
                        <SubHeaderText>Features</SubHeaderText>
                        <ul className='list-disc list-inside text-white text-sm lg:text-base font-light'>
                            {desc.features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                            ))}
                        </ul>
                    </Container>
                </section>

                <section>
                    <Container>
                        <SubHeaderText>Instructions</SubHeaderText>
                        <ul className='list-disc list-inside text-white text-sm lg:text-base font-light'>
                            {desc.instructions.map((instruction, idx) => (
                                <li key={idx}>{instruction}</li>
                            ))}
                        </ul>
                    </Container>
                </section>
            </article>
        </>

        ))}
    </div>
  )
}

export default GameModeDescription
