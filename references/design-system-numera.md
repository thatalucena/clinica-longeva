# Design System — Numera Landing Page Redesign

> Documento reconstruído a partir de 7 screenshots desktop enviados em 15/10/2026. O objetivo é transformar a referência visual em um sistema reproduzível para Figma e front-end.
>
> **Nota de precisão:** cores, proporções, tamanhos e espaçamentos foram estimados visualmente e por amostragem dos screenshots. A família tipográfica exata não está explicitamente identificada nas imagens; por isso, a seção de tipografia distingue **características observadas** de **substitutos recomendados**. Não trate nomes de fonte sugeridos como confirmação da fonte original.

---

## 1. Visão geral do sistema

A interface combina uma estética **fintech/accounting contemporânea**, amigável e editorial, com forte presença de cor institucional. O design se apoia em cinco pilares:

1. **Fundo verde escuro dominante**, que funciona como superfície-mãe da página.
2. **Blocos claros de grande escala** em creme e lavanda, criando ritmo e contraste entre seções.
3. **Verde-lima/neon como cor de ação**, reservado a CTAs, palavras-chave, indicadores e pequenos acentos.
4. **Tipografia grotesca de baixo contraste**, com headlines grandes e muito legíveis, combinando regular/bold com itálico para ênfase sem recorrer a múltiplas famílias.
5. **Cards arredondados, pouca sombra e muito espaço negativo**, resultando em uma interface premium, leve e digital.

A página não usa visual “corporativo bancário” tradicional. O tom é mais próximo de uma startup brasileira de tecnologia: humano, acessível, direto e levemente irreverente.

---

# 2. Princípios visuais

## 2.1 Personalidade

- Digital
- Humana
- Otimista
- Transparente
- Contemporânea
- Descomplicada
- Tecnológica sem parecer fria
- Premium sem parecer elitista
- Jovem sem parecer infantil

## 2.2 Linguagem formal

A forma predominante é o **retângulo de cantos generosamente arredondados**. Círculos aparecem como:

- avatares;
- marcadores numerados;
- ícones de categoria;
- badges de avaliação;
- botões auxiliares;
- elementos decorativos lineares/orgânicos.

Não há uso relevante de diagonais duras, polígonos complexos, bevels, 3D ou glassmorphism.

## 2.3 Densidade

A densidade é baixa a média. Cada seção possui:

- título forte;
- uma ideia principal;
- poucos elementos funcionais;
- grandes áreas de respiro.

O sistema evita:

- excesso de bordas;
- muitas cores simultâneas;
- sombras pesadas;
- ícones grandes e decorativos;
- textos corridos extensos;
- grades apertadas.

---

# 3. Paleta de cores

## 3.1 Cores principais observadas

### Verde institucional / Forest

**Estimativa principal:** `#0D2E23`

Amostragem dos screenshots retorna aproximadamente RGB `(13, 46, 35)`.

Uso:

- fundo geral da página;
- texto sobre superfícies claras;
- cards escuros;
- navbar;
- rodapé;
- botões primários sobre fundos claros;
- elementos de navegação.

Características:

- verde muito escuro;
- subtom levemente azulado;
- suficientemente profundo para assumir papel de “quase preto”.

### Verde escuro secundário

**Estimativa:** `#133C2D` / `#153A2C`

Uso:

- cartões internos mais claros que o fundo;
- hover/variação tonal;
- barra horizontal de estados/regiões;
- superfícies auxiliares;
- footer sub-surfaces.

### Lime / Acid Green

**Estimativa principal:** `#D2E95C`

Nos elementos mais saturados o sistema se aproxima também de `#C7F22E`–`#D3F33D`.

Uso:

- CTA principal;
- palavras em itálico dentro das headlines;
- círculos numerados ativos;
- pequenos bullets;
- ícones de serviço;
- estrelas de avaliação;
- labels e micro-highlights;
- ornamento grande no Hero.

Regra: **usar como acento, não como fundo global**.

### Creme / Warm Off-White

**Estimativa principal:** `#F3EFE5`

Amostragem recorrente: RGB próximo de `(243, 239, 229)`.

Uso:

- seção “Como funciona”;
- seção de planos;
- cartões claros;
- fundos de apoio;
- texto branco-quente em superfícies escuras.

### Lavanda clara

**Estimativa Hero:** `#C9C3FC`

**Estimativa seção final:** `#DADAFF`

Uso:

- Hero;
- cards estatísticos;
- bloco final de conversão;
- pills selecionadas ou neutras;
- backgrounds de baixa ênfase.

A lavanda adiciona personalidade e quebra o domínio verde sem disputar com o lime.

### Branco

`#FFFFFF`

Uso:

- cards de plano;
- card multicanal;
- textos e componentes pontuais;
- superfície de alto contraste.

### Cinza esverdeado / Muted text

Faixa estimada:

- `#779186`
- `#8EA299`
- `#A4B2AC`

Uso:

- textos secundários sobre verde;
- descrições;
- rodapé;
- marcas/logotipos de clientes em estado discreto.

## 3.2 Tokens de cor sugeridos

