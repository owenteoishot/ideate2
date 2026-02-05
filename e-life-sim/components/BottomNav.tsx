import { Baby, Wallet, Calendar, Users, Sparkles } from 'lucide-react'

interface BottomNavProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

const NAV_ITEMS = [
  { id: 'infant', label: 'Infant', icon: Baby },
  { id: 'assets', label: 'Assets', icon: Wallet },
  { id: 'age', label: 'Age', icon: Calendar },
  { id: 'relationships', label: 'Relationships', icon: Users },
  { id: 'activities', label: 'Activities', icon: Sparkles },
]

export default function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav className="bg-slate-900 border-t border-slate-700">
      <div className="flex items-center justify-around px-2 py-2">
        {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            className={`flex flex-col items-center gap-1 px-3 py-1.5 rounded-lg transition-colors min-w-0 ${
              activeTab === id
                ? 'text-cyan-400'
                : 'text-slate-400 hover:text-slate-300'
            }`}
          >
            <Icon className="w-5 h-5 flex-shrink-0" />
            <span className="text-xs font-medium truncate max-w-full">
              {label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  )
}