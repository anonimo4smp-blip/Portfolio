# Design System Document: The Kinetic Professional

## 1. Overview & Creative North Star
**Creative North Star: "The Architectural Digitalist"**

This design system moves away from the "generic template" feel of portfolio sites to create a high-end, editorial experience. It balances the technical precision of a Web Developer with the high-impact energy of a Marketing Consultant. 

Rather than a rigid, symmetric grid, this system utilizes **Intentional Asymmetry** and **Tonal Depth**. The goal is to make the interface feel like a curated gallery—where white space (or in this case, "dark space") is used as a deliberate design element to guide the eye toward "Electric Orange" conversion points. We break the template by overlapping typography over image containers and using shifting surface elevations to define content hierarchy.

---

## 2. Colors & Surface Philosophy
The palette is built on a foundation of "Off-Black" depth, punctuated by high-vibrancy accents.

### Color Tokens
- **Primary (Electric Orange):** `#ffb59c` (Soft) / `#ff5f1f` (Vibrant CTA). Used for high-impact conversion and critical focus states.
- **Secondary (Light Blue):** `#a3cddb`. Reserved for technical details, icons, and subtle metadata to provide a "cool" counter-balance to the heat of the orange.
- **Surface Hierarchy:** 
    - `surface`: `#131313` (Main background)
    - `surface_container_low`: `#1c1b1b` (Secondary sections)
    - `surface_container_high`: `#2a2a2a` (Card backgrounds)

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to separate sections. Section boundaries must be defined solely through background color shifts. For example, a "Services" section (`surface_container_low`) should sit flush against the "Hero" section (`surface`), creating a clean, architectural transition without "boxed-in" visual clutter.

### The "Glass & Gradient" Rule
To elevate the UI from "flat" to "premium," floating elements (like the Navigation Bar) must use **Glassmorphism**. 
- **Token:** `surface_container_highest` at 60% opacity with a `backdrop-filter: blur(12px)`.
- **Signature Texture:** Primary buttons should use a linear gradient: `primary_container` (#ff5f1f) to `on_primary_fixed_variant` (#832700) at a 135-degree angle to add "soul" and depth.

---

## 3. Typography
We use **Inter** not just as a font, but as a branding tool. The hierarchy relies on extreme scale contrast (Editorial Scale).

- **Display (The Hook):** `display-lg` (3.5rem) / Bold. Used for hero statements. Kerned tightly (-0.02em) for a high-end magazine feel.
- **Headline (Section Anchors):** `headline-lg` (2rem) / Bold. Defines clear transitions.
- **Body (The Narrative):** `body-lg` (1rem) / Regular. Optimized for readability with a generous line height (1.6) to prevent eye fatigue in dark mode.
- **Label (The Metadata):** `label-md` (0.75rem) / Bold / All-caps. Used for technical tags or project dates, paired with the `secondary` color.

**Visual Identity Note:** Headlines should occasionally "break" the container, bleeding into the margins to create a sense of movement and technical confidence.

---

## 4. Elevation & Depth
Depth is achieved through **Tonal Layering** rather than heavy shadows.

- **The Layering Principle:** Stack `surface_container_high` cards on top of `surface_container_low` sections. This creates a natural, soft "lift" that feels integrated into the environment.
- **Ambient Shadows:** For floating modals or "Hover" states, use a "Ghost Shadow": `0 20px 40px rgba(0,0,0,0.4)`. Never use pure black shadows; let the background color inform the shadow tone.
- **The "Ghost Border" Fallback:** If a container requires more definition (e.g., an input field), use the `outline_variant` (#5b4138) at **20% opacity**. It should feel felt, not seen.

---

## 5. Components

### Buttons (The Energy Centers)
- **Primary:** `rounded-full` (9999px), `primary_container` background. On hover, apply a `primary_fixed` glow (soft outer shadow in Electric Orange).
- **Secondary:** Transparent background with a `ghost-border` (20% opacity `outline`). On hover, fill with `surface_container_highest`.

### Cards (Project Showcase)
- **Rules:** No dividers. Use `spacing-8` (2rem) of internal padding. 
- **Layout:** Use an asymmetrical layout within the card—image on the left, text shifted slightly higher on the right—to avoid the "standard grid" look.
- **Surface:** Use `surface_container_highest` for the card body.

### Chips (Skill Tags)
- **Aesthetic:** `rounded-md` (0.75rem). Background: `surface_container_low`. Text: `secondary` (#a3cddb). 
- **Interaction:** On hover, the text shifts to `primary` (Electric Orange) to signal interactivity.

### Navigation (The Floating Anchor)
- **Style:** A "pill" shaped container (`rounded-full`) floating at the top of the viewport.
- **Effect:** Glassmorphism (blur) with a 10% `outline_variant` border.

---

## 6. Do's and Don'ts

### Do:
- **Do** use large amounts of `spacing-24` (6rem) between major sections to let the high-impact typography breathe.
- **Do** use the `secondary` (Light Blue) color for technical icons; it reinforces the "Developer" aspect of the brand.
- **Do** use `rounded-xl` (1.5rem) for main image containers to soften the dark-mode "brutalist" edge.

### Don't:
- **Don't** use 100% white text. Always use `on_surface` (#e5e2e1) to reduce contrast harshness on the eyes.
- **Don't** use traditional "Drop Shadows" on cards. Use tonal shifts (`surface_container` levels) to denote hierarchy.
- **Don't** use horizontal divider lines. If you need to separate content, use a `surface_container_low` full-width strip or `spacing-12` (3rem) of vertical space.