```css
:root {
  --color-forest-950: #0D2E23;
  --color-forest-900: #133C2D;
  --color-forest-800: #194A39;

  --color-lime-500: #D2E95C;
  --color-lime-400: #DDF56B;
  --color-lime-300: #E9F99C;

  --color-cream-100: #F3EFE5;
  --color-cream-50:  #F8F5ED;

  --color-lavender-200: #C9C3FC;
  --color-lavender-100: #DADAFF;
  --color-lavender-50:  #F1F0FF;

  --color-white: #FFFFFF;

  --color-muted-on-dark: #8EA299;
  --color-muted-on-light: #63736C;
  --color-line-dark: rgba(255,255,255,.12);
  --color-line-light: rgba(13,46,35,.12);
}
```

## 3.3 Proporção cromática recomendada

Para reproduzir a sensação visual:

- 55–65% verde institucional;
- 15–20% creme/off-white;
- 8–12% lavanda;
- 3–6% branco;
- 2–5% lime;
- restante em fotos e tons neutros.

O lime é visualmente poderoso; se ultrapassar cerca de 8–10% da tela, a página perde sofisticação.

---

# 4. Tipografia

## 4.1 Características observadas

A tipografia principal é uma **sans-serif neo-grotesca/geometric-grotesque**, com:

- `a` de aparência contemporânea;
- altura-x alta;
- terminais limpos;
- largura relativamente compacta;
- excelente legibilidade em tamanhos grandes;
- itálico verdadeiro ou oblíquo muito consistente com o romano;
- pesos indo de regular a bold/extra-bold.

O sistema aparentemente usa **uma única família tipográfica** e cria variedade por meio de:

- peso;
- tamanho;
- itálico;
- caixa alta;
- tracking;
- cor.

### Fontes substitutas visualmente compatíveis

Em ordem de aproximação conceitual:

1. **Satoshi**
2. **General Sans**
3. **Neue Montreal**
4. **Inter**
5. **Manrope**
6. **DM Sans**

Para implementação segura e gratuita, **Inter** ou **Manrope** funcionam bem. Para maior proximidade editorial, Satoshi/General Sans são preferíveis se licenciadas.

## 4.2 Hierarquia tipográfica

### Display / Hero H1

Exemplo: “Sua jornada empreendedora, mas muito mais leve.”

- desktop estimado: 64–72 px na arte-base;
- screenshots mostram aproximadamente 58–64 px equivalentes;
- peso: 500–600;
- line-height: 0.98–1.05;
- letter-spacing: `-0.03em` a `-0.045em`;
- cor: verde institucional;
- largura de texto: ~45–50% do hero;
- palavras de ênfase em **itálico**, mesmo peso ou ligeiramente maior.

### H2 de seção

Exemplos:

- “A gente cuida do chato, você foca no boom.”
- “Quatro passos. Zero dor de cabeça.”
- “Transparente, sem pegadinhas.”

- 44–56 px;
- peso 500–600;
- line-height 1.02–1.10;
- tracking `-0.025em`;
- alinhamento central nas seções estruturais;
- ênfase em itálico + lime ou itálico na mesma cor.

### Statement / manifesto

Exemplo: “A Numera é a contabilidade digital pra empreendedores…”

- 34–42 px;
- line-height 1.10–1.20;
- peso 500–600 no trecho principal;
- trechos secundários em tom muted;
- palavras específicas em lime/itálico;
- emojis integrados como elementos semânticos.

### H3 / título de card

- 20–24 px;
- peso 600–700;
- line-height 1.15;
- tracking sutilmente negativo.

### KPI grande

Exemplos: `+2.400`, `72h`, `98%`.

- 52–68 px;
- peso 700–800;
- line-height 0.95–1.0;
- tracking `-0.04em`;
- cor verde institucional.

### Preço

- símbolo “R$” em 14–18 px;
- número em 44–52 px;
- peso 700–800;
- line-height 1;
- moeda e recorrência em escala menor.

### Body / texto de apoio

- 15–17 px;
- line-height 1.45–1.6;
- peso 400–500;
- largura ideal: 45–70 caracteres por linha.

### Microcopy / eyebrow

Exemplos:

- “SERVIÇOS”
- “COMO FUNCIONA”
- “PLANOS”
- “VAMOS COMEÇAR”
- “DEPOIMENTO EM DESTAQUE”

- 11–13 px;
- peso 600–700;
- uppercase;
- tracking amplo: `0.12em`–`0.18em`;
- normalmente acompanhado de linha horizontal curta;
- lime ou verde médio conforme o fundo.

### Navegação

- 13–15 px;
- peso 500;
- cor branca/cream em 70–80% de opacidade;
- sem underline permanente.

## 4.3 Escala tipográfica sugerida

```css
--text-xs: 12px;
--text-sm: 14px;
--text-md: 16px;
--text-lg: 20px;
--text-xl: 24px;
--text-2xl: 32px;
--text-3xl: 40px;
--text-4xl: 48px;
--text-5xl: 64px;
--text-6xl: 72px;
```

## 4.4 Uso do itálico

O itálico é um recurso de marca, não uma decoração aleatória.

Usar para:

- benefício emocional;
- virada de frase;
- palavra memorável;
- promessa ou resultado.

Exemplos observados:

- “muito”;
- “chato”;
- “boom”;
- “rápido”;
- “dor de cabeça”;
- “pegadinhas”;
- “finalmente entendo”.

Não aplicar itálico em blocos longos.

---

# 5. Grid, container e espaçamento

## 5.1 Estrutura macro

O layout é desktop-first e se organiza em um **container central** amplo, cercado por margem externa.

Estimativa para viewport de 1440 px:

