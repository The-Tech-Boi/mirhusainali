---
name: Mir Husain Ali
description: Day shift, night shift. A single page whose palette moves from morning to night to dawn as you scroll.
colors:
  day-bg: "rgb(238,242,247)"
  day-ink: "rgb(16,20,28)"
  day-ink2: "rgb(70,80,100)"
  day-acc: "rgb(31,95,214)"
  day-panel: "rgb(255,255,255)"
  day-line: "rgb(205,212,224)"
  dusk-bg: "rgb(233,158,118)"
  dusk-ink: "rgb(28,18,30)"
  dusk-ink2: "rgb(74,44,52)"
  dusk-acc: "rgb(140,40,60)"
  dusk-panel: "rgb(246,196,166)"
  dusk-line: "rgb(200,120,96)"
  night-bg: "rgb(11,20,48)"
  night-ink: "rgb(241,234,216)"
  night-ink2: "rgb(170,179,204)"
  night-acc: "rgb(226,176,74)"
  night-panel: "rgb(20,32,70)"
  night-line: "rgb(44,60,104)"
  dawn-bg: "rgb(226,228,244)"
  dawn-ink: "rgb(20,20,40)"
  dawn-ink2: "rgb(80,80,110)"
  dawn-acc: "rgb(196,90,120)"
  dawn-panel: "rgb(255,255,255)"
  dawn-line: "rgb(200,200,224)"
typography:
  display:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(56px, 8.2vw, 112px)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(40px, 5vw, 68px)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.035em"
  headline-night:
    fontFamily: "Gloock, serif"
    fontSize: "clamp(48px, 6vw, 84px)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.01em"
  statement:
    fontFamily: "Gloock, serif"
    fontSize: "clamp(38px, 5vw, 72px)"
    fontWeight: 400
    lineHeight: 1.12
  title:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(26px, 2.4vw, 34px)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title-night:
    fontFamily: "Gloock, serif"
    fontSize: "clamp(32px, 3vw, 44px)"
    fontWeight: 400
    lineHeight: 1.1
  lede:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(18px, 1.4vw, 21px)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: 1.55
  mono:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.7
    fontFeature: "tnum"
rounded:
  xs: "6px"
  sm: "8px"
  md: "10px"
  lg: "12px"
  xl: "20px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
components:
  button-primary:
    backgroundColor: "{colors.day-ink}"
    textColor: "{colors.day-bg}"
    typography: "{typography.label}"
    rounded: "{rounded.lg}"
    padding: "0 22px"
    height: "48px"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.day-ink}"
    rounded: "{rounded.lg}"
    padding: "0 22px"
    height: "48px"
  button-small:
    backgroundColor: "transparent"
    textColor: "{colors.day-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "8px 14px"
  button-small-go:
    backgroundColor: "{colors.day-ink}"
    textColor: "{colors.day-bg}"
    rounded: "{rounded.md}"
    padding: "8px 14px"
  toy-panel:
    backgroundColor: "{colors.day-panel}"
    rounded: "{rounded.xl}"
    padding: "clamp(20px, 2.2vw, 30px)"
  inset-tile:
    backgroundColor: "{colors.day-bg}"
    rounded: "{rounded.lg}"
  switch:
    backgroundColor: "{colors.day-line}"
    rounded: "{rounded.pill}"
    width: "72px"
    height: "40px"
  switch-on:
    backgroundColor: "{colors.day-acc}"
---

# Design System: Mir Husain Ali

## Overview

**Creative North Star: "The Shift Clock"**

One engineer, two shifts. The page is a single long scroll whose ground is a clock: it starts on a cool morning instrument panel, passes through a warm dusk band into deep navy night, and lands on a pale violet dawn at the contact block. Every surface reads six role variables (`--bg`, `--ink`, `--ink2`, `--acc`, `--panel`, `--line`) that script repaints continuously from four palettes, so nothing in the system is styled for one time of day alone.

The material is quiet and instrument-like: flat grounds, white or tinted panels with one soft drop, 1.5px inset rings instead of borders, small round status dots, tabular numerals. Each piece of work is paired with a working miniature ("toy") of the real tool rather than a screenshot. A fixed full-viewport canvas behind everything carries the same particles in both modes: tidy record bars by day, twinkling stars by night.

**Key Characteristics:**
- Four palettes, one set of role variables, blended by scroll position.
- One accent per palette, used for live state, never for decoration.
- Heavy tight grotesk by day; Gloock serif takes over headings only after dusk.
- Interactive toys on raised panels carry the proof; prose stays short.
- Motion is springy and small, and disappears entirely under reduced motion.

