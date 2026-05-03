import { cn } from '@/lib/utils'

export function BrandLine({ className }: { className?: string }) {
  return (
    <div
      className={cn('h-[2px] w-full', className)}
      style={{ background: 'var(--grad-line)' }}
    />
  )
}
