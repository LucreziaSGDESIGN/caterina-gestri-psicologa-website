# Caterina Gestri - Psicologa Website

Professional website for Caterina Gestri, Psicologa-Psicoterapeuta specializing in CBT, EMDR, EFT, and Schema Therapy in Tuscany, Italy.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Create environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Homepage
│   ├── chi-sono/                # About page
│   ├── servizi/                 # Services page
│   ├── contatti/                # Contact page
│   ├── api/                     # API routes
│   │   └── contact/             # Contact form endpoint
│   └── globals.css              # Global Tailwind styles
├── components/
│   ├── Header.tsx               # Navigation header
│   ├── Footer.tsx               # Footer with credentials
│   ├── ContactForm.tsx          # Contact form with validation
│   └── ui/                      # Reusable UI components
│       ├── Button.tsx           # Button variants
│       ├── Card.tsx             # Card container
│       ├── Input.tsx            # Form input
│       └── index.ts             # Barrel export
├── lib/
│   ├── constants.ts             # Application constants
│   ├── utils.ts                 # Utility functions
│   └── blog.ts                  # Blog post utilities
└── content/
    └── blog/                    # Markdown blog posts
        ├── introduccion-a-cbt.md          # CBT introduction
        ├── trauma-e-emdr.md               # EMDR and trauma
        └── relazioni-di-coppia.md         # Couple therapy
```

## 🛠️ Key Technologies

- **Framework**: Next.js 14.2.0 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 3.4.3
- **Forms**: React Hook Form + Zod validation
- **Blog**: MDX with gray-matter
- **Content**: JSON-LD schema for local SEO
- **Deployment**: Vercel

## 🎯 Core Components

### ContactForm (`src/components/ContactForm.tsx`)
Client-side contact form with comprehensive validation:
- **Fields**: Name, email, phone (optional), subject, message, privacy checkbox
- **Validation**: Real-time with Italian error messages via Zod
- **Feedback**: Success/error notifications, loading state
- **Accessibility**: ARIA labels, semantic HTML
- **Submission**: POST to `/api/contact` endpoint

### UI Components (`src/components/ui/`)

**Button.tsx**
- Variants: `primary` (default), `secondary`, `tertiary`
- Sizes: `sm`, `md` (default), `lg`
- Full width support
- Disabled state

**Card.tsx**
- Variants: `default`, `elevated` (with shadow), `outline`
- Flexible padding
- Rounded corners

**Input.tsx**
- Optional label
- Error state with styling
- Helper text
- Disabled state
- Form integration ready

### Utilities (`src/lib/utils.ts`)

| Function | Purpose |
|----------|---------|
| `slugify()` | Convert text to URL-friendly slugs |
| `capitalize()` | Capitalize first letter |
| `formatPhone()` | Format Italian phone numbers |
| `formatDate()` | Format dates to Italian locale |
| `estimateReadTime()` | Calculate blog post read time |
| `truncate()` | Limit text length with ellipsis |

### Blog Utilities (`src/lib/blog.ts`)

- `getAllPosts()` - Fetch all blog posts
- `getPost(slug)` - Get single post by slug
- `getPublishedPosts()` - Get published posts only

**Blog Post Format** (Frontmatter):
```yaml
---
title: Post Title
description: Brief description
date: 2026-06-03
author: Author Name
tags: [tag1, tag2]
published: true
---
```

### Constants (`src/lib/constants.ts`)

Centralized configuration for:
- Site metadata
- Contact information
- Locations
- Professional credentials
- Specializations
- Navigation menu
- Social links

## 🔧 API Routes

### POST `/api/contact`
Handles contact form submissions.

**Request Body**:
```json
{
  "name": "string (min 2 chars)",
  "email": "valid email",
  "phone": "string (min 10 digits, optional)",
  "subject": "string (min 5 chars)",
  "message": "string (min 20 chars)",
  "privacy": true
}
```

**Response (200)**:
```json
{
  "message": "Messaggio ricevuto con successo. Contatterò al più presto."
}
```

**Validation Errors (400)**:
```json
{
  "error": "Validation error message"
}
```

## 📧 Email Configuration (TODO)

The contact API endpoint currently logs submissions to console. To enable email:

1. Sign up for SendGrid
2. Get API key from SendGrid dashboard
3. Add to `.env.local`:
   ```
   SENDGRID_API_KEY=your_key_here
   ```
4. Uncomment SendGrid integration in `src/app/api/contact/route.ts`

## 📱 Responsive Design

All pages use mobile-first approach with Tailwind breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🎨 Color Palette

Custom Tailwind configuration in `tailwind.config.ts`:
- **Primary**: Blue shades for professional feel
- **Accent**: Orange highlights for CTAs
- **Neutral**: Gray scale for text and backgrounds

## 🔍 SEO Features

- JSON-LD LocalBusiness schema
- OpenGraph meta tags for social sharing
- Italian language optimization (`lang="it-IT"`)
- Descriptive meta descriptions
- Semantic HTML structure

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel (connect GitHub repo)
```

### Environment Variables for Production
- `SENDGRID_API_KEY` - For email delivery
- `NEXT_PUBLIC_SITE_URL` - Production domain
- `CONTACT_EMAIL` - Where to send contact form submissions

## 📋 Completion Status

### ✅ Completed Phases

1. **Phase 1: Foundation** ✓
   - Next.js 14 setup with App Router
   - TypeScript configuration
   - Tailwind CSS styling
   - Responsive layout system

2. **Phase 2: Core Pages** ✓
   - Homepage with services preview
   - About page (Chi Sono)
   - Services overview page
   - Individual service pages (CBT, EMDR, EFT, Schema Therapy)
   - Contact page with form
   - Privacy Policy page
   - Cookie Policy page

3. **Phase 3: Blog System** ✓
   - Blog index page with dynamic post loading
   - Individual blog post pages with markdown rendering
   - 3 featured blog posts (CBT, EMDR, Couple Relations)
   - Full markdown support with remark

### 📌 Remaining (Optional Enhancements)

- Blog categories/tags filtering
- Email delivery via SendGrid (API stub ready)
- Sitemap generation
- Analytics integration
- Performance optimization
- Additional blog content

## 🤝 Support

For questions or issues, contact:
- **Email**: gestricaterina@gmail.com
- **Phone**: +39 338 111 0142

---

Built with Next.js, React, TypeScript, and Tailwind CSS
