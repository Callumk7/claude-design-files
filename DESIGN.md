---
version: alpha
name: Forge
description: Dark-first design system for a programming workflow manager.
colors:
  primary: "#5F4BB6"
  primary-hover: "#6F5CC6"
  primary-press: "#4F3DA6"
  secondary: "#86A5D9"
  tertiary: "#26F0F1"
  success: "#C4EBC8"
  success-strong: "#7FCF86"
  warning: "#F5B860"
  danger: "#EF6A6A"
  danger-strong: "#E85252"
  neutral: "#202A25"
  ink-950: "#161D19"
  ink-900: "#202A25"
  ink-850: "#283330"
  ink-800: "#313D38"
  ink-700: "#3D4D46"
  ink-600: "#4F6258"
  ink-500: "#6B8076"
  ink-400: "#8AA092"
  ink-300: "#A8BAAD"
  ink-200: "#C8D4CB"
  ink-100: "#E3EAE5"
  ink-50: "#F1F4F2"
  background: "#161D19"
  surface: "#202A25"
  surface-raised: "#283330"
  surface-hover: "#313D38"
  surface-sunken: "#131915"
  on-surface: "#F1F4F2"
  on-surface-muted: "#A8BAAD"
  on-surface-subtle: "#6B8076"
  on-primary: "#FFFFFF"
  on-tertiary: "#062627"
  on-success: "#14301A"
  on-warning: "#2B1D05"
  on-danger: "#2B0808"
  syntax-keyword: "#C08AFF"
  syntax-string: "#C4EBC8"
  syntax-function: "#86A5D9"
  syntax-number: "#F5B860"
  syntax-comment: "#6B8076"
  syntax-delete: "#EF9A9A"
typography:
  display:
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: 44px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.015em
  headline-md:
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.4
  body-lg:
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.55
  body-md:
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.55
  body-sm:
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
  caption:
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4
  mono-lg:
    fontFamily: "JetBrains Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
  mono-md:
    fontFamily: "JetBrains Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.6
  mono-sm:
    fontFamily: "JetBrains Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
  eyebrow:
    fontFamily: "JetBrains Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: 11px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0.08em
rounded:
  none: 0px
  xs: 3px
  sm: 4px
  md: 6px
  lg: 8px
  xl: 10px
  2xl: 12px
  3xl: 16px
  full: 9999px
spacing:
  1: 4px
  2: 8px
  3: 12px
  4: 16px
  5: 20px
  6: 24px
  8: 32px
  10: 40px
  12: 48px
  13: 52px
  15: 60px
  16: 64px
  18: 72px
  20: 80px
  page-desktop: 48px
  page-tablet: 32px
  sidebar-width: 240px
  content-max-width: 1200px
components:
  button-base:
    typography: "{typography.body-sm}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    height: 32px
    padding: 14px
  button-sm:
    height: 26px
    padding: 10px
    rounded: "{rounded.md}"
  button-lg:
    height: 40px
    padding: 18px
    rounded: "{rounded.xl}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.lg}"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-primary-active:
    backgroundColor: "{colors.primary-press}"
  button-secondary:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
  button-danger:
    backgroundColor: "transparent"
    textColor: "{colors.danger}"
    rounded: "{rounded.lg}"
  button-danger-solid:
    backgroundColor: "{colors.danger-strong}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.lg}"
  button-hero:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    rounded: "{rounded.lg}"
  input:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.lg}"
    height: 34px
    padding: 12px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.2xl}"
    padding: 20px
  card-sunken:
    backgroundColor: "{colors.surface-sunken}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.2xl}"
    padding: 20px
  badge:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.full}"
    height: 22px
    padding: 9px
  code-block:
    backgroundColor: "{colors.surface-sunken}"
    textColor: "{colors.ink-100}"
    typography: "{typography.mono-md}"
    rounded: "{rounded.xl}"
    padding: 16px
  toast:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.xl}"
    padding: 14px
  tooltip:
    backgroundColor: "{colors.surface-hover}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: 9px
---

# Forge Design System

## Overview

Forge is a dark-first design system for a programming workflow manager: a place to ship merge requests, run tests, post updates to Slack, and track work without leaving the keyboard. It should feel calm, technical, fast, and precise, with the terminal's density but more approachable product ergonomics.

The visual language is built around a deep green-black canvas, quiet ink neutrals, and a small set of high-meaning accents. The interface should keep attention on code, workflow state, and collaboration context rather than on decorative chrome.

## Colors

The palette has five core brand colors plus semantic warning and danger colors. UI should reference semantic tokens instead of raw hex values.

- **Primary / Violet Twilight (`#5F4BB6`):** Primary actions, selected navigation, focus rings, and accent card outlines.
- **Secondary / Wisteria Blue (`#86A5D9`):** Links, information states, and running or in-progress workflow states.
- **Tertiary / Neon Ice (`#26F0F1`):** Hero accent for rare moments such as AI suggestions, live-tail status, or celebratory emphasis.
- **Success / Tea Green (`#C4EBC8`):** Passing tests, merged work, additions in diffs, and success notifications only.
- **Neutral / Jet Black (`#202A25`):** Primary card and row surface on top of the darker app canvas.
- **Warning (`#F5B860`):** Review requested, needs attention, and non-destructive caution states.
- **Danger (`#EF6A6A`):** Failed tests, destructive actions, deletions, and error states.

