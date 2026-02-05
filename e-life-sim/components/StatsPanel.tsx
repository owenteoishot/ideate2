import StatBar from './StatBar'

interface Stat {
  label: string
  value: number
  icon: string
}

interface StatsPanelProps {
  stats: Stat[]
}

export default function StatsPanel({ stats }: StatsPanelProps) {
  return (
    <div className="bg-slate-800/95 backdrop-blur-sm px-4 py-3 space-y-2 border-t border-slate-700">
      {stats.map((stat, index) => (
        <StatBar key={index} {...stat} />
      ))}
    </div>
  )
}