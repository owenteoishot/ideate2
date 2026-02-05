interface StatBarProps {
  label: string
  value: number
  icon: string
}

export default function StatBar({ label, value, icon }: StatBarProps) {
  // Color logic based on value thresholds
  const getBarColor = () => {
    if (value >= 80) return 'bg-green-500'
    if (value >= 50) return 'bg-green-600'
    if (value >= 30) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  const getWarningIndicator = () => {
    if (value < 30) {
      return <span className="text-red-500 mr-1">⚠</span>
    }
    return null
  }

  return (
    <div className="flex items-center gap-3">
      <div className="w-8 flex justify-center text-lg flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm text-slate-300 flex items-center">
            {getWarningIndicator()}
            {label}
          </span>
          <span className="text-xs text-slate-400 font-medium">{value}%</span>
        </div>
        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
          <div 
            className={`h-full ${getBarColor()} transition-all duration-300 rounded-full`}
            style={{ width: `${value}%` }}
          />
        </div>
      </div>
    </div>
  )
}