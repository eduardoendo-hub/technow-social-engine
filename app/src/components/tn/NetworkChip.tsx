import { Camera, Video, Users, Briefcase, PlayCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const NETWORK_CONFIG = {
  INSTAGRAM: { label: 'Instagram', icon: Camera,     color: '#E1306C' },
  TIKTOK:    { label: 'TikTok',    icon: Video,      color: '#EDF4F4' },
  FACEBOOK:  { label: 'Facebook',  icon: Users,      color: '#1877F2' },
  LINKEDIN:  { label: 'LinkedIn',  icon: Briefcase,  color: '#0A66C2' },
  YOUTUBE:   { label: 'YouTube',   icon: PlayCircle, color: '#FF0000' },
} as const

type Rede = keyof typeof NETWORK_CONFIG

interface NetworkChipProps {
  rede: Rede
  score?: number
  className?: string
}

export function NetworkChip({ rede, score, className }: NetworkChipProps) {
  const { label, icon: Icon, color } = NETWORK_CONFIG[rede]

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold tracking-[0.2em] uppercase',
        className,
      )}
      style={{
        background: `${color}15`,
        border: `1px solid ${color}35`,
        color,
      }}
    >
      <Icon size={11} strokeWidth={2} />
      {label}
      {score !== undefined && (
        <span style={{ color: 'var(--tn-pearl-dim)', fontWeight: 600 }}>{score}</span>
      )}
    </span>
  )
}
