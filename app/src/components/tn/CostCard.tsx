import { BrandLine } from './BrandLine'
import { cn } from '@/lib/utils'
import { TrendingDown, TrendingUp, Minus } from 'lucide-react'

interface CostCardProps {
  label: string
  value: string
  delta?: { value: string; direction: 'up' | 'down' | 'neutral' }
  sub?: string
  highlight?: boolean
  className?: string
}

export function CostCard({ label, value, delta, sub, highlight = false, className }: CostCardProps) {
  const deltaColor =
    delta?.direction === 'down' ? 'var(--tn-green)'
    : delta?.direction === 'up' ? 'var(--tn-rose)'
    : 'var(--tn-pearl-dim)'

  const DeltaIcon =
    delta?.direction === 'down' ? TrendingDown
    : delta?.direction === 'up' ? TrendingUp
    : Minus

  return (
    <div
      className={cn('tn-card brand-line relative overflow-hidden p-5', className)}
      style={highlight ? { boxShadow: 'var(--glow-tiffany), var(--shadow-card)' } : undefined}
    >
      <BrandLine className="absolute top-0 left-0 right-0" />

      <p className="tn-eyebrow mb-3">{label}</p>

      <p
        className="font-black leading-none tracking-tight"
        style={{
          fontSize: 32,
          color: highlight ? 'var(--tn-tiffany-light)' : 'var(--fg1)',
        }}
      >
        {value}
      </p>

      <div className="mt-2 flex items-center gap-2">
        {delta && (
          <span className="inline-flex items-center gap-1 text-xs font-semibold" style={{ color: deltaColor }}>
            <DeltaIcon size={12} />
            {delta.value}
          </span>
        )}
        {sub && <span className="text-xs" style={{ color: 'var(--tn-pearl-dim)' }}>{sub}</span>}
      </div>
    </div>
  )
}
