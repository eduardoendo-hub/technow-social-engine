# TechNow Social Engine — Plano de Implementação

> Plano completo (10 agentes) usando o **Tech Now Design System** como base visual obrigatória de todas as telas.

---

## 1. Princípios

- **Design System primeiro.** Todas as telas seguem `design-system/tech_now_design_system/`. Tokens em `colors_and_type.css` são a fonte canônica (Deep Teal `#080F0F` de fundo, Tiffany `#0ABAB5` como primário, Pearl `#EDF4F4` texto, Rose `#EC6088` apenas como ponto de acento).
- **pt-BR, copy declarativa, sem emojis em UI de produto** (regra do DS).
- **Humano no loop.** A IA recomenda, o humano aprova — nenhuma tela pula validação humana.
- **Cada rede social é cidadã de primeira classe.** Não há "post genérico" — toda peça nasce desdobrada por rede.
- **Aprendizado contínuo.** Toda decisão humana (aprovar / editar / rejeitar) e todo resultado real volta para o Agente Preditivo.
- **Multi-tenant por cliente.** Cada cliente tem sua Memória Estratégica isolada.

---

## 2. Stack sugerido

### Frontend
- **Next.js 15** (App Router) + TypeScript
- **Tailwind CSS v4** com tokens do DS portados (`tailwind.config.ts` + `globals.css` importando `colors_and_type.css`)
- **shadcn/ui** rebrandeado com tokens TN — usar como base de Button, Input, Dialog, Tabs, Table
- **Lucide** para ícones (já indicado pelo DS)
- **Recharts** ou **Tremor** para os dashboards (Tela 10/11)
- **TanStack Query** para data fetching
- **React Hook Form + Zod** para os formulários longos (Briefing, Memória da Marca)

### Backend
- **Next.js API routes + tRPC** para o produto (CRUD, autenticação, fluxos síncronos)
- **Inngest** para orquestração de agentes, cron e jobs (coleta de KPIs em janelas, publicações agendadas, retries)
- **PostgreSQL** (Supabase ou Neon) + **Prisma**
- **pgvector** para busca de "posts similares" do Agente Preditivo
- **Supabase Storage** (ou S3) para peças criativas

### IA
- **Anthropic Claude** via Vercel AI SDK
  - Sonnet 4.6 como default (Briefing, Desdobramento, Governança, Comunidade)
  - Opus 4.7 para tarefas pesadas (Preditivo, análise de tendências cruzando muitos posts)
  - Haiku 4.5 para tarefas baratas/repetitivas (classificação de comentário individual, validações simples)
- **Prompt caching** sempre (Memória da Marca cacheada por cliente reduz custo significativamente)
- **Structured outputs** via Zod schemas para todas as saídas dos agentes

### Integrações de rede
- **Meta Graph API** (Instagram + Facebook) — única integração que cobre 2 redes
- **LinkedIn Marketing API**
- **TikTok API for Business**
- Wrappers em `lib/social/{instagram,facebook,linkedin,tiktok}.ts` com interface comum

### Auth & infra
- **Clerk** ou **Supabase Auth** (organizações = clientes)
- **Vercel** para deploy do app
- **Inngest Cloud** para jobs

---

## 3. Estrutura de pastas

