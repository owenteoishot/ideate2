import { Menu } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-orange-500 to-red-500 px-4 py-3 flex items-center shadow-lg">
      <button 
        className="p-2 hover:bg-white/10 rounded-lg transition-colors"
        aria-label="Menu"
      >
        <Menu className="w-6 h-6 text-white" />
      </button>
      <h1 className="flex-1 text-center text-white font-bold text-lg tracking-wide">
        E-LIFE SIMULATION
      </h1>
      <div className="w-10" /> {/* Spacer for centering */}
    </header>
  )
}