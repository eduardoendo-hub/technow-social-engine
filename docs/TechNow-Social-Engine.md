# TechNow Social Engine

> Documentação funcional da arquitetura de agentes, telas, campos, KPIs e fluxo operacional.

---

## Parte I — Documentação funcional

### 1. Visão geral da plataforma

O **TechNow Social Engine** é uma plataforma de automação inteligente para planejamento, criação, publicação, monitoramento e otimização de conteúdo em redes sociais.

O objetivo principal é permitir que uma empresa transforme um calendário mensal de postagens em conteúdos otimizados para diferentes redes sociais, como:

- Instagram
- Facebook
- TikTok
- LinkedIn
- YouTube Shorts (em uma evolução futura)
- Outras redes integráveis via API

A plataforma não deve ser vista apenas como um agendador de posts. Ela deve funcionar como um **motor de inteligência de social media**, capaz de aprender com os resultados anteriores e melhorar continuamente a qualidade, o formato, o horário, o tom e o potencial de engajamento das publicações.

A lógica central é:

> **Planejar → Validar → Desdobrar → Produzir → Aprovar → Agendar → Publicar → Monitorar → Aprender → Retroalimentar o planejamento**

A camada de inteligência artificial deve funcionar como um suporte estratégico para o Social Media / Community Manager, sem eliminar a validação humana. O humano continua decidindo, aprovando e ajustando, enquanto a IA ajuda a acelerar, analisar, sugerir e aprender.

---

### 2. Arquitetura geral de agentes

A arquitetura principal pode ser organizada em 7 agentes:

1. Agente de Briefing e Validação Estratégica
2. Agente de Desdobramento por Rede
3. Agente de Produção Criativa
4. Agente Auxiliar de Orquestração Criativa
5. Agente de Agendamento e Publicação
6. Agente de Monitoramento de Performance
7. Agente Preditivo e de Aprendizado Contínuo

Além deles, existe uma camada transversal:

- **Memória Estratégica da Marca**

Essa memória não é exatamente um agente isolado, mas uma base consultada por todos os agentes.

---

### 3. Memória Estratégica da Marca

#### 3.1. Função

A Memória Estratégica da Marca é o **cérebro contextual** da plataforma. Ela armazena as regras, preferências, histórico e aprendizados de cada cliente. Cada empresa que usar a plataforma deve ter uma memória própria, para que os agentes não trabalhem com recomendações genéricas.

#### 3.2. O que essa memória deve conter

**Dados da marca**

- Nome da empresa
- Segmento de atuação
- Público-alvo principal
- Público-alvo secundário
- Produtos e serviços
- Diferenciais competitivos
- Posicionamento de mercado
- Palavras-chave estratégicas
- Termos proibidos ou indesejados
- Concorrentes
- Canais prioritários

**Tom de voz**

- Formal, informal ou híbrido
- Técnico ou acessível
- Jovem, institucional, educativo, provocativo, inspirador etc.
- Uso ou não de emojis
- Uso ou não de gírias
- Nível de profundidade técnica
- Estilo de CTA
- Exemplos de posts aprovados
- Exemplos de posts rejeitados

**Histórico de performance**

- Temas que mais engajam
- Formatos com melhor desempenho
- Horários com melhor desempenho
- Redes com maior tração
- Tipos de gancho que funcionam melhor
- Tipos de CTA com maior conversão
- Conteúdos com baixo desempenho
- Padrões negativos identificados

**Regras por rede social**

Cada rede deve ter sua própria inteligência contextual, porque o comportamento do público muda bastante entre plataformas. Por exemplo:

- **TikTok**: linguagem mais rápida, visual, direta, com foco em retenção e gancho forte nos primeiros segundos.
- **Instagram**: apelo visual, estética, carrossel educativo, reels com storytelling curto e chamadas fortes.
- **LinkedIn**: autoridade, visão de mercado, aprendizado, negócios, liderança, cases e opinião profissional.
- **Facebook**: comunidade, alcance mais amplo, grupos, relacionamento e públicos mais variados.

Essa separação é essencial. O mesmo tema pode virar conteúdos muito diferentes em cada rede.

---

### 4. Agente 1 — Briefing e Validação Estratégica

#### 4.1. Objetivo

Primeiro agente do fluxo. Recebe a entrada inicial criada pelo Social Media / Community Manager e valida se a ideia tem qualidade estratégica suficiente para seguir para produção. Não cria a peça final — valida, melhora e organiza o briefing.

#### 4.2. Entrada do agente

A entrada sempre deve ser composta por:

1. Título com gancho
2. Descrição do conteúdo
3. Descrição da peça
4. Mini roteiro inicial
5. Redes pretendidas
6. Objetivo da publicação
7. Data desejada
8. Tema ou categoria
9. Público-alvo
10. Prioridade estratégica

#### 4.3. Campos da tela de entrada

**Tela: Novo Conteúdo / Briefing Inicial**

Campos principais:

- Título do conteúdo
- Gancho inicial
- Tema principal
- Descrição do que deve ser comunicado
- Descrição da peça visual
- Tipo de peça: Imagem estática, Carrossel, Vídeo curto, Vídeo longo, Post textual, Story, Reels, Shorts, TikTok
- Mini roteiro
- Objetivo: Alcance, Engajamento, Autoridade, Conversão, Tráfego, Lançamento, Relacionamento, Educação, Reputação
- Redes desejadas: Instagram, TikTok, Facebook, LinkedIn, YouTube
- Persona/público
- Produto ou serviço relacionado
- CTA desejado
- Hashtags sugeridas
- Link de destino, se houver
- Observações internas
- Status: Rascunho, Em validação, Aprovado, Reprovado, Revisar

#### 4.4. O que a IA faz nesse agente

A IA deve analisar:

**Clareza**

- O tema está claro?
- A mensagem principal está objetiva?
- O gancho comunica valor rapidamente?
- A pessoa entende em poucos segundos o motivo de consumir aquele conteúdo?

**Potencial de engajamento**

- O gancho desperta curiosidade?
- Existe uma promessa clara?
- O conteúdo resolve uma dor?
- O tema tem apelo para o público?
- Há potencial para comentários, compartilhamentos ou salvamentos?

**Aderência ao tom da marca**

- A linguagem está alinhada com a marca?
- O nível técnico está adequado?
- O post parece pertencer à empresa?
- Existe algum termo desalinhado?
- O CTA combina com o posicionamento?

**Adequação por rede**

A IA deve avaliar se o mesmo tema faz sentido para cada rede selecionada. Exemplo: um conteúdo sobre "Como usar IA no atendimento ao cliente" pode virar:

- **LinkedIn**: artigo curto sobre eficiência operacional.
- **Instagram**: carrossel com dicas práticas.
- **TikTok**: vídeo com gancho rápido e exemplo visual.
- **Facebook**: post educativo com linguagem mais direta e comunitária.

**Risco de baixa performance**

A IA deve apontar possíveis problemas: gancho fraco, texto genérico, falta de CTA, linguagem fria demais, tema pouco conectado ao público, excesso de informação, formato inadequado para determinada rede, falta de benefício claro.

#### 4.5. Saída do agente

**Saída principal**

- Briefing validado
- Título otimizado
- Gancho melhorado
- Descrição revisada
- Mini roteiro ajustado
- Objetivo estratégico confirmado
- Redes recomendadas
- Redes não recomendadas, se houver
- Sugestão de formato por rede
- Sugestão de CTA
- Sugestão de hashtags
- Score de potencial de engajamento
- Score de aderência ao tom da marca
- Score de clareza
- Score de adequação por rede

**Exemplo de saída**

```
Status: Aprovado com ajustes

Título original:
"ChatGPT para empresas"

Título sugerido:
"Como empresas estão usando ChatGPT para ganhar produtividade
sem aumentar equipe"

Gancho sugerido:
"Sua empresa ainda usa IA só para responder perguntas? Você pode
estar perdendo produtividade todos os dias."

Formato recomendado:
Instagram: carrossel educativo
TikTok: vídeo curto com exemplo prático
LinkedIn: post de autoridade com dados e reflexão
Facebook: post explicativo com CTA para conversa

Score geral: 82/100
Aderência ao tom da marca: 91/100
Potencial de engajamento: 78/100
Clareza: 85/100
```

#### 4.6. Validação humana

Depois da análise da IA, o humano deve poder: aprovar como está, aceitar sugestões da IA, editar manualmente, pedir nova sugestão, reprovar, enviar para revisão, enviar para o próximo agente.

Essa validação humana é importante para manter controle editorial e evitar publicações desalinhadas.

---

### 5. Agente 2 — Desdobramento por Rede

#### 5.1. Objetivo

Transforma o briefing aprovado em variações específicas para cada rede social. Entende que o mesmo tema não deve ser simplesmente copiado e colado em todas as plataformas.

