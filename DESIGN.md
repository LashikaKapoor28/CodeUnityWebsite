# CodeUnity Design System

## 1. Atmosphere & Identity

CodeUnity is bright, welcoming, and youth-focused. Its signature is a cool indigo-to-teal color story carried through gentle gradients, rounded white cards, and restrained elevation. The experience follows a clear story—learn, see the work, meet the community, then get involved—so every page should feel encouraging, credible, and easy to scan without decorative characters competing with the content.

## 2. Color

### Palette

| Role | Token or documented value | Value | Usage |
| --- | --- | --- | --- |
| Text / primary | `--ink` | `#0f172a` | Headlines and body copy |
| Text / secondary | `--muted` | `#64748b` | Supporting copy and metadata |
| Text / slate | existing literal | `#475569` / `#334155` / `#94a3b8` | Navigation, lists, and footer text |
| Surface / primary | existing literal | `#ffffff` | Page and card backgrounds |
| Surface / secondary | `--soft` | `#f8fafc` | Alternating sections and quiet panels |
| Surface / tint | `--surface-tint` | `#f4f7ff` | Page gradients and grouped content |
| Border / default | `--line` | `#e2e8f0` | Controls and dividers |
| Border / subtle | existing literal | `#f1f5f9` | Card outlines |
| Accent / indigo | `--indigo` | `#4f46e5` | Primary actions and links |
| Accent / indigo hover | `--indigo-dark` | `#4338ca` | Hover states |
| Accent / teal | `--teal` | `#14b8a6` | Gradient endpoint and highlights |
| Accent / teal dark | `--teal-dark` | `#0f766e` | Teal actions and labels |
| Accent / amber | `--amber` | `#d97706` | Warm status emphasis |
| Focus / ring | `--focus-ring` | `#4f46e5` | Keyboard focus outlines |
| Indigo tint ramp | existing literals | `#eef2ff`, `#e0e7ff`, `#c7d2fe`, `#a5b4fc`, `#3730a3` | Pills, gradients, and project links |
| Teal tint ramp | existing literals | `#ccfbf1`, `#bde8e2`, `#2dd4bf` | Gradients and highlights |
| Blue accent ramp | existing literals | `#0ea5e9`, `#60a5fa` | Home-page gradient details |
| Dark surface ramp | existing literals | `#111827`, `#1e293b`, `#37308f`, `#2f2c90` | Footer and impact section |
| Event gold | existing literals | `#fffbeb`, `#fcd34d`, `#b45309` | First-place card |
| Event silver | existing literals | `#f8fafc`, `#cbd5e1`, `#64748b` | Second-place card |
| Event bronze | existing literals | `#fff7ed`, `#fed7aa`, `#c2410c` | Third-place card |

The current project uses a mix of CSS custom properties and legacy page-local literals. Preserve those existing values during focused maintenance. Any new reusable color must be added here and to `:root` before use.

## 3. Typography

### Font Stack

- Primary: `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`
- No secondary or monospace family is used.

### Scale

| Level | Size | Weight | Line height | Usage |
| --- | --- | --- | --- | --- |
| Home display | `--home-title-size`: `clamp(3.75rem, 6.4vw, 5rem)` | 900 | 0.98 | Home title |
| Page title | `--page-title-size`: `clamp(2.75rem, 5vw, 3.75rem)` | 850 | 1.02 | Interior-page hero titles |
| Section title | `--section-title-size`: `clamp(1.85rem, 3.2vw, 2.5rem)` | 850 | 1.1 | Section headings |
| Project title | `--project-title-size`: `clamp(1.5rem, 2.6vw, 2rem)` | 850 | 1.08 | Project sample names |
| Card title | `1.35rem` | 800 | 1.25 | Cards and compact headings |
| Lead | `clamp(1.08rem, 2vw, 1.25rem)` | 400 | 1.75 | Introductory paragraphs |
| Body | `1rem` | 400 | 1.6 | Default text |
| Metadata | `0.75rem` to `0.96rem` | 750–900 | contextual | Pills, labels, and captions |

Below 560px, the home title caps at `3.4rem`, interior page titles at `2.5rem`, and section titles at `2rem`. Project names intentionally use a smaller scoped level than global section headings so long names remain balanced inside split cards. Headings should not wrap beyond three lines on a 375px viewport.

## 4. Spacing & Layout

