# TODO.md

> Task tracker for the ABTalks 60-Day Challenge platform. Updated before every commit.

---

## Completed Tasks ✅

- [x] Scaffold Next.js + TypeScript + Tailwind project
- [x] Build Landing Page (`/`) with hero, stats, features, testimonials, CTA
- [x] Build Student Dashboard (`/dashboard`) with stats + today's challenge
- [x] Build Challenge Day pages (`/day/[id]`) with instructions, requirements, resources
- [x] Dark theme conversion (black/gray-900/blue-500)
- [x] First-time user onboarding state (Day 1, 0 XP, 0 streak, AI Mentor)
- [x] Hackathon demo mode — optional URLs + one-click "Mark as Completed"
- [x] localStorage persistence (XP, streak, progress, unlock state)
- [x] Generate challenge data for all 60 days
- [x] Build Leaderboard (`/leaderboard`) with search + sort
- [x] Mobile-first responsive optimization (390px viewport, no horizontal scroll)
- [x] Vercel production deployment (https://abtalks-blond.vercel.app)
- [x] README with live demo link
- [x] AI usage log (`AI_USAGE_LOG.md`)
- [x] Project context file (`PROJECT_CONTEXT.md`)
- [x] AI Learning Coach on dashboard — contextual tips + working Q&A on mobile and desktop, responsive at 390px (replaces static AI Mentor)

---

## Current Task 🔄

- **Fix `/dashboard` hydration mismatch** — `joinedDate` formatted differently server vs. client

---

## Remaining Tasks ⏳

- [ ] Fix hydration mismatch on `/dashboard` (`joinedDate` `toLocaleDateString()` renders UTC server-side, local timezone client-side)
- [ ] Final QA pass: verify all 4 routes at 390px + 1440px, no overflow
- [ ] Optional: leaderboard bottom info cards polish (non-required route)
- [ ] Optional: connect Vercel Git auto-deploy on push
- [ ] Optional: real authentication (Clerk / Supabase) to replace guest mode
- [ ] Future: AWS integration (Cognito, API Gateway/Lambda, DynamoDB, S3)

---

## High-Priority Bugs

- [ ] **Low:** Hydration mismatch on `/dashboard` — `joinedDate` formatted via `toLocaleDateString()` differs between server (UTC) and client (local timezone). Functional; console warning only.
- [ ] Low: Leaderboard bottom info cards partially mobile-polished.
- [ ] Low: Re-verify zero horizontal scroll at 390px if any new content is added.

---

## Hackathon Checklist

- [x] Landing page looks polished at 390px
- [x] Dashboard looks polished at 390px
- [x] Challenge Day (`/day/12`) looks polished at 390px
- [x] No horizontal scrolling on mobile
- [x] Touch-friendly buttons (44px+ targets)
- [x] Cards stack correctly on mobile
- [x] Desktop experience preserved (breakpoints)
- [x] Theme/branding unchanged
- [x] Live public URL (Vercel)
- [x] Challenge completion works without URLs (demo mode)
- [x] Progress persists (localStorage)
- [x] README documents live demo
- [x] AI Learning Coach with contextual tips + working Q&A on dashboard

---

## Deployment Checklist

- [x] Vercel CLI installed and authenticated
- [x] Production deploy: https://abtalks-blond.vercel.app
- [x] All routes verified HTTP 200
- [x] README live demo link added
- [ ] Auto-deploy from GitHub (optional)
- [ ] Custom domain (optional)

---

*Last updated: 2026-08-08 · Before commit (AI Learning Coach + hydration mismatch discovery)*