The app uses an 11-step ink scale derived from the green-black brand hue. `background` is almost black-green, `surface` is Jet Black, `surface-raised` and `surface-hover` create tonal layering, and `surface-sunken` is reserved for code-heavy or recessed regions.

## Typography

Inter is used for human-readable product copy. JetBrains Mono is used for anything computed or code-adjacent: branches, hashes, paths, identifiers, channel names, keyboard shortcuts, table metadata, code, and diff rows.

- **Display:** 44px Inter Bold with tight tracking for hero statements such as "Ship the diff."
- **Headlines:** 32px, 22px, and 16px Inter Semi-Bold create compact hierarchy without oversized marketing typography.
- **Body:** 14px Inter Regular is the default product reading size; 15px is used for lead copy; 13px is used for dense component text.
- **Caption:** 12px Inter Medium supports helper text and secondary metadata.
- **Mono:** 13px JetBrains Mono is the default for commands and identifiers, with 12px for metadata and 11px uppercase eyebrow labels.

## Layout

Forge follows a 4px spacing grid with comfortable, Linear-style density. Rows should be compact but not cramped; code and workflow cards get enough breathing room to scan quickly.

The design system documentation app uses a 240px sticky sidebar and a main content column capped at 1200px. Desktop page padding is 48px; narrower layouts collapse to a single column and use 32px page padding. Common component spacing is 8px to 16px for internal gaps, 20px to 24px for card interiors, 32px for demo regions, and 64px for major section separation.

## Elevation & Depth

Depth is communicated through tonal layers, not heavy shadows. Default content sits on `surface`, raised controls and popovers sit on `surface-raised`, hover states use `surface-hover`, and code-adjacent panels can sit in `surface-sunken`.

Real shadows are intentionally rare. Use them only for elements that genuinely float above the interface: modals, toasts, tooltips, popovers, and the special Neon Ice hero action. Cards and rows should use borders, inset highlights, and surface contrast instead.

## Shapes

The shape language is softly technical. Small chips and controls use 4px to 6px radii, standard buttons and inputs use 8px, larger cards, tables, toasts, and modals use 10px to 12px, and status badges or toggles use full pill rounding.

Avoid mixing hard rectangular corners into standard product surfaces. Rounded shapes should stay restrained: enough softness to feel modern, never enough to become playful or bubbly.

## Components

- **Buttons:** Use primary for the main action, secondary for safe supporting actions, ghost for low-emphasis actions, danger for destructive affordances, danger-solid for confirmed destructive actions, and hero for a single high-attention AI or live moment. Sizes are 26px, 32px, and 40px tall.
- **Inputs:** Inputs sit on `surface-raised` so they read as interactive inside `surface` cards. Focus uses Violet Twilight border and a soft violet ring. Error state uses Danger Red and a soft red ring.
- **Cards:** Default cards use `surface`, 12px radius, 20px padding, and a subtle border. Accent cards add a Violet Twilight outline for selected or featured content. Sunken cards use `surface-sunken` for code-adjacent reading.
- **Badges:** Badges are pill-shaped, 22px tall, and use soft tinted backgrounds. Running is Wisteria Blue, passed and merged are Tea Green, failed is Danger Red, review is Warning, queued is muted ink, and hero is Neon Ice.
- **Code and diffs:** Code blocks and diff viewers use `surface-sunken`, JetBrains Mono, 10px radius, and compact 13px type. Syntax colors are vivid but controlled; additions are Tea Green and deletions are Danger Red.
- **Toasts:** Toasts sit on `surface-raised`, use a 10px radius, compact grid layout, and shadows only because they float above the page. Icon wells are soft-tinted by semantic type.
- **Navigation and tabs:** Navigation uses muted text by default, `surface-raised` on hover, and Violet Twilight soft fill or underline for active state. Active side navigation also uses a 2px violet inset rail.
- **Tables and rows:** Tables and task rows use `surface` with subtle borders and dividers. Header labels use uppercase JetBrains Mono. Hover states should brighten tonally rather than introduce new colors.
- **Progress and pipelines:** Progress bars are 6px high pills. Default progress is primary violet, success is Tea Green, and failure is Danger Red. Pipeline stages use soft semantic fills for done, running, and failed states.
- **Tooltips and keyboard chips:** Tooltips use `surface-hover`, compact 13px text, a 6px radius, and a small shadow. Keyboard chips use JetBrains Mono, 4px radius, and a slightly heavier bottom border.

## Do's and Don'ts

- Do keep the interface calm by default: dark canvas, low chroma surfaces, restrained borders, and soft tints.
- Do use Violet Twilight for primary actions, selection, and focus treatments.
- Do reserve Neon Ice for one hero moment per screen.
- Do use Tea Green only for success, merged, passed, and added states.
- Do set branches, hashes, paths, identifiers, commands, channel names, and metadata in JetBrains Mono.
- Do communicate elevation with surface lightness before adding shadows.
- Don't use raw hex values in UI code when semantic tokens exist.
- Don't use Neon Ice as a general decorative accent.
- Don't use Tea Green for non-success decoration.
- Don't stack multiple primary, hero, or destructive actions with equal visual weight.
- Don't add heavy glow or card shadows to ordinary surfaces.
- Don't make density so tight that code, statuses, and row metadata become hard to scan.
