import { Plus } from 'lucide-react'

interface AgeButtonProps {
  onAgeUp: () => void
}

export default function AgeButton({ onAgeUp }: AgeButtonProps) {
  return (
    <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-10">
      <button
        onClick={onAgeUp}
        className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-xl flex flex-col items-center justify-center text-white font-bold hover:scale-105 active:scale-95 transition-transform border-4 border-green-400/30"
        aria-label="Age up"
      >
        <Plus className="w-8 h-8" strokeWidth={3} />
        <span className="text-xs mt-0.5">Age</span>
      </button>
    </div>
  )
}