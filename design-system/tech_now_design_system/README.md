# Tech Now — Design System

A Tech Now é uma empresa de soluções e automação utilizando IA para
otimizar negócios. This design system documents the brand's visual language,
typographic hierarchy, color foundations, and a recreated marketing UI kit so
agents can produce on-brand artifacts (decks, mocks, prototypes, social
content, marketing pages) consistently.

> **Naming note.** Source files reference both "Tech Now" and a sub-brand
> "Drops". Per the user's instruction, **only "Tech Now" is used here** —
> "Drops" lockups are intentionally omitted from logos, avatars, and
> components.

## Sources

- `uploads/brand_sheet.html` — full brand identity sheet (logo, YouTube,
  Instagram, watermark, color, type) — this is the canonical reference.
- `uploads/palette_tiffany.html` — palette and gradient definitions, including
  the Endo (Tiffany Light) and Luna (Rose) accent voices.

No codebase, Figma, or production-product references were provided beyond
these two HTML brand sheets. Iconography, slide templates, and additional
product screens are NOT defined yet — see *Caveats* at the end.

---

## Index

| File | Purpose |
|---|---|
| `colors_and_type.css` | All color and type tokens. Import this once. |
| `assets/` | Logo SVGs, avatar mark, sample icons. |
| `preview/` | Design-system preview cards (registered in the DS tab). |
| `ui_kits/marketing/` | Marketing-site UI kit (JSX components + index). |
| `SKILL.md` | Cross-compatible skill manifest for Claude Code reuse. |

---

## Content Fundamentals

**Language.** Primary copy is **Portuguese (pt-BR)**. English is acceptable for
international press kits, but the default voice is Brazilian Portuguese.

**Tone.** Confident, sharp, product-focused — never breathless. Tech Now talks
about AI as a **practical tool** for businesses, not as magic. Sentences are
short and declarative. Headlines often use a setup → punch structure with the
punch in **Tiffany Light**: "GPT-5 chegou — e o salto é *maior* do esperado."

**Casing.** Sentence case for headlines and UI. Eyebrows and section labels
are **UPPERCASE with wide letter-spacing** (0.25em / 4px tracking). The brand
mark is always written **TechNow** as one word with no space, capital T and
capital N. The accent dot follows immediately after the "w".

**Person.** Mostly **third-person about Tech Now** ("A Tech Now usa IA para…").
Direct address ("Você") is used in CTAs and product copy ("Você descreve o
processo. A gente desenha…").

**Vibe.** Sophisticated, slightly nocturnal, news-channel energy. The brand
sheet calls itself "tech sofisticado" and pairs **dark teal foundations**
with the **Tiffany blue jewel-tone** for instant recognition.

**Punctuation.** Em-dashes ( — ) are common as a beat separator. Numbers and
dates use middle-dot separators in eyebrows: `IA · hoje · 4 fontes`.

**Emoji.** Used **sparingly and only inside chip labels** ("⚡ headline",
"📌 fato", "💥 impacto", "🎯 fechamento") on Reels-style story frames where
they serve as section markers. Emoji are NOT used in body copy, headlines, UI
microcopy, or marketing pages.

**Sample copy:**
- "Automação, agora."
- "Soluções de IA aplicada, não de slide."
- "De ideia para produção em uma semana."
- "GPT-5 chegou — e o salto é maior do esperado."

---

## Visual Foundations

**Color.** A **dark Tiffany system** — Deep Teal (`#080F0F`) is the canonical
background, Tiffany (`#0ABAB5`) is the brand color, Tiffany Light (`#81D8D0`,
internally called *Endo*) highlights words inside headlines, and Rose Blush
(`#EC6088`, internally called *Luna*) is the accent dot in the logo and the
"breaking" badge. Pearl (`#EDF4F4`) is the primary text color. Neutrals are
desaturated dark teals (Surface `#0F2020`, Muted `#1A3535`).

**Type.** Inter at heavy weights (700/800/**900**), with very tight tracking
(`-0.04em` on display) and tight line-heights (1.0–1.2). Body is Inter 400/500
at 14 px. Captions use UPPERCASE + 0.25em tracking. Mono is JetBrains Mono.

**Backgrounds.** Always full-bleed Deep Teal. Decoration comes from **soft
radial spotlights** — Tiffany (top-left) + Rose (bottom-right) at low opacity
(0.08–0.16). No photographic or illustrated backgrounds. No repeating
patterns, no noise textures.

**Top-edge accent.** Cards, banners, thumbnails frequently carry a 2-px
**brand line** at the very top:
`linear-gradient(90deg, transparent, #0ABAB5 30%, #81D8D0 50%, #EC6088 70%, transparent)`.

**Animation.** Restrained. The brand sheet is static; animation should be
subtle status indicators (a green dot pulsing for "live"), short fades, and
linear progress bars. **No bouncy or springy easings** — use ease-out / linear.

**Hover & press.** On dark, hover is signaled by a **brighter teal border**
(`#0ABAB5`) with a 3-px Tiffany glow ring (`box-shadow: 0 0 0 3px
rgba(10,186,181,0.15)`). Press states **shrink slightly (`scale: 0.98`)** and
darken by ~10%. Text links underline on hover with a 4-px offset.

**Borders.** 1 px in `#0F2020` (Surface) on dark backgrounds — almost
invisible, just a delineation. Stronger borders use `#1A3535` (Muted).

**Shadows.**
- Resting: `0 1px 2px rgba(0,0,0,0.30)`.
- Cards: `0 18px 48px -16px rgba(0,0,0,0.55)` (deep, soft drop).
- Brand glow: `0 0 24px rgba(10,186,181,0.30)` on tiffany surfaces.
- Rose glow: `0 0 12px rgba(236,96,136,0.70)` only on the logo dot at large
  sizes.

**Capsules vs gradients.** Pills (radius 999) are used for buttons, status
chips, and progress bars. Gradients are reserved for the **Duo bar** (Tiffany
→ Tiffany Light → Rose), the brand line, and the rare full-bleed CTA banner.

**Transparency & blur.** Used in the sticky header (`rgba(8,15,15,0.85)` +
`backdrop-filter: blur(14px)`) and faint chip backgrounds
(`rgba(10,186,181,0.10)` for branded chips).

**Imagery vibe.** Cool, dark, slightly night-feed. No warm tones. Avatars use
Tiffany / Rose backgrounds with Deep Teal initials.

**Corner radii.** Tight on UI elements (6–10), generous on cards (14–18),
extra-generous on hero banners (24). Pill (999) for buttons and status.

**Layout rules.** Centered max-width 1080–1200 columns with 32-px outer
padding. Hero sections are tall (~120 px top padding). Section vertical rhythm
is 80–100 px. Content is **center-aligned** in heroes and CTAs, **left-aligned**
in feature/text blocks.

---

## Iconography

**Approach.** No icon font ships with the brand sheet. Tech Now leans on
**typography + color + the accent dot** as its primary visual vocabulary, not
on a dense icon set.

For UI surfaces, **substitute Lucide** (https://lucide.dev/) — same humanist
2-px stroke, rounded line caps, and minimalist style as the rest of the
visual system. Load via CDN:

```html
<script src="https://unpkg.com/lucide@latest"></script>
```

**Where icons are required:** workflow steps, status pills, nav items, CTA
arrows. Use stroke `currentColor` so they pick up the surrounding text color
(Tiffany on hover/focus, Pearl by default, Muted for tertiary).

**Emoji usage.** Restricted to story / Reels-style social content as
section markers (⚡ 📌 💥 🔍 🎯) — never in product UI or marketing copy.

> ⚠️ **Substitution flag.** Lucide is a stand-in. If Tech Now has a
> proprietary icon set, please share it and we'll replace this section.

---

## UI Kits

| Kit | Path | Status |
|---|---|---|
| Marketing site | `ui_kits/marketing/` | ✅ Recreation of brand-sheet visual system |

The marketing kit composes a hero, "trusted by" bar, 3-up feature grid,
animated workflow demo, CTA banner, and footer. Components are JSX modules
that share globals via `window.*`.

---

## Caveats & gaps

- **Fonts substituted.** Brand sheet specifies `Segoe UI`/system-ui. Inter is
  used as a portable Google-Fonts equivalent. **Please share an official
  display font** if Tech Now owns one (e.g. a custom geometric sans).
- **Icon system substituted** with Lucide CDN — no Tech Now icon set was
  provided.
- **No real product surfaces** were given (no app, no docs, no dashboard).
  The marketing kit is the only UI surface and was built from the brand
  sheet's *visual* vocabulary, not a real product screen.
- **No slide template** provided, so no `slides/` directory was generated.
- **No real customer logos / press materials** — the "trusted by" bar uses
  placeholder typographic stand-ins.
- **No imagery / illustration system** was specified in the brand sheet
  beyond avatars and radial spotlights.
