'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import CharacterCard from '@/components/CharacterCard'
import Timeline from '@/components/Timeline'
import StatsPanel from '@/components/StatsPanel'
import AgeButton from '@/components/AgeButton'
import BottomNav from '@/components/BottomNav'

// Mock data - replace with game state management later
const MOCK_CHARACTER = {
  name: 'Katelyn Cockwallace',
  status: 'Infant',
  age: 5,
  balance: 0,
  avatar: '👶',
}

const MOCK_EVENTS = [
  {
    age: 2,
    text: 'An unusually heavy snowfall in Canada generates a month-long spell of avalanches, killing 184 elk and 12 people.',
  },
  {
    age: 3,
    text: 'My father has been promoted to Firefighter.',
  },
  {
    age: 4,
    events: [
      'Mother nature moved her body in a dangerous cyclone through Australia. Most evacuated, however 8 deaths have been confirmed.',
      'My half sister, Serenity, started elementary school.',
    ],
  },
  {
    age: 5,
    text: 'It is widely believed in Ethiopia that the United Kingdom meddled in its last national election and that its new xenophobic leader, Abel Dacite, would not be in power if not for the United Kingdom\'s actions.',
  },
]

const MOCK_STATS = [
  { label: 'Happiness', value: 96, icon: '😊' },
  { label: 'Health', value: 100, icon: '❤️' },
  { label: 'Smarts', value: 12, icon: '😊' },
  { label: 'Looks', value: 62, icon: '⭐' },
]

export default function Home() {
  const [age, setAge] = useState(5)
  const [activeTab, setActiveTab] = useState('age')

  // Game logic hook: advance age and trigger events
  const handleAgeUp = () => {
    setAge(prev => prev + 1)
    // TODO: Generate random life events
    // TODO: Update stats based on events
    // TODO: Check for game-ending conditions
  }

  return (
    <div className="min-h-screen flex flex-col max-w-md mx-auto bg-slate-800">
      <Header />
      
      <main className="flex-1 overflow-y-auto pb-40">
        <CharacterCard character={MOCK_CHARACTER} />
        <Timeline events={MOCK_EVENTS} />
      </main>

      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto">
        <StatsPanel stats={MOCK_STATS} />
        <AgeButton onAgeUp={handleAgeUp} />
        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </div>
  )
}