#### 5.2. Entrada

Recebe do Agente 1: briefing validado, título otimizado, gancho aprovado, descrição aprovada, mini roteiro, objetivo, redes selecionadas, tom da marca, scores de validação.

#### 5.3. O que a IA faz

**Para Instagram**: legenda otimizada, sugestão de carrossel, quantidade de slides, texto por slide, ideia visual de cada slide, CTA, hashtags, sugestão de Reels (se aplicável), sugestão de stories complementares.

**Para TikTok**: roteiro de vídeo curto, gancho nos primeiros segundos, estrutura cena a cena, texto falado, texto na tela, sugestão de trilha/ritmo, CTA natural, duração recomendada, elementos visuais.

**Para LinkedIn**: post mais profissional, tom de autoridade, dados ou contexto de mercado, reflexão estratégica, CTA para comentário ou conversa, versão curta e versão longa, sugestão de artigo ou documento (se aplicável).

**Para Facebook**: texto mais conversacional, adaptação para comunidade, CTA mais direto, possível chamada para grupos ou comentários, versão com imagem ou vídeo.

#### 5.4. Saída do agente

A saída deve ser um pacote por rede. Exemplo:

```
Rede: Instagram
Formato: Carrossel
Quantidade de slides: 7
Legenda sugerida: ...
Texto slide 1: ...
Texto slide 2: ...
CTA: Salve este post para usar depois
Hashtags: #IA #Automacao #Produtividade

Rede: TikTok
Formato: Vídeo curto
Duração: 35 segundos
Gancho inicial: "Você está usando ChatGPT do jeito mais básico
possível..."
Roteiro cena a cena: ...
Texto na tela: ...
CTA: Comente 'IA' se quiser ver um exemplo prático

Rede: LinkedIn
Formato: Post de autoridade
Texto: ...
CTA: Como sua empresa está usando IA hoje?
```

#### 5.5. Tela relacionada

**Tela: Desdobramentos por Rede**

- Card do conteúdo original
- Abas por rede social
- Prévia da versão de cada rede
- Score por rede
- Botão "Aprovar versão"
- Botão "Editar versão"
- Botão "Gerar nova variação"
- Botão "Remover rede"
- Campo de comentários internos
- Status por rede: Pendente, Em revisão, Aprovado, Reprovado, Enviado para produção

---

### 6. Agente 3 — Produção Criativa

#### 6.1. Objetivo

Organiza a criação da peça final, manualmente ou por IA. Aceita dois modos:

1. Modo manual
2. Modo automatizado

#### 6.2. Modo manual

A plataforma gera um briefing criativo detalhado para uma pessoa produzir a peça em ferramentas como Adobe Photoshop, Illustrator, Premiere, After Effects, Canva ou outras. O profissional cria a peça fora da plataforma e depois faz upload do arquivo.

#### 6.3. Modo automatizado

O agente envia o briefing para ferramentas externas de geração de imagem, vídeo ou copy. Pode se conectar futuramente a APIs de geração criativa.

#### 6.4. Entrada

Recebe do Agente 2: roteiro aprovado, formato por rede, texto final, orientações visuais, especificações de formato, CTA, descrição da peça, rede de destino, data desejada.

#### 6.5. Campos da tela de produção

**Tela: Produção da Peça**

- Nome da peça
- Rede social
- Formato
- Dimensão recomendada
- Duração recomendada (se vídeo)
- Briefing criativo
- Roteiro aprovado
- Texto da legenda
- Texto na arte
- Referências visuais
- Arquivos anexos
- Responsável pela produção
- Prazo de entrega
- Modo de produção: Manual, Automático via IA, Híbrido
- Status: Aguardando produção, Em produção, Peça enviada, Em validação, Aprovada, Reprovada, Ajustes solicitados

#### 6.6. Validação da peça

Quando a peça é enviada, a IA pode analisar: se o texto da imagem/vídeo corresponde ao briefing; se a peça está no formato correto; se há coerência entre legenda e visual; se o CTA está presente; se o conteúdo está adequado à rede; se existe excesso de texto; se o visual parece compatível com a marca; se a peça pode ter risco de baixa retenção; se o roteiro foi respeitado.

#### 6.7. Saída

- Peça final anexada
- Legenda final associada
- Roteiro final associado
- Formato confirmado
- Rede confirmada
- Status de aprovação
- Observações de validação
- Versão final pronta para agendamento

---

### 7. Agente Auxiliar — Orquestrador de Criação Automatizada

#### 7.1. Objetivo

Não é o produtor principal. É um agente auxiliar que orquestra chamadas para ferramentas externas de IA. Entra em ação apenas quando a produção for marcada como automática ou híbrida.

#### 7.2. Funções

- Identificar o tipo de peça a ser criada
- Selecionar a ferramenta adequada
- Converter o briefing em prompt técnico
- Enviar solicitação para a ferramenta externa
- Receber o retorno
- Validar se o retorno está coerente
- Solicitar nova geração, se necessário
- Enviar a peça gerada para validação humana

#### 7.3. Exemplos de chamadas

**Para imagem**

Entrada:

> Criar uma imagem quadrada para Instagram sobre automação com IA em empresas, com visual moderno, fundo tecnológico, pessoas usando dashboards e destaque para produtividade.

Saída: imagem gerada, versões alternativas, prompt usado, observações, score de aderência ao briefing.

**Para vídeo**

Entrada:

> Criar vídeo vertical de 30 segundos com narrativa sobre como empresas usam IA para automatizar atendimento.

Saída: vídeo gerado, cenas, texto na tela, legenda, thumbnail sugerida, score de aderência.

#### 7.4. Tela relacionada

**Tela: Geração Automatizada**

- Tipo de mídia
- Ferramenta selecionada
- Prompt gerado
- Prompt editável
- Número de variações
- Estilo visual
- Formato
- Duração
- Botão "Gerar"
- Preview das versões
- Botão "Aprovar versão"
- Botão "Gerar novamente"
- Botão "Enviar para ajustes manuais"

---

### 8. Agente 4 — Agendamento e Publicação

#### 8.1. Objetivo

Recebe peças aprovadas e gerencia a publicação programada nas redes sociais. Permite ao humano escolher datas, horários, redes e variações.

#### 8.2. Entrada

Peça final aprovada, legenda final, rede de destino, data desejada, horário sugerido, hashtags, CTA, link, tags, campanha associada.

#### 8.3. O que a IA faz

A IA pode ajudar com: sugestão de melhor horário e dia, alerta de conflito de calendário, alerta de excesso de posts no mesmo dia, alerta de baixa aderência ao horário escolhido, sugestão de redistribuição entre redes, recomendação de frequência ideal, análise de sazonalidade, análise por rede social.

#### 8.4. Publicação por rede

A plataforma deve respeitar as diferenças e limitações de cada API.

- A **Meta** oferece recursos via Graph API e Instagram Platform para acesso a dados e insights de contas profissionais.
- O **TikTok** possui API for Business com documentação para relatórios e métricas de performance, incluindo relatórios por ativos criativos e contas de negócio.
- O **LinkedIn** disponibiliza APIs de Marketing para gestão, relatórios e analytics, incluindo Ad Analytics e métricas de performance, com algumas limitações e atrasos em métricas demográficas e de vídeo.

#### 8.5. Tela: Calendário de Publicação

- Visualização mensal, semanal e diária
- Filtros por rede, campanha e status
- Cards de posts agendados
- Cores por rede social
- Indicador de status

**Status possíveis**: Rascunho, Em produção, Aguardando aprovação, Aprovado, Agendado, Publicado, Erro na publicação, Cancelado, Reagendar.

**Campos do agendamento**: Conteúdo, Rede social, Data, Horário, Fuso horário, Legenda, Arquivo da peça, CTA, Link, Hashtags, Responsável, Campanha, Objetivo, Aprovação final, Botão "Agendar", Botão "Publicar agora", Botão "Salvar rascunho".

#### 8.6. Tela: Fila de Publicação

Mostra tudo o que está pronto para entrar no ar.

**Colunas**: Data, Hora, Rede, Nome do conteúdo, Formato, Responsável, Status, Score preditivo, Última aprovação, Ação.

**Ações**: Editar, Reagendar, Cancelar, Publicar agora, Visualizar preview, Duplicar para outra rede.

---

### 9. Agente 5 — Monitoramento de Performance

#### 9.1. Objetivo

Acompanha o desempenho das publicações depois que elas entram no ar. Coleta métricas por post, rede, campanha, formato, tema e período.

#### 9.2. Entrada

ID da publicação, rede social, data de publicação, formato, tema, campanha, público-alvo, objetivo, conteúdo publicado.

#### 9.3. Frequência de coleta

