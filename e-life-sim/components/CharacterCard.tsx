import { Info } from 'lucide-react'

interface Character {
  name: string
  status: string
  age: number
  balance: number
  avatar: string
}

interface CharacterCardProps {
  character: Character
}

export default function CharacterCard({ character }: CharacterCardProps) {
  return (
    <div className="bg-slate-700 p-4 flex items-start gap-3 border-b border-slate-600">
      <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
        {character.avatar}
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h2 className="text-cyan-400 font-semibold text-base truncate">
            {character.name}
          </h2>
          <Info className="w-4 h-4 text-cyan-400 flex-shrink-0" />
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-300">
          <span className="bg-slate-600 px-2 py-0.5 rounded text-xs">
            {character.status}
          </span>
        </div>
      </div>

      <div className="text-right flex-shrink-0">
        <div className="text-cyan-400 font-bold text-lg">
          ${character.balance}
        </div>
        <div className="text-xs text-slate-400">Bank Balance</div>
      </div>
    </div>
  )
}