## Colors

Each palette is near-monochrome plus a single accent; the frontmatter is the normative value for every role.

### Primary
- **Signal Blue** (`day-acc`): live state by day: pulsing bench dots, migration fill, scan beam, duplicate ring, lit pipeline station, the switch when on, focus rings, selection.
- **Lamp Gold** (`night-acc`): the same live-state role at night; also the gold stars on the canvas.
- **Ember Wine** (`dusk-acc`) and **Dawn Rose** (`dawn-acc`): the accent while passing through dusk and at the contact block.

### Neutral
- **Morning Instrument White** (`day-bg`), **Dusk Clay** (`dusk-bg`), **Midnight Navy** (`night-bg`), **Dawn Haze** (`dawn-bg`): page ground; also the fill for inset tiles inside panels (barcode, batch rows, pipeline stations, approval prompt, QR plate).
- **Graphite / Parchment** (`*-ink`): headings, strong runs, primary button fill.
- **Slate** (`*-ink2`): body copy in work pieces, ledes, nav, meta lines, secondary bench dates.
- **Panel** (`*-panel`): toy surfaces. White by day and dawn, navy-lifted at night.
- **Hairline** (`*-line`): inset rings, rail ticks, slider track, off-state dots, switch track.

### Named Rules
**The One Signal Rule.** Each palette owns exactly one accent, and it marks something live, active or selected. Text, buttons at rest and decoration never use it.

**The Legible Ground Rule.** `--bg` and `--acc` blend between palettes; `--ink`, `--line` and `--panel` are never blended. They are taken whole from whichever neighbouring palette matches the ground's lightness (relative luminance above 0.18 is light), and `--ink2` falls back to `--ink` whenever it would drop below 4.5:1 on the current ground.

**The Marker Rule.** Palette changes are driven by `data-sky` markers (0 day, 1 dusk, 2 night, 3 dawn). Any new section carries a marker, and transitions between palettes are placed over empty ground, not over toys or text.

## Typography

**Display Font:** Schibsted Grotesk (with system-ui, sans-serif), weights 400/500/700/800
**Night Font:** Gloock (with serif), 400 only
**Mono Font:** JetBrains Mono (with monospace), 400/600, tabular numerals
**Urdu Font:** Gulzar (Nastaliq), 400, Arabic subset only; used only for the Urdu line in the Kanz Studio toy

**Character:** A dense, tightly tracked grotesk does the day's work; an upright high-contrast serif arrives after dusk and changes the voice without changing the layout.

### Hierarchy
- **Display** (800, clamp 56-112px, 0.92, -0.04em): the name in the hero only.
- **Headline** (800, clamp 40-68px, 1, -0.035em): shift headings; the contact heading runs slightly larger (clamp 44-84px, 0.98, max 12ch).
- **Headline Night** (Gloock 400, clamp 48-84px): night shift heading.
- **Statement** (Gloock 400, clamp 38-72px, 1.12, max 16ch): the single dusk sentence.
- **Title** (800, clamp 26-34px, 1.1) / **Title Night** (Gloock 400, clamp 32-44px): work piece names.
- **Lede** (400, clamp 18-21px, max 46ch) and **Body** (400, 18px, 1.55, max 44-46ch), in Slate.
- **Label** (700, 14-16px): buttons, status lines, links, toy bars. Nav is 15px/500.
- **Mono** (14px, tabular): clock, counters, serials, terminal transcript.

### Named Rules
**The After Dusk Rule.** Gloock appears only from the dusk band onward (dusk statement, night headings, night piece titles). Day and contact headings stay grotesk.

**The Sentence Case Rule.** Headings, labels and buttons are sentence case with no tracking added. The only uppercase, tracked text is the migration stamp, which imitates a rubber stamp.

## Layout

One centred column, `min(1180px, 100% - clamp(40px, 8vw, 120px))`. The hero fills the viewport with copy held to 640px on the left, leaving the right side to the canvas record bars. Shift sections open with generous top space (clamp 90-150px). Each work piece is a two-column grid (0.9fr text, 1.1fr toy, gap clamp 28-80px), and consecutive pieces alternate sides. The dusk band (120vh) and contact (90vh) are deliberately sparse to give the sky room to change. The header is fixed, translucent ground at 82% with a 10px blur.

At 860px and below: pieces and the meter toy stack to one column, the pipeline becomes 2x2 with the moving lyric chip hidden, the clock track shrinks to 90px, and the nav keeps only the Contact link.

## Elevation & Depth