A coleta pode ocorrer em janelas: 1h, 3h, 6h, 12h, 24h, 48h, 7 dias e 30 dias após a publicação. Algumas redes entregam performance rapidamente, enquanto outras têm cauda longa.

#### 9.4. KPIs gerais

**Alcance e exposição**: alcance, impressões, visualizações, pessoas únicas alcançadas, frequência média, crescimento de alcance por período.

**Engajamento**: curtidas, comentários, compartilhamentos, salvamentos, reações, cliques, respostas, menções, taxa de engajamento por alcance, taxa de engajamento por impressão.

**Vídeo**: visualizações, visualizações de 3s e 5s, visualizações completas, tempo médio de exibição, retenção média, retenção nos primeiros segundos, taxa de conclusão, replays, queda por trecho do vídeo.

**Carrossel**: impressões, alcance, salvamentos, compartilhamentos, cliques no perfil, taxa de avanço entre slides (quando disponível), engajamento por slide (quando disponível).

**Conversão**: cliques no link, CTR, leads, cadastros, compras, downloads, inscrições, conversão por rede, conversão por campanha, custo por resultado (se houver mídia paga).

**Comunidade**: novos seguidores, perda de seguidores, crescimento líquido, comentários positivos, comentários negativos, dúvidas frequentes, sentimento geral, principais temas comentados.

**Marca**: menções, compartilhamentos qualificados, comentários de autoridade, reações de influenciadores ou parceiros, sentimento de marca, associação com temas estratégicos.

#### 9.5. KPIs por rede

**Instagram**: alcance, impressões, curtidas, comentários, compartilhamentos, salvamentos, visitas ao perfil, cliques no link da bio, visualizações de Reels, tempo médio de visualização, retenção de Reels, respostas aos stories, toques para avançar/voltar, saídas dos stories.

**TikTok**: visualizações, tempo médio assistido, taxa de conclusão, curtidas, comentários, compartilhamentos, salvamentos, novos seguidores, retenção nos primeiros segundos, origem do tráfego, performance por som/trend, taxa de replay.

**LinkedIn**: impressões, cliques, reações, comentários, compartilhamentos, taxa de engajamento, novos seguidores, cliques no perfil, cliques no link, demografia profissional (quando disponível), performance por cargo, setor ou senioridade (quando disponível). As métricas profissionais do LinkedIn podem ter atrasos e restrições — a documentação informa que métricas demográficas podem sofrer atraso de 12 a 24 horas, e métricas de vídeo como tempo assistido podem atrasar até 48 horas.

**Facebook**: alcance, impressões, reações, comentários, compartilhamentos, cliques, visualizações de vídeo, retenção, crescimento de seguidores, cliques em links, engajamento por tipo de post.

#### 9.6. Tela: Performance por Publicação

- Nome do conteúdo
- Rede
- Data e hora de publicação
- Formato
- Campanha
- Objetivo
- Peça publicada
- Legenda
- Link da publicação
- KPIs principais
- Gráfico de evolução
- Comentários coletados
- Sentimento dos comentários
- Score real de performance
- Comparativo com score previsto
- Aprendizados gerados
- Recomendações futuras

#### 9.7. Tela: Dashboard Geral de KPIs

**Visão executiva**: total de posts publicados, alcance total, impressões totais, engajamento total, taxa média de engajamento, crescimento de seguidores, melhor rede, melhor formato, melhor tema, melhor horário, melhor post, pior post, tendência de crescimento.

**Filtros**: período, rede, campanha, tema, formato, objetivo, persona, status, responsável.

**Rankings**: top 10 posts por alcance, engajamento, salvamentos, compartilhamentos, conversão; piores desempenhos; maiores desvios entre previsão e resultado.

**Gráficos**: evolução de alcance, evolução de engajamento, performance por rede, formato, tema, horário, dia da semana, CTA, tipo de gancho.

---

### 10. Agente 6 — Preditivo e de Aprendizado Contínuo

#### 10.1. Objetivo

Fecha o ciclo de inteligência da plataforma. Usa os dados coletados pelo Agente de Monitoramento para melhorar os próximos planejamentos. Consultado principalmente pelo Agente 1, no início do fluxo, mas também pelos Agentes de Agendamento e Desdobramento por Rede.

#### 10.2. O que ele analisa

Histórico de posts, temas com melhor desempenho, ganchos mais fortes, formatos mais eficientes, horários com maior resultado, redes com maior tração, público mais responsivo, relação entre objetivo e resultado, diferença entre previsão e resultado real, padrões por cliente, rede e campanha.

#### 10.3. Como a IA ajuda

A IA pode identificar padrões que um humano demoraria muito para perceber. Exemplos:

- *"Posts com promessa prática performam melhor no Instagram."*
- *"Vídeos com gancho em forma de pergunta retêm mais no TikTok."*
- *"LinkedIn performa melhor quando o post começa com uma provocação de negócio."*
- *"Posts educativos geram mais salvamentos, mas posts opinativos geram mais comentários."*
- *"Conteúdos sobre IA aplicada ao atendimento têm melhor performance do que conteúdos genéricos sobre IA."*
- *"Publicações às terças e quintas entre 8h e 10h têm melhor desempenho no LinkedIn deste cliente."*

#### 10.4. Score preditivo

Sugestão de composição:

```
Score Preditivo Geral =
  30% aderência ao histórico de temas vencedores
  20% força do gancho
  15% adequação ao formato
  15% adequação à rede
  10% adequação ao horário
  10% clareza do CTA
```

Cada rede pode ter pesos diferentes.

**Exemplo TikTok**: 35% gancho inicial · 25% retenção esperada · 15% aderência a tendências · 10% clareza visual · 10% potencial de compartilhamento · 5% CTA.

**Exemplo LinkedIn**: 30% autoridade do tema · 20% relevância profissional · 15% clareza da tese · 15% potencial de comentários · 10% timing · 10% credibilidade do texto.

#### 10.5. Saída

- Score preditivo geral
- Score por rede
- Justificativa do score
- Riscos identificados
- Recomendações de melhoria
- Melhor horário sugerido
- Melhor formato sugerido
- Temas relacionados recomendados
- Alertas estratégicos
- Aprendizados para o calendário mensal

#### 10.6. Tela: Inteligência Preditiva

- Conteúdo analisado
- Rede selecionada
- Score preditivo
- Probabilidade de alta performance
- Principais fatores positivos
- Principais riscos
- Recomendações da IA
- Comparação com posts semelhantes
- Histórico de conteúdos parecidos
- Botões: "Aplicar recomendações", "Ignorar recomendações", "Gerar nova versão", "Enviar para validação"

---

### 11. Fluxo completo de telas

#### Tela 1 — Calendário Mensal de Conteúdo

Objetivo: visualizar e cadastrar os temas do mês.

Campos: Mês, Semana, Dia, Tema, Título inicial, Objetivo, Rede desejada, Status, Responsável, Campanha, Prioridade.

Ações: Criar novo conteúdo, Editar conteúdo, Enviar para validação, Duplicar conteúdo, Ver score preditivo, Filtrar por rede, Filtrar por status.

#### Tela 2 — Briefing Inicial

Objetivo: entrada detalhada para o Agente 1.

Campos: Título com gancho, Descrição do conteúdo, Descrição da peça, Mini roteiro, Objetivo, Público-alvo, Redes pretendidas, CTA, Hashtags, Link, Observações, Botão "Validar com IA".

#### Tela 3 — Validação Estratégica

Objetivo: mostrar análise do Agente 1.

Componentes: Conteúdo original, Conteúdo sugerido, Score de clareza, Score de tom da marca, Score de engajamento, Score por rede, Recomendações, Alertas, Botões (Aprovar, Editar, Regerar, Reprovar, Enviar para desdobramento).

#### Tela 4 — Desdobramento por Rede

Objetivo: adaptar o conteúdo para cada plataforma.

Componentes: Abas por rede, Texto adaptado, Roteiro por rede, Formato sugerido, CTA por rede, Hashtags, Score por rede, Preview, Botões (Aprovar versão, Editar, Gerar alternativa, Enviar para produção).

#### Tela 5 — Produção Criativa

Objetivo: controlar a criação da peça.

Campos: Nome da peça, Rede, Formato, Briefing visual, Roteiro aprovado, Responsável, Prazo, Modo (Manual / Automático / Híbrido), Upload de arquivo, Link externo, Observações, Status.

Ações: Enviar para produção, Fazer upload, Solicitar geração automática, Validar peça, Solicitar ajustes, Aprovar peça.

#### Tela 6 — Geração Automatizada

Objetivo: acionar ferramentas externas de IA.

Campos: Tipo de mídia, Prompt, Estilo, Duração, Formato, Número de versões, Rede de destino.

Ações: Gerar peça, Visualizar versões, Aprovar versão, Regerar, Enviar para ajustes.