- largura máxima do conteúdo: **1180–1240 px**;
- padding lateral do container: **24–40 px**;
- largura de cards/seções principais: quase 100% do container;
- espaçamento entre seções: **72–128 px**.

Nos screenshots, o site ocupa aproximadamente 84–86% da largura útil da composição central.

## 5.2 Grid recomendado

### Desktop

- 12 colunas;
- gutter: 24 px;
- margin: 32–48 px;
- max-width: 1200 px.

### Tablet

- 8 colunas;
- gutter: 20 px;
- margin: 24 px.

### Mobile

- 4 colunas;
- gutter: 16 px;
- margin: 20 px.

## 5.3 Escala de spacing

Base recomendada: **4 px**, com preferência prática por múltiplos de 8.

```text
4   micro-gap
8   gap mínimo
12  ícone-texto / chips
16  card compacto
20  elemento secundário
24  gap padrão
32  bloco interno
40  bloco médio
48  separação de grupos
64  seção curta
80  seção média
96  seção grande
120 hero/section break
128 section break máximo
```

## 5.4 Vertical rhythm

Padrão recorrente:

1. eyebrow;
2. gap 18–28 px;
3. headline;
4. gap 32–48 px;
5. conteúdo principal;
6. gap 32–56 px;
7. supporting CTA/nota;
8. grande respiro até a próxima seção.

---

# 6. Border radius

O radius é um dos traços mais importantes da identidade.

## 6.1 Escala estimada

```css
--radius-xs: 10px;
--radius-sm: 14px;
--radius-md: 18px;
--radius-lg: 24px;
--radius-xl: 32px;
--radius-pill: 999px;
```

### Uso

- navbar: 28–32 px / pill;
- hero: 30–36 px;
- cards de serviço: 22–28 px;
- cards estatísticos: 20–24 px;
- seção clara grande: 28–36 px;
- planos: 20–24 px;
- botões: pill completo;
- badges: pill completo;
- fotos: 18–24 px.

A interface praticamente não usa cantos retos.

---

# 7. Bordas, divisores e sombras

## 7.1 Bordas

Bordas são discretas e funcionais.

Sobre fundo escuro:

```css
border: 1px solid rgba(255,255,255,.12);
```

Sobre fundo claro:

```css
border: 1px solid rgba(13,46,35,.10);
```

## 7.2 Divisores

- espessura: 1 px;
- baixa opacidade;
- comprimento normalmente limitado ao conteúdo do card;
- usados em pricing, depoimento e rodapé.

## 7.3 Sombras

Quase inexistentes no corpo da página.

Quando necessárias:

```css
box-shadow: 0 12px 32px rgba(5,25,18,.08);
```

A profundidade é construída principalmente por **contraste de superfície**, não por shadow.

---

# 8. Header / Navbar

## 8.1 Estrutura

Navbar em formato de cápsula horizontal, centralizada no topo.

Composição:

- logo à esquerda;
- links centralizados;
- CTA primário à direita.

Itens visíveis:

- Serviços
- Como funciona
- Clientes
- Planos
- “Começar agora →”

## 8.2 Dimensões estimadas

- altura: 64–72 px;
- radius: 32–36 px;
- padding horizontal: 24–28 px;
- gap entre links: 32–44 px;
- fundo: verde secundário ligeiramente mais claro que o canvas.

## 8.3 Logo

Wordmark textual simples:

- “numera.” em minúsculas;
- peso 700;
- lime;
- ponto final integrante da marca.

## 8.4 CTA da navbar

- fundo lime;
- texto verde escuro;
- height 42–46 px;
- padding 18–24 px;
- border-radius pill;
- arrow à direita;
- peso 600–700.

## 8.5 Estados

### Hover de link

- opacidade 70% → 100%;
- possível deslocamento de 1 px ou underline sutil opcional.

### Hover CTA

- brilho/saturação levemente maior;
- `transform: translateY(-1px)` opcional;
- sem shadow forte.

### Sticky behavior recomendado

A referência visual comporta bem navbar sticky, mas isso **não é confirmável pelo screenshot**. Se implementado:

- top: 16–24 px;
- backdrop blur muito sutil ou fundo sólido;
- z-index alto.

---

# 9. Hero

## 9.1 Container

- grande card lavanda;
- radius ~32 px;
- composição 2 colunas;
- altura visual aproximada de 590–640 px na arte-base;
- overflow hidden.

## 9.2 Coluna esquerda

Contém:

1. H1;
2. parágrafo de apoio;
3. grupo de 2 CTAs;
4. prova social com avatares e número de empreendedores.

### Hierarquia

- headline domina;
- subheadline ocupa no máximo 2–3 linhas;
- botões ficam logo abaixo;
- prova social é de terceira hierarquia.

## 9.3 Coluna direita

- fotografia recortada de pessoa em contexto de trabalho;
- notebook e caneca funcionam como objetos narrativos;
- pessoa invade o plano central;
- base do recorte encosta no limite inferior do Hero.

## 9.4 Vetor orgânico lime

Grande traço contínuo em looping, lembrando:

- scribble;
- assinatura;
- trajetória;
- movimento.

Características:

- stroke grosso;
- sem fill;
- lime brilhante;
- passa atrás e ao redor da pessoa;
- parcialmente cortado pelo container;
- funciona como assinatura visual do hero.

### Implementação

Preferir SVG com `stroke-linecap="round"` e path customizado.

```css
stroke: var(--color-lime-500);
stroke-width: 28–40;
fill: none;
stroke-linecap: round;
```

