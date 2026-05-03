// Tabela de preços Anthropic (USD por 1M tokens)
// Atualizar aqui quando a Anthropic mudar preços.
export const MODEL_PRICING: Record<string, {
  input: number
  cacheRead: number
  cacheWrite: number
  output: number
}> = {
  'claude-opus-4-7':              { input: 15.00, cacheRead: 1.50,  cacheWrite: 18.75, output: 75.00 },
  'claude-opus-4-7[1m]':         { input: 15.00, cacheRead: 1.50,  cacheWrite: 18.75, output: 75.00 },
  'claude-sonnet-4-6':            { input:  3.00, cacheRead: 0.30,  cacheWrite:  3.75, output: 15.00 },
  'claude-haiku-4-5-20251001':    { input:  0.80, cacheRead: 0.08,  cacheWrite:  1.00, output:  4.00 },
}

export function calcCostUsd(
  model: string,
  inputTokens: number,
  cacheReadTokens: number,
  cacheWriteTokens: number,
  outputTokens: number,
): number {
  const p = MODEL_PRICING[model] ?? MODEL_PRICING['claude-sonnet-4-6']
  const M = 1_000_000
  return (
    (inputTokens      * p.input       / M) +
    (cacheReadTokens  * p.cacheRead   / M) +
    (cacheWriteTokens * p.cacheWrite  / M) +
    (outputTokens     * p.output      / M)
  )
}
