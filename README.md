# InspectPro — Forklift Inspection Checklist

A modern, responsive Next.js web application designed for industrial teams, warehouse operators, and safety managers to conduct, track, and standardize daily equipment inspections.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **UI Library**: [React](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Architecture**: Data-driven JSON architecture with pure JavaScript component logic
- **Deployment**: Optimized and production-ready for [Vercel](https://vercel.com/)

---

## 📁 Project Structure

```
forklift-inspection/
├── public/                 # Static public assets
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── globals.css     # Global styles and Tailwind CSS theme variables
│   │   ├── layout.tsx      # Root application layout with fonts and metadata
│   │   └── page.tsx        # Main landing page assembling all sections
│   ├── components/         # Section-grouped UI components
│   │   ├── layout/         # Application shell components
│   │   │   ├── Header.tsx  # Navigation bar with responsive mobile menu
│   │   │   └── Footer.tsx  # Footer links, mobile accordions, and CTA
│   │   ├── hero/           # Hero section and related sub-components
│   │   │   ├── Hero.tsx    # Primary hero banner with interactive preview card
│   │   │   ├── SubHeroSection.tsx # Regulatory importance callout card
│   │   │   └── TrustedTeams.tsx   # Social proof badges & TeamCard component
│   │   ├── checklist/      # Inspection checklist feature
│   │   │   ├── Checklist.tsx      # Main checklist container & state management
│   │   │   └── ChecklistItem.tsx  # Individual checklist row with Pass/Fail/NA controls
│   │   ├── features/       # Key product benefits
│   │   │   └── Features.tsx       # Benefits grid powered by the shared Card component
│   │   ├── industries/     # Target industry solutions
│   │   │   └── Industries.tsx     # Industry solutions grid powered by the shared Card component
│   │   ├── how-it-works/   # Inspection workflow steps
│   │   │   └── HowItWorks.tsx     # 3-step inspection process with inline numbers & icons
│   │   ├── faq/            # Frequently asked questions
│   │   │   └── FAQ.tsx            # Collapsible accordion FAQ section
│   │   └── ui/             # Reusable UI primitives
│   │       └── Card.tsx           # Shared card layout (icon badge, title, description)
│   └── data/               # Configurable JSON static data files
│       ├── checklist.json  # Checklist inspection items and default statuses
│       ├── faq.json        # Frequently asked questions and answers
│       ├── features.json   # Features card content and icon keys
│       ├── footer.json     # Footer accordion categories and links
│       ├── hero.json       # Hero preview card item list
│       ├── howItWorks.json # Step-by-step workflow definitions
│       ├── industries.json # Industry cards content and icon keys
│       └── trustedTeams.json # Trusted company names and categories
├── package.json            # Project dependencies and npm scripts
├── tsconfig.json           # TypeScript & module configuration
└── next.config.ts          # Next.js configuration
```

---

## 🧩 Component Directory Overview

| Component File | Location | Description |
| :--- | :--- | :--- |
| **`Header.tsx`** | `src/components/layout/` | Top navbar with logo, smooth anchor links, and mobile drawer. |
| **`Footer.tsx`** | `src/components/layout/` | Bottom footer with CTA, desktop columns, mobile accordions, and copyright. |
| **`Hero.tsx`** | `src/components/hero/` | Hero section featuring value proposition and an interactive preview card. |
| **`SubHeroSection.tsx`** | `src/components/hero/` | Explains the regulatory purpose of daily inspection checklists. |
| **`TrustedTeams.tsx`** | `src/components/hero/` | Renders partner company logos using internal `TeamCard` components. |
| **`Checklist.tsx`** | `src/components/checklist/` | Parent container managing inspection items, checkboxes, and statuses. |
| **`ChecklistItem.tsx`** | `src/components/checklist/` | Single inspection row with checkbox, Pass/Fail/NA buttons, and notes field. |
| **`Features.tsx`** | `src/components/features/` | 4-column feature grid explaining key advantages. |
| **`Industries.tsx`** | `src/components/industries/` | 3-column grid for Warehouse, Construction, and Manufacturing sectors. |
| **`HowItWorks.tsx`** | `src/components/how-it-works/` | 3-step guide with numbered indicators and matching icons. |
| **`FAQ.tsx`** | `src/components/faq/` | Interactive accordion answering common compliance and inspection questions. |
| **`Card.tsx`** | `src/components/ui/` | Reusable card layout (cyan badge, title, muted text) shared by sections. |

---

## 🃏 Reusable `Card` Component (`src/components/ui/Card.tsx`)

The `Card` component is a shared design primitive utilized across multiple sections (such as **Features** and **Industries**) to ensure consistent typography, borders, and hover states.

- **Props**:
  - `icon`: Lucide icon component or custom JSX icon element.
  - `title`: Main card heading.
  - `description`: Explanatory body copy.
  - `className` *(optional)*: Additional custom classes.

---

## 📦 Data Folder (`src/data/`)

All user-facing copy and structured content are decoupled from the UI logic and stored in `.json` files. This allows easy content edits without modifying React components.

| JSON File | Used By | Content Description |
| :--- | :--- | :--- |
| **`checklist.json`** | `Checklist.tsx` | Array of checklist points, inspection notes, and alert tags. |
| **`features.json`** | `Features.tsx` | Feature titles, descriptions, and Lucide icon identifiers. |
| **`industries.json`** | `Industries.tsx` | Industry titles, descriptions, and icon identifiers. |
| **`howItWorks.json`** | `HowItWorks.tsx` | Numbered step titles, descriptions, and icon identifiers. |
| **`faq.json`** | `FAQ.tsx` | Question and answer pairs for the accordion. |
| **`footer.json`** | `Footer.tsx` | Accordion sections and navigation links for mobile and desktop. |
| **`hero.json`** | `Hero.tsx` | Preview checklist rows and initial pass/NA statuses. |
| **`trustedTeams.json`** | `TrustedTeams.tsx` | Partner company titles and subtitle categories. |

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js**: v18.18.0 or newer
- **npm**: v9 or newer

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/NileshJadhav1312/Forklift-Inspection.git
cd Forklift-Inspection
npm install
```

### 3. Development Server
Run the local dev server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build
Verify the production build:
```bash
npm run build
```

### 5. Linting
Run ESLint to check code quality:
```bash
npm run lint
```

---

## 🚢 Deployment

This project is configured for deployment on **[Vercel](https://vercel.com/)**:
1. Push your repository to GitHub.
2. Import the repository into your Vercel Dashboard.
3. Vercel automatically detects Next.js and runs `npm run build`.
4. Your application will be deployed with global edge caching and CDN optimization.