```
technow-social-engine/
├── app/                        # Next.js App Router
│   ├── (auth)/                 # Login, signup
│   ├── (app)/                  # Área autenticada
│   │   ├── calendario/         # Tela 1
│   │   ├── briefing/           # Telas 2 e 3
│   │   ├── desdobramento/      # Tela 4
│   │   ├── producao/           # Telas 5 e 6
│   │   ├── aprovacao/          # Tela 7
│   │   ├── agendamento/        # Telas 8 e 9
│   │   ├── performance/        # Telas 10 e 11
│   │   ├── aprendizados/       # Tela 12
│   │   ├── tendencias/         # Central de Tendências
│   │   ├── comunidade/         # Central de Comunidade
│   │   ├── governanca/         # Revisão de Governança
│   │   ├── marca/              # Memória Estratégica
│   │   └── admin/              # ADM (cockpit de tokens, billing, usuários)
│   │       ├── tokens/         # Cockpit de gastos de tokens
│   │       ├── billing/        # Faturamento por cliente
│   │       └── usuarios/       # Gestão de usuários
│   └── api/
├── components/
│   ├── ui/                     # shadcn rebrandeado (Button, Card, Input...)
│   ├── tn/                     # Componentes TN-específicos (BrandLine, ScoreBadge, NetworkChip, RadialSpotlight)
│   └── domain/                 # Componentes de domínio (BriefingForm, NetworkVariantTabs...)
├── lib/
│   ├── agents/                 # Um arquivo por agente
│   │   ├── briefing.ts
│   │   ├── desdobramento.ts
│   │   ├── producao.ts
│   │   ├── orquestracao.ts
│   │   ├── governanca.ts
│   │   ├── agendamento.ts
│   │   ├── monitoramento.ts
│   │   ├── preditivo.ts
│   │   ├── tendencias.ts
│   │   └── comunidade.ts
│   ├── social/                 # Adapters de redes
│   ├── ai/                     # Cliente Anthropic, prompt caching, schemas
│   └── db/                     # Prisma + queries
├── inngest/                    # Funções de job
├── prisma/
├── design-system/              # DS já presente
└── docs/
```

---

## 4. Fundação (Fase 0) — 1 a 2 semanas

> Sem isso, qualquer tela depois fica fora do brand.

### 4.1 Port dos tokens

- Importar `design-system/tech_now_design_system/colors_and_type.css` em `app/globals.css`
- Mapear todos os tokens (`--tn-*`, `--bg`, `--fg1`, `--brand`, `--brand-soft`, `--accent`, gradientes, glows, raios, escala de espaço) no `tailwind.config.ts` como `extend.colors`, `extend.boxShadow`, `extend.borderRadius`, `extend.spacing`
- Configurar Inter (900/800/700/600/500/400) e JetBrains Mono via `next/font`
- Aplicar baseline dark: `body { background: var(--bg); color: var(--fg1); }`

### 4.2 Componentes base (em `components/ui/` e `components/tn/`)

Cada componente deve respeitar as **regras visuais do DS**:

| Componente | Regras TN |
|------------|-----------|
| `Button` (primary) | bg Tiffany, text Deep Teal, radius pill, glow Tiffany; hover = brilho + ring 3px; press = `scale(0.98)` + escurece 10%; easing `ease-out` |
| `Button` (secondary) | bg transparent, border 1px Muted, text Pearl |
| `Input` / `Textarea` | bg Surface (`#0F2020`), border 1px Surface, radius `--radius-md` (10px), focus = border Tiffany + glow |
| `Card` | bg Surface, radius `--radius-lg` (14px), `--shadow-card`, **brand line 2px no topo** (gradient `--grad-line`) |
| `Badge` / `Chip` | radius pill, padding 6/14, eyebrow style (uppercase, tracking 0.25em) |
| `Table` | linhas com border-bottom 1px Surface, header eyebrow style |
| `Tabs` | underline 2px Tiffany no ativo |
| `Dialog` | overlay `rgba(8,15,15,0.85)` + `backdrop-filter: blur(14px)` |
| `Toast` | usar Rose para erro, Go-Green `#30D158` para sucesso, Gold `#F7C948` para warning |
| `RadialSpotlight` | helper para os heros (Tiffany top-left + Rose bottom-right) |
| `BrandLine` | a linha 2px gradient para o topo dos cards |
| `ScoreBadge` | exibe score 0–100 com cor variando: <60 Rose, 60–79 Gold, 80+ Tiffany |
| `NetworkChip` | chip com ícone Lucide + nome da rede em eyebrow style |

### 4.3 Layout shell

- **Sidebar** à esquerda: logo TechNow (`logo-tech-now-on-dark.svg`) + nav vertical com seções
- **Topbar** com `BrandLine` no topo, breadcrumbs, avatar do usuário
- **Header de página**: eyebrow (uppercase tiffany) + h1 (Inter 900 -0.04em) + subtítulo opcional em `tn-body-muted`

### 4.4 Auth e multi-tenant