#### Tela 7 — Aprovação Final

Objetivo: última validação antes do agendamento.

Componentes: Preview da peça, Legenda final, Hashtags, CTA, Link, Rede, Score preditivo, Checklist (Peça correta, Texto correto, Rede correta, CTA correto, Horário definido, Aprovação humana).

Ações: Aprovar para agendamento, Solicitar ajuste, Voltar para produção.

#### Tela 8 — Agendamento

Objetivo: programar publicação.

Campos: Rede, Data, Horário, Fuso horário, Legenda, Peça, Hashtags, Link, Campanha, Objetivo, Melhor horário sugerido pela IA, Score do horário.

Ações: Agendar, Publicar agora, Salvar rascunho, Reagendar.

#### Tela 9 — Fila de Publicação

Objetivo: acompanhar posts futuros.

Colunas: Data, Hora, Rede, Conteúdo, Status, Responsável, Score preditivo, Ações.

Ações: Editar, Reagendar, Cancelar, Preview, Publicar agora.

#### Tela 10 — Performance por Post

Objetivo: analisar um conteúdo específico.

Componentes: Preview do post, Link da publicação, KPIs principais, Gráfico de evolução, Comparativo previsto x real, Comentários, Sentimento, Recomendações, Aprendizados.

#### Tela 11 — Dashboard Geral

Objetivo: visão executiva de performance.

Componentes: Alcance total, Impressões totais, Engajamento total, Taxa média de engajamento, Crescimento de seguidores, Melhor rede, Melhor formato, Melhor tema, Melhor horário, Ranking de posts, Gráficos por rede, formato, tema e período.

#### Tela 12 — Central de Aprendizados

Objetivo: mostrar o que a IA aprendeu.

Componentes: Temas vencedores, Ganchos vencedores, Formatos vencedores, Horários vencedores, Redes com melhor resultado, Recomendações para o próximo mês, Alertas, Hipóteses para testar, Botão "Aplicar no próximo calendário".

---

### 12. Estrutura de dados mínima

#### Entidade: Conteúdo

ID, Título, Gancho, Descrição, Mini roteiro, Objetivo, Tema, Campanha, Público-alvo, Status, Criado por, Data de criação, Data planejada.

#### Entidade: Versão por Rede

ID, Conteúdo ID, Rede, Formato, Texto adaptado, Roteiro, CTA, Hashtags, Score, Status.

#### Entidade: Peça Criativa

ID, Conteúdo ID, Rede, Arquivo, Tipo de mídia, Formato, Duração, Dimensão, Status, Responsável, Versão.

#### Entidade: Publicação

ID, Conteúdo ID, Rede, Data agendada, Data publicada, Status, URL do post, ID externo da publicação, Legenda publicada.

#### Entidade: Métrica

ID, Publicação ID, Rede, Data de coleta, Alcance, Impressões, Visualizações, Curtidas, Comentários, Compartilhamentos, Salvamentos, Cliques, Retenção, Conversões, Seguidores ganhos, Sentimento.

#### Entidade: Aprendizado

ID, Cliente, Rede, Tema, Formato, Insight, Confiança, Período analisado, Aplicável a próximos conteúdos.

---

### 13. Regras importantes de produto

#### 13.1. Controle humano sempre presente

A IA recomenda, mas o humano aprova. Isso é essencial para evitar desalinhamento de marca, evitar erros de contexto, evitar publicações inadequadas, preservar estratégia editorial e garantir qualidade.

#### 13.2. Inteligência separada por rede

Todos os agentes devem considerar que cada rede possui público, linguagem, formato, algoritmo, métricas, frequência e tempo de vida do conteúdo diferentes.

#### 13.3. Aprendizado contínuo

A plataforma deve comparar o que a IA previu, o que foi publicado e o que realmente aconteceu. Com isso, melhora o score preditivo.

#### 13.4. Histórico por cliente

Cada cliente deve ter sua própria base de aprendizado. Não se deve aplicar automaticamente o aprendizado de uma marca em outra sem adaptação.

---

### 14. MVP sugerido

**Fase 1 — Planejamento e validação**: calendário mensal, briefing inicial, agente de validação, score simples, aprovação humana.

**Fase 2 — Desdobramento e produção manual**: desdobramento por rede, briefing para criação, upload manual de peças, aprovação final.

**Fase 3 — Agendamento**: calendário de publicação, fila de posts, integração inicial com redes ou exportação manual.

**Fase 4 — Monitoramento**: coleta de KPIs, dashboard por post, dashboard geral.

**Fase 5 — Inteligência preditiva**: score baseado em histórico, recomendações por rede, central de aprendizados.

---

### 15. Resumo conceitual da plataforma

O TechNow Social Engine deve ser uma plataforma que combina:

- Planejamento editorial
- IA generativa
- Inteligência preditiva
- Gestão de produção
- Publicação programada
- Monitoramento de KPIs
- Aprendizado contínuo
- Estratégia personalizada por rede social

A grande diferença competitiva não é apenas automatizar postagens. A diferença é criar um **ciclo de inteligência** onde cada publicação melhora a próxima.

A plataforma aprende:

- Qual tema funciona
- Qual linguagem funciona
- Qual rede responde melhor
- Qual horário performa melhor
- Qual formato gera mais resultado
- Qual tipo de gancho aumenta retenção
- Qual CTA gera mais conversão

Com isso, o TechNow Social Engine se posiciona não como uma ferramenta operacional, mas como um **sistema de inteligência para crescimento de audiência, engajamento e relevância de marca**.

---

## Parte II — Detalhamento avançado dos agentes e uso de IA

> A lógica mais importante da plataforma é esta: cada agente não deve apenas executar uma tarefa. Cada agente deve **aprender, sugerir, comparar, prever e melhorar continuamente** com base nos dados reais de performance de cada rede social.

### 1. Agente de Briefing e Validação Estratégica

**Função principal**: receber a primeira ideia de conteúdo criada pelo Social Media / Community Manager.

**Entrada padrão**:

1. Título com gancho
2. Descrição do conteúdo
3. Descrição da peça visual ou audiovisual
4. Mini roteiro
5. Redes desejadas
6. Objetivo da publicação
7. Data desejada
8. Público-alvo
9. CTA desejado

**Funcionalidades tradicionais (sem IA)**: tela de cadastro e revisão manual; depende muito da experiência humana.

**Como a IA aumenta a potência**: transforma esse agente em um **consultor estratégico de conteúdo**.

#### 1. Força do gancho

A IA avalia se o título chama atenção rapidamente.

- Título fraco: *"ChatGPT nas empresas"*
- Título melhorado: *"Como empresas estão usando ChatGPT para economizar horas de trabalho todos os dias"*

A IA pode testar diferentes tipos de gancho: curiosidade, dor, oportunidade, comparação, alerta, tendência, educativo, provocativo.

#### 2. Clareza da mensagem

A IA verifica se o conteúdo responde rapidamente: sobre o que é o post? Para quem é? Qual problema resolve? Por que alguém deveria parar para consumir? Qual ação a pessoa deve tomar depois?

#### 3. Aderência ao tom da marca

Consulta a Memória Estratégica da Marca. Compara com posts anteriores aprovados, posts com melhor performance, tom de voz definido, palavras preferenciais e proibidas, nível de formalidade, perfil do público, posicionamento.

Exemplo TechNow: tom moderno, consultivo, direto, tecnológico e acessível. A IA evita conteúdo técnico demais, genérico demais, frio demais, publicitário demais ou desalinhado.

#### 4. Validação por rede social

| Rede | Melhor abordagem |
|------|------------------|
| **TikTok** | Gancho rápido, exemplo prático, linguagem direta |
| **Instagram** | Carrossel educativo ou Reels com visual forte |
| **LinkedIn** | Autoridade, mercado, produtividade, negócios |
| **Facebook** | Explicação acessível e chamada para conversa |

#### 5. Scoring inicial

Scores de 0 a 100: clareza, engajamento, aderência à marca, adequação ao público, por rede social, geral de aprovação.

Exemplo:
```
Score geral: 84/100
Instagram: 88/100
TikTok: 71/100
LinkedIn: 92/100
Facebook: 76/100
```

#### 6. Aprendizado com dados reais

O agente consulta o Agente Preditivo e o histórico de performance. Com o tempo, deixa de ser avaliador genérico e passa a ser **avaliador personalizado por cliente e por rede**.

**Saída**: briefing validado, título otimizado, gancho recomendado, descrição revisada, mini roteiro ajustado, objetivo confirmado, redes recomendadas / não recomendadas, sugestão de formato por rede, score por rede, riscos identificados, recomendações de melhoria, status (aprovado / aprovado com ajustes / reprovado).

---

### 2. Agente de Desdobramento por Rede