## 9.5 CTAs do Hero

### Primário

- fundo forest;
- texto lime;
- pill;
- “Começar grátis”.

### Secundário

- transparente;
- border verde escuro;
- texto verde escuro;
- “Saber mais”.

Os dois têm a mesma altura e proporção.

## 9.6 Social proof

- 3–4 avatares circulares sobrepostos;
- borda clara de 2 px;
- texto em duas linhas;
- número em bold: “+2.400 empreendedores”;
- descrição menor: “já confiam na Numera”.

---

# 10. Seção de Serviços

## 10.1 Heading

Eyebrow pill “SERVIÇOS” + headline central.

Headline:

> A gente cuida do *chato*, você foca no *boom*.

- cream/branco como base;
- palavras-chave em lime + itálico.

## 10.2 Grid de cards

Desktop: **4 colunas iguais**.

Cada card é dividido em:

- imagem ocupando ~80–82% da altura;
- footer de título ocupando ~18–20%;
- ícone de categoria flutuando no topo esquerdo;
- arrow circular no canto inferior direito.

## 10.3 Card de serviço

### Dimensão relativa

- aspect ratio aproximado: 0.72–0.78;
- radius: 22–24 px;
- overflow hidden.

### Imagem

- fotografia realista;
- crop vertical;
- contraste médio;
- ambientação de negócios/finanças.

### Ícone categoria

- círculo lime de 36–42 px;
- pictograma forest;
- posição: 16–20 px do topo e esquerda;
- icon stroke/solid simples.

### Footer

- fundo verde secundário;
- título cream/branco;
- 15–17 px, semibold;
- arrow em círculo translucido.

## 10.4 Serviços observados

- Abertura de empresa
- Contabilidade mensal
- Planejamento tributário
- BPO Financeiro

## 10.5 Linha auxiliar abaixo dos cards

Texto central:

> Precisa de algo mais específico? *Tem isso também.* Falar com especialista →

Estrutura:

- texto comum em cream;
- frase intermediária em lime + itálico;
- CTA textual ao final.

---

# 11. Manifesto / Brand Statement

## 11.1 Estrutura

Duas colunas:

- pequena coluna de marca à esquerda;
- statement principal à direita.

### Logo pequena

“Numera.” em branco/cream com ponto lime.

### Statement

Texto grande em múltiplas linhas, com variação de cores:

- primeira parte em cream;
- segunda parte em cinza/muted;
- palavras-chave em lime/itálico;
- emojis integrados.

O efeito é de uma frase editorial, não de body copy convencional.

---

# 12. Bloco de métricas / Prova de escala

## 12.1 Composição

Grid assimétrico de cards, algo próximo de:

```text
[ KPI grande ] [ multicanal ] [ KPI grande ]
              [  KPI 98%   ]
```

Visualmente é um mosaico de 3 colunas, com card da esquerda e da direita altos e dois cards menores no centro.

## 12.2 Card “+2.400”

- fundo lavanda quase branco;
- número gigante no topo;
- descrição posicionada próximo ao fundo;
- muito espaço vazio no centro.

## 12.3 Card “Atendimento multicanal”

- fundo branco;
- título pequeno bold;
- descrição muted;
- linha de pequenos ícones/chips na base.

## 12.4 Card “98%”

- fundo lime muito claro;
- KPI grande;
- texto de satisfação;
- avaliação com estrela.

## 12.5 Card “72h”

- fundo creme;
- KPI grande;
- título e descrição perto da base.

## 12.6 Princípio de layout

Não alinhar todos os textos no topo. O sistema cria tensão visual alternando:

- KPI no topo;
- supporting copy no rodapé;
- blocos pequenos centralizados verticalmente.

---

# 13. Card de cobertura nacional

Grande card horizontal verde secundário.

### Coluna esquerda

- headline 26–32 px;
- segunda linha lime/itálica;
- descrição curta em muted.

### Coluna direita

- sequência de bandeiras/avatares circulares sobrepostos;
- pequeno badge “+19 estados”.

### Altura

Aproximadamente 150–180 px.

### Radius

20–24 px.

---

# 14. Logo strip / clientes

Linha horizontal de marcas em baixa ênfase.

Composição:

- label à esquerda “CONFIAM NA NUMERA” em uppercase;
- separador vertical fino;
- 5–6 logos distribuídos horizontalmente.

Tratamento:

- logos monocromáticos;
- cinza esverdeado;
- opacidade baixa (~45–60%);
- sem cards individuais;
- sem cor original das marcas.

---

# 15. Seção “Como funciona”

## 15.1 Superfície

Grande painel cream sobre o fundo forest.

- radius: 32–36 px;
- padding interno: 64–80 px;
- headline centralizada.

## 15.2 Eyebrow

Linha fina + “COMO FUNCIONA”.

Não usa pill preenchida; usa microtexto + traço.

## 15.3 Headline

> Quatro passos. Zero *dor de cabeça*.

- verde institucional;
- segunda ideia em itálico;
- centralizada.

## 15.4 Timeline

4 passos horizontais.

### Marcador

- círculo de 42–48 px;
- número `01`, `02`, `03`, `04`;
- alternância de cor:
  - 01 forest + número lime;
  - 02 lime + número forest;
  - 03 lavanda + número forest;
  - 04 forest + número lime.

### Linha conectora

- dashed/dotted;
- cinza esverdeado claro;
- horizontal;
- passa ao centro dos círculos;
- interrompida visualmente pelos marcadores.

