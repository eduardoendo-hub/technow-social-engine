'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import {
  CalendarDays, FileText, Layers, Palette, CheckSquare,
  Clock, BarChart2, Lightbulb, TrendingUp, MessageSquare,
  Shield, BookOpen, Settings, Coins,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { BrandLine } from './BrandLine'

const NAV = [
  {
    label: 'CONTEÚDO',
    items: [
      { href: '/calendario',    icon: CalendarDays, label: 'Calendário' },
      { href: '/briefing',      icon: FileText,     label: 'Briefing' },
      { href: '/desdobramento', icon: Layers,        label: 'Desdobramento' },
      { href: '/producao',      icon: Palette,       label: 'Produção' },
      { href: '/aprovacao',     icon: CheckSquare,   label: 'Aprovação' },
      { href: '/agendamento',   icon: Clock,         label: 'Agendamento' },
    ],
  },
  {
    label: 'INTELIGÊNCIA',
    items: [
      { href: '/performance',  icon: BarChart2,    label: 'Performance' },
      { href: '/aprendizados', icon: Lightbulb,    label: 'Aprendizados' },
      { href: '/tendencias',   icon: TrendingUp,   label: 'Tendências' },
      { href: '/comunidade',   icon: MessageSquare, label: 'Comunidade' },
    ],
  },
  {
    label: 'CONTROLE',
    items: [
      { href: '/governanca',   icon: Shield,      label: 'Governança' },
      { href: '/marca',        icon: BookOpen,    label: 'Memória da Marca' },
      { href: '/admin/tokens', icon: Coins,       label: 'Tokens ADM' },
      { href: '/admin',        icon: Settings,    label: 'Configurações' },
    ],
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside
      className="fixed left-0 top-0 h-full w-56 flex flex-col z-40"
      style={{
        background: 'var(--bg-surface)',
        borderRight: '1px solid var(--border)',
      }}
    >
      {/* Logo */}
      <div className="relative flex items-center gap-2 px-5 py-4">
        <BrandLine className="absolute top-0 left-0 right-0" />
        <Image
          src="/logo-tech-now-on-dark.svg"
          alt="TechNow"
          width={124}
          height={29}
          priority
        />
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
        {NAV.map((group) => (
          <div key={group.label}>
            <p
              className="px-2 mb-2"
              style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.25em', color: 'var(--tn-muted-2)', textTransform: 'uppercase' }}
            >
              {group.label}
            </p>
            <ul className="space-y-0.5">
              {group.items.map(({ href, icon: Icon, label }) => {
                const active = pathname === href || pathname.startsWith(href + '/')
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={cn(
                        'flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-all',
                        active
                          ? 'text-[var(--tn-tiffany)] bg-[rgba(10,186,181,0.10)]'
                          : 'text-[var(--tn-pearl-dim)] hover:text-[var(--fg1)] hover:bg-[var(--tn-muted)]'
                      )}
                      style={active ? { boxShadow: '0 0 0 1px rgba(10,186,181,0.20)' } : undefined}
                    >
                      <Icon size={15} strokeWidth={active ? 2.5 : 2} />
                      {label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div
        className="px-5 py-3 text-[10px] font-semibold tracking-widest uppercase"
        style={{ color: 'var(--tn-muted-2)', borderTop: '1px solid var(--border)' }}
      >
        Social Engine v0.1
      </div>
    </aside>
  )
}