**Função principal**: pegar o briefing validado e transformar em versões específicas para cada rede social. Evita o erro clássico de publicar exatamente o mesmo conteúdo em todos os canais.

**Como a IA aumenta a potência**: atua como uma **equipe criativa multicanal**, gerando várias versões respeitando linguagem e comportamento de cada rede.

#### Possibilidades por rede

**Instagram**: carrossel, Reels, Stories, legenda curta/longa, CTAs (salvar, comentar, compartilhar), texto e ideia visual por slide, ordem ideal dos slides.

Exemplo de carrossel:
```
Slide 1: O erro que muitas empresas cometem ao usar IA
Slide 2: Usar IA só como chatbot é limitar seu potencial
Slide 3: IA pode automatizar atendimento, vendas e análise de dados
Slide 4: O ganho real está na integração dos processos
Slide 5: Exemplo prático
Slide 6: Como começar
Slide 7: CTA: Salve este post para revisar depois
```

**TikTok**: gancho nos primeiros 3 segundos, texto falado, texto na tela, cenas, ritmo, quebras de atenção, duração ideal, CTA natural, ideias de trends, possível thumbnail.

Exemplo:
```
0s-3s: "Você acha que IA é só ChatGPT? Então sua empresa está
       usando só 10% do potencial."
3s-10s: Mostrar exemplos rápidos de tarefas automatizadas.
10s-25s: Explicar caso prático.
25s-35s: CTA: "Comente IA se quiser ver um exemplo aplicado."
```

**LinkedIn**: post de autoridade, texto opinativo/educativo, mini artigo, carrossel PDF, enquete, chamada para debate, CTA para conversa.

Exemplo:
> A maioria das empresas ainda trata IA como ferramenta de produtividade individual.
>
> O maior ganho, porém, está na automação de processos.
>
> Quando IA se conecta ao atendimento, CRM, marketing e vendas, ela deixa de ser ferramenta e passa a ser infraestrutura operacional.

**Facebook**: texto explicativo, chamada para comentário, post para grupo, conteúdo com pergunta, adaptação mais acessível.

#### IA como geradora de variações

Pode gerar múltiplas opções: mais educativa, mais provocativa, mais emocional, mais técnica, mais curta, mais comercial, mais institucional.

#### IA como avaliadora de formato

Pode sugerir o melhor formato. Exemplo:
> Esse conteúdo tem alta densidade informativa. Recomendação: transformar em carrossel para Instagram e post de autoridade para LinkedIn. Para TikTok, é necessário simplificar e usar um exemplo visual.

---

### 3. Agente de Produção Criativa

**Função**: organizar a produção da peça visual ou audiovisual. Trabalha em três modos:

1. Produção manual
2. Produção automatizada com IA
3. Produção híbrida

#### IA no briefing criativo

Transforma a ideia aprovada em um briefing muito mais claro para o designer.

```
Objetivo da peça:
Mostrar que IA pode automatizar processos empresariais além do
uso básico do ChatGPT.

Formato: Carrossel Instagram, 1080x1350, 7 slides.

Estilo visual: Tecnológico, limpo, moderno, com elementos de
dashboard, fluxos automatizados e pessoas usando tecnologia.

Tom: Consultivo, inovador e acessível.

Cores: Usar paleta oficial da marca.

Texto principal: "IA não é só ferramenta. É motor de produtividade."

Referências: Visual de tecnologia corporativa, automação,
conexões entre sistemas.
```

#### IA na validação da peça

Verifica se a peça respeita o briefing, se o texto está correto, se o CTA aparece, se a proporção e formato estão adequados, se a imagem está poluída, se o texto é legível, se está alinhada com a marca, se há coerência visual/legenda, se o vídeo tem gancho inicial, se demora demais para começar, se o carrossel tem lógica narrativa.

#### IA para controle de qualidade — checklist automático

```
Checklist Instagram Carrossel:
[ ] Slide 1 tem gancho forte
[ ] Texto é legível
[ ] Há progressão lógica
[ ] CTA no último slide
[ ] Visual segue identidade da marca
[ ] Não há excesso de texto
[ ] Formato correto
```

#### IA para versionamento

Pode gerar versões A/B/C/D (institucional, provocativa, educativa, visual) para testes ou escolha humana.

---

### 4. Agente Auxiliar de Orquestração Criativa

**Função**: conectar a plataforma a ferramentas externas de criação. Não é o criador — é o **orquestrador**. Acionado quando o usuário escolhe Produção automática ou híbrida.

#### 1. Escolha automática da ferramenta

```
Imagem estática → ferramenta de imagem
Vídeo curto    → ferramenta de vídeo
Legenda        → LLM
Narração       → ferramenta de voz
Thumbnail      → ferramenta de imagem
Roteiro        → LLM
```

#### 2. Conversão de briefing em prompt técnico

- **Briefing humano**: *"Criar uma imagem sobre empresas usando IA para ganhar produtividade."*
- **Prompt técnico**: *"Criar imagem vertical 1080x1350, estilo tecnológico corporativo, ambiente moderno de escritório, profissionais olhando dashboards de automação, elementos visuais de inteligência artificial, composição limpa, alto contraste, espaço para título no topo, estética premium B2B."*

#### 3. Geração de múltiplas variações

```
Gerar 3 versões:
1. Mais corporativa
2. Mais futurista
3. Mais educativa
```

#### 4. Autoavaliação das peças geradas

Avalia: qual versão está mais aderente, mais clara, com mais potencial de engajamento, mais alinhada com a marca, qual deve seguir para aprovação humana.

#### 5. Registro do prompt vencedor

A plataforma deve salvar prompt usado, ferramenta usada, versão gerada, resultado final e performance posterior. Assim a IA aprende quais tipos de prompt geram peças que performam melhor.

---

### 5. Agente de Agendamento e Publicação

**Como a IA aumenta a potência**: transforma o agendamento em uma **decisão estratégica**.

#### 1. Sugestão de melhor horário

> Para LinkedIn, posts publicados entre 8h e 10h às terças-feiras tiveram 31% mais impressões.
>
> Para Instagram, Reels entre 18h e 21h tiveram maior taxa de retenção.
>
> Para TikTok, vídeos publicados à noite tiveram maior taxa de conclusão.

#### 2. Prevenção de conflito editorial

Identifica muitos posts no mesmo dia, dois conteúdos parecidos muito próximos, falta de diversidade de temas, excesso comercial, pouco educativo, frequência desequilibrada por rede.

> Alerta: nesta semana há 4 posts comerciais e apenas 1 educativo. Recomenda-se equilibrar com conteúdo de valor.

#### 3. Otimização por objetivo

- Engajamento → horário de maior interação.
- Conversão B2B → horário comercial.
- Visualização em vídeo curto → horários de maior consumo de entretenimento.

#### 4. Publicação adaptada por API

Cada rede tem limitações próprias. A Meta disponibiliza recursos de insights para contas profissionais e mídias do Instagram; o TikTok API for Business possui documentação para relatórios e métricas; e o LinkedIn Marketing API oferece recursos de analytics e relatórios para campanhas e ativos profissionais.

#### 5. Score de agendamento

```
Score de horário: 87/100
Score de frequência: 79/100
Score de adequação à rede: 91/100
Score de risco: baixo
```

---

### 6. Agente de Monitoramento de Performance

**Como a IA aumenta a potência**: transforma **números em interpretação**.

#### 1. Análise automática de resultado

Em vez de só mostrar números:
```
Alcance: 10.000
Curtidas: 400
Comentários: 25
```

A IA interpreta:
> Este post teve alcance acima da média, mas baixa conversão em comentários. Isso indica que o tema atraiu atenção, mas o CTA não estimulou conversa.

#### 2. Comparação com histórico

Compara cada post com média da conta, da rede, do formato, do tema, da campanha, posts similares e score previsto antes da publicação.

> Este Reels performou 42% acima da média de vídeos sobre automação, mas teve retenção 18% abaixo da média nos primeiros 5 segundos.

#### 3. Análise de comentários

Classifica em: positivos, negativos, neutros, dúvidas, oportunidades comerciais, críticas, sugestões, menções a concorrentes, pedidos de contato.

#### 4. Sentimento e intenção

Identifica se as pessoas gostaram, ficaram confusas, pediram mais informações, demonstraram intenção de compra, fizeram perguntas recorrentes, houve resistência ao tema.

> 18% dos comentários mencionam dúvidas sobre preço ou implementação. Recomendação: criar um próximo conteúdo explicando como começar.

#### 5. Detecção de padrões de queda

> A maior queda de audiência aconteceu nos primeiros 4 segundos. O gancho visual precisa ser mais forte.

---

### 7. Agente Preditivo e de Aprendizado Contínuo

> Um dos agentes mais importantes do TechNow Social Engine. Ele aprende com os resultados reais e ajuda os outros agentes a tomarem decisões melhores.

