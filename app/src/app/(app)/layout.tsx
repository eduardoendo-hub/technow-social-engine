import { Sidebar } from '@/components/tn/Sidebar'
import { BrandLine } from '@/components/tn/BrandLine'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <Sidebar />

      <div className="ml-56 flex flex-col min-h-screen">
        {/* Topbar */}
        <header
          className="sticky top-0 z-30 flex items-center justify-between px-8 py-3"
          style={{
            background: 'rgba(8,15,15,0.85)',
            backdropFilter: 'blur(14px)',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <BrandLine className="absolute top-0 left-0 right-0" />
          <div />
          {/* Avatar placeholder — substituir por componente de auth */}
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
            style={{ background: 'var(--tn-tiffany)', color: 'var(--tn-deep-teal)' }}
          >
            TN
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 px-8 py-8">
          {children}
        </main>
      </div>
    </div>
  )
}