- Base unit: 4px.
- Maximum content width: `--container-width`, 1200px with 24px gutters, reduced to 20px below 560px.
- Narrow content width: 768px.
- Primary section spacing: `--section-space`, 80px; tight sections: 56px; responsive sections: 56px below 820px.
- Shared spacing steps in active use: 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 56px, 64px, 72px, 80px, 96px, 104px, and 112px.
- Shared grids use two, three, or four equal columns and collapse to one column below 820px. Grid children stretch to equal height unless content explicitly requires otherwise.
- Project cards use a 2:3 image/content split and collapse below 760px.

## 5. Components

### Navigation and Footer

- **Structure:** Injected by `shared/layout.js` on every page.
- **Order:** Home, Programs, Projects, Events, Team, Contact; one primary Enroll Now action.
- **Variants:** Desktop navigation and mobile disclosure menu; the enrollment action remains available inside the mobile menu.
- **States:** Default, scrolled, current-page, hover, menu open, pressed, and keyboard focus.
- **Accessibility:** Semantic navigation, labelled mobile control, and `aria-expanded` state.
- **Motion:** 160–220ms color, transform, shadow, and backdrop transitions.

### Button

- **Variants:** Primary, ghost, outline, teal, and light.
- **Spacing:** 40px minimum height, pill radius, 9px by 22px padding.
- **States:** Default, hover, pressed, focus-visible, and disabled.
- **Motion:** 160ms transform and color transitions.

### Card

- **Structure:** White surface with a subtle border, `--radius-card` 20px radius, and `--shadow-card` soft shadow.
- **Variants:** Padded, program, person, team, contact, project, event, winner, reach, quote, and subscribe.
- **States:** Static by default; project cards elevate on hover; event and FAQ cards have open/closed states.
- **Accessibility:** Interactive content uses links or buttons rather than clickable containers.

### Page Hero

- **Structure:** Centered narrow container with title, optional eyebrow, and lead copy.
- **Ornament:** Interior page heroes do not use character, brace, or emoji badges.
- **Spacing:** 64px top and 72px bottom on desktop; 48px top and 52px bottom below 820px.
- **Surface:** A subtle indigo/teal radial tint separates the page introduction from content without adding a card.

### Section Heading

- **Structure:** Optional eyebrow, heading, and supporting lead inside a centered narrow container.
- **Spacing:** 12px eyebrow-to-title and 20px title-to-lead; 40px to the section content grid.
- **Responsive:** Uses the section-title scale and never exceeds three lines at 375px.

### Involvement Card

- **Structure:** Kicker, heading, supporting text, and action anchored to the bottom.
- **States:** Static container with interactive button states.
- **Layout:** Paired cards remain equal height and align headings and actions.

### Inline Icon

- **Structure:** Semantic text is paired with an inline, `aria-hidden` SVG when an icon adds scanning value.
- **Rules:** No emoji, font glyphs, ASCII placeholders, or unlabeled symbolic characters are used as icons.

### Project Card

- **Structure:** Image and text columns, category pill, linked title, class metadata, and description.
- **States:** Default, card hover, title hover, and keyboard focus through the native link.
- **Responsive:** Single column below 760px.

### Event Panel and Winner Card

- **Structure:** Accessible disclosure button, collapsible content, and ranked winner cards.
- **States:** Open/closed through `aria-expanded`; visible focus outline on the disclosure button.
- **Affordance:** A chevron SVG rotates using `transform` to show open state.
- **Ornament:** Rankings are communicated by text and color, never emoji.

## 6. Motion & Interaction

| Type | Duration | Easing | Usage |
| --- | --- | --- | --- |
| Micro | 160–180ms | ease | Buttons, links, and card hover |
| Navigation | 220ms | ease | Fixed-nav surface changes |
| Disclosure | 300ms | ease | Event panels |
| Reveal | 560ms | ease | IntersectionObserver entry animation |

Motion stays on transform, opacity, color, shadow, and backdrop effects except for the existing grid-row disclosure mechanism. Hover has a paired pressed state; keyboard focus uses a 3px visible outline. All nonessential reveal, hover, and disclosure motion is disabled when `prefers-reduced-motion` is requested.

## 7. Depth & Surface

The project uses a mixed depth strategy: white cards combine subtle borders with low-opacity shadows, while large page areas use tonal shifts and indigo/teal gradients. Shared card depth is `--shadow-card: 0 10px 30px rgb(15 23 42 / 0.07)` and interactive hover depth is `--shadow-card-hover: 0 20px 48px rgb(15 23 42 / 0.12)`. Hover elevation is reserved for interactive cards; static content should not gain stronger elevation without a documented interaction reason.

Accepted legacy debt: several page-specific colors remain literal rather than promoted to `:root`, and this static site has no application-level loading, empty, or error surfaces. The organization pass consolidates shared layout, type, focus, and depth behavior without changing the CodeUnity brand direction.