Consultado por: Agente de Briefing, Desdobramento, Agendamento e Produção.

#### 1. Identificação de padrões

> Temas de automação geram mais comentários no LinkedIn.
> Vídeos com exemplos práticos performam melhor no TikTok.
> Carrosséis com listas performam melhor no Instagram.
> Posts comerciais em excesso reduzem engajamento no Facebook.

#### 2. Previsão de performance

Probabilidades antes de publicar: alto engajamento, alto alcance, baixa retenção, gerar comentários, salvamentos, cliques.

#### 3. Score preditivo por rede

Conteúdo: *"Como usar IA no atendimento ao cliente"*

```
Instagram: 86/100 — bom potencial educativo e formato carrossel recomendado.
TikTok:    74/100 — tema bom, mas precisa de exemplo visual rápido.
LinkedIn:  91/100 — alta aderência ao público profissional e potencial de autoridade.
Facebook:  69/100 — precisa de linguagem mais acessível e chamada mais comunitária.
```

#### 4. Sugestão de otimização

> Para aumentar o score no TikTok, transforme o início em uma pergunta direta.
>
> Sugestão: "Você sabia que sua empresa pode perder vendas por demorar a responder clientes?"

#### 5. Aprendizado por rede, cliente e objetivo

Cada rede tem público, algoritmo, formato, tempo de consumo e tipo de engajamento diferentes — modelos/regras devem ser separados.

A IA também aprende por cliente (tecnologia B2B vs. escola, e-commerce, jornalismo, saúde, varejo, influenciador, startup, marca institucional) e por objetivo (alcance, engajamento, autoridade, conversão, relacionamento, reputação, educação, lançamento).

> Um post com poucas curtidas, mas muitos leads, pode ser excelente se o objetivo era conversão.

---

### 8. Agente de Inteligência de Tendências (adicional)

**Função**: monitorar tendências externas para enriquecer o planejamento.

**Por que é importante**: o Social Engine não deve aprender apenas com dados internos. Deve olhar para o mercado: temas em alta, notícias relevantes, tendências de IA, tendências de tecnologia, hashtags, formatos populares, movimentos de concorrentes, datas comemorativas, assuntos emergentes.

**Exemplo**:
> Tendência detectada: empresas estão falando sobre agentes de IA para atendimento.
>
> Sugestão: criar post para LinkedIn explicando como agentes autônomos reduzem tempo de resposta.
>
> Formato recomendado: carrossel ou post de autoridade.

**Funcionalidades**: monitoramento de temas do setor, análise de concorrentes, detecção de oportunidades, sugestão de posts, associação tendência ↔ produto, priorização por potencial de engajamento, alerta de oportunidade rápida.

---

### 9. Agente de Comunidade e Interação (adicional)

**Função**: ajudar a marca a responder, interagir e transformar comentários em relacionamento.

**Como a IA pode ajudar**: classificar comentários, sugerir respostas, identificar oportunidades comerciais, detectar crises, priorizar interações importantes, encaminhar leads para vendas, gerar FAQ a partir dos comentários, sugerir novos posts com base nas dúvidas.

**Exemplo**:

Comentário: *"Isso funciona para pequenas empresas?"*

Resposta sugerida pela IA:
> Sim. Pequenas empresas podem começar automatizando tarefas simples, como respostas frequentes, captação de leads e acompanhamento de clientes. O ideal é começar por um processo repetitivo e medir o ganho.

---

### 10. Agente de Governança e Compliance (adicional)

**Função**: garantir que o conteúdo não tenha riscos de marca, jurídicos, reputacionais ou regulatórios.

**O que verifica**: linguagem inadequada, promessas exageradas, uso indevido de marca, afirmações sem base, conteúdo sensível, risco jurídico/reputacional, termos proibidos pelo cliente, inconsistência institucional.

**Exemplo**:
> Alerta: o texto promete "aumentar vendas automaticamente", o que pode soar como promessa absoluta.
>
> Sugestão: substituir por "pode ajudar a aumentar a eficiência comercial".

---

### 11. Como os agentes se conectam

```
1. Calendário mensal
   ↓
2. Agente de Inteligência de Tendências
   ↓
3. Agente de Briefing e Validação Estratégica
   ↓
4. Agente Preditivo
   ↓
5. Agente de Desdobramento por Rede
   ↓
6. Agente de Produção Criativa
   ↓
7. Agente Auxiliar de Orquestração Criativa
   ↓
8. Agente de Governança e Compliance
   ↓
9. Agente de Agendamento e Publicação
   ↓
10. Agente de Monitoramento
    ↓
11. Agente de Comunidade
    ↓
12. Agente Preditivo aprende e retroalimenta o início
```

---

### 12. Vantagem competitiva

O diferencial não é apenas criar posts. É criar um **sistema que aprende continuamente**. A plataforma deve responder:

- Qual tema gera mais engajamento para este cliente?
- Qual formato funciona melhor em cada rede?
- Qual horário aumenta alcance?
- Qual gancho melhora retenção?
- Qual CTA gera mais comentários?
- Qual tipo de post gera seguidores?
- Qual conteúdo aproxima a marca da audiência?
- Qual conteúdo gera oportunidade comercial?

---

### 13. Versão final da arquitetura de agentes

1. Agente de Inteligência de Tendências
2. Agente de Briefing e Validação Estratégica
3. Agente Preditivo e de Aprendizado Contínuo
4. Agente de Desdobramento por Rede
5. Agente de Produção Criativa
6. Agente Auxiliar de Orquestração Criativa
7. Agente de Governança e Compliance
8. Agente de Agendamento e Publicação
9. Agente de Monitoramento de Performance
10. Agente de Comunidade e Interação

Cobre: estratégia, tendências, validação, criação, produção, publicação, monitoramento, comunidade, aprendizado e governança.

---

## Parte III — Matriz de Agentes, Entradas, IA, Saídas, Telas, Dados e KPIs

### 1. Visão geral da matriz

| Nº | Agente | Papel central |
|----|--------|---------------|
| 1 | Inteligência de Tendências | Descobrir oportunidades externas de conteúdo |
| 2 | Briefing e Validação Estratégica | Validar a ideia inicial e melhorar o briefing |
| 3 | Preditivo e de Aprendizado Contínuo | Prever performance e retroalimentar o ciclo |
| 4 | Desdobramento por Rede | Adaptar o conteúdo para cada plataforma |
| 5 | Produção Criativa | Organizar a criação manual, automática ou híbrida |
| 6 | Orquestração Criativa | Acionar ferramentas externas de IA |
| 7 | Governança e Compliance | Validar riscos de marca, linguagem e promessas |
| 8 | Agendamento e Publicação | Agendar e publicar nas redes |
| 9 | Monitoramento de Performance | Coletar métricas e interpretar desempenho |
| 10 | Comunidade e Interação | Analisar comentários, sugerir respostas e gerar insights |

---

### 2. Matriz detalhada por agente

#### Agente 1 — Inteligência de Tendências

**Objetivo**: identificar temas, oportunidades, movimentos de mercado e tendências que possam alimentar o calendário editorial.

**Entrada**

| Campo | Descrição |
|-------|-----------|
| Segmento do cliente | Ex: tecnologia, educação, varejo, saúde |
| Produtos/serviços | O que a empresa vende ou comunica |
| Público-alvo | Persona ou audiência principal |
| Redes prioritárias | Instagram, TikTok, LinkedIn, Facebook etc. |
| Concorrentes | Empresas ou perfis a monitorar |
| Palavras-chave | Termos estratégicos para busca |
| Datas importantes | Eventos, lançamentos, campanhas |
| Objetivo do mês | Engajamento, awareness, leads, autoridade etc. |

**Processamento com IA**

| Capacidade | Como funciona |
|------------|---------------|
| Monitorar tendências | Identifica assuntos em alta no setor |
| Analisar concorrentes | Observa temas, formatos e abordagens recorrentes |
| Detectar oportunidades | Sugere conteúdos com potencial de relevância |
| Cruzar tendência com marca | Verifica se o assunto faz sentido para o cliente |
| Classificar urgência | Define se o tema é imediato, sazonal ou evergreen |
| Sugerir formatos | Indica se o tema combina com vídeo, carrossel, post, artigo etc. |
| Sugerir rede ideal | Decide onde o tema teria mais força |
| Criar hipóteses | Ex: "este tema pode gerar bons comentários no LinkedIn" |

**Saída**

| Saída | Descrição |
|-------|-----------|
| Lista de tendências | Temas relevantes encontrados |
| Oportunidades de conteúdo | Ideias prontas para entrar no calendário |
| Score de relevância | Nota de 0 a 100 |
| Rede recomendada | Onde o conteúdo pode performar melhor |
| Formato recomendado | Carrossel, Reels, TikTok, post textual etc. |
| Urgência | Baixa, média ou alta |
| Justificativa | Por que vale produzir esse conteúdo |
| Sugestão de gancho | Ideia inicial de título ou abordagem |

