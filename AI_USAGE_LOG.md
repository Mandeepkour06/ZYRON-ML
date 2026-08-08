# AI Usage Log

A chronological record of AI-assisted development on the ABTalks 60-Day Challenge platform. Updated before every Git commit.

---

## 2026-08-07

### 1. Initial platform build (Landing, Dashboard, Challenge Day)

- **Goal:** Build the core ABTalks platform — landing page, student dashboard, and daily challenge pages.
- **Prompt:** "1. Landing Page (/) ... 2. Student Dashboard (/dashboard) ... 3. Challenge Day (/day/12)"
- **Summary:** Scaffolded a Next.js + TypeScript + Tailwind project and built all three pages with mock auth and hardcoded data.
- **Files:**
  - Created: `app/page.tsx`, `app/dashboard/page.tsx`, `app/day/[id]/page.tsx`, `lib/data.ts`

### 2. Dark theme conversion

- **Goal:** Match a black color-scheme across the whole application.
- **Prompt:** "make it of black color theme background"
- **Summary:** Converted all pages from light to a black/gray-900 dark theme, adjusting text, borders, cards, and accent colors while keeping the blue branding.
- **Files modified:** `app/page.tsx`, `app/dashboard/page.tsx`, `app/day/[id]/page.tsx`

### 3. First-time user onboarding experience

- **Goal:** Remove fake user data and present a clean onboarding dashboard.
- **Prompt:** "Replace all placeholder users like 'Alex Johnson' with a realistic first-time user experience..."
- **Summary:** Removed fake names, progress, and achievements. Added a fresh-start state (Day 1, 0 XP, 0 streak), an AI Mentor card, and auth-ready `isAuthenticated` flag. Added real beginner challenges for Days 1-5.
- **Files modified:** `lib/data.ts`, `app/dashboard/page.tsx`

### 4. Production-quality Challenge Day page

- **Goal:** Build a complete challenge experience with instructions, resources, and submission.
- **Prompt:** "Create a production-quality Challenge Day page (/day/[id])..."
- **Summary:** Added step-by-step instructions with code samples, skills list, resources, requirement checklist, GitHub/Live URL submission, XP reward animation, and prev/next navigation. Expanded data model with `Instruction`, `Requirement`, and `Resource` interfaces.
- **Files modified:** `lib/data.ts`, `app/day/[id]/page.tsx`

### 5. Hackathon demo mode

- **Goal:** Make the challenge completion flow demo-friendly.
- **Prompt:** "Modify the Challenge Day page so that: 'Mark as Completed' is always available..."
- **Summary:** Made URLs optional, added demo-mode toast, and wired localStorage persistence so XP, streak, progress, and unlock state are saved and reflected on the dashboard.
- **Files modified:** `app/day/[id]/page.tsx`, `app/dashboard/page.tsx`

### 6. Full 60-day challenge data

- **Goal:** Fix missing challenge data and routing for days beyond Day 5.
- **Prompt:** "Fix the challenge data and routing... Create challenge data for all 60 days."
- **Summary:** Generated challenge data for all 60 days via a template + generator pattern, with progressive difficulty and per-day requirements/resources.
- **Files modified:** `lib/data.ts`

### 7. Leaderboard page

- **Goal:** Add a competitive leaderboard with rankings.
- **Prompt:** "Build a Leaderboard page (/leaderboard)... Top 10 students, Rank, Avatar, XP, streak, search and sort."
- **Summary:** Built the leaderboard with top-10 mock data, current-user highlighting (fed from localStorage), search, and sort by XP/streak/completed days. Added nav links.
- **Files created/modified:** `lib/leaderboard.ts`, `app/leaderboard/page.tsx`, `app/dashboard/page.tsx`

### 8. First Git commit & push

- **Goal:** Commit and push the initial platform work.
- **Prompt:** "Commit all my current changes with the message: 'Complete Day 1-8 challenge pages and improve dashboard UI' Then push them to the GitHub repository."
- **Summary:** Initialized git in the `abtalks` directory, committed 22 files, resolved a README merge conflict with the existing Zyron-ML repo, and pushed to `github.com/Mandeepkour06/Zyron-ML.git`.
- **Commits:** `02295be`, `919c380`

### 9. Mobile-first responsive optimization

- **Goal:** Optimize all routes for a 390px mobile viewport for hackathon screenshots.
- **Prompt:** "Optimize the application for the hackathon evaluation requirements... mobile-first approach..."
- **Summary:** Scaled typography, reduced mobile padding, added 44px+ touch targets, stacked grids, prevented horizontal scroll, fixed mobile nav/toast/XP animation, and set 16px inputs to prevent iOS zoom.
- **Files modified:** `app/globals.css`, `app/page.tsx`, `app/dashboard/page.tsx`, `app/day/[id]/page.tsx`, `app/leaderboard/page.tsx`
- **Commit:** `235ce9a`

