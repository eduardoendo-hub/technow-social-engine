import { CostCard } from '@/components/tn/CostCard'
import { BrandLine } from '@/components/tn/BrandLine'

// Dados zerados enquanto não há chamadas de IA registradas.
// Substituir por queries reais na Fase 5.A.
export default function TokensCockpitPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="tn-eyebrow mb-2">ADM · Tokens</p>
        <h1 className="tn-h1 mb-1">Cockpit de Tokens</h1>
        <p style={{ color: 'var(--tn-pearl-dim)' }}>
          Gasto real em BRL · Forecast de fim de mês · Consumo por agente
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-4 gap-4">
        <CostCard
          label="Gasto hoje"
          value="R$ 0,00"
          delta={{ value: '—', direction: 'neutral' }}
          sub="vs ontem"
        />
        <CostCard
          label="Gasto no mês"
          value="R$ 0,00"
          sub="Orçamento: não definido"
        />
        <CostCard
          label="Forecast fim do mês"
          value="R$ 0,00"
          highlight
          sub="Intervalo de confiança baixo"
        />
        <CostCard
          label="Tokens hoje"
          value="0"
          sub="Cache hit: —"
        />
      </div>

      {/* Aviso de instrumentação */}
      <div
        className="relative overflow-hidden rounded-xl p-6"
        style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--tn-tiffany)40',
        }}
      >
        <BrandLine className="absolute top-0 left-0 right-0" />
        <p className="tn-eyebrow mb-2">Instrumentação ativa</p>
        <p style={{ color: 'var(--tn-pearl-dim)', fontSize: 14 }}>
          O wrapper <code className="tn-mono">lib/ai/client.ts</code> está registrando todas
          as chamadas à API da Anthropic. Os dados aparecerão aqui assim que a primeira
          chamada de IA for realizada.
        </p>
      </div>

      {/* Placeholder gráfico */}
      <div
        className="relative overflow-hidden rounded-xl p-6"
        style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}
      >
        <BrandLine className="absolute top-0 left-0 right-0" />
        <p className="tn-eyebrow mb-4">Gasto diário — últimos 30 dias (BRL)</p>
        <div
          className="h-48 rounded-lg flex items-center justify-center"
          style={{ background: 'var(--tn-surface-2)', color: 'var(--tn-muted-2)' }}
        >
          <span style={{ fontSize: 13 }}>Gráfico disponível após primeiros registros</span>
        </div>
      </div>
    </div>
  )
}