- Modelo `Cliente` (organização) → todas as outras entidades têm `clienteId`
- Switcher de cliente no topbar (se um usuário operar várias marcas)
- RLS no Postgres ou guards no tRPC

### 4.5 Schema inicial (Prisma)

Implementar as entidades da seção 12 do PDF + 4 da Parte III: `Cliente`, `MarcaMemoria`, `Conteudo`, `VersaoPorRede`, `PecaCriativa`, `Publicacao`, `Metrica`, `Aprendizado`, `Tendencia`, `Comentario`. Adicionar `pgvector` em `Conteudo.embedding` desde o início (mesmo que só usemos depois).

**Mais duas entidades obrigatórias desde a Fase 0** (alimentam o cockpit de tokens — seção 5.A):

- `TokenUsage` — uma linha por chamada de IA (clienteId, agente, modelo, input_tokens, cache_read_tokens, cache_write_tokens, output_tokens, custo_usd, custo_brl, latencia_ms, requestId, criadoEm)
- `CotacaoUSD` — histórico do câmbio USD→BRL (data, valor, fonte) para cálculos auditáveis

### 4.6 Instrumentação de tokens (obrigatório desde o dia 1)

Toda chamada à API da Anthropic deve passar por um wrapper único em `lib/ai/client.ts` que:

1. Captura `usage` da resposta (input, output, cache_creation_input_tokens, cache_read_input_tokens)
2. Calcula custo em USD usando a tabela de preços do modelo
3. Converte para BRL com a cotação corrente (cache de 5 min)
4. Persiste em `TokenUsage` com `clienteId`, `agente`, `requestId` (correlação)
5. Emite evento para Inngest atualizar o forecast em tempo real

Sem essa instrumentação na Fase 0, é impossível ligar o cockpit depois sem retrabalho.

**Entregável da Fase 0:** projeto com login, sidebar, página vazia "Calendário" estilizada com tokens TN, wrapper de IA gravando `TokenUsage` em todas as chamadas, página `/admin/tokens` mostrando as primeiras linhas (mesmo zerada), deploy preview na Vercel.

---

## 5. Roteiro de implementação por fase

> Estimativas assumem 1 dev full-time + 1 designer part-time. Multiplique por 0.6 se houver 2 devs.

### Fase 1 — Memória da Marca + Briefing/Validação (Agente 1) · 2–3 semanas

**Telas**: Memória Estratégica da Marca · Tela 1 Calendário Mensal · Tela 2 Briefing Inicial · Tela 3 Validação Estratégica.

**Backend**:
- CRUD de `MarcaMemoria` (dados da marca, tom, histórico, regras por rede — todos campos da seção 3.2 do PDF)
- `lib/agents/briefing.ts`:
  - Input: payload do briefing
  - Prompt com Memória da Marca cacheada (cache_control)
  - Output Zod-validado: título otimizado, gancho, descrição revisada, mini roteiro, sugestões por rede, scores (clareza, engajamento, tom, por rede), riscos, status
- Endpoint tRPC `briefing.validate` que chama o agente

**UI específica**:
- Tela 1 — Calendário com grid (mês/semana/dia), filtros, status colorido por rede (chips)
- Tela 2 — Form longo dividido em accordion (`Conteúdo`, `Peça`, `Distribuição`, `Estratégia`)
- Tela 3 — Layout duas colunas: à esquerda original, à direita sugestão da IA com diff inline; bloco de scores com `ScoreBadge` por categoria; ações (Aprovar / Editar / Regerar / Reprovar)

**Critério de pronto**: usuário cria conteúdo no calendário → preenche briefing → clica "Validar com IA" → recebe versão sugerida + scores → aprova → status muda para "Aprovado, aguardando desdobramento".

---

### Fase 2 — Desdobramento por Rede (Agente 2) · 2 semanas

**Tela**: Tela 4 Desdobramento por Rede.

**Backend**:
- `lib/agents/desdobramento.ts`: gera 1 versão por rede selecionada, em paralelo
- Templates de prompt separados por rede (regras de IG/TikTok/LinkedIn/FB do PDF seção 5.3)
- Saída: pacote `{ instagram, tiktok, linkedin, facebook }` cada um com `legenda`, `roteiro`, `cta`, `hashtags`, `score`, `formato_recomendado`, `briefing_visual`

