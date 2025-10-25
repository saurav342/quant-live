# Nexaris Clone - Design Guidelines

## Design Approach
**Reference-Based Approach**: Pixel-perfect clone of Nexaris.com - a premium crypto payment infrastructure landing page with dark futuristic aesthetic, neon gradients, and glassmorphism design language.

## Core Design Principles

### Visual Identity
- **Dark Futuristic Theme**: Midnight black (#000000) to deep navy backgrounds with soft radial gradient glows (purple → blue → magenta)
- **Glassmorphism**: Translucent panels with soft borders, backdrop blur, and 1px hairline borders using rgba(255,255,255,0.1)
- **Neon Accents**: Blue-to-white radial gradients, purple/blue glowing orbs, subtle sci-fi finance aesthetic
- **Premium Feel**: High-performance infrastructure vibe - trust, speed, innovation

## Typography System

### Hierarchy
- **Hero Headline**: Very large, bold, geometric sans-serif, tight leading, 2-3 lines on desktop
- **Section Headlines**: Bold, space/fintech startup feel
- **Body Text**: Slightly lighter weight, high contrast on dark backgrounds for readability
- **Eyebrow Text**: Small, all-caps, gradient text treatment
- **CTAs**: Medium weight, clear hierarchy

### Font Families
- Primary: Bold geometric sans-serif (modern, tech-forward)
- Body: Clean sans-serif optimized for dark backgrounds
- Limit to 2 font families maximum

## Layout System

### Spacing Units
Primary Tailwind spacing: **4, 8, 12, 16, 20, 24, 32** (p-4, p-8, py-12, py-20, py-24, py-32)
- Section vertical spacing: 80-120px minimum (py-20 to py-32)
- Card internal padding: p-6 to p-8
- Container max-width: 1280px (max-w-7xl)

### Grid System
- 3-column product grid on desktop (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- 2-column mission section layout
- Responsive breakpoints: mobile (stack), tablet (2-col), desktop (3-col)

## Component Library

### Navigation (Sticky Header)
- Translucent dark blur background (frosted glass effect)
- 1px bottom border rgba(255,255,255,0.1)
- Left: Nexaris wordmark logotype
- Center/Right: Product, Why Us, Docs, Contact links
- Far Right: Rounded pill CTA "Join Waitlist" button with glow
- On scroll: compress height slightly, darken background
- Mobile: burger menu collapse

### Hero Section (Full Viewport)
- **Eyebrow**: "THE FUTURE OF PAYMENTS IS HERE" - small caps, gradient text
- **H1**: "Next-gen Crypto Payments" - massive, bold, 2-3 lines
- **Subheadline**: "Built to empower every merchant with next-generation solutions" - mid-gray/white
- **Primary CTA**: "Join Waitlist" - solid pill button with glow ring
- **Background Elements**:
  - Large blurred purple/blue gradient orb behind headline
  - Animated floating 3D cryptocurrency coins (Bitcoin, Ethereum, USDC, Tether)
  - Blue-to-white radial gradient overlay
  - Subtle particle field or flowing payment rail lines
- **Email Form**: Inline waitlist capture with success/error states

### Mission Section (2-Column)
- **Left Column**: 
  - Headline: "Evolving Beyond Traditional Systems"
  - Body copy explaining decentralized payment rails
  - Mini bullets: Faster settlement, Lower fees, No gatekeepers
- **Right Column**: 
  - Card: "Disrupting the Status Quo"
  - Supporting text about merchant benefits
  - Subtle iconography (shields, lightning)
- Glassmorphism card styling throughout
- Faint dividing border at top

### Product Grid (3 Cards)
- **Section Header**: "Our Solution" + subheadline
- **Trust Bar Below**: "Online or offline, we've got you covered."

**Card 1 - Nexaris Online**:
- Icon: Globe badge
- Bullets: No KYC payments, Quick setup (under 10 min), Re-use wallet authorizations

**Card 2 - Nexaris Subscriptions**:
- Icon: Repeat arrow badge  
- Bullets: Custom subscription plans, Flexible pricing models

**Card 3 - Nexaris Invoicing**:
- Icon: Receipt badge
- Bullets: Low/no code integration, Automated receipts, Hosted invoice pages

Each card: frosted glassmorphic panel, hover lift + glow border, mobile stack

### Waitlist CTA Section
- Full-width callout with gradient glow background
- Headline: "Join the waitlist to unlock next-gen payments"
- Email capture form with rounded input (light-on-dark)
- Success state: "Thank you for your message. Someone will get in touch with you soon!"
- Error state: "Oops! Something went wrong while submitting the form."
- High contrast to "pop" before footer

### Footer
- Darker than page background with thin border-top
- **Left**: © 2025 Nexaris™. All rights reserved.
- **Right**: Social icons (X/Twitter, Instagram, LinkedIn) - minimal line style, white on dark
- Subtle gradient glow behind social icons
- Optional columns: Company, Product, Legal links
- Mobile: single column stack

## Images

### Hero Section
- **Animated 3D Cryptocurrency Coins**: Bitcoin, Ethereum, USDC, Tether logos as floating/rotating 3D objects against the dark gradient background
- Coins should have subtle glow effects and float with gentle animation
- Position: Scattered across hero section background, creating depth

### Product Section  
- **Description Image**: Illustrative graphic showing payment flow/infrastructure (referenced as description-image.png)
- Position: Between section header and product cards OR within product grid
- Style: Clean, minimal, matches dark theme

## Animations & Interactions

### Motion Principles
- Timing: Smooth 200-300ms ease transitions throughout
- Subtle, tasteful - no cheesy effects

### Specific Animations
- **Hero Load**: Headline + CTA fade/slide up on page load
- **Product Cards**: Float up ~4px on hover with soft shadow increase
- **CTA Buttons**: Glow ring/animated border gradient on hover
- **Background**: Subtle parallax/float on gradient blobs
- **Crypto Coins**: Gentle rotation and vertical float animation
- **Navbar**: Compress on scroll with smooth transition
- **Input Focus**: Soft inner glow (sci-fi finance feel)

### Scroll Behavior
- Smooth scroll for in-page navigation links
- Sticky nav with blur intensification on scroll

## Responsive Behavior

### Mobile
- Burger menu navigation
- Hero stacks: headline → CTAs → coins visual underneath
- Product cards: vertical stack, full-width
- Footer: single column
- Reduced vertical spacing (py-12 instead of py-20)

### Tablet
- 2-column product grid + 1 full-width row for third card
- 2-column mission section maintained

### Desktop
- Full 3-column product grid
- Max-width container with generous whitespace
- All animations and hover states active

## Accessibility
- High contrast text on dark backgrounds
- Focus states with visible glow rings
- Semantic HTML structure throughout
- Form validation with clear error/success messaging

## Polish Details
- Hairline borders: rgba(255,255,255,0.1) consistently
- Card shadows: soft, multi-layer for depth
- Gradient consistency: purple → blue → magenta palette
- Border radius: Consistent rounded corners (buttons: full pill, cards: rounded-lg to rounded-xl)
- Backdrop blur: Apply to glassmorphic elements for frosted glass effect