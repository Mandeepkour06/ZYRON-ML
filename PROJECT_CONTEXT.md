# PROJECT_CONTEXT.md

> **Purpose:** Read this file first when resuming work. It captures the full state of the project so work can continue immediately without losing context. Updated before every commit.

---

## Project Overview

**ABTalks** is a 60-day coding challenge platform for students and early-career developers. Users complete one real-world project per day, track streaks and XP, and compete on a leaderboard. Built as a **hackathon demo application**.

**Live URL:** https://abtalks-blond.vercel.app

**Stack:** Next.js 16.3.0 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Vercel

---

## Hackathon Requirements

- Mobile-first design optimized for a **390px viewport** (iPhone 14/15 Pro size).
- Routes **`/`**, **`/dashboard`**, and **`/day/12`** must look perfect on mobile for automatic screenshots.
- No horizontal scrolling at any breakpoint.
- Polish, touch-friendly interactions, clean typography, and proper card stacking.
- Excellent desktop experience preserved via responsive breakpoints.
- Existing theme/branding must not change.
- Demo-friendly: challenge completion must not require GitHub/Live URLs (demo mode).

---

## Current Progress

**Status: ✅ Core application complete and deployed to production.**

All four routes are built, mobile-optimized, and verified live (HTTP 200) on Vercel.

---

## Features Completed

- [x] Landing page with hero, stats, how-it-works, project types, testimonials, trust indicators, CTA, footer
- [x] Student dashboard with current day, XP, streak, progress, milestones
- [x] **AI Learning Coach** on dashboard — progress-aware greeting/tips, contextual Q&A, four one-tap quick-question chips, working input (mobile + desktop)
- [x] **All 60 challenge days** with title, description, difficulty, time, XP, skills, instructions, requirements, resources
- [x] Challenge day page with step-by-step instructions, code samples, requirements checklist, resource links
- [x] Hackathon **demo mode** — optional GitHub/Live URLs, one-click "Mark as Completed"
- [x] **localStorage persistence** — XP, streak, completed days, unlock state, submissions
- [x] **Leaderboard** — top 10, current-user highlight, search, sort (XP/streak/completed)
- [x] Dark theme throughout (black / gray-900 / blue-500 accents)
- [x] Mobile-first responsive design (390px) with no horizontal scroll
- [x] Vercel production deployment + README live link

---

## Features Remaining

- [ ] Real authentication (mock guest mode in place; `isAuthenticated` flag ready)
- [ ] Backend / database (currently mock JSON + localStorage)
- [ ] AWS services integration (planned — see below)
- [ ] Full leaderboard mobile polish on the two bottom info cards (low priority, non-required route)
- [ ] Optional: GitHub auto-deploy on push (Vercel Git integration)

---

## Folder Structure

```
abtalks/
├── app/
│   ├── page.tsx              # Landing page (/)
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Tailwind + global mobile styles
│   ├── dashboard/
│   │   └── page.tsx          # Student dashboard (/dashboard)
│   ├── day/
│   │   └── [id]/page.tsx     # Challenge day page (/day/[id])
│   └── leaderboard/
│       └── page.tsx          # Leaderboard (/leaderboard)
├── lib/
│   ├── data.ts               # Challenge data (60 days), mock student, AI mentor
│   └── leaderboard.ts        # Leaderboard mock data + rank calculation
├── public/                   # Static assets
├── AI_USAGE_LOG.md           # AI interaction history
├── PROJECT_CONTEXT.md        # This file
├── TODO.md                   # Task tracker
└── README.md                 # Project docs + live link
```

---

## Important Design Decisions

1. **Mock data + localStorage** — No backend. Progress persists client-side via `abtalks_progress` key. Swappable for real auth/database later.
2. **Optional URLs in demo mode** — Hackathon judges can complete a challenge with one click. URLs are validated if provided.
3. **Template + generator for 60 challenges** — Days 1-7 hand-authored, Days 8-60 auto-generated with progressive difficulty (beginner → intermediate → advanced).
4. **Dark theme with blue accents** — Professional, consistent, and screenshot-friendly.
5. **XP model** — 100 XP per completed challenge. Streak = consecutive days. Rank computed from XP.
6. **Guest mode** — No auth required for the demo; `isAuthenticated: false` flag ready for future.

---

## Route Map

| Route | Page | Purpose |
|-------|------|---------|
| `/` | Landing | Marketing + sign-up CTA |
| `/dashboard` | Dashboard | Current challenge, stats, mentor |
| `/day/[id]` | Challenge Day | Complete a specific day (1-60) |
| `/leaderboard` | Leaderboard | Rankings, search, sort |

---

## Deployment Status

