// Cotação USD → BRL via PTAX (Banco Central do Brasil)
// Cache de 5 min em memória; fallback para .env se a API falhar.

let cached: { value: number; expiresAt: number } | null = null

export async function getUsdBrl(): Promise<number> {
  if (cached && Date.now() < cached.expiresAt) return cached.value

  try {
    const today = new Date().toLocaleDateString('pt-BR').replace(/\//g, '-')
    const url = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@d)?@d='${today}'&$format=json&$select=cotacaoVenda`
    const res = await fetch(url, { next: { revalidate: 300 } })
    const data = await res.json()
    const value: number = data?.value?.[0]?.cotacaoVenda ?? fallback()
    cached = { value, expiresAt: Date.now() + 5 * 60 * 1000 }
    return value
  } catch {
    return fallback()
  }
}

function fallback(): number {
  return parseFloat(process.env.USD_BRL_FALLBACK ?? '5.80')
}
