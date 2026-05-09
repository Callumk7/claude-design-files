# Workflow Manager Design System

_Started 2026-05-09 15:36 UTC_

---

## User

Lets start by building out a design system for this project. We are going to be building a workflow manager to help me with the tasks around programming (posting to slack, creating MRs with descriptions, running tests, work tracking). I have a color palette in mind:

/* CSS HEX */
--jet-black: #202a25ff;
--violet-twilight: #5f4bb6ff;
--wisteria-blue: #86a5d9ff;
--neon-ice: #26f0f1ff;
--tea-green: #c4ebc8ff;

/* CSS HSL */
--jet-black: hsla(150, 14%, 15%, 1);
--violet-twilight: hsla(251, 42%, 50%, 1);
--wisteria-blue: hsla(218, 52%, 69%, 1);
--neon-ice: hsla(180, 88%, 55%, 1);
--tea-green: hsla(126, 49%, 85%, 1);

/* SCSS HEX */
$jet-black: #202a25ff;
$violet-twilight: #5f4bb6ff;
$wisteria-blue: #86a5d9ff;
$neon-ice: #26f0f1ff;
$tea-green: #c4ebc8ff;

/* SCSS HSL */
$jet-black: hsla(150, 14%, 15%, 1);
$violet-twilight: hsla(251, 42%, 50%, 1);
$wisteria-blue: hsla(218, 52%, 69%, 1);
$neon-ice: hsla(180, 88%, 55%, 1);
$tea-green: hsla(126, 49%, 85%, 1);

/* SCSS RGB */
$jet-black: rgba(32, 42, 37, 1);
$violet-twilight: rgba(95, 75, 182, 1);
$wisteria-blue: rgba(134, 165, 217, 1);
$neon-ice: rgba(38, 240, 241, 1);
$tea-green: rgba(196, 235, 200, 1);

/* SCSS Gradient */
$gradient-top: linear-gradient(0deg, #202a25ff, #5f4bb6ff, #86a5d9ff, #26f0f1ff, #c4ebc8ff);
$gradient-right: linear-gradient(90deg, #202a25ff, #5f4bb6ff, #86a5d9ff, #26f0f1ff, #c4ebc8ff);
$gradient-bottom: linear-gradient(180deg, #202a25ff, #5f4bb6ff, #86a5d9ff, #26f0f1ff, #c4ebc8ff);
$gradient-left: linear-gradient(270deg, #202a25ff, #5f4bb6ff, #86a5d9ff, #26f0f1ff, #c4ebc8ff);
$gradient-top-right: linear-gradient(45deg, #202a25ff, #5f4bb6ff, #86a5d9ff, #26f0f1ff, #c4ebc8ff);
$gradient-bottom-right: linear-gradient(135deg, #202a25ff, #5f4bb6ff, #86a5d9ff, #26f0f1ff, #c4ebc8ff);
$gradient-top-left: linear-gradient(225deg, #202a25ff, #5f4bb6ff, #86a5d9ff, #26f0f1ff, #c4ebc8ff);
$gradient-bottom-left: linear-gradient(315deg, #202a25ff, #5f4bb6ff, #86a5d9ff, #26f0f1ff, #c4ebc8ff);
$gradient-radial: radial-gradient(#202a25ff, #5f4bb6ff, #86a5d9ff, #26f0f1ff, #c4ebc8ff);

## Assistant

_[tool: questions_v2]_

## User

Questions answered:
- vibe: Dark-first terminal/IDE feel — jet-black canvas, neon-ice accents
- type_pairing: Geometric sans + mono (Inter/Geist + JetBrains Mono)
- density: Comfortable / spacious (Linear-like)
- shape_language: Soft rounded (8–12px), modern app feel
- accent_use: Sparingly — hero moments only
- violet_use: Primary brand / primary buttons
- tea_green_use: Success / passing tests / merged states
- components_needed: Buttons (primary/secondary/ghost/destructive), Form inputs (text, select, textarea), Cards & surfaces, Status badges / pills (running, passed, failed, draft), Code blocks / inline code / diff blocks, Toast / notification, Modal / dialog, Navigation (sidebar, tabs, breadcrumbs), Task / MR / PR list rows, Tables & data rows, Progress indicators (test runs, CI pipelines), Tooltips & keyboard shortcut chips
- missing_tokens: Neutral gray scale (derived from jet-black hue), Semantic colors (error red, warning amber), Spacing scale (4/8 grid), Radius scale, Typography scale (display→caption), Surface elevation tints (raised, sunken)
- gradient_attitude: Avoid gradients in product UI, keep flat
- format: Single scrollable page — sections for color/type/components

## Assistant

_[tool: update_todos]_

_[tool: write_file]_

Locking the direction in:

**System: "Forge"** — dark-first terminal/IDE feel. Jet-black canvas, violet primary, neon-ice reserved for hero moments, tea-green = success/merged. Inter + JetBrains Mono. Linear-style spacious density. 8–12px radii. No gradients in product UI.

Building it as one scrollable page now.

_[tool: done]_

_[tool: snip]_

_[tool: fork_verifier_agent]_

Forge design system is live in your tab — single scrollable page covering color (brand 5, ink ramp, semantic tokens), type, spacing, radius, elevation, and all twelve component groups with realistic workflow-manager content (MRs, pipelines, diffs, Slack posts, test runs).

A few caveats / next steps:
- Warning amber and danger red are custom additions outside your brand 5 — flagged in the semantic table.
- Neon-ice is reserved for one hero moment per screen; only one button uses it as a demo.
- Ready to expand into actual screens (dashboard, MR detail, pipeline view) whenever you want — say the word.

## User

Okay, so let's build out the first screen. This can be something like a branch review. So imagine the app has detected that we have a new feature branch. And what this view does is lets us check what's been done to it so we can see the differences, but also have we got a good draft MR description?

Has it been pushed to GitLab? What has changed? Have we run the test suite? Things like that.

