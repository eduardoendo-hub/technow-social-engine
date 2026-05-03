import { cn } from '@/lib/utils'

interface ScoreBadgeProps {
  score: number
  size?: 'sm' | 'md' | 'lg'
  showLabel?: boolean
  className?: string
}

export function ScoreBadge({ score, size = 'md', showLabel = false, className }: ScoreBadgeProps) {
  const color =
    score >= 80 ? 'var(--tn-tiffany)'
    : score >= 60 ? 'var(--tn-gold)'
    : 'var(--tn-rose)'

  const sizes = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-1.5',
  }

  return (
    <span
      className={cn('inline-flex items-center gap-1.5 rounded-full font-bold', sizes[size], className)}
      style={{
        background: `${color}18`,
        border: `1px solid ${color}40`,
        color,
      }}
    >
      <span style={{ color }}>{score}</span>
      {showLabel && <span style={{ color: 'var(--tn-pearl-dim)', fontSize: '0.8em' }}>/100</span>}
    </span>
  )
}