### Conteúdo por passo

- título 18–21 px semibold;
- body 14–16 px;
- line-height 1.45;
- cor muted.

### Passos observados

1. Conversa inicial
2. Escolha o plano
3. A gente assume
4. Foco no que importa

---

# 16. Depoimento

## 16.1 Layout

Duas colunas:

- esquerda: foto vertical/quase quadrada;
- direita: conteúdo textual.

## 16.2 Foto

- radius 18–22 px;
- imagem contextual, não retrato posado;
- badge de review sobreposto no canto inferior esquerdo.

## 16.3 Badge de avaliação

- pill lime;
- estrelas forest;
- texto “4.9/5”;
- altura ~36 px.

## 16.4 Eyebrow do depoimento

- linha curta lime;
- label uppercase lime;
- aspas grandes abaixo, também lime.

## 16.5 Quote

- 28–34 px;
- cream/branco;
- line-height ~1.25;
- palavra-chave em lime + itálico;
- sem aspas tradicionais ao redor do parágrafo, pois as aspas viram elemento gráfico separado.

## 16.6 Autor

Após divisor horizontal:

- nome em bold;
- cargo/localização em muted;
- estrelas alinhadas à direita.

---

# 17. Pricing / Planos

## 17.1 Superfície

Grande painel cream, semelhante ao “Como funciona”.

## 17.2 Headline

> Transparente, sem *pegadinhas*.

- central;
- verde forest;
- itálico em “pegadinhas”.

## 17.3 Cards

3 colunas.

Planos observados:

1. Starter — “Pra começar” — R$ 149
2. Pro — R$ 349
3. Scale — “Pra escalar” — R$ 649

## 17.4 Card padrão

- fundo branco;
- radius 18–22 px;
- padding 28–32 px;
- label/pill pequeno no topo;
- heading;
- preço;
- recorrência;
- divisor;
- checklist;
- CTA pill no rodapé.

## 17.5 Card recomendado/destaque

O plano Pro inverte as cores:

- fundo forest;
- texto cream/branco;
- bullets lime;
- CTA lime;
- badge lavanda “Mais escolhido”.

Esse padrão cria destaque sem aumentar excessivamente o tamanho do card.

## 17.6 Checklist

- check minimalista;
- cor forest em cards claros;
- lime em card escuro;
- 14–16 px;
- espaçamento vertical 14–18 px.

## 17.7 CTA dos planos

- largura 100%;
- height ~44–48 px;
- pill;
- card claro → fundo lavanda muito claro;
- card Pro → fundo lime;
- texto central.

---

# 18. CTA final

## 18.1 Superfície

Grande card lavanda clara sobre forest.

- layout 2 colunas;
- radius 28–32 px;
- padding 56–64 px.

## 18.2 Esquerda

Eyebrow “VAMOS COMEÇAR”.

Headline:

> Sua empresa pronta em 72h.

Abaixo:

- botão WhatsApp primário;
- botão e-mail secundário outline.

## 18.3 Direita

Card forest interno com:

- microcopy lime “PRIMEIRA CONVERSA”;
- palavra “Grátis” muito grande em lime;
- descrição em muted light.

A mensagem reforça redução de risco e entrada sem compromisso.

---

# 19. Footer

## 19.1 Estrutura

4 colunas principais:

1. marca + manifesto curto;
2. Serviços;
3. Empresa;
4. Suporte.

### Coluna de marca

- logo lime;
- texto muted;
- largura ~250–300 px.

### Títulos de coluna

- 13–14 px;
- semibold;
- lime.

### Links

- 13–15 px;
- muted;
- line-height amplo;
- hover para cream/lime.

## 19.2 Bottom bar

- divisor horizontal fino;
- copyright à esquerda;
- redes sociais à direita;
- ícones dentro de pequenos círculos verde secundário.

---

# 20. Sistema de botões

## 20.1 Primary — lime

```css
background: var(--color-lime-500);
color: var(--color-forest-950);
border: 0;
border-radius: 999px;
font-weight: 650;
```

Uso:

- CTA de alto valor;
- CTA do plano recomendado;
- navbar.

## 20.2 Primary dark

```css
background: var(--color-forest-950);
color: var(--color-lime-500);
```

Uso:

- hero;
- WhatsApp sobre lavanda.

## 20.3 Secondary outline

```css
background: transparent;
color: var(--color-forest-950);
border: 1px solid rgba(13,46,35,.65);
```

## 20.4 Tertiary / text link

- sem fundo;
- sem borda;
- arrow no final;
- peso 500–600.

## 20.5 Tamanhos

### Small

- height 36–38 px;
- padding x 16 px;
- text 13 px.

### Medium

- height 44–48 px;
- padding x 20–24 px;
- text 14–16 px.

### Large

- height 52–56 px;
- padding x 28–32 px;
- text 16 px.

## 20.6 Estados

### Hover

- leve aumento de luminância;
- translateY(-1px);
- transição 160–220 ms.

### Active

- translateY(0);
- saturação reduzida 3–5%.

### Focus

```css
outline: 3px solid rgba(210,233,92,.35);
outline-offset: 3px;
```

### Disabled

- opacity .45;
- sem transform.

---

# 21. Pills, badges e chips

## 21.1 Section eyebrow pill

Exemplo “SERVIÇOS”.

- border 1 px semi-transparente;
- fundo transparente;
- uppercase;
- tracking alto;
- height 28–32 px;
- padding 10–16 px.

