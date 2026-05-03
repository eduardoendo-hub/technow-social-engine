import Anthropic from '@anthropic-ai/sdk'
import { calcCostUsd } from './pricing'
import { getUsdBrl } from '../billing/fx'
import { db } from '@/lib/db'

export const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

export type AgenteName =
  | 'briefing'
  | 'desdobramento'
  | 'producao'
  | 'orquestracao'
  | 'governanca'
  | 'agendamento'
  | 'monitoramento'
  | 'preditivo'
  | 'tendencias'
  | 'comunidade'

interface CallOptions {
  agente: AgenteName
  clienteId?: string
  model?: string
  messages: Anthropic.MessageParam[]
  system?: Anthropic.TextBlockParam[]
  maxTokens?: number
}

// Wrapper único para toda chamada à API Anthropic.
// Captura usage, calcula custo em USD e BRL, persiste em TokenUsage.
export async function callAI(opts: CallOptions): Promise<Anthropic.Message> {
  const model = opts.model ?? 'claude-sonnet-4-6'
  const start = Date.now()

  const response = await anthropic.messages.create({
    model,
    max_tokens: opts.maxTokens ?? 4096,
    system: opts.system,
    messages: opts.messages,
  })

  const latenciaMs = Date.now() - start
  const u = response.usage as Anthropic.Usage & {
    cache_creation_input_tokens?: number
    cache_read_input_tokens?: number
  }

  const inputTokens       = u.input_tokens ?? 0
  const cacheReadTokens   = u.cache_read_input_tokens ?? 0
  const cacheWriteTokens  = u.cache_creation_input_tokens ?? 0
  const outputTokens      = u.output_tokens ?? 0

  const custoUsd = calcCostUsd(model, inputTokens, cacheReadTokens, cacheWriteTokens, outputTokens)
  const cotacao  = await getUsdBrl()
  const custoBrl = custoUsd * cotacao

  // Persiste de forma assíncrona (fire-and-forget) para não atrasar a resposta
  db.tokenUsage.create({
    data: {
      clienteId:        opts.clienteId ?? null,
      agente:           opts.agente,
      modelo:           model,
      inputTokens,
      cacheReadTokens,
      cacheWriteTokens,
      outputTokens,
      custoUsd:         custoUsd.toFixed(8),
      custoBrl:         custoBrl.toFixed(4),
      cotacaoUsada:     cotacao.toFixed(4),
      latenciaMs,
    },
  }).catch(() => {}) // silencia erro de log — nunca quebrar o fluxo principal

  return response
}
