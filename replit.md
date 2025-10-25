# Nexaris Clone - Crypto Payment Infrastructure Landing Page

## Overview

This is a premium landing page for Nexaris, a next-generation crypto payment infrastructure platform. The application is a pixel-perfect clone inspired by modern crypto/fintech landing pages, featuring a dark futuristic aesthetic with glassmorphism design, neon gradients, and smooth animations. The site showcases three main product offerings (Nexaris Online, Subscriptions, and Invoicing) and includes a waitlist email collection system.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom dark theme configuration
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Animations**: Framer Motion for smooth scroll-based and entrance animations
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation

**Design System:**
- Dark-first theme with midnight black backgrounds (#000000)
- Glassmorphism effects using backdrop blur and translucent panels
- Neon gradient accents (blue-to-white radials, purple/blue glowing orbs)
- Space Grotesk font family for modern geometric typography
- Responsive grid layouts (1/2/3 column breakpoints)
- Custom CSS variables for theme tokens (HSL-based color system)

**Component Structure:**
- Page-level components in `client/src/pages/`
- Reusable feature components in `client/src/components/`
- UI primitives in `client/src/components/ui/` (Shadcn components)
- Single-page application with Home page containing all sections:
  - Hero section with floating crypto coin animations
  - Mission statement with feature highlights
  - Product grid showcasing three offerings
  - CTA section with waitlist form
  - Footer with social links

### Backend Architecture

**Technology Stack:**
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for HTTP server
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Validation**: Zod schemas shared between client and server
- **Session Management**: Configured for connect-pg-simple (PostgreSQL session store)

**Architecture Pattern:**
- RESTful API design with JSON request/response
- Storage abstraction layer (IStorage interface)
- Currently using in-memory storage (MemStorage) for development
- Prepared for PostgreSQL migration via Drizzle configuration

**API Endpoints:**
- `POST /api/waitlist` - Accepts email submissions for waitlist
  - Validates email format using Zod schema
  - Prevents duplicate email entries (409 Conflict response)
  - Returns 201 Created on success

**Data Models:**
- `waitlistEmails` table schema with id, email, and createdAt fields
- UUID primary keys with default generation
- Email uniqueness constraint

### Development Environment

**Hot Module Replacement:**
- Vite middleware integrated with Express server
- Custom SSR setup for development
- Separate client and server build processes

**Build Process:**
- Client: Vite bundles React app to `dist/public`
- Server: esbuild bundles Express server to `dist/index.js`
- Production mode serves static files from dist/public

**Path Aliases:**
- `@/*` → client source files
- `@shared/*` → shared schemas and types
- `@assets/*` → attached asset files

## External Dependencies

### UI Component Libraries
- **Radix UI**: Headless UI primitives for 20+ components (accordion, dialog, dropdown, etc.)
- **Shadcn/ui**: Pre-styled component system built on Radix UI
- **Lucide React**: Icon library for UI elements
- **Framer Motion**: Animation library for scroll effects and transitions
- **Embla Carousel**: Touch-friendly carousel component

### Form & Validation
- **React Hook Form**: Form state management and validation
- **Zod**: Schema validation library
- **@hookform/resolvers**: Integrates Zod with React Hook Form
- **drizzle-zod**: Generates Zod schemas from Drizzle table definitions

### Database & ORM
- **Drizzle ORM**: TypeScript ORM for PostgreSQL
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver
- **drizzle-kit**: CLI tool for migrations and schema management
- **connect-pg-simple**: PostgreSQL session store for Express

### State Management
- **TanStack Query**: Server state management with caching and refetching

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS & Autoprefixer**: CSS processing
- **class-variance-authority**: Component variant utilities
- **tailwind-merge**: Utility for merging Tailwind classes
- **clsx**: Class name concatenation

### Development Tools
- **Vite**: Build tool and dev server
- **TypeScript**: Type safety across codebase
- **ESBuild**: Fast bundler for production server build
- **@replit/vite-plugin-***: Replit-specific development plugins

### Third-Party Services (Prepared For)
- PostgreSQL database (currently in-memory, ready for Neon/Postgres connection)
- Email service integration point (for waitlist notifications)
- Social media platforms (Twitter, Instagram, LinkedIn - links in footer)

### Asset Management
- Custom cryptocurrency coin images (Bitcoin, Ethereum, USDC, Tether) stored in `attached_assets/`
- Google Fonts (Space Grotesk) loaded via CDN