## 21.2 Category chip

Exemplos “Starter”, “Scale”.

- fundo lavanda muito claro;
- texto forest;
- 11–12 px;
- radius pill.

## 21.3 Featured badge

- fundo lavanda;
- ícone estrela;
- texto “Mais escolhido”.

## 21.4 Review pill

- lime;
- estrelas + nota;
- compacto;
- alta legibilidade.

---

# 22. Ícones

## 22.1 Estilo

- simples;
- geométrico;
- 1.5–2 px de stroke;
- preferencialmente outline;
- cantos arredondados;
- sem ilustração detalhada.

## 22.2 Tamanhos

- micro: 14–16 px;
- padrão: 18–20 px;
- ícone em círculo: 20–24 px;
- setas: 12–16 px.

## 22.3 Containers de ícone

- 32–42 px;
- círculos ou quadrados arredondados;
- lime, cream ou verde translúcido.

---

# 23. Fotografia

## 23.1 Direção de arte

A fotografia é moderna e humana, com cenas de:

- empreendedor trabalhando;
- equipe reunida;
- documentos e calculadora;
- dashboards;
- apresentações e reunião;
- pessoas em espaços de trabalho reais.

## 23.2 Tratamento

- luz natural ou softbox naturalista;
- temperatura levemente quente/neutra;
- contraste moderado;
- saturação controlada;
- profundidade de campo realista;
- sem overlays coloridos agressivos.

## 23.3 Crop

- pessoas recortadas no Hero;
- imagens dos cards usam `object-fit: cover`;
- composição deve preservar ponto de interesse no centro/superior.

## 23.4 Evitar

- stock corporativo exageradamente posado;
- pessoas olhando diretamente para câmera em todos os cards;
- HDR;
- gradiente artificial pesado;
- iconografia “contabilidade” genérica demais.

---

# 24. Vetores e elementos gráficos

## 24.1 Scribble orgânico

Principal elemento proprietário da composição.

Características:

- path contínuo;
- lime;
- grosso;
- curvas amplas;
- sensação de percurso/movimento;
- usado em escala grande.

## 24.2 Linhas editoriais

Pequenas linhas horizontais antes de labels:

```text
— COMO FUNCIONA
— PLANOS
— VAMOS COMEÇAR
```

- 20–28 px de comprimento;
- 1 px de espessura;
- lime ou verde médio.

## 24.3 Timeline tracejada

- linha horizontal dashed;
- baixa opacidade;
- função informacional.

## 24.4 Emojis

O sistema aceita emojis no texto como elemento de linguagem de marca, por exemplo:

- ⚡
- 🚀
- 🇧🇷
- 💬

Devem ser usados pontualmente; não são substitutos dos ícones de interface.

---

# 25. Accordions

**Não há accordion visível nos 7 screenshots.** Portanto, não é possível extrair um componente original com total fidelidade. Abaixo está a especificação mais coerente com o sistema, caso seja necessário criar FAQ/accordion mantendo a linguagem visual.

## 25.1 Accordion sobre fundo cream

- row height mínima: 72 px;
- border-bottom 1 px `rgba(13,46,35,.12)`;
- título 18–20 px semibold;
- ícone `+` ou seta em círculo de 32 px;
- conteúdo 15–16 px, line-height 1.55;
- expansão sem card extra.

## 25.2 Accordion sobre fundo forest

- texto cream;
- divisor branco 10–12% opacity;
- ícone lime;
- body muted light.

## 25.3 Motion

- 220–300 ms;
- easing `cubic-bezier(.2,.8,.2,1)`;
- rotação do ícone 45° ou 180°;
- conteúdo abre por height + opacity.

---

# 26. Formulários — extensão coerente do sistema

Também não aparecem inputs tradicionais nos screenshots, mas para completar o design system:

## 26.1 Input padrão

- height: 52–56 px;
- radius: 14–16 px;
- fundo white/cream;
- border 1 px transparente ou forest 10%;
- label 13–14 px semibold;
- placeholder muted;
- focus com outline lime 30%.

## 26.2 Input sobre fundo escuro

- fundo `#153A2C`;
- texto cream;
- placeholder muted;
- border branco 12%;
- focus lime.

## 26.3 Error

Evitar vermelho saturado puro. Usar tom quente mais sofisticado, por exemplo `#D66A5E`, mantendo contraste AA.

---

# 27. Tabelas — extensão coerente

Se necessário em páginas internas:

- cabeçalho 12–13 px uppercase;
- fundo cream/lavender muito claro;
- rows 52–60 px;
- sem grid completo; apenas divisores horizontais;
- texto 14–15 px;
- status em pills;
- números alinhados à direita.

---

# 28. Interações e motion

A linguagem visual sugere motion discreto.

## 28.1 Duração

- microinteraction: 160 ms;
- button/card hover: 200 ms;
- accordion: 260 ms;
- reveal de seção: 400–600 ms.

## 28.2 Easing

```css
--ease-out: cubic-bezier(.2,.8,.2,1);
--ease-soft: cubic-bezier(.22,1,.36,1);
```

## 28.3 Card hover

- translateY(-3px);
- imagem scale 1.02–1.04;
- arrow circle ganha contraste;
- duração 220 ms.

Evitar bounce e efeitos chamativos.

## 28.4 Scroll reveal

Se usado:

- opacity 0 → 1;
- y 16–24 px → 0;
- stagger entre cards: 60–90 ms.