**UI**:
- Tabs no topo (uma aba por rede ativa, com `NetworkChip` + score)
- Preview lado a lado: à esquerda mockup do post (frame da rede), à direita texto editável
- Para Instagram carrossel: editor de slides (lista vertical reordenável)
- Para TikTok: timeline com cenas (0–3s, 3–10s, etc.)
- Botões: Aprovar versão · Editar · Gerar alternativa · Remover rede

**Critério de pronto**: a partir de um briefing aprovado, gerar 4 versões em <30s, navegar entre abas, regenerar uma rede sem afetar as outras, aprovar todas e enviar para produção.

---

### Fase 3 — Produção Criativa + Orquestração (Agentes 3 e 4) · 2–3 semanas

**Telas**: Tela 5 Produção da Peça · Tela 6 Geração Automatizada.

**Backend**:
- `lib/agents/producao.ts`:
  - Modo manual: gera **briefing criativo** (prompt → texto formatado) para upload pelo designer
  - Validação da peça: Claude com vision olhando o arquivo, retorna checklist (formato, legibilidade, CTA presente, coerência texto/visual, aderência à marca)
- `lib/agents/orquestracao.ts`:
  - Converte briefing → prompt técnico
  - Aciona ferramenta externa (placeholder no MVP — pode usar Replicate ou similar como adapter)
  - Avalia múltiplas variações com Claude
- Storage: upload via Supabase Storage com URL assinada

**UI**:
- Tela 5 — campos do form, dropzone para upload, modo (Manual/Automático/Híbrido), status timeline (Aguardando → Em produção → Em validação → Aprovada)
- Tela 6 — campo de prompt editável, galeria 2x2 de variações geradas, score por variação

**Critério de pronto**: designer recebe briefing visual claro, faz upload, IA valida com checklist, aprovação humana fecha o ciclo.

---

### Fase 4 — Governança e Compliance (Agente 7) · 1–2 semanas

**Tela**: Revisão de Governança · Tela 7 Aprovação Final.

**Backend**:
- `lib/agents/governanca.ts`:
  - Recebe texto + peça
  - Verifica termos proibidos (lista em `MarcaMemoria.termos_proibidos`)
  - Detecta promessas exageradas, riscos reputacionais, inconsistência institucional
  - Classifica risco (baixo/médio/alto), sugere correções, gera versão segura
- Hard rule: status "Bloqueado" não permite agendar

**UI**:
- Preview do post centralizado (frame da rede)
- Painel lateral: checklist de risco, trechos sinalizados em destaque (Rose), sugestões da IA
- Botões: Aplicar correções · Aprovar mesmo assim (com confirm) · Bloquear

**Critério de pronto**: nenhum conteúdo agenda sem passar pela governança; risco alto exige justificativa por escrito para aprovar.

---

### Fase 5 — Agendamento e Publicação (Agente 8) · 3 semanas

**Telas**: Tela 8 Agendamento · Tela 9 Fila de Publicação.

**Backend**:
- Adapters em `lib/social/{instagram,facebook,linkedin,tiktok}.ts` com interface comum: `schedule(post)`, `publish(post)`, `getInsights(externalId)`
- OAuth para conectar contas (por cliente)
- `lib/agents/agendamento.ts`:
  - Sugere melhor horário (consulta histórico do cliente — começa simples: média ponderada de engajamento por hora/rede)
  - Detecta conflito (>3 posts/dia, posts similares próximos)
  - Score de agendamento
- **Inngest**: função cron que roda a cada minuto verificando publicações com `data_agendada <= now()` e status `Agendado`, publica via adapter da rede, salva ID externo, atualiza status. Retry exponencial em erro.

**UI**:
- Tela 8 — calendário (FullCalendar ou custom) com cards coloridos por rede; ao clicar em um slot, drawer com form de agendamento; banner "Melhor horário sugerido" no topo
- Tela 9 — tabela densa (data/hora/rede/conteúdo/status/score/ações), filtros, ações em massa (cancelar, reagendar)

**Critério de pronto**: post aprovado → escolho data/hora → publica automaticamente na hora certa em IG/FB/LI/TT → status muda para Publicado com URL externa.