### 10. Vercel production deployment

- **Goal:** Make the app publicly accessible for a community/hackathon audience.
- **Prompt:** "yes as this is going to be opened by another community or person so i need your help with that"
- **Summary:** Installed the Vercel CLI, authenticated via device flow, and deployed to production at `https://abtalks-blond.vercel.app`. Verified all routes return HTTP 200.
- **Files:** None changed (deployment only)

### 11. README live demo link

- **Goal:** Document the live deployment in the README.
- **Prompt:** "commit all this and write in commit add live deployment link to README..."
- **Summary:** Added ABTalks heading, live demo URL, and tech stack sections to the top of the README, committed, and pushed.
- **Files modified:** `README.md`
- **Commit:** `44091f0`

### 12. Create AI Usage Log

- **Goal:** Establish a maintained record of all AI-assisted work.
- **Prompt:** "Create and maintain an AI_USAGE_LOG.md file in the root of this repository..."
- **Summary:** Created this log documenting every significant interaction chronologically.
- **Files created:** `AI_USAGE_LOG.md`

### 13. Create project context & task tracker

- **Goal:** Preserve full project state and task tracking for seamless continuation.
- **Prompt:** "Create a PROJECT_CONTEXT.md file... Create a TODO.md file..."
- **Summary:** Added `PROJECT_CONTEXT.md` (overview, hackathon requirements, progress, folder structure, design decisions, route map, deployment, GitHub/Vercel, AWS plans, bugs, next tasks, AI summary, continuation notes) and `TODO.md` (completed/current/remaining tasks, bugs, hackathon + deployment checklists).
- **Files created:** `PROJECT_CONTEXT.md`, `TODO.md`

### 14. AI Learning Coach on dashboard

- **Goal:** Replace the static AI Mentor card with a progress-aware AI Learning Coach.
- **Prompt:** "Proceed with the AI Learning Coach… keep it on the dashboard, use the existing mock/localStorage architecture, make the responses contextual to the student's progress."
- **Summary:** Created `lib/coach.ts` — a pure-function module with progress-aware greetings, contextual tips (branched by days-completed/streak), and a rule-based Q&A engine covering today's challenge, streak, XP, milestones, motivation, and more. Every answer references the student's actual data. Added four one-tap quick-question chips for a demo-friendly interaction. Updated the dashboard sidebar to render the coach card with live greeting, status line, tips, quick-question chips, a scrollable conversation area, and a working input + Ask button. No new routes, no backend — reads the same `localStorage` progress.
- **Files created:** `lib/coach.ts`
- **Files modified:** `app/dashboard/page.tsx` (import swap, new state for Q&A, replaced static AI Mentor card with coach card)

### 15. Restore and improve AI Mentor

- **Goal:** Fix broken desktop AI Mentor after layout restructuring and restore the four quick-question buttons.
- **Prompt:** "Restore the last known working AI Mentor state... Restore the four suggested questions on desktop."
- **Summary:** After multiple layout attempts broke the desktop sidebar, reverted `app/dashboard/page.tsx` to the last committed state via `git checkout`. Re-applied the coach features cleanly: added coach imports, state, and computed values; added a mobile-only coach card (`lg:hidden`) before the main grid for 390px visibility; upgraded the sidebar AI Mentor card from the original static version (hardcoded tips, dead button) to the full coach version with contextual tips, four quick-question buttons, conversation area, and working input + Ask. Sidebar card uses `hidden lg:block` so it's hidden on mobile (replaced by the mobile coach card). Desktop layout completely untouched.
- **Files modified:** `app/dashboard/page.tsx` (coach imports, state, mobile-only card, upgraded sidebar card)

### 16. Make AI mentor responsive on mobile

- **Goal:** Fix the Code Mentor AI at 390px mobile viewport — correct button text and response matching.
- **Prompt:** "Fix the Code Mentor AI at a 390px mobile viewport... Show all four existing suggested questions: What should I do today?, How am I doing?, Tell me about my stats, I'm stuck."
- **Summary:** The mobile coach card was already rendering correctly at 390px (visible, above fold, all elements present). The only issue was a button text mismatch: the quick-question chip said "Tell me about my streak" but the requirement was "Tell me about my stats". Updated `quickQuestions` in `lib/coach.ts` and added `stats` to the regex pattern in `getCoachResponse` so tapping "Tell me about my stats" returns the student's XP, completed days, and progress data. Desktop layout completely untouched.
- **Files modified:** `lib/coach.ts` (button text + regex pattern)

---

*Entries are appended automatically before each commit.*