---

# 29. Responsividade

## 29.1 Breakpoints sugeridos

```css
--bp-sm: 480px;
--bp-md: 768px;
--bp-lg: 1024px;
--bp-xl: 1280px;
```

## 29.2 Navbar

### Desktop

- logo + links + CTA.

### Tablet/Mobile

- logo;
- CTA compacto opcional;
- menu hamburger.

Menu aberto:

- painel forest;
- links grandes;
- CTA lime 100%.

## 29.3 Hero mobile

Ordem:

1. headline;
2. parágrafo;
3. CTAs;
4. prova social;
5. imagem.

- card com padding 24 px;
- H1 42–48 px em tablet, 36–42 px mobile;
- fotografia abaixo do conteúdo;
- scribble pode ser reposicionado e parcialmente reduzido.

## 29.4 Serviços

- desktop: 4 colunas;
- tablet: 2 colunas;
- mobile: 1 coluna ou horizontal snap carousel.

## 29.5 Métricas

- desktop: mosaico;
- tablet: 2 colunas;
- mobile: 1 coluna;
- não tentar manter assimetria complexa em 360 px.

## 29.6 Timeline

- desktop: horizontal;
- mobile: vertical;
- linha tracejada torna-se vertical à esquerda;
- círculos alinhados no eixo da linha.

## 29.7 Pricing

- desktop: 3 colunas;
- tablet: 1–2 colunas;
- mobile: 1 coluna;
- plano Pro pode aparecer primeiro ou manter ordem semântica conforme estratégia comercial.

## 29.8 Footer

- desktop: 4 colunas;
- tablet: 2×2;
- mobile: stack vertical;
- bottom bar também empilhada.

---

# 30. Acessibilidade

## 30.1 Contraste

Combinações seguras:

- cream/white sobre forest;
- forest sobre cream/lavender;
- forest sobre lime.

Atenção especial a:

- muted text sobre forest;
- lime claro sobre cream;
- cinzas muito claros em fundo lavanda.

Validar WCAG 2.2 AA.

## 30.2 Focus

Todo elemento interativo precisa de foco visível, não apenas hover.

## 30.3 Targets

- mínimo 44×44 px para mobile;
- arrows circulares dos cards devem ter área clicável maior que o ícone visual.

## 30.4 Texto

- body mínimo 16 px no mobile;
- não depender apenas da cor para comunicar seleção/recomendação.

---

# 31. Estrutura completa da landing page

Ordem observada:

1. **Navbar**
2. **Hero**
3. **Serviços**
4. **Manifesto/posicionamento da marca**
5. **Métricas e prova de escala**
6. **Cobertura nacional**
7. **Logo strip / confiança**
8. **Como funciona — 4 passos**
9. **Depoimento em destaque**
10. **Planos**
11. **CTA final**
12. **Footer**

## 31.1 Lógica de conversão

A sequência segue um funil bem construído:

- promessa;
- oferta;
- diferenciação;
- prova quantitativa;
- abrangência;
- prova social;
- redução de complexidade;
- prova qualitativa;
- preço;
- CTA final.

Isso é importante: o design visual e a arquitetura de persuasão trabalham juntos.

---

# 32. Anatomia dos principais componentes

## 32.1 `SectionHeading`

Props conceituais:

```ts
type SectionHeading = {
  eyebrow?: string;
  title: string;
  emphasis?: string;
  align?: 'left' | 'center';
  theme?: 'dark' | 'light';
}
```

## 32.2 `ServiceCard`

```ts
type ServiceCard = {
  image: string;
  icon: Icon;
  title: string;
  href: string;
}
```

Anatomia:

```text
┌──────────────────────┐
│  ● icon              │
│                      │
│       PHOTO          │
│                      │
├──────────────────────┤
│ Title            ↗   │
└──────────────────────┘
```

## 32.3 `MetricCard`

Variantes:

- `large-stat`;
- `small-stat`;
- `support-channel`;
- `time-stat`.

## 32.4 `StepItem`

```text
   02
   ●────────────
   Título
   descrição
```

## 32.5 `TestimonialCard`

- media;
- score badge;
- eyebrow;
- quote mark;
- quote;
- author metadata;
- stars.

## 32.6 `PricingCard`

Estados:

- default;
- featured.

Anatomia:

```text
[tag]
Título
R$ PREÇO
recorrência
──────────
✓ feature
✓ feature
✓ feature

[ CTA 100% ]
```

---

# 33. Design tokens completos sugeridos

```css
:root {
  /* COLORS */
  --forest-950: #0D2E23;
  --forest-900: #133C2D;
  --forest-800: #194A39;
  --lime-500: #D2E95C;
  --lime-300: #E9F99C;
  --cream-100: #F3EFE5;
  --cream-50: #F8F5ED;
  --lavender-200: #C9C3FC;
  --lavender-100: #DADAFF;
  --lavender-50: #F1F0FF;
  --white: #FFFFFF;
  --muted-dark: #63736C;
  --muted-light: #8EA299;

  /* TYPOGRAPHY */
  --font-sans: 'Satoshi', 'Inter', system-ui, sans-serif;
  --weight-regular: 400;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-bold: 700;
  --weight-extrabold: 800;

  /* SPACING */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-30: 120px;
  --space-32: 128px;

  /* RADIUS */
  --radius-xs: 10px;
  --radius-sm: 14px;
  --radius-md: 18px;
  --radius-lg: 24px;
  --radius-xl: 32px;
  --radius-pill: 999px;

  /* BORDERS */
  --border-dark: 1px solid rgba(255,255,255,.12);
  --border-light: 1px solid rgba(13,46,35,.12);

  /* MOTION */
  --duration-fast: 160ms;
  --duration-default: 220ms;
  --duration-slow: 480ms;
  --ease-out: cubic-bezier(.2,.8,.2,1);
}
```