---

### Fase 5.A — Cockpit de Tokens (ADM) · 1 semana · entrega no fim da Fase 1

> **Por que aqui:** a instrumentação foi feita na Fase 0, então a partir da Fase 1 já há dados reais sendo gerados. O cockpit precisa estar no ar **antes** das fases que mais consomem token (Desdobramento, Produção, Preditivo).

**Telas**: ADM › Cockpit de Tokens · ADM › Faturamento por Cliente.

**Backend**

- `lib/billing/pricing.ts` — tabela versionada de preços por modelo (USD por 1M tokens), separando `input`, `cache_read`, `cache_write` e `output`. Configurável em runtime (admin pode atualizar quando a Anthropic mudar preço).
- `lib/billing/fx.ts` — fetch da cotação USD→BRL (PTAX do Banco Central via `https://olinda.bcb.gov.br/...` ou alternativa). Cache de 5 min, fallback para última cotação salva.
- `lib/billing/forecast.ts` — algoritmo de previsão:
  - **Forecast diário**: média móvel dos últimos 7 dias, projetada até fim do mês
  - **Forecast por agente**: regressão linear simples sobre uso semanal
  - **Forecast por cliente**: histórico do cliente × volume de conteúdo planejado no calendário (puxa da entidade `Conteudo` com status futuro)
- Endpoint tRPC `admin.tokens.cockpit` retorna agregações pré-calculadas (Inngest cron de 5 min materializa em tabela `TokenUsageDaily`)
- **Alertas configuráveis** (Inngest):
  - Limite de gasto diário/mensal por cliente (envia email/Slack quando cruza 80% / 100%)
  - Anomalia de consumo (uso > 3σ acima da média móvel) — pode indicar loop infinito ou prompt mal cacheado

**UI — Cockpit de Tokens (`/admin/tokens`)**

Layout em 4 blocos verticais:

1. **Header de stats** — 4 stat cards (Inter 900, número grande):
   - Gasto hoje (BRL) + delta vs ontem
   - Gasto no mês corrente (BRL) + barra de progresso vs orçamento
   - **Forecast fim do mês** (BRL) — destaque em Tiffany Light, com intervalo de confiança
   - Tokens consumidos hoje (M) + ratio cache hit
2. **Gráfico temporal** (Recharts) — área empilhada com 30 dias de gasto em BRL, separado por modelo (Opus / Sonnet / Haiku) ou por agente (toggle no canto). Linha tracejada de forecast estendendo até fim do mês.
3. **Tabela "Por Agente"** — ordenável: agente, chamadas/dia, tokens médios/chamada, % cache hit, custo BRL/dia, custo BRL projetado/mês, tendência (sparkline). Identifica rapidamente o agente que está custando mais.
4. **Tabela "Por Cliente"** — clienteId, plano contratado, gasto mês corrente, forecast fim do mês, % do plano consumido (barra colorida: <60% Tiffany, 60–89% Gold, ≥90% Rose), botão "Ver detalhe".

**UI — Detalhe do Cliente (`/admin/tokens/[clienteId]`)**

- Mesmos 4 blocos, escopados ao cliente
- Breakdown adicional por **agente × modelo** (heatmap)
- Lista de últimas 100 chamadas com requestId clicável (mostra prompt usado — útil pra auditoria)
- Configuração: orçamento mensal (BRL), alertas (% para email), modelo default por agente (override do global)

**UI — Faturamento (`/admin/billing`)**

- Geração de fatura mensal por cliente (markup configurável sobre o custo bruto)
- Export CSV para sistema contábil
- Histórico de cotação USD→BRL usada em cada fatura

**Componentes TN específicos**

- `CostCard` — stat card com BrandLine no topo, número grande Inter 900, label eyebrow Tiffany, delta colorido (verde Go-Green se cai, Rose se sobe acima do esperado)
- `ForecastBar` — barra de progresso pill com 3 zonas (Tiffany / Gold / Rose) baseada em % do orçamento; tooltip com intervalo de confiança
- `ModelBadge` — chip identificando modelo (Opus = Tiffany Light, Sonnet = Tiffany, Haiku = Muted) — facilita escanear tabelas

