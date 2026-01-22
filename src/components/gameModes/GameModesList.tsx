import React from 'react'
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
    
  return (
    <div>
      
    </div>
  )
}

export default GameModesList