Mostly flat. Depth comes from tone: panels sit on the ground, and inset tiles sit inside panels in the ground colour. One shadow exists, on the toy panel, plus inset rings that act as borders.

### Shadow Vocabulary
- **Panel drop** (`box-shadow: 0 1px 0 var(--line), 0 24px 48px -30px rgba(10,20,40,.35)`): toy panels only.
- **Hairline ring** (`box-shadow: inset 0 0 0 1.5px var(--line)`): line buttons, small buttons, segmented control; hover swaps the colour to `--ink2`; duplicate rows and lit stations use `--acc`.

### Named Rules
**The Ring Not Border Rule.** Outlines are 1.5px inset box-shadows so they never shift layout. The 2px stamp border is the only real border.

## Shapes

Soft, nested rounding that tightens as elements get smaller: panels 20px, buttons and tiles 12px, small buttons and plates 10px, rows and the stamp 8px, rails and chips 6px. Status and bench dots are full circles (7-8px); the switch is a full pill. No sharp corners anywhere except the canvas particles.

## Components

### Buttons
- **Shape:** gently rounded (12px), 48px tall, 0 22px padding, 16px/700.
- **Primary:** ink fill, ground-coloured text.
- **Line:** transparent with a Hairline ring; ring darkens to Slate on hover.
- **Hover / Active:** lift 2px on the pop spring (0.35s), press to 0.97 scale.
- **Small (in toys):** 14px/700, 8px 14px, 10px radius, Hairline ring; the `go` variant is ink-filled; disabled drops to 45% opacity; press to 0.95.

### Segmented control
Ringed 10px track with 3px padding; pressed option fills with ink, others sit in Slate.

### Picker chips
Wrapping row of 13px/700 chips, each with its own Hairline ring and 8px radius; the pressed chip fills with ink. Used where options are too many or too long for a segmented control (portal services, who is signing in).

### Event feed
A list of ground-coloured 8px rows, label left and outcome right in Slate, that arrive one at a time on the pop spring. The latest row is ringed in `--acc` because it is the live one. Used by the portal and team access toys; the meter batch list uses the same row look.

### Runbook steps
A 3-column grid (2 at 860px and below) of ground tiles with a bold step name over a short note. The running step is ringed in `--acc`; finished steps turn ink and gain a check.

### Switch
72x40 pill on Hairline; knob is ground-coloured and springs 32px across; track turns to the accent when on.

### Cards / Containers (toy panel)
- **Corner Style:** 20px.
- **Background:** Panel.
- **Shadow Strategy:** Panel drop (see Elevation).
- **Internal Padding:** clamp(20px, 2.2vw, 30px), with a 14px Slate bar on top holding the instruction and the toy's control.
- **Inset tiles:** ground-coloured, 8-12px radius.

### Navigation
Fixed header: name at 800 on the left, 15px/500 Slate links that darken to ink on hover, and the clock on the right. On phones only Contact remains.

### Shift clock (signature)
A 140px slider track (1.5px Hairline) with a 16px accent knob that becomes a crescent moon (inset shadow, transparent fill) through the night range, and a mono time readout from 08:00 to 05:45. Dragging or arrow keys scroll the page.

### Status line
14px/700 ink text led by an 8px dot: accent for in progress, Slate for done. Bench entries use the same dot, pulsing (2.4s) when current and Hairline when past.

### Motion
Two curves: `--ease` (0.16, 1, 0.3, 1) for travel and reveals, `--pop` (0.34, 1.56, 0.64, 1) for presses, knobs and the stamp. New rows slot in from 8px above. `prefers-reduced-motion` removes every animation and transition, and the canvas freezes.

## Do's and Don'ts

### Do:
- **Do** style every new element with the six role variables so it survives all four palettes.
- **Do** give each new section a `data-sky` marker and check it on day, dusk, night and dawn ground.
- **Do** pair a piece of work with a small working toy on a 20px Panel, instruction in the bar, one primary control.
- **Do** use the accent only for live, active or selected state.
- **Do** use tabular mono for any changing number or identifier.

### Don't:
- **Don't** hard-code colours outside the palette table; the canvas star colours are the only literals and mirror `night-ink` and `night-acc`.
- **Don't** blend `--ink`, `--line` or `--panel` between palettes; pick them whole by ground lightness.
- **Don't** use Gloock before the dusk band; it ships upright at 400 only.
- **Don't** add uppercase tracked labels or eyebrows above headings; the migration stamp is the only uppercase device.
- **Don't** add hard offset shadows, a second shadow style, or real borders where an inset ring will do.