**Critério de pronto**:

- [ ] Toda chamada IA produz uma linha em `TokenUsage` com custo USD e BRL
- [ ] Cockpit mostra gasto real (não só estimado) com defasagem máxima de 5 min
- [ ] Forecast mensal com intervalo de confiança visível
- [ ] Alerta dispara quando cliente cruza 80% do orçamento
- [ ] Admin consegue identificar em <30s qual agente/cliente está caro

**Por que isso é crítico para o produto**

- 10 agentes × N clientes × volume crescente = custo de IA pode virar a maior linha de COGS rapidamente
- Preditivo e Desdobramento são os mais caros (chamam Claude múltiplas vezes por conteúdo) — sem visibilidade, fica impossível precificar plano
- Permite decisão informada de quando trocar Sonnet por Haiku em agente específico
- Base para o **plano comercial**: tier por volume de conteúdo + cap de tokens

---

### Fase 6 — Monitoramento de Performance (Agente 9) · 2–3 semanas

**Telas**: Tela 10 Performance por Post · Tela 11 Dashboard Geral.

**Backend**:
- **Inngest cron** por publicação: agenda jobs em 1h, 3h, 6h, 12h, 24h, 48h, 7d, 30d após publicar — cada job chama `getInsights()` e grava em `Metrica` com timestamp da janela
- `lib/agents/monitoramento.ts`:
  - Interpretação textual: compara KPIs com média da conta/rede/formato/tema, gera narrativa ("acima da média em alcance, mas baixa retenção nos primeiros segundos")
  - Análise de comentários: classificação (positivo/negativo/dúvida/lead/crítica), sentimento
  - Compara previsto x realizado (alimenta Preditivo)

**UI**:
- Tela 10 — header com preview do post + KPIs principais em "stat cards" (pearl background, número grande Inter 900); abaixo gráfico temporal (Recharts), comparativo previsto vs real, comentários classificados
- Tela 11 — visão executiva (cards de stat), filtros (período, rede, campanha, tema), rankings top 10, gráficos por rede/formato/tema/horário/dia da semana/CTA

**Critério de pronto**: 24h após publicar, métricas chegam automaticamente; dashboard mostra evolução; aprendizados textuais aparecem por post.

---

### Fase 7 — Preditivo e Aprendizado Contínuo (Agente 6/3) · 2–3 semanas

**Telas**: Inteligência Preditiva · Tela 12 Central de Aprendizados.

**Backend**:
- `lib/agents/preditivo.ts`:
  - **MVP do score**: regras simples baseadas em features (força do gancho via Claude, formato vs rede, horário vs histórico, aderência ao tema vencedor)
  - Composição de pesos por rede (PDF seção 10.4)
  - Busca de posts similares: embedding do briefing (Anthropic via Voyage ou OpenAI text-embedding-3) → kNN no pgvector
  - Justificativa textual gerada por Claude
- **Job de aprendizado** (Inngest, daily): lê todas as publicações com performance final → consolida em `Aprendizado` (insights por cliente/rede/tema/formato com nível de confiança)
- Hookar Preditivo nos Agentes 1, 2 e 8 (já existem) — agora consultam histórico real

**UI**:
- Tela Inteligência Preditiva — score grande no topo, breakdown por categoria (gancho, formato, rede, horário, CTA), fatores positivos / riscos lado a lado, posts similares em galeria com performance real
- Tela 12 — feed de aprendizados em cards (`Tema vencedor: ...` / `Gancho que funciona: ...`), com filtros e botão "Aplicar no próximo calendário"

**Critério de pronto**: ao criar briefing, Preditivo já sugere score e melhor horário baseado em dados do próprio cliente; loop de previsto vs real visível na Tela 10.

---

### Fase 8 — Inteligência de Tendências (Agente adicional) · 1–2 semanas

**Tela**: Central de Tendências.

**Backend**:
- `lib/agents/tendencias.ts`:
  - Fontes: Brave Search API + RSS de blogs do segmento + scraping leve de perfis-concorrentes
  - Agrupa em temas, classifica urgência (imediato/sazonal/evergreen), cruza com produtos da marca
  - Sugere gancho inicial e rede recomendada
- Cron diário: busca tendências, deduplica, salva em `Tendencia`

**UI**:
- Cards com tema + score de relevância + urgência (badge) + justificativa
- Botões: Adicionar ao calendário (cria conteúdo já com briefing pré-preenchido) · Ignorar · Gerar briefing

**Critério de pronto**: a cada manhã o Social Media abre a Central de Tendências e tem 5–10 oportunidades curadas, prontas para virar pauta em 1 clique.

---

### Fase 9 — Comunidade e Interação (Agente 10) · 2 semanas

**Tela**: Central de Comunidade.

**Backend**:
- Coleta de comentários via APIs (no mesmo cron de KPIs)
- `lib/agents/comunidade.ts`:
  - Classifica cada comentário (positivo/negativo/neutro/dúvida/lead/crítica/menção a concorrente)
  - Sentimento
  - Sugere resposta dentro do tom da marca (consulta `MarcaMemoria.tom`)
  - Detecta crise (múltiplos negativos em janela curta) → alerta
  - Gera FAQ (agrupa dúvidas recorrentes)

**UI**:
- Inbox unificada com filtros (rede, sentimento, intenção, post)
- Cada comentário: contexto do post + resposta sugerida editável + botões (Responder, Enviar para vendas, Criar pauta)
- Banner de alerta de crise no topo quando detectado
- Aba FAQ — dúvidas agrupadas com botão "Criar conteúdo respondendo"

**Critério de pronto**: tempo de resposta médio cai; leads identificados aparecem em uma fila separada; pautas geradas a partir de dúvidas viram conteúdo no calendário.

---

### Fase 10 — Refino e calibração contínua · ongoing

- Pipeline de calibração: para cada publicação, salvar (score previsto, score real, delta) → semanal recalibrar pesos
- A/B testing de prompts dos agentes
- Telemetria: tempo de cada agente, custo por agente, taxa de aceitação de sugestões
- Fine-tuning de prompts por cliente quando volume justificar

---

## 6. Dependências entre fases

```
Fase 0 (Fundação + instrumentação de tokens)
   ↓
Fase 1 (Memória + Briefing) ──┐
   ↓                          │
Fase 2 (Desdobramento)        ├── Fase 5.A (Cockpit de Tokens / ADM)
   ↓                          │     entra ao final da Fase 1
Fase 3 (Produção)             │
   ↓                          │
Fase 4 (Governança) ──────────┤
   ↓                          │
Fase 5 (Agendamento) ─────────┤
   ↓                          │
Fase 6 (Monitoramento) ───────┤
   ↓                          │
Fase 7 (Preditivo) ──────► retroalimenta Fases 1, 2 e 5
                              │
Fase 8 (Tendências) ─── pode rodar em paralelo a partir da Fase 1
                              │
Fase 9 (Comunidade) ─── depende da Fase 6
                              │
Fase 10 (Refino) ──────── ongoing após Fase 7
```

**Caminho crítico para "primeiro post publicado pela plataforma"**: Fases 0 → 1 → 2 → 3 → 4 → 5. Estimativa: ~12–14 semanas.

**Caminho crítico para "ciclo de aprendizado fechado"**: + Fases 6 → 7. Total: ~17–20 semanas.

**Plataforma completa (10 agentes)**: ~22–26 semanas (~5 a 6 meses) com 1 dev full-time.

---

## 7. Checklist de UI por tela (regras TN)

Aplicar em **toda** tela, sem exceção:

