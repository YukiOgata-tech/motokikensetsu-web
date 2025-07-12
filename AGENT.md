# AgentMD

## Project Overview
This repository is for the official website of Motoki Kensetsu Co., Ltd., based in Nanyo, Yamagata, Japan.  
The site must emphasize modern, high-quality design, SEO, and mobile-friendliness, with a Japanese "wa" aesthetic and a strong sense of trust.

---

## Technology Guidelines

- **Framework:** Next.js (use App Router, `/app` directory)
- **Styling:** Tailwind CSS (with custom configurations if needed)
- **UI Components:** shadcn/ui (use for all buttons, cards, dialogs, etc.)
- **Animation:** Framer Motion for all animated UI and transitions
- **Icons:** lucide-react
- **Fonts:** Prefer Noto Serif JP or Noto Sans JP for Japanese, modern sans-serif for English (via `@fontsource`)
- **Notifications:** Use sonner, not toast (toast is deprecated)
- **Date utilities:** Use date-fns if needed

---

## Design & UI/UX Guidelines

- Main colors: **red, white, black**
- Design must evoke **Japanese wood, architecture, and wa-modern feeling**
- Generous whitespace, readable typography, clear hierarchy
- All pages and sections should feature smooth, professional animations (scroll, fade, parallax, etc.)
- Responsive design for all devices (desktop, tablet, smartphone)
- No jQuery, no class components, function components only

---

## Features & Structure

- **One-page scrollable top page** closely modeled after https://sansyu1985.com/  
  - Replace blue accents with red
  - Section order: HERO → About → Services → Works/Case Studies → Message → Access → Contact → Footer
- Each section on the top page should have a "Read more" button linking to a detail page (About, Services, Works, etc.)
- **All detail pages must also feature modern animations and match overall site design**
- Image placeholders should use Unsplash or similar, with copyright-safe URLs and descriptive alt text
- Inquiry/contact form must use Firebase backend for form handling (use react-firebase-hooks if needed)
- Works/Case Studies section must support CRUD (Create, Read, Update, Delete) via an admin page, protected by Firebase Auth

---

## SEO

- All pages must include appropriate meta tags (`<title>`, `<meta name="description">`, etc.)
- Keywords such as **“山形県南陽市”, “宮内”, “株式会社本木建設”, “建設会社”** must appear in meta tags and body content
- Use structured data (`<script type="application/ld+json">`) for better Google SEO if possible

---

## Code/Directory Conventions

- Components: PascalCase file and folder names, colocate CSS if needed
- Use `/app` directory with `page.tsx` or `page.jsx` for routing
- Organize reusable UI components under `/components/ui/` and domain components under `/components/`
- Use TypeScript if possible, otherwise modern JavaScript (ES6+)
- Environment variables: All sensitive data via `.env.local` (never commit this file)

---

## Prohibited/Deprecated

- **Do not use jQuery, toast (use sonner), or any deprecated UI libraries**
- **Do not use class components**
- **Do not use hard-coded inline styles for major design** (use Tailwind classes)

---

## Additional Instructions

- Always keep codebase clean, modular, and easy to maintain
- All external libraries used must be production-ready and actively maintained
- Focus on accessibility (alt tags, contrast, keyboard navigation where needed)
- Use English for all code comments and file/folder names, but UI can be in Japanese
- All sample/dummy content should be clearly marked for replacement

---

## Special Notes

- This AgentMD is the canonical reference for all automated and AI-driven development for this project.  
- If any instruction is ambiguous, prioritize quality, security, and maintainability.

---