**Tela: Central de Tendências**

| Componente | Função |
|------------|--------|
| Filtro por segmento | Escolher área de atuação |
| Filtro por rede | Ver tendências por plataforma |
| Filtro por urgência | Separar tendências imediatas de evergreen |
| Lista de tendências | Cards com temas sugeridos |
| Score de oportunidade | Mostra potencial estimado |
| Botão "Adicionar ao calendário" | Transforma tendência em pauta |
| Botão "Ignorar" | Remove sugestão |
| Botão "Gerar briefing" | Envia para o Agente de Briefing |
| Campo de observações | Permite comentário humano |

**Dados salvos**: tendência identificada, fonte/tema, rede recomendada, score de relevância, decisão humana, resultado posterior.

**KPIs**: tendências aceitas, tendências publicadas, performance das tendências, taxa de acerto, tempo de reação.

---

#### Agente 2 — Briefing e Validação Estratégica

**Objetivo**: receber a ideia inicial do conteúdo e validar se ela está clara, forte, alinhada à marca e com potencial de engajamento.

**Entrada**

| Campo | Descrição |
|-------|-----------|
| Título com gancho | Frase inicial para chamar atenção |
| Descrição do conteúdo | O que deve ser comunicado |
| Descrição da peça | Como será a imagem, vídeo ou carrossel |
| Mini roteiro | Estrutura básica do conteúdo |
| Redes desejadas | Onde será publicado |
| Objetivo | Alcance, engajamento, conversão, autoridade etc. |
| Público-alvo | Persona ou segmento |
| CTA desejado | Ação esperada |
| Data desejada | Dia planejado para publicação |
| Campanha | Campanha relacionada |
| Observações | Informações adicionais |

**Processamento com IA**

| Capacidade | Como funciona |
|------------|---------------|
| Avaliar clareza | Verifica se a ideia é compreensível |
| Melhorar gancho | Sugere títulos mais fortes |
| Validar tom de voz | Compara com a memória da marca |
| Verificar objetivo | Confere se o conteúdo combina com a meta |
| Analisar potencial de engajamento | Estima chance de curtidas, comentários, salvamentos |
| Identificar riscos | Detecta conteúdo genérico, confuso ou desalinhado |
| Consultar histórico | Usa dados de posts anteriores |
| Comparar por rede | Avalia se a ideia faz sentido para cada plataforma |
| Sugerir melhorias | Propõe ajustes de texto, roteiro e formato |

**Saída**: briefing validado, título otimizado, descrição revisada, mini roteiro ajustado, score de clareza/tom de marca/engajamento/por rede, alertas, recomendações, status (aprovado / revisar / reprovado).

**Tela: Briefing Inicial e Validação** — campo de título, descrição, mini roteiro; seleção de redes e objetivo; campo de CTA; botão "Validar com IA"; painel de scores; bloco de sugestões; comparador antes/depois; botões Aprovar/Editar/Regerar.

**Dados salvos**: briefing original e ajustado, scores, sugestões aceitas/rejeitadas, status, responsável.

**KPIs**: taxa de aprovação de briefings, tempo médio de validação, sugestões aceitas, correlação score x performance, conteúdos reprovados.

---

#### Agente 3 — Preditivo e Aprendizado Contínuo

**Objetivo**: prever a performance futura de conteúdos e aprender com resultados reais para melhorar todo o ciclo.

**Entrada**: briefing validado, histórico de posts, rede social, formato, horário pretendido, objetivo, tema, público-alvo, KPIs anteriores, dados da marca.

**Processamento com IA**

| Capacidade | Como funciona |
|------------|---------------|
| Identificar padrões | Descobre o que funcionou antes |
| Comparar posts similares | Busca conteúdos parecidos no histórico |
| Prever engajamento | Estima chance de boa performance |
| Prever alcance | Estima potencial de distribuição |
| Prever retenção | Principalmente para vídeos |
| Avaliar timing | Analisa dia e horário |
| Avaliar formato | Verifica se o formato combina com a rede |
| Medir risco | Detecta chance de baixa performance |
| Sugerir otimizações | Recomenda ajustes no gancho, CTA ou formato |
| Aprender com erro | Compara previsão com resultado real |

**Saída**: score preditivo geral, score por rede, probabilidade de bom desempenho, posts similares, fatores positivos, riscos, melhor horário/formato sugeridos, recomendações, hipóteses de teste.

**Tela: Inteligência Preditiva** — score geral, score por rede, fatores positivos, riscos, posts similares, melhor horário/formato; botões "Aplicar recomendações", "Ignorar", "Enviar para validação".

**Dados salvos**: score previsto, justificativa, recomendações dadas/aceitas, resultado posterior, erro de previsão.

**KPIs**: acurácia do score, diferença previsto x real, aumento de performance após recomendação, taxa de aceitação, performance por tema/horário/formato.

---

#### Agente 4 — Desdobramento por Rede

**Objetivo**: transformar um conteúdo aprovado em versões específicas para cada rede social.

**Entrada**: briefing validado, título aprovado, mini roteiro, redes selecionadas, objetivo, tom de voz, score preditivo, público por rede.

**Processamento com IA**: adaptar linguagem, adaptar formato, criar roteiros, criar legendas, criar CTAs, criar hashtags, gerar variações, otimizar gancho, aplicar histórico.

**Saída**: versão Instagram (legenda, carrossel, Reels ou stories), versão TikTok (roteiro curto, cenas, texto na tela), versão LinkedIn (post profissional, artigo ou enquete), versão Facebook (texto acessível e conversacional), CTA por rede, hashtags por rede, score por versão, briefing visual por rede, status por rede.

**Tela: Desdobramento por Rede** — abas por rede, preview de legenda, preview de roteiro, estrutura de carrossel, score por rede, botões "Gerar alternativa", "Aprovar versão", "Editar", "Remover rede".

**Dados salvos**: versões geradas, rede associada, versão aprovada, versões rejeitadas, score por versão, alterações humanas.

**KPIs**: performance por rede/formato, engajamento por CTA, retenção por roteiro, salvamentos em carrossel, comentários em LinkedIn.

---

#### Agente 5 — Produção Criativa

**Objetivo**: gerenciar a criação da peça final, seja manual, automática ou híbrida.

**Entrada**: versão aprovada por rede, briefing visual, formato, dimensão, duração, identidade visual, referências, prazo, responsável.

**Processamento com IA**: gerar briefing criativo, criar checklist, validar peça enviada, conferir formato, verificar legibilidade, verificar coerência, sugerir ajustes, criar versões alternativas (quando integrado a IA criativa), avaliar aderência à marca.

**Saída**: peça final, checklist de qualidade, score de aderência ao briefing, score de aderência visual, ajustes solicitados, status de produção, arquivos finais.

**Tela: Produção Criativa** — briefing criativo, upload de arquivo, link externo, seleção de modo, responsável, prazo, validação com IA, preview, botões "Aprovar", "Solicitar ajuste".

**Dados salvos**: arquivo produzido, versão da peça, responsável, checklist, score visual, ajustes pedidos, tempo de produção.

**KPIs**: tempo médio de produção, taxa de aprovação na primeira versão, número de revisões, performance por estilo visual e formato, correlação score visual x performance.

---

#### Agente 6 — Orquestração Criativa

**Objetivo**: acionar ferramentas externas de IA para gerar peças automaticamente ou apoiar produção híbrida.

**Entrada**: briefing criativo, tipo de mídia, rede social, estilo visual, duração, dimensão, número de variações, restrições da marca.

**Processamento com IA**: escolher ferramenta, transformar briefing em prompt, gerar variações, avaliar resultados, regerar automaticamente, registrar prompt, recomendar melhor versão, enviar para validação humana.

**Saída**: peças geradas, prompts usados, ferramenta utilizada, versões alternativas, score por versão, versão recomendada, status.

**Tela: Geração Automatizada** — campo de prompt, seleção de ferramenta, tipo de mídia, número de variações, estilo visual, botão "Gerar", galeria de resultados, score por versão, botões "Aprovar"/"Regerar"/"Enviar para produção manual".

**Dados salvos**: prompt, ferramenta, resultado gerado, versão escolhida, versões descartadas, performance posterior.

**KPIs**: taxa de aprovação de peças geradas, tempo economizado, performance das peças geradas, custo por geração, número de regerações, prompt com melhor resultado.

---

#### Agente 7 — Governança e Compliance

**Objetivo**: garantir que o conteúdo esteja seguro, adequado, coerente e sem riscos para a marca.

**Entrada**: texto final, peça final, roteiro, marca, termos proibidos, setor, rede social, objetivo.