| Item | Status |
|------|--------|
| Local dev server | Runs via `npm run dev` (was exposed on `0.0.0.0:3000` for LAN testing) |
| Vercel production | ✅ Live at **https://abtalks-blond.vercel.app** |
| All routes verified | ✅ 200 (Landing, Dashboard, Day 12, Leaderboard) |
| Auto-deploy on push | ❌ Not connected (manual `vercel --prod --yes` deploys) |

---

## GitHub Repository

- **URL:** https://github.com/Mandeepkour06/Zyron-ML
- **Remote:** `origin` → `https://github.com/Mandeepkour06/Zyron-ML.git`
- **Branch:** `main`
- **Git user:** lavanya sehgal

**Recent commits:**
```
137d803 add AI usage log
44091f0 add live deployment link to README
235ce9a Optimize mobile-first responsive design across all pages
919c380 Merge: Add ABTalks platform to repository
02295be Complete Day 1-8 challenge pages and improve dashboard UI
```

---

## Vercel Deployment

- **Project:** abtalks
- **Production URL:** https://abtalks-blond.vercel.app
- **Latest deployment ID:** `dpl_8WQns4S38ruW7MXi1tNMTticQ8Vd`
- **Re-deploy command:** `cd abtalks && vercel --prod --yes`
- **CLI:** Vercel CLI 58.8.0, authenticated as `lavanyasehgal3008-7450s-projects`

---

## AWS Services Planned

> ⚠️ **Not yet implemented.** These are planned for a future production phase; the hackathon demo uses mock data + localStorage.

| Service | Purpose |
|---------|---------|
| Amazon Cognito | User authentication (replaces guest mode) |
| AWS API Gateway + Lambda | Backend REST API for challenges & submissions |
| Amazon DynamoDB | Serverless database for users, progress, submissions |
| Amazon S3 | File uploads (project screenshots, avatars, assets) |
| AWS Amplify | (Alternative) hosting + auth if preferred over Vercel |

No AWS resources have been created yet. No costs incurred.

---

## Pending Bugs

- [ ] **Low:** Leaderboard bottom info cards ("How Rankings Work" / "Keep Pushing") only partially mobile-polished — spacing and text scale need a final pass.
- [ ] **Low:** Verify zero horizontal scroll on all routes at 390px once more (done after last optimization, but re-check if any new content added).
- [ ] **Low:** Hydration mismatch on `/dashboard` — `joinedDate` formatted via `toLocaleDateString()` renders differently server-side (UTC) vs. client (local timezone). React fixes it client-side but console shows a warning. Cosmetic only; functional.

---

## Next Tasks (Priority Order)

1. **Fix the `/dashboard` hydration mismatch** — format `joinedDate` deterministically (use UTC or a fixed string) to eliminate the console warning on a required-screenshot route.
2. **Final QA pass** — walk `/`, `/dashboard`, `/day/12`, `/leaderboard` at 390px and 1440px; verify no overflow.
3. **Optional:** Finish leaderboard mobile polish (bottom two info cards) — non-required route, cosmetic only.
4. **Optional:** Connect Vercel Git integration for auto-deploy on every push.
5. **Optional:** Swap guest mode for real auth (Clerk or Supabase) if the demo needs login.
6. **Future:** Implement AWS services (Cognito → Lambda/API Gateway → DynamoDB → S3) when moving beyond the demo.

---

## AI Usage Summary

Full chronological log of AI-assisted work is maintained in **`AI_USAGE_LOG.md`** (17 entries as of the last commit). Highlights:

- Scaffolded the Next.js app and built all 4 routes
- Converted to dark theme, added onboarding state, AI Mentor
- Built production-quality challenge pages + demo mode + localStorage
- Generated all 60 days of challenge data
- Added leaderboard with search/sort
- Mobile-first optimization for 390px viewport
- Deployed to Vercel, updated README, added AI usage log
- **Added AI Learning Coach** — progress-aware contextual tips + working Q&A on the dashboard (mobile + desktop)

---

## Notes for Continuing Tomorrow

1. **Read this file first** — it contains the full project state.
2. **Read `TODO.md`** for the task checklist (completed / current / remaining).
3. **Check `git status`** — working tree is dirty (AI Learning Coach changes not yet committed).
4. **Dev server:** run `npm run dev` from the project root.
5. **Live site:** https://abtalks-blond.vercel.app (re-deploy with `vercel --prod --yes` after changes).
6. **Next action if resuming:** fix the `/dashboard` hydration mismatch on `joinedDate`, then run the final QA pass.
7. **Vercel CLI is installed and authenticated** — deploys are one command.
8. **Remember:** update `AI_USAGE_LOG.md` and this file before every commit; show the log to the user for approval.

---

*Last updated: 2026-08-08 · Before commit (AI Learning Coach + hydration mismatch discovery)*
