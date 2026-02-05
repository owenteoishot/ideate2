interface TimelineEvent {
  age: number
  text?: string
  events?: string[]
}

interface TimelineProps {
  events: TimelineEvent[]
}

export default function Timeline({ events }: TimelineProps) {
  return (
    <div className="px-4 py-3 space-y-3">
      {events.map((event, index) => (
        <div key={index} className="bg-slate-700/50 rounded-lg p-3 border border-slate-600/30">
          <div className="text-yellow-400 font-semibold text-sm mb-1.5">
            Age: {event.age} years
          </div>
          {event.text && (
            <p className="text-slate-200 text-sm leading-relaxed">
              {event.text}
            </p>
          )}
          {event.events && event.events.map((text, i) => (
            <p key={i} className="text-slate-200 text-sm leading-relaxed mb-2 last:mb-0">
              {text}
            </p>
          ))}
        </div>
      ))}
    </div>
  )
}