**Processamento com IA**: detectar promessas exageradas, verificar tom inadequado, detectar risco reputacional, conferir termos proibidos, validar coerência, sugerir ajustes seguros, classificar risco (baixo/médio/alto), criar justificativa.

**Saída**: status de compliance (aprovado/revisar/bloqueado), nível de risco, pontos de atenção, sugestões de correção, versão segura, checklist final.

**Tela: Revisão de Governança** — preview do post, checklist de risco, nível de risco, trechos sinalizados, sugestões da IA, botões "Aplicar correções", "Aprovar mesmo assim", "Bloquear".

**Dados salvos**: risco detectado, decisão tomada, sugestões aceitas, conteúdo bloqueado, responsável pela aprovação, motivo do bloqueio.

**KPIs**: taxa de conteúdos bloqueados, taxa de ajustes por compliance, tempo de aprovação, categorias de risco, incidentes evitados.

---

#### Agente 8 — Agendamento e Publicação

**Objetivo**: programar e publicar conteúdos nas redes sociais, respeitando horário, formato, rede, objetivo e estratégia.

**Entrada**: peça aprovada, legenda final, rede social, data desejada, horário desejado, CTA, hashtags, link, campanha, score preditivo.

**Processamento com IA**: sugerir melhor horário, verificar conflito, avaliar frequência, sugerir redistribuição, avaliar objetivo, alertar risco, publicar automaticamente (via API quando disponível), confirmar publicação, reagendar se houver erro.

**Saída**: post agendado, status, ID interno, ID externo, link da publicação, score de agendamento, alertas, logs.

**Tela: Calendário e Fila de Publicação** — calendário mensal/semanal, filtros por rede e status, card de post, campos de data e horário, melhor horário sugerido, score do horário, botões "Agendar", "Publicar agora", "Reagendar".

**Dados salvos**: data agendada/publicada, rede, status, ID externo, erros, horário sugerido vs escolhido.

**KPIs**: posts publicados no prazo, erros de publicação, performance por horário e dia da semana, diferença horário sugerido x escolhido, frequência por rede.

---

#### Agente 9 — Monitoramento de Performance

**Objetivo**: coletar os KPIs das publicações e transformar dados em aprendizados.

**Entrada**: ID da publicação, ID externo, rede, data publicada, formato, objetivo, tema, campanha.

**Processamento com IA**: coletar métricas, normalizar KPIs, comparar com histórico, interpretar resultado, comparar previsto x real, detectar anomalias, analisar comentários, gerar recomendações, alimentar aprendizado.

**Saída**: relatório por post, KPIs coletados, interpretação, comparativo histórico, previsto x realizado, aprendizados, recomendações, alertas.

**Tela: Performance por Publicação** — preview do post, link da publicação, KPIs principais, gráfico temporal, comparativo com média, previsto x real, comentários, sentimento, recomendações, botão "Criar novo conteúdo a partir deste insight".

**Dados salvos**: métricas por janela, resultado consolidado, comentários, sentimento, insights, comparativo previsto x real, recomendações.

**KPIs por categoria**

| Categoria | KPIs |
|-----------|------|
| Alcance | Alcance, impressões, visualizações |
| Engajamento | Curtidas, comentários, compartilhamentos, salvamentos |
| Vídeo | Retenção, tempo médio, conclusão, replay |
| Conversão | Cliques, CTR, leads, cadastros, compras |
| Comunidade | Novos seguidores, sentimento, dúvidas, oportunidades |
| Marca | Menções, comentários qualificados, percepção positiva |

---

#### Agente 10 — Comunidade e Interação

**Objetivo**: ajudar a marca a gerenciar comentários, mensagens, dúvidas e oportunidades surgidas após a publicação.

**Entrada**: comentários, mensagens (quando disponíveis), post relacionado, rede social, tom da marca, política de resposta, histórico do usuário, objetivo comercial.

**Processamento com IA**: classificar comentários (dúvida, elogio, crítica, lead etc.), analisar sentimento, sugerir respostas, priorizar interações, detectar crise, identificar leads, gerar FAQ, sugerir novos conteúdos, encaminhar para vendas.

**Saída**: comentários classificados, respostas sugeridas, alertas de crise, leads identificados, dúvidas recorrentes, sugestões de novos posts, sentimento geral.

**Tela: Central de Comunidade** — caixa de comentários, filtros por sentimento e intenção, resposta sugerida, botões "Responder", "Enviar para vendas", "Criar pauta", alerta de crise, histórico do post.

**Dados salvos**: comentários, classificação, respostas aprovadas/rejeitadas, leads, crises, dúvidas frequentes.

**KPIs**: tempo médio de resposta, taxa de resposta, sentimento médio, leads identificados, dúvidas recorrentes, comentários negativos resolvidos, engajamento em respostas.

---

### 3. Matriz resumida geral

| Agente | Entrada | IA faz | Saída | Tela principal |
|--------|---------|--------|-------|----------------|
| Inteligência de Tendências | Mercado, segmento, concorrentes | Detecta oportunidades | Ideias e tendências | Central de Tendências |
| Briefing e Validação | Título, descrição, roteiro | Valida clareza, tom e potencial | Briefing otimizado | Briefing Inicial |
| Preditivo | Histórico e conteúdo | Prevê performance | Scores e recomendações | Inteligência Preditiva |
| Desdobramento | Briefing aprovado | Adapta por rede | Versões por canal | Desdobramento por Rede |
| Produção Criativa | Roteiro e briefing visual | Organiza e valida peça | Peça aprovada | Produção Criativa |
| Orquestração Criativa | Briefing e prompt | Aciona IAs externas | Peças geradas | Geração Automatizada |
| Governança | Conteúdo final | Checa riscos | Aprovação ou ajustes | Revisão de Governança |
| Agendamento | Peça e legenda | Sugere horário e agenda | Post programado | Calendário/Fila |
| Monitoramento | Post publicado | Coleta e interpreta KPIs | Relatórios e insights | Performance por Post |
| Comunidade | Comentários e mensagens | Classifica e sugere respostas | Interações e pautas | Central de Comunidade |

---

### 4. Dados centrais da plataforma

#### Cliente
ID · Nome · Segmento · Tom de voz · Público-alvo · Produtos · Concorrentes · Redes conectadas · Regras de marca

#### Conteúdo
ID · Cliente · Título · Gancho · Descrição · Mini roteiro · Objetivo · Tema · Campanha · Status · Criador · Data planejada

#### Versão por Rede
ID · Conteúdo · Rede · Formato · Legenda · Roteiro · CTA · Hashtags · Score · Status

#### Peça Criativa
ID · Conteúdo · Rede · Arquivo · Tipo · Dimensão · Duração · Versão · Responsável · Status

#### Publicação
ID · Conteúdo · Rede · Data agendada · Data publicada · Status · ID externo · URL · Erro (se houver)

#### Métrica
ID · Publicação · Rede · Data de coleta · Alcance · Impressões · Visualizações · Curtidas · Comentários · Compartilhamentos · Salvamentos · Cliques · Retenção · Conversões · Seguidores ganhos

#### Insight
ID · Cliente · Rede · Tema · Formato · Insight · Confiança · Fonte · Período · Aplicável ao próximo planejamento

---

### 5. Como a IA deve aprender com o tempo

O aprendizado precisa acontecer em **5 camadas**.

**1. Aprendizado por cliente** — a IA aprende o que funciona para cada marca individualmente.
> Para a TechNow, conteúdos sobre automação aplicada a vendas geram mais comentários no LinkedIn.

**2. Aprendizado por rede** — cada rede se comporta de forma diferente.
> No TikTok, vídeos com exemplo prático nos primeiros 5 segundos performam melhor.

**3. Aprendizado por formato** — qual formato gera melhor resultado.
> Carrosséis educativos geram mais salvamentos no Instagram.

**4. Aprendizado por objetivo** — o sucesso depende da meta.
> Posts de autoridade podem não gerar muitos cliques, mas fortalecem percepção de marca.

**5. Aprendizado por decisão humana** — a IA aprende com o que o humano aprova, edita ou rejeita.
> O cliente prefere linguagem consultiva e rejeita chamadas muito agressivas.

---

### 6. Fluxo ideal de funcionamento

1. Tendências são identificadas
2. Social Media monta calendário mensal
3. Briefing é criado
4. IA valida e melhora o briefing
5. Agente preditivo calcula potencial
6. Conteúdo é desdobrado por rede
7. Peças são produzidas manualmente, por IA ou de forma híbrida
8. Governança valida riscos
9. Publicação é agendada
10. Post é publicado
11. KPIs são monitorados
12. Comentários são analisados
13. Insights são gerados
14. Agente preditivo aprende
15. Próximo calendário já nasce mais inteligente