- [ ] `BrandLine` 2px no topo de qualquer Card grande, banner ou hero
- [ ] Background Deep Teal (`var(--bg)`), nunca um cinza qualquer
- [ ] Texto principal Pearl (`var(--fg1)`), secundário Muted (`var(--fg2)`), terciário Muted-2
- [ ] Headline em `tn-h1` ou `tn-display` (Inter 900, tracking `-0.04em`, line-height 1.0–1.1)
- [ ] Eyebrow (uppercase, tracking 0.25em, Tiffany) acima de toda headline
- [ ] Highlight dentro de headline em `<em>` recebe Tiffany Light (`var(--brand-soft)`) automaticamente
- [ ] Botão primário: Tiffany sólido + glow Tiffany + radius pill
- [ ] Botão secundário: transparent + border Muted
- [ ] Inputs: bg Surface, focus = border Tiffany + ring 3px
- [ ] Cards: radius `--radius-lg` (14px), `--shadow-card`, BrandLine no topo
- [ ] Hover em qualquer interativo: brilho de borda + ring 3px Tiffany 0.15
- [ ] Press: `scale(0.98)` + escurece 10%
- [ ] Easing: `ease-out` ou linear, **nunca bounce/spring**
- [ ] Status "live" / "publicado": ponto Go-Green pulsando suave
- [ ] Sem emoji em UI de produto (allowed só em chips de stories/Reels que estamos editando)
- [ ] Copy em pt-BR, declarativa, sentence case
- [ ] Logo: `logo-tech-now-on-dark.svg` por padrão; nunca escrever "Tech Now Drops"
- [ ] Avatares com Tiffany ou Rose no fundo, iniciais em Deep Teal

---

## 8. Riscos e mitigações

| Risco | Mitigação |
|-------|-----------|
| **APIs sociais mudam ou rate-limitam** | Adapter pattern com interface comum; retry exponencial; alertas no monitoramento |
| **Custo de IA explode** com 10 agentes em fluxo | Prompt caching agressivo da Memória da Marca; Haiku para tarefas simples; budget por cliente |
| **Aprovação OAuth do Meta/TikTok demora** (review obrigatório) | Começar review na Fase 0; usar contas de teste enquanto não aprova; documentar permissões pedidas |
| **Score preditivo ruim no início** (sem histórico) | Versão 1 baseada em regras + heurísticas do PDF; só após ~50 posts/cliente o ML faz sentido |
| **DS tem fontes substituídas** (Inter no lugar de Segoe) | Conferir com cliente antes da Fase 1 se há fonte oficial — flagado no `CLAUDE.md` do DS |
| **Drift de marca** ao crescer o time | Storybook com todos os componentes TN + visual regression (Chromatic ou Percy) |
| **Multi-tenancy vazando dados** | RLS no Postgres desde Fase 0 + testes de isolamento por cliente |

---

## 9. Próximos passos imediatos

1. **Confirmar stack** (Next.js + Postgres + Inngest + Anthropic). Se preferência por outro, ajusto antes de codar.
2. **Confirmar fonte oficial da TechNow** ou seguir com Inter (DS já flagou substituição).
3. **Decidir hospedagem** (Vercel + Supabase é o mais rápido; AWS é viável mas adiciona ~1 semana na Fase 0).
4. **Decidir quem produz peças** no MVP — se 100% manual com upload, a Fase 3 cai pra ~1 semana; se já queremos geração automática, mantém 3 semanas.
5. **Iniciar processos de aprovação OAuth** Meta/TikTok/LinkedIn em paralelo à Fase 0.
6. **Criar repositório, configurar CI**, deploy preview, e portar tokens do DS — entregável visível em ~3 dias.

---

## 10. Resumo executivo

| Item | Valor |
|------|-------|
| Fases | 10 (0–9) + 5.A (ADM/Tokens) + ongoing |
| Tempo total (1 dev) | 23–27 semanas |
| Tempo até primeiro post publicado | 12–14 semanas |
| Tempo até cockpit de tokens no ar | ~5–6 semanas (logo após Fase 1) |
| Tempo até ciclo de aprendizado fechado | 17–20 semanas |
| Stack | Next.js 15 · TS · Tailwind · Postgres · Prisma · Inngest · Anthropic Claude · Vercel |
| Design System | `design-system/tech_now_design_system/` (obrigatório em toda tela) |
| Principal diferencial técnico | Aprendizado contínuo previsto x real + memória estratégica por cliente cacheada |
| Principal diferencial visual | Sistema dark Tiffany — Deep Teal + Tiffany + Pearl + ponto Rose, Inter 900 com tracking apertado |
| Governança financeira | Cockpit ADM com gasto real em BRL, forecast fim de mês e alertas por cliente — instrumentação obrigatória desde a Fase 0 |