---

# 34. Figma — organização recomendada

## 34.1 Variables

Collections:

- `Color / Primitive`
- `Color / Semantic`
- `Spacing`
- `Radius`
- `Typography`

Modes:

- Light surface
- Dark surface

## 34.2 Text styles

Criar:

- `Display/Hero`
- `Heading/H2`
- `Heading/H3`
- `Statement/Large`
- `KPI/Large`
- `Price/Large`
- `Body/L`
- `Body/M`
- `Body/S`
- `Label/Eyebrow`
- `Label/Nav`
- `Label/Chip`

## 34.3 Componentes

Biblioteca mínima:

- `Button / Primary Lime`
- `Button / Primary Dark`
- `Button / Secondary Outline`
- `Button / Text`
- `Chip / Neutral`
- `Chip / Featured`
- `Badge / Review`
- `IconButton / Arrow`
- `Nav / Desktop`
- `Nav / Mobile`
- `Card / Service`
- `Card / Metric`
- `Card / Coverage`
- `Card / Pricing / Default`
- `Card / Pricing / Featured`
- `Card / Testimonial`
- `Step / Timeline`
- `Accordion / Closed`
- `Accordion / Open`
- `Footer / Desktop`
- `Footer / Mobile`

## 34.4 Auto Layout

Usar Auto Layout extensivamente:

- vertical nos cards;
- horizontal em CTAs;
- wrap em chips;
- distribuição `space-between` em pricing e navbar;
- constraints no Hero e CTA final.

---

# 35. CSS de referência para a fundação

```css
body {
  margin: 0;
  background: #0D2E23;
  color: #F3EFE5;
  font-family: 'Satoshi', 'Inter', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

.container {
  width: min(1200px, calc(100% - 64px));
  margin-inline: auto;
}

.section {
  padding-block: 96px;
}

.display {
  font-size: clamp(42px, 5vw, 72px);
  line-height: 1.02;
  letter-spacing: -0.04em;
  font-weight: 600;
}

.h2 {
  font-size: clamp(36px, 4vw, 56px);
  line-height: 1.06;
  letter-spacing: -0.035em;
  font-weight: 600;
}

.emphasis {
  color: #D2E95C;
  font-style: italic;
}

.surface-light {
  background: #F3EFE5;
  color: #0D2E23;
  border-radius: 32px;
}

.surface-lavender {
  background: #DADAFF;
  color: #0D2E23;
  border-radius: 32px;
}
```

---

# 36. O que NÃO fazer ao reproduzir este design

1. Não substituir o forest por preto puro.
2. Não transformar o lime em cor predominante.
3. Não usar múltiplos gradientes neon.
4. Não adicionar sombras fortes em todos os cards.
5. Não reduzir os radii; cantos arredondados são essenciais.
6. Não usar três ou quatro famílias tipográficas.
7. Não usar serifadas para títulos: a personalidade depende de grotesca contemporânea.
8. Não encher as seções com ícones decorativos.
9. Não apertar o espaçamento vertical.
10. Não usar cards com bordas pesadas.
11. Não usar fotografias excessivamente corporativas/posadas.
12. Não transformar a página em dashboard; apesar do tema financeiro, a referência é uma landing page editorial.
13. Não colocar lime sobre cream em texto pequeno sem validar contraste.
14. Não usar itálico indiscriminadamente: ele marca palavras-chave.
15. Não aumentar excessivamente a quantidade de microcopy.

---

# 37. Resumo operacional

Se alguém precisar reconstruir a página sem ver as referências, a regra principal é:

> **Use um canvas verde floresta profundo, grandes superfícies creme e lavanda com cantos de 24–32 px, uma grotesca moderna de headlines grandes e tracking negativo, lime apenas como acento, fotografia humana realista, cards editoriais simples, CTAs em formato pill e bastante espaço negativo.**

A composição deve parecer ao mesmo tempo **financeira, tecnológica, brasileira e humana**, sem cair na estética de banco tradicional, SaaS genérico ou startup neon.

---

# 38. Mapa de confiança da análise

## Alta confiança — diretamente observável

- paleta macro;
- forest dominante;
- cream/lavender/lime;
- estrutura e ordem das seções;
- tipologia dos cards;
- uso intenso de border radius;
- ausência de sombras pesadas;
- hierarquia de headlines;
- uso de itálico como ênfase;
- arquitetura dos planos;
- estrutura da timeline;
- CTA final e footer;
- direção fotográfica.

## Média confiança — inferida por proporção

- tamanhos exatos em px;
- max-width de container;
- gutter;
- padding interno;
- radii exatos;
- duração de motion;
- breakpoints.

## Baixa confiança / não verificável apenas pelos screenshots

- nome exato da fonte;
- comportamento sticky da navbar;
- estados hover/focus originais;
- accordion original;
- inputs/formulários;
- animações reais;
- estrutura de código/front-end.

Esses itens foram especificados como **extensões coerentes**, e não como afirmações de que estavam presentes no projeto original.

