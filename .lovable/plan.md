

# Website Content and Design Overhaul

## Overview
Complete content rewrite with new text provided, removal of Blog and Testimonials pages, and a full color scheme change from purple/dark to a clean black-and-white corporate aesthetic.

## Changes Summary

### 1. Remove Blog and Testimonials
- Delete the Blog page (`src/pages/Blog.tsx`) and its route from `App.tsx`
- Delete `src/components/TestimonialsSection.tsx` and `src/components/NewsletterSection.tsx`
- Remove "Blog" and "Testimonials" links from Navbar and Footer

### 2. Color Scheme: Black and White Corporate
- Update CSS variables in `src/index.css` to replace purple accents with white/light gray tones
- Replace `brand-purple` in `tailwind.config.ts` with a neutral tone (e.g., white or a light gray)
- Update the `.text-gradient` utility to use a white-to-gray gradient instead of purple
- Remove all `text-brand-purple`, `bg-brand-purple`, `hover:bg-purple-700` references across components and replace with black/white/gray corporate equivalents
- Accent color buttons will become white text on black backgrounds (or vice versa)

### 3. Home Page (`Index.tsx` + `HeroSection.tsx`)
- Update hero heading and description with the provided content: "I am Caroline Kitumbui, and I empower growth, cultivate potential, and help people build purpose."
- Keep the hero image as-is
- Add three CTA buttons: "Chat on WhatsApp", "Book a Session", "Partner With Me"
- Update the sections grid below the hero to reflect: About Me, Services, Contact (remove Blog card)
- Add the longer intro paragraph below the hero

### 4. About Page (`About.tsx` + `AboutSection.tsx`)
- Rewrite all content with the provided text covering: About Me, My Mission, My Vision, Core Values (Intentional Growth, Excellence, Authenticity, Integrity, Empowerment Through Structure)
- Update education section with MBA info and Moi University alumnus details
- Add sections for: Sky My Limit, Carol's Book Bar, Growth/Reading/Entrepreneurship Advocacy, Personal Interests, Fun Fact
- Update Vision and Mission text to match provided content

### 5. Services Page (`Services.tsx` + `ServicesSection.tsx`)
- Replace service cards with the provided "What I Do" items:
  - Career and Personal Development Advocacy
  - Youth Mentorship and Academic Guidance
  - Entrepreneurship Guidance and Business Planning
  - Author and Thought Leadership
  - Carol's Book Bar
  - Speaking and Facilitation
  - Program Coordination and Operations
- Add "My Skills and Core Competencies" section
- Add "Work With Me" section listing collaboration options
- Update the "How I Work With You" process steps

### 6. Contact Page (`Contact.tsx`)
- Add "Let's Connect" section with WhatsApp, Email, and Sky My Limit links
- Keep the existing contact form and email forwarding functionality

### 7. Navbar Updates
- Remove "Blog" and "Testimonials" from navigation items
- Change button and link colors from purple to black/white scheme

### 8. Footer Updates
- Remove Blog and Testimonials links
- Update services list to match new service names
- Change icon/accent colors from purple to white/gray

## Technical Details

### Files to modify:
- `src/index.css` -- CSS variables and utility classes
- `tailwind.config.ts` -- brand colors
- `src/App.tsx` -- remove Blog route
- `src/pages/Index.tsx` -- new home content
- `src/components/HeroSection.tsx` -- new hero text and CTAs
- `src/components/Navbar.tsx` -- remove Blog/Testimonials links, update colors
- `src/components/Footer.tsx` -- remove Blog/Testimonials links, update colors
- `src/pages/About.tsx` -- full content rewrite
- `src/components/AboutSection.tsx` -- full content rewrite
- `src/pages/Services.tsx` -- full content rewrite
- `src/components/ServicesSection.tsx` -- full content rewrite
- `src/pages/Contact.tsx` -- add Let's Connect section, update colors

### Files to delete:
- `src/pages/Blog.tsx`
- `src/components/TestimonialsSection.tsx`
- `src/components/NewsletterSection.tsx`
- `src/components/CommunitySection.tsx` (unused)

### Color mapping:
| Current | New |
|---|---|
| `brand-purple` (#591f8e) | White (#FFFFFF) or near-black (#1a1a1a) for buttons |
| `bg-brand-purple` | `bg-white text-black` or `bg-black text-white` |
| `text-gradient` (purple gradient) | White or subtle gray gradient |
| `border-brand-purple` | `border-white` or `border-gray-300` |
| Colored icons (pink, blue, green, yellow) | White or gray monochrome |

