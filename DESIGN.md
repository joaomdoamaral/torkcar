# Tork Car Center — Design System
> Box de oficina à noite, um carro sob a luz e uma linha vermelha no horizonte. Preto profundo, vermelho metálico do logo, tipografia larga e inclinada que anda rápido.

**Tema:** escuro (com uma faixa clara para informação densa)
**Slogan:** *A solução do seu carro em um lugar!*
**Serviços:** Mecânica · Ar-condicionado · Elétrica · Estética Automotiva

---

## 1. De onde vem este sistema

Este DESIGN.md é um mix de três referências do [Refero Styles](https://styles.refero.design/), filtradas pelo que a Tork precisa: **parecer premium como uma montadora e converter como uma loja.**

| Referência | O que herdamos | O que descartamos |
|---|---|---|
| **[Ferrari](https://styles.refero.design/style/80164adf-a898-4f7c-bce7-12f3f62e1649)** | Fundo preto "void", fotografia full-bleed, micro-labels em maiúsculas com tracking largo, divisores hairline, zero sombra. | Tipografia sussurrada (máx. 16px) e ausência de CTA. Oficina precisa ser lida em 2 segundos. |
| **[Lamborghini](https://styles.refero.design/style/c9c5be5a-aaa1-4338-9681-8378d2e24fbd)** | Display monolítico em MAIÚSCULAS de 64–112px, cantos 0px, "uma única cor por tela", cabeçalho de seção em duas colunas (título ← → link). | Amarelo Giallo, que vira Vermelho Tork. Também o peso único: o logo da Tork é pesado e itálico. |
| **[Peloton](https://styles.refero.design/style/355e8465-df7d-486a-9d76-2ace37d076a2)** | Botão de ação vermelho **preenchido** (a conversão), botão fantasma par, ritmo palco escuro → catálogo claro, cards de produto (aqui: serviços), inputs com foco vermelho e widget fixo de atendimento. | Raios arredondados de 24–28px e títulos peso 300, que brigam com a agressividade do logo. |

**Regra-mãe:** o preto e o branco fazem a estrutura. O vermelho aparece **só** onde há ação ou marca, como a linha vermelha que corta o logo.

---

## 2. Princípios

1. **Palco escuro, carro em foco.** Todo hero é preto com fotografia de baixa luz. A interface recua e o trabalho da oficina aparece.
2. **Um vermelho por tela.** O vermelho preenchido aparece em no máximo **um** elemento dominante por viewport, quase sempre o CTA "Agendar / Orçamento". Fora isso, ele só surge como linha, ícone ou estado de hover.
3. **Inclinado = movimento.** Títulos de impacto usam a mesma linguagem do logo: maiúsculas, peso pesado, itálico, largura expandida.
4. **Arestas retas.** Raio 0px em cards, imagens e seções. A única forma "macia" é o botão flutuante de WhatsApp.
5. **Uma visita, uma ação.** Cada seção termina com um caminho claro para o WhatsApp ou o formulário de orçamento.

---

## 3. Tokens — Cores

Os vermelhos foram amostrados do próprio logo (`#a8181f` no corpo do "TORK", `#d02828` nos brilhos e `#901818` nas sombras) e ajustados para acessibilidade.

### Marca

| Nome | Valor | Token | Papel |
|---|---|---|---|
| **Vermelho Tork** | `#D0262A` | `--color-tork-red` | Cor de ação: fundo do CTA primário, badge promocional, botão do WhatsApp, foco de input. Texto branco sobre ele = 5,3:1 ✅ (sobre preto só 3,8:1, então não serve para texto pequeno) |
| **Vermelho Brasa** | `#A8181F` | `--color-tork-red-deep` | Hover/pressed do CTA, sombra do degradê metálico, sublinhado ativo de link. É o vermelho "corpo" do logo |
| **Vermelho Faísca** | `#EF3B40` | `--color-tork-red-bright` | Vermelho para **texto e ícones** sobre fundo preto (5,1:1 sobre `#0A0A0B` ✅). Eyebrows, números de destaque, ícones ativos |
| **Linha do Horizonte** | `#FF2A2F` | `--color-horizon` | Exclusivo da assinatura "linha do horizonte" com glow. Nunca usar em texto |

### Neutros (escuros)

| Nome | Valor | Token | Papel |
|---|---|---|---|
| **Preto Box** | `#0A0A0B` | `--color-black` | Canvas principal, heros e seções escuras. Não é `#000` puro, para a fotografia "respirar" |
| **Asfalto** | `#141416` | `--color-asphalt` | Superfície secundária: cards sobre o canvas, nav ao rolar, footer |
| **Carbono** | `#1E1F22` | `--color-carbon` | Superfície elevada (card em hover, input escuro), faixa alternada |
| **Grafite** | `#2E3034` | `--color-graphite` | Bordas hairline e divisores sobre escuro |
| **Aço** | `#8A8D93` | `--color-steel` | Texto secundário, metadados, legendas sobre escuro (6,0:1 ✅) |
| **Prata** | `#C4C6CA` | `--color-silver` | Texto de corpo longo sobre escuro, quando o branco puro cansa |
| **Branco** | `#FFFFFF` | `--color-white` | Títulos e texto principal sobre escuro, ícones |

### Neutros (faixa clara, estilo catálogo Peloton)

| Nome | Valor | Token | Papel |
|---|---|---|---|
| **Névoa** | `#F4F4F5` | `--color-mist` | Fundo da faixa clara (serviços detalhados, FAQ, formulário) |
| **Cromo** | `#E2E3E5` | `--color-chrome` | Bordas hairline e divisores sobre claro |
| **Chumbo** | `#5B5E64` | `--color-lead` | Texto secundário sobre claro (5,9:1 ✅) |
| **Tinta** | `#141416` | `--color-ink` | Títulos e texto sobre claro |

### Funcionais

| Nome | Valor | Token | Uso |
|---|---|---|---|
| Sucesso | `#2BB673` | `--color-success` | Confirmação de envio de formulário |
| Alerta | `#F2A900` | `--color-warning` | Avisos (raríssimo) |
| Erro | `#EF3B40` | `--color-error` | Erro de validação (reaproveita o Faísca) |

### Degradês permitidos (só estes dois)

```css
/* Metal do logo: só em títulos display de impacto (opcional, com moderação) */
--gradient-tork-metal: linear-gradient(180deg, #FF4A4F 0%, #D0262A 45%, #8E141A 100%);

/* Linha do Horizonte: a assinatura visual */
--gradient-horizon: linear-gradient(90deg, transparent 0%, #FF2A2F 30%, #FF2A2F 70%, transparent 100%);
```

---

## 4. Tokens — Tipografia

O logo tem duas vozes. **"TORK"** é pesado, itálico e expandido. **"CAR CENTER"** é fino, largo e espaçado. O sistema reproduz as duas com uma família variável, e usa Inter (herança do Peloton) para leitura confortável.

### Saira (Google Fonts, variável: `wght` 100–900, `wdth` 50–125, com itálico) · `--font-display`
- **Papel 1, voz "TORK":** títulos display e de seção. Peso **800**, **itálico**, `wdth` 112–125, MAIÚSCULAS, tracking levemente negativo (−0.01em). Line-height 0.92–1.0, para empilhar como bloco monolítico (Lamborghini).
- **Papel 2, voz "CAR CENTER":** eyebrows, labels, nav, botões. Peso **500**, reto, `wdth` 125, MAIÚSCULAS, tracking largo de 0.12–0.18em (Ferrari).
- **Fallback:** `"Saira", "Arial Black", system-ui, sans-serif`

### Inter (Google Fonts) · `--font-body`
- **Papel:** todo texto corrido, descrições de serviço, formulários, FAQ.
- **Pesos:** 400 (corpo), 500 (ênfase/labels de input), 600 (preço/destaque numérico).
- **Caixa:** frases normais (nunca MAIÚSCULAS em parágrafo).

### Escala

Escala fluida com `clamp()`, onde o mobile é o mínimo e o desktop (1280px+) o máximo.

| Papel | Família / estilo | Tamanho | Line-height | Tracking | Token |
|---|---|---|---|---|---|
| hero | Saira 800 itálico, wdth 120, UPPER | `clamp(34px, min(5.2vw, 8.4svh), 76px)` (mobile `clamp(30px, 9vw, 44px)`) | 0.92 | −0.01em | `--text-hero` |
| display | Saira 800 itálico, wdth 120, UPPER | `clamp(36px, 6vw, 72px)` | 0.95 | −0.01em | `--text-display` |
| heading | Saira 700 itálico, wdth 112, UPPER | `clamp(28px, 3.6vw, 44px)` | 1.05 | 0 | `--text-heading` |
| heading-sm | Saira 700, wdth 112, UPPER | `clamp(20px, 2vw, 26px)` | 1.15 | 0.01em | `--text-heading-sm` |
| subheading | Inter 400 | `clamp(17px, 1.4vw, 20px)` | 1.5 | 0 | `--text-subheading` |
| body | Inter 400 | 16px | 1.6 | 0 | `--text-body` |
| body-sm | Inter 400 | 14px | 1.55 | 0 | `--text-body-sm` |
| label | Saira 500, wdth 125, UPPER | 13px | 1.2 | 0.14em | `--text-label` |
| eyebrow | Saira 500, wdth 125, UPPER | 12px | 1.2 | 0.18em | `--text-eyebrow` |
| micro | Saira 500, wdth 125, UPPER | 11px | 1.2 | 0.18em | `--text-micro` |

**Regra do tracking (Ferrari):** quanto menor a fonte, maior o espaçamento. Display fica em −0.01em, labels em 0.14em e micro em 0.18em.

---

## 5. Tokens — Espaço, forma e layout

**Unidade base:** 8px. **Densidade:** confortável.

| Token | Valor | | Token | Valor |
|---|---|---|---|---|
| `--space-4` | 4px | | `--space-48` | 48px |
| `--space-8` | 8px | | `--space-64` | 64px |
| `--space-12` | 12px | | `--space-80` | 80px |
| `--space-16` | 16px | | `--space-96` | 96px |
| `--space-24` | 24px | | `--space-128` | 128px |
| `--space-32` | 32px | | `--space-160` | 160px |

### Raios

| Elemento | Valor | Origem |
|---|---|---|
| Cards, imagens, seções, badges | **0px** | Ferrari + Lamborghini |
| Botões | **0px + corte diagonal** (ver "Botão Primário") | Assinatura Tork |
| Inputs | **2px** | Concessão mínima de usabilidade |
| Botão flutuante WhatsApp | **9999px** | Peloton (única forma redonda do sistema) |

### Layout

- **Largura máxima do conteúdo:** 1280px (gutter lateral 16px mobile / 32px tablet / 48px desktop)
- **Heros:** full-bleed 100vw, altura mínima `min(100svh, 860px)`
- **Gap entre seções:** `clamp(80px, 10vw, 128px)`
- **Padding de card:** 24px mobile / 32px desktop
- **Gap entre elementos:** 16–24px
- **Grid:** 12 colunas desktop, 4 colunas mobile; gutter 24px

### Elevação

**Zero sombra.** A profundidade vem do empilhamento de superfícies (`#0A0A0B` → `#141416` → `#1E1F22`) e de hairlines `#2E3034`. A única "luz" do sistema é o glow vermelho da Linha do Horizonte.

---

## 6. Assinaturas visuais (o que torna o site "Tork")

### 6.1 Linha do Horizonte
Tirada do logo: a linha vermelha luminosa sob "TORK". Ela é o divisor-assinatura do site.

- 2px de altura, `--gradient-horizon`, com `box-shadow: 0 0 24px 2px rgba(255, 42, 47, .45)`.
- Usar **sob o hero** (separando o palco da primeira seção), sob o título de seções-chave e no topo do footer.
- Máximo **3 por página**. Em todo o resto, hairline cinza `#2E3034` de 1px.

### 6.2 Inclinação de 12°
A mesma inclinação do itálico do logo aparece em:
- Corte diagonal do canto inferior-direito do botão primário (`clip-path`).
- Faixas de destaque (badge "Promo", tarja de número de serviço) com `transform: skewX(-12deg)`, aplicada só no fundo e nunca no texto.
- Máscara opcional de fotos em heros secundários (borda direita em diagonal).

### 6.3 Eyebrow com traço
Todo título de seção é antecedido por um eyebrow: um traço vermelho de 24×2px + label em Saira expandida e tracking 0.18em, na cor Vermelho Faísca.
```
—— NOSSOS SERVIÇOS
```

---

## 7. Componentes

### Barra de Navegação
**Papel:** navegação global + atalho de conversão.
- Transparente sobre o hero (Ferrari). Ao rolar mais de 40px, ganha fundo `--color-asphalt` com 92% de opacidade, `backdrop-filter: blur(12px)` e hairline inferior `#2E3034`.
- Altura 72px desktop / 64px mobile.
- **Esquerda:** logo Tork (altura 32–36px). **Centro:** links em Saira 500 wdth 125, 13px, tracking 0.14em, branco. Hover em Vermelho Faísca com sublinhado de 2px. **Direita:** telefone (ícone + número) e **Botão Primário compacto** "Agendar".
- **Mobile:** logo + botão menu (ícone 24px). O menu abre em tela cheia `--color-black` com links em `--text-heading`.

### Hero Palco
**Papel:** primeira tela, promessa + ação.
- **Ocupa exatamente a primeira tela (`100svh`) junto com a faixa de serviços do rodapé do hero.** O título é limitado pela largura e pela altura da tela para nunca empurrar essa faixa para baixo da dobra.
- Fundo full-bleed: foto/vídeo da oficina em baixa luz (carro no elevador, luz de faísca, reflexo de pintura) com overlay `linear-gradient(90deg, rgba(10,10,11,.92) 0%, rgba(10,10,11,.55) 55%, rgba(10,10,11,.15) 100%)`.
- Coluna de texto alinhada à esquerda, máximo de 640px:
  1. Eyebrow: `—— CENTRO AUTOMOTIVO COMPLETO`
  2. Hero (Saira 800 itálico): **A SOLUÇÃO DO SEU CARRO** / **EM UM LUGAR!** (a segunda linha pode usar `--gradient-tork-metal`)
  3. Subheading Inter em `--color-silver`: uma frase sobre os 4 serviços.
  4. Par de botões: **Primário** "Agendar pelo WhatsApp" + **Fantasma** "Ver serviços".
- Rodapé do hero: Linha do Horizonte + faixa de 4 serviços em labels (`MECÂNICA · AR-CONDICIONADO · ELÉTRICA · ESTÉTICA`).

### Botão Primário (Vermelho Tork)
**Papel:** a ação de conversão. Único preenchimento vermelho da tela.
- Fundo `--color-tork-red`, texto branco em Saira 600, wdth 125, 14px, tracking 0.12em, MAIÚSCULAS.
- Padding 16px 28px; altura mínima 52px (alvo de toque ≥ 48px).
- Raio 0 + corte diagonal: `clip-path: polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)`.
- Ícone opcional à direita (seta → ou WhatsApp) com 20px, gap 10px.
- **Hover:** fundo `--color-tork-red-deep` e seta desloca 4px para a direita. **Active:** `translateY(1px)`. **Focus:** outline de 2px `--color-white` com offset de 3px.

### Botão Fantasma
**Papel:** ação secundária pareada ao primário.
- Transparente, borda de 1.5px `currentColor` (branco no escuro, Tinta no claro), mesmo padding, tipo e corte diagonal do primário.
- **Hover:** borda e texto em Vermelho Faísca (escuro) / Vermelho Tork (claro).

### Link de Ação (seta)
**Papel:** ação terciária dentro de cards e cabeçalhos.
- Sem fundo e sem borda. Saira 500, wdth 125, 13px, tracking 0.14em, MAIÚSCULAS + seta →.
- **Hover:** cor Vermelho Faísca e seta avança 4px (Ferrari: "a seta É a affordance").

### Cabeçalho de Seção
**Papel:** abre cada seção (padrão Lamborghini em duas colunas).
- **Esquerda:** eyebrow com traço + título `--text-display`. **Direita** (desktop, alinhado à base): Link de Ação, ex. "Ver todos os serviços →".
- Mobile: empilhado, link abaixo do título.
- Espaço até o conteúdo: 48px.

### Card de Serviço
**Papel:** os 4 pilares (Mecânica, Ar-condicionado, Elétrica, Estética). É o "product card" do Peloton com a aresta da Ferrari.
- Superfície `--color-asphalt` sobre `--color-black`, **raio 0**, hairline de 1px `--color-graphite`.
- **Topo:** foto do serviço em 4:3, full-bleed no card, levemente dessaturada (`filter: saturate(.85)`).
- **Corpo** (padding 32px):
  - Número do serviço em Saira 800 itálico, 14px, Vermelho Faísca: `01`, `02`…
  - Ícone de linha 28px (stroke 1.5px, branco).
  - Título `--text-heading-sm`.
  - Descrição Inter 15px em `--color-silver`, 2–3 linhas.
  - Lista curta de sub-serviços (3–4 itens, 14px, marcador = traço vermelho de 8px).
  - Link de Ação "Solicitar orçamento →".
- **Hover:** fundo `--color-carbon`, a foto ganha `saturate(1)` e `scale(1.03)` dentro do container, e uma Linha do Horizonte de 2px acende no topo do card.
- **Grid:** 4 colunas ≥1200px, 2 colunas ≥640px, 1 coluna no mobile.

### Galeria em Mosaico
**Papel:** mostrar muitas fotos sem alongar a página.
- Grid de 4 colunas (2 no mobile), linhas de `clamp(150px, 17vw, 230px)`, `grid-auto-flow: dense`, gap de 4px, raio 0.
- Tamanhos de tile: `big` (2×2), `wide` (2×1), `tall` (1×2) e 1×1.
- Filtros em abas (Todos · Antes e depois · Serviços · Oficina): botões com borda hairline; o ativo tem borda branca e fundo Carbono.
- Em "Todos", mostra 5 itens e um Botão Fantasma "Ver todas as fotos (n)".
- Legenda no rodapé do tile: micro label + losango vermelho inclinado.
- Clique numa foto abre o **lightbox** (fundo Preto Box 96%, setas com hairline, contador `03 / 15` em Vermelho Faísca, Esc, setas do teclado e deslizar no celular).
- As fotos e a ordem ficam na lista `GALLERY` em `js/main.js`.

### Antes e Depois (slider)
**Papel:** prova visual do resultado (estética, faróis, higienização).
- Duas fotos com o mesmo enquadramento sobrepostas; o "antes" é recortado com `clip-path` até a posição `--pos`.
- A divisória é uma **Linha do Horizonte vertical** (2px `#FF2A2F` com glow). A alça é um quadrado Vermelho Tork de 52px com o corte diagonal dos botões e duas setas.
- Tags "ANTES" / "DEPOIS" nos cantos superiores (fundo preto 72% com blur), que somem quando a linha chega perto.
- Arrasta com mouse ou dedo (`touch-action: pan-y`, então a rolagem vertical continua funcionando) e com as setas do teclado (`role="slider"`).
- Na primeira vez que aparece, a linha faz um pequeno vaivém para indicar que é arrastável (desligado em `prefers-reduced-motion`).
- Ocupa tiles `big` no mosaico.

### Faixa de Números (prova social): *removida por enquanto*
**Papel:** credibilidade rápida. Voltar quando houver números reais.
- Fundo `--color-black`, 3–4 colunas separadas por hairlines verticais.
- Número em `--text-display` (Saira 800 itálico, branco) + sufixo em Vermelho Faísca (`+`, `%`, `★`) + label `--text-eyebrow` em `--color-steel`.
- Ex.: `+10 ANOS DE EXPERIÊNCIA` · `+5.000 CARROS ATENDIDOS` · `4,9★ NO GOOGLE` (usar só números reais).

### Faixa Clara: Catálogo/Informação
**Papel:** a "galeria branca" do Peloton, para conteúdo denso (por que a Tork, como funciona, FAQ, formulário).
- Fundo `--color-mist`, texto `--color-ink`, secundário `--color-lead`, hairlines `--color-chrome`.
- No máximo **1–2 faixas claras por página**, sempre entre seções escuras.
- Nunca colocar card branco flutuando sobre hero escuro (regra Peloton).

### Passo a Passo ("Como funciona")
- 3–4 passos em linha (desktop) / coluna (mobile).
- Número grande em Saira 800 itálico 64px, em `--color-chrome` (no claro) ou `--color-graphite` (no escuro), com o título do passo sobreposto à base.
- Conector entre passos: hairline com um pequeno losango vermelho de 6px inclinado 45°.

### Depoimento
- Card `--color-asphalt`, raio 0, aspas grandes em Vermelho Faísca (Saira 800 itálico 64px).
- Texto Inter 17px branco; nome em label; estrelas 16px Vermelho Faísca; selo "Google" discreto em `--color-steel`.
- Carrossel com indicadores Ferrari: traços de 32×2px, inativo `--color-graphite`, ativo `--color-tork-red-bright`.

### Formulário de Orçamento
**Papel:** conversão alternativa ao WhatsApp.
- **Na faixa clara:** input com fundo branco, borda 1px `#B9BCC1`, raio 2px, padding 14px 16px, Inter 16px (16px evita zoom no iOS). Label acima em Saira 500 wdth 125, 12px, tracking 0.14em.
- **Na faixa escura:** fundo `--color-carbon`, borda `--color-graphite`, texto branco.
- **Focus (ambos):** borda Vermelho Tork + `box-shadow: 0 0 0 3px rgba(208, 38, 42, .25)`.
- **Erro:** borda e mensagem de 13px em `--color-error`. **Sucesso:** mensagem com ícone em `--color-success`.
- **Campos:** Nome, WhatsApp, Modelo do carro, Serviço (select com os 4 pilares), Mensagem (opcional).
- Botão Primário de largura total no mobile.

### Badge Promo
- Fundo Vermelho Tork com `skewX(-12deg)` (o texto é contra-inclinado para ficar reto), texto branco Saira 600, 11px, tracking 0.14em.
- Ex.: `REVISÃO + HIGIENIZAÇÃO DO AR`.
- Conta como "o vermelho da tela": não usar no mesmo viewport que outro Primário em destaque.

### Botão Flutuante WhatsApp
**Papel:** o "chat widget" do Peloton, que na Tork vira o WhatsApp.
- Fixo no canto inferior direito (24px das bordas, respeitando `env(safe-area-inset-*)`).
- Pílula (`9999px`) com fundo **Vermelho Tork**, ícone WhatsApp branco 24px e label "Fale conosco" (Inter 600, 14px), que vira só ícone (56×56px) no mobile.
- **Por que vermelho e não verde:** mantém a disciplina de uma só cor. O ícone já comunica "WhatsApp".
- Aparece depois que o hero sai da tela, para não competir com o CTA do hero.

### Mapa / Localização
- Bloco 2 colunas: à esquerda, endereço, horário e telefone em lista com ícones de linha; à direita, mapa embed com `filter: grayscale(1) invert(.92) contrast(.9)` para combinar com o tema escuro, e pin vermelho sobreposto.
- CTA "Como chegar →" (Link de Ação).

### Rodapé
- Fundo `--color-asphalt`, aberto por uma Linha do Horizonte no topo.
- **4 colunas:** Logo + slogan · Serviços · Contato · Horário. Títulos em label branco e links Inter 14px `--color-steel` com hover branco.
- Linha final: hairline + © e CNPJ em micro `--color-steel`.

### Ícones
- Linha, stroke 1.5px, cantos retos (`stroke-linejoin: miter`), 24px base.
- Branco no escuro, Tinta no claro; Vermelho Faísca só no estado ativo.
- **Sugestão:** [Lucide](https://lucide.dev) (`wrench`, `snowflake`, `zap`, `sparkles`, `car`, `gauge`, `clock`, `map-pin`, `phone`) + ícone oficial do WhatsApp.

---

## 8. Fotografia e imagem

- **Protagonista:** o trabalho real da Tork. Fotos próprias da oficina valem mais que banco de imagem.
- **Luz:** baixa (low-key), fundo escuro, com recortes de luz em lataria, motor e ferramenta. Faíscas, reflexos e detalhes macro (Lamborghini: costura, emblema, curva da lataria).
- **Cor:** contraste alto e saturação levemente contida. Um toque vermelho na cena (luz de freio, ferramenta, uniforme) amarra com a marca.
- **Por serviço:**
  - **Mecânica:** motor aberto, mãos com ferramenta, carro no elevador.
  - **Ar-condicionado:** manômetro, saída de ar, vapor frio com luz azulada (contraponto frio sutil).
  - **Elétrica:** scanner/diagnóstico, multímetro, painel aceso.
  - **Estética:** polimento com reflexo perfeito, gotas na pintura, interior limpo.
- **Tratamento:** sempre full-bleed com raio 0, sem molduras, sem sombras e sem texto "estourado" sobre a área clara da foto (use o overlay).
- **Proibido:** clip-art, ilustrações cartunescas, carros de luxo genéricos de banco de imagem que a oficina não atende, e fotos com marca d'água.

---

## 9. Movimento

- **Duração:** 160ms (hover), 280ms (UI), 600ms (entrada de seção). Easing `cubic-bezier(.2, .7, .2, 1)`.
- **Entrada de seção:** fade + `translateY(16px)` uma vez, ao entrar no viewport.
- **Linha do Horizonte:** ao aparecer, "acende" da esquerda para a direita (`scaleX` 0→1, 800ms).
- **Setas:** avançam 4px no hover.
- **Respeitar `prefers-reduced-motion`:** desliga translações e animações de linha e mantém só opacidade.

---

## 10. Fazer e não fazer

### Fazer
- Usar Vermelho Tork **preenchido** em no máximo um elemento dominante por viewport.
- Escrever títulos de impacto em Saira 800 **itálico expandido MAIÚSCULO**, como o "TORK" do logo.
- Escrever labels, nav e botões em Saira **reta, expandida e espaçada**, como o "CAR CENTER" do logo.
- Alternar palco escuro → (no máximo 1–2) faixa clara → palco escuro.
- Manter tudo com raio 0, exceto inputs (2px) e o botão do WhatsApp (pílula).
- Terminar toda seção com um caminho para orçamento/WhatsApp.
- Usar a Linha do Horizonte como assinatura, com no máximo 3 por página.

### Não fazer
- Não usar sombras, glows (exceto a Linha do Horizonte) ou cards flutuantes.
- Não introduzir outra cor cromática (sem azul, verde ou laranja decorativos). Verde só para sucesso de formulário.
- Não usar vermelho como fundo de seção inteira nem em texto corrido.
- Não usar MAIÚSCULAS em parágrafos.
- Não aplicar `skew` no texto, só no fundo de badges e faixas.
- Não usar Vermelho Tork (`#D0262A`) para texto pequeno sobre preto, porque o contraste é insuficiente. Use Vermelho Faísca.
- Não usar `#000000` puro como canvas. Use Preto Box.

---

## 11. Acessibilidade

| Par | Contraste | Uso permitido |
|---|---|---|
| Branco sobre Preto Box | 19,8:1 | Tudo |
| Prata `#C4C6CA` sobre Preto Box | 11,6:1 | Corpo de texto |
| Aço `#8A8D93` sobre Preto Box | 6,0:1 | Texto secundário |
| Vermelho Faísca `#EF3B40` sobre Preto Box | 5,1:1 (4,7:1 sobre Asfalto) | Texto ≥ 12px, ícones |
| Branco sobre Vermelho Tork `#D0262A` | 5,3:1 | Botões, badges |
| Tinta sobre Névoa | 16,7:1 | Tudo |
| Chumbo `#5B5E64` sobre Névoa | 5,9:1 | Texto secundário |

- Alvos de toque ≥ 48×48px.
- Foco sempre visível (outline branco de 2px no escuro, Tinta no claro, offset 3px).
- `alt` descritivo em toda foto de serviço.
- Links de telefone com `tel:` e WhatsApp com `https://wa.me/55…`.

---

## 12. Estrutura sugerida da home

Enxuta de propósito: poucas seções, cada uma com uma função.

1. **Nav** transparente
2. **Hero Palco**: slogan + CTA WhatsApp → Linha do Horizonte + faixa de serviços (tudo na primeira tela)
3. **Serviços**: cabeçalho de seção + 4 Cards de Serviço (escuro)
4. **Como funciona** (faixa **clara**)
5. **Galeria**: mosaico com filtros, antes/depois e lightbox (escuro)
6. **Contato**: CTA "Seu carro em boas mãos" + localização/horário/telefone à esquerda, formulário de orçamento à direita (escuro)
7. **Rodapé**
8. **Botão flutuante WhatsApp** (global)

---

## 13. Quick Start — CSS

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Saira:ital,wdth,wght@0,100..125,100..900;1,100..125,100..900&display=swap');

:root {
  /* Marca */
  --color-tork-red: #D0262A;
  --color-tork-red-deep: #A8181F;
  --color-tork-red-bright: #EF3B40;
  --color-horizon: #FF2A2F;

  /* Neutros escuros */
  --color-black: #0A0A0B;
  --color-asphalt: #141416;
  --color-carbon: #1E1F22;
  --color-graphite: #2E3034;
  --color-steel: #8A8D93;
  --color-silver: #C4C6CA;
  --color-white: #FFFFFF;

  /* Neutros claros */
  --color-mist: #F4F4F5;
  --color-chrome: #E2E3E5;
  --color-lead: #5B5E64;
  --color-ink: #141416;

  /* Funcionais */
  --color-success: #2BB673;
  --color-warning: #F2A900;
  --color-error: #EF3B40;

  /* Degradês */
  --gradient-tork-metal: linear-gradient(180deg, #FF4A4F 0%, #D0262A 45%, #8E141A 100%);
  --gradient-horizon: linear-gradient(90deg, transparent 0%, #FF2A2F 30%, #FF2A2F 70%, transparent 100%);
  --glow-horizon: 0 0 24px 2px rgba(255, 42, 47, .45);

  /* Tipografia */
  --font-display: "Saira", "Arial Black", system-ui, sans-serif;
  --font-body: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;

  --text-hero: clamp(48px, 9vw, 112px);
  --text-display: clamp(36px, 6vw, 72px);
  --text-heading: clamp(28px, 3.6vw, 44px);
  --text-heading-sm: clamp(20px, 2vw, 26px);
  --text-subheading: clamp(17px, 1.4vw, 20px);
  --text-body: 16px;
  --text-body-sm: 14px;
  --text-label: 13px;
  --text-eyebrow: 12px;
  --text-micro: 11px;

  --tracking-display: -0.01em;
  --tracking-label: 0.14em;
  --tracking-eyebrow: 0.18em;

  /* Espaço */
  --space-4: 4px;   --space-8: 8px;   --space-12: 12px;  --space-16: 16px;
  --space-24: 24px; --space-32: 32px; --space-48: 48px;  --space-64: 64px;
  --space-80: 80px; --space-96: 96px; --space-128: 128px; --space-160: 160px;

  /* Forma */
  --radius-none: 0;
  --radius-input: 2px;
  --radius-pill: 9999px;
  --cut: 12px; /* corte diagonal dos botões */
  --skew: -12deg;

  /* Layout */
  --container: 1280px;
  --gutter: clamp(16px, 4vw, 48px);
  --section-gap: clamp(80px, 10vw, 128px);
  --nav-height: 72px;

  /* Movimento */
  --ease: cubic-bezier(.2, .7, .2, 1);
  --dur-fast: 160ms;
  --dur-ui: 280ms;
  --dur-enter: 600ms;
}

/* Vozes tipográficas do logo */
.t-tork {             /* voz "TORK" */
  font-family: var(--font-display);
  font-weight: 800;
  font-style: italic;
  font-stretch: 120%;
  text-transform: uppercase;
  letter-spacing: var(--tracking-display);
  line-height: .92;
}
.t-center {           /* voz "CAR CENTER" */
  font-family: var(--font-display);
  font-weight: 500;
  font-stretch: 125%;
  text-transform: uppercase;
  letter-spacing: var(--tracking-label);
}

/* Assinatura */
.horizon {
  height: 2px;
  background: var(--gradient-horizon);
  box-shadow: var(--glow-horizon);
}

/* Botão primário */
.btn-primary {
  background: var(--color-tork-red);
  color: var(--color-white);
  padding: 16px 28px;
  min-height: 52px;
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - var(--cut)), calc(100% - var(--cut)) 100%, 0 100%);
  transition: background var(--dur-fast) var(--ease);
}
.btn-primary:hover { background: var(--color-tork-red-deep); }
```

---

## 14. Prompt rápido para agentes de IA

> Site escuro de centro automotivo. Canvas `#0A0A0B`, cards `#141416` com hairline `#2E3034`, **raio 0** em tudo. Títulos em **Saira 800 itálico, largura 120%, MAIÚSCULAS**, line-height 0.92. Labels e botões em Saira 500 largura 125%, MAIÚSCULAS, tracking 0.14em. Corpo em Inter 16px `#C4C6CA`. Uma única cor de ação: **Vermelho Tork `#D0262A`** em botão preenchido com canto inferior-direito cortado em diagonal de 12px. Para texto vermelho sobre preto, use `#EF3B40`. Assinatura: linha vermelha de 2px com glow sob o hero (como no logo). Zero sombras. Fotografia full-bleed em baixa luz da oficina. No máximo 1–2 faixas claras `#F4F4F5` para informação densa. Botão de WhatsApp flutuante em pílula vermelha.
