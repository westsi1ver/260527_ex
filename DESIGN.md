---
name: Cozy Professional Medical
colors:
  surface: "#fff8f5"
  surface-dim: "#e1d8d4"
  surface-bright: "#fff8f5"
  surface-container-lowest: "#ffffff"
  surface-container-low: "#fbf2ed"
  surface-container: "#f5ece8"
  surface-container-high: "#efe6e2"
  surface-container-highest: "#eae1dc"
  on-surface: "#1f1b18"
  on-surface-variant: "#414751"
  inverse-surface: "#34302d"
  inverse-on-surface: "#f8efea"
  outline: "#717783"
  outline-variant: "#c1c7d3"
  surface-tint: "#0060ac"
  primary: "#005da7"
  on-primary: "#ffffff"
  primary-container: "#2976c7"
  on-primary-container: "#fdfcff"
  inverse-primary: "#a4c9ff"
  secondary: "#9e4134"
  on-secondary: "#ffffff"
  secondary-container: "#fd8b79"
  on-secondary-container: "#752318"
  tertiary: "#3a6723"
  on-tertiary: "#ffffff"
  tertiary-container: "#52803a"
  on-tertiary-container: "#f8ffee"
  error: "#ba1a1a"
  on-error: "#ffffff"
  error-container: "#ffdad6"
  on-error-container: "#93000a"
  primary-fixed: "#d4e3ff"
  primary-fixed-dim: "#a4c9ff"
  on-primary-fixed: "#001c39"
  on-primary-fixed-variant: "#004883"
  secondary-fixed: "#ffdad4"
  secondary-fixed-dim: "#ffb4a8"
  on-secondary-fixed: "#410100"
  on-secondary-fixed-variant: "#7e2a1f"
  tertiary-fixed: "#bdf19d"
  tertiary-fixed-dim: "#a2d584"
  on-tertiary-fixed: "#082100"
  on-tertiary-fixed-variant: "#26500f"
  background: "#fff8f5"
  on-background: "#1f1b18"
  surface-variant: "#eae1dc"
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: "700"
    lineHeight: "1.2"
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: "700"
    lineHeight: "1.3"
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: "700"
    lineHeight: "1.3"
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: "600"
    lineHeight: "1.4"
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: "400"
    lineHeight: "1.6"
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: "400"
    lineHeight: "1.6"
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: "600"
    lineHeight: "1.4"
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: "500"
    lineHeight: "1.4"
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

The design system is anchored in the "Cozy Professional" philosophy. It balances the clinical precision required of a specialized feline medical facility with the emotional warmth expected by devoted pet owners. The goal is to reduce "vet anxiety" through a visual language that feels safe, hygienic, and deeply empathetic.

The style is a hybrid of **Modern Minimalism** and **Soft Tactility**. We avoid the sterile, harsh whites of traditional hospitals in favor of a cream-based palette and generous whitespace. High-quality imagery should feature soft-focus backgrounds, natural lighting, and calm feline subjects to reinforce a sense of tranquility and expert care.

## Colors

The color strategy centers on the **Primary Medical Blue**, which provides the foundation of professional trust and hygiene. This is softened by the **Secondary Peach**, used strategically for cat-related interactions, calls to action, and moments of emotional connection.

- **Primary (Medical Blue):** Used for primary navigation, headings, and core medical information.
- **Secondary (Warm Peach):** Reserved for feline-centric features, "Book Appointment" buttons, and supportive accents.
- **Background (Cream):** Replaces pure white to create a welcoming, domestic atmosphere that feels clean but not cold.
- **Accent (Sage Green):** Utilized for health status indicators, recovery updates, and natural motifs.
- **Neutral:** A warm charcoal-brown rather than pure black is used for text to maintain the soft aesthetic while ensuring high legibility.

## Typography

This design system utilizes **Plus Jakarta Sans** for its friendly, rounded terminals and modern geometric structure. It provides a "soft-tech" feel that communicates both modern medical capability and approachable warmth.

For headlines, we use tighter letter spacing and heavier weights to establish a clear hierarchy. Body text is set with generous line heights (1.6) to ensure effortless readability, particularly for medical reports or care instructions. Labels and captions use slightly increased tracking to maintain clarity at smaller sizes.

## Layout & Spacing

The layout philosophy follows a **Fluid-Fixed Hybrid** model. Content is contained within a 1200px maximum width on desktop to maintain readability, while utilizing fluid percentages for tablet and mobile viewports.

A 12-column grid is standard for desktop, transitioning to a 4-column grid for mobile. Spacing is governed by an 8px rhythmic scale. To reinforce the "spacious" feel of the brand, we prioritize large vertical gaps (`stack-lg`) between major sections to prevent information overload. Margins are intentionally wide to frame the content, acting as "breathable" buffers.

## Elevation & Depth

To maintain the "Cozy" aspect of the brand, depth is created through **Ambient Shadows** and **Tonal Layering** rather than harsh borders.

- **Surface Tiers:** The primary background is Cream. Interactive elements like cards use a pure white background to lift them slightly off the page.
- **Shadow Style:** Shadows are extremely diffused with low opacity (approx 8-12%) and a subtle tint of the primary blue or peach to keep them from looking "dirty."
- **Z-Axis Hierarchy:**
  - _Level 0:_ Cream Background.
  - _Level 1:_ White Cards (Soft, subtle shadow).
  - _Level 2:_ Floating Action Buttons and Modals (Medium shadow, larger blur radius).

## Shapes

The shape language is defined by significant roundedness to evoke safety and friendliness. Sharp corners are strictly avoided as they represent a psychological "hazard" in a care-focused environment.

- **Standard Elements:** Buttons, inputs, and small cards use a 12px (`rounded`) radius.
- **Large Containers:** Content blocks and major image containers use a 24px (`rounded-xl`) radius.
- **Decorative Elements:** Fully rounded/pill-shaped styles are used for badges, tags, and specific call-to-action buttons.

## Components

### Buttons

Primary buttons use the Medical Blue with white text and a 12px corner radius. Secondary "Care" buttons use the Warm Peach. All buttons should have a subtle hover state that slightly increases the shadow depth rather than just changing color.

### Input Fields

Forms should feel inviting. Use thick (2px) borders in a light neutral-gray. On focus, the border transitions to Primary Blue with a soft "glow" (outer shadow). Corner radius is set to 12px.

### Cards

Cards are the primary container for information. They feature a white background, 24px corner radius, and a very soft ambient shadow. For medical data, cards may include a 4px accent border on the left side (Blue for data, Green for health).

### Chips & Badges

Used for cat categories (e.g., "Kitten," "Senior," "Post-Op"). These are pill-shaped with soft-tinted backgrounds (15% opacity of the category color) and dark text for contrast.

### Icons

Icons must be "Line" style with rounded terminals and a consistent 2px stroke weight. They should be simplified and friendly—avoiding overly complex or jagged medical symbols.

### Specialized Components

- **Health Progress Bar:** A custom tracker using Sage Green to show recovery status.
- **Cat Profile Avatar:** Circular images with a 4px border in Warm Peach.
- **Appointment Timeline:** A vertical line component using soft-dotted paths rather than solid lines to feel more gentle.
