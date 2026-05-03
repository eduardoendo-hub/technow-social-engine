# Tech Now — Design System (Claude Code handoff)

This folder is a **design reference**, not production code. Use it to recreate
on-brand UI inside whatever stack the target project uses (React, Next, Vue,
SwiftUI, native, Astro, etc.) following that project's existing patterns.

## Where to look first

1. **`README.md`** — the canonical brand spec. Read it end-to-end before
   building anything. It defines voice/tone, color, type, motion, hover/press
   states, shadows, layout rules, and iconography substitutions.
2. **`SKILL.md`** — quick reminders (brand mark rules, default surface, copy
   language). Skim this every time you start a new component.
3. **`colors_and_type.css`** — drop-in CSS file with all design tokens as
   custom properties (`--tn-tiffany`, `--tn-deep-teal`, etc.) and the
   typographic scale. Either import it directly or transcribe its tokens into
   the target project's token system.
4. **`assets/`** — logo SVGs (on-dark, on-light, on-tiffany), avatar mark,
   sample icon. Use the on-dark logo by default since the brand surface is
   dark.
5. **`ui_kits/marketing/`** — JSX recreations of the marketing-site visual
   vocabulary (Header, Hero, FeatureGrid, WorkflowDemo, CTABanner, Footer).
   Treat these as **visual references** — port their structure and styling
   to the target framework, don't copy them verbatim.
6. **`preview/`** — design-system preview cards (color swatches, type scale,
   spacing, components). These render the tokens visually so you can verify
   parity in the target codebase. Open the HTML files in a browser to view.

## Hard rules (do not violate)

- The brand mark is **`TechNow`** — one word, no space, capital T and N,
  followed by a Rose Blush dot. Never write "Tech Now Drops" or any sub-brand.
- Default surface is **Deep Teal `#080F0F`**. Tiffany `#0ABAB5` is the brand
  color. Rose `#EC6088` is the **accent dot only** — never a fill, button bg,
  or large surface.
- Default copy language is **Portuguese (pt-BR)**, sharp and declarative.
- **No emoji in product UI or marketing copy.** Emoji are allowed only as
  section markers in social/Reels chips.
- Headlines lean very heavy (Inter 900) with tight tracking (`-0.04em`) and
  tight line-height (1.0–1.1).
- No bouncy / springy easings — use `ease-out` or linear.

## Substitutions to flag with the user

The brand sheet did not provide these, so the design system uses portable
fallbacks. If the user can provide the official versions, replace them:

- **Display font** → Inter (Google Fonts) substituting Segoe UI / system-ui.
- **Icon set** → Lucide CDN (https://lucide.dev/) — humanist 2px stroke
  style that matches the rest of the system.
- **Customer logos / press logos** in the "trusted by" bar are typographic
  placeholders.

## Recommended workflow

1. Transcribe the tokens from `colors_and_type.css` into the target codebase's
   token system (Tailwind config, CSS variables, design-tokens JSON, etc.).
2. Set up the dark-surface baseline (Deep Teal background, Pearl text).
3. Add the logo SVGs to the asset pipeline.
4. Build components by referencing the JSX in `ui_kits/marketing/` and the
   visual system rules in `README.md`.
5. Verify each component against the matching `preview/*.html` card.
