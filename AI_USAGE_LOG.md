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

### 17. Reorder mobile dashboard sections

- **Goal:** Change the mobile-only section order so Code Mentor AI appears after Today's Challenge instead of before it.
- **Prompt:** "Reorder the existing dashboard sections to: 1. Welcome, 2. Stats, 3. Today's Challenge, 4. Code Mentor AI, 5. Your Journey, 6. Quick Stats, 7. Next Milestones."
- **Summary:** Moved the mobile-only coach card (`lg:hidden`) from before the main grid to inside the main content div, between Today's Challenge and Your Journey. Desktop layout completely untouched — the sidebar card (`hidden lg:block`) remains in its original position.
- **Files modified:** `app/dashboard/page.tsx` (moved mobile-only coach card)

### 18. Improve mentor free-text responses

- **Goal:** Fix the "Ask Me Anything" input so different free-text questions produce different contextual responses.
- **Prompt:** "Fix the actual free-text response logic... implement conversational, rule-based intent handling."
- **Summary:** The stuck intent regex contained the overly generic keyword `"help"`, which matched any question containing "help" (including "Can I ask you something?") and routed it to the stuck response. Fixed by removing `"help"` and using more specific patterns (`"can't (?:do|figure|get)"`, `"stumped"`, `"overwhelmed"`, `"frustrat"`). Split the "what should I do" intent into two: learning-path questions ("what should I learn next") get a different response than challenge-focus questions ("what should I focus on today"). Added a conversational intent for greetings and polite openers ("Can I ask you something?", "quick question"). All 7 test questions now produce unique, contextually appropriate responses.
- **Files modified:** `lib/coach.ts` (stuck intent regex, split learning/challenge intent, added conversational intent)

### 19. Enable direct access to day 12 for demo

- **Goal:** Make `/day/12` render its full challenge content even with empty localStorage, so hackathon judges can see the complete challenge page without manually completing previous days.
- **Prompt:** "Implement the smallest possible fix in app/day/[id]/page.tsx... /day/12 must render its full challenge content even when localStorage has no completed days."
- **Summary:** Changed the lock condition on line 68 from `dayId > studentProgress.currentDay` to `dayId > studentProgress.currentDay && dayId !== 12`. This excludes Day 12 from the lock check while keeping all other days locked as before. One-line change. Tested: `/day/12` shows full content (instructions, requirements, resources) with fresh localStorage; `/day/2` still shows "Challenge Locked".
- **Files modified:** `app/day/[id]/page.tsx` (lock condition)

### 20. Fix dashboard and Day 12 desktop empty space

- **Prompt:** "We will fix ONLY the two HIGH-priority UI issues from the audit. 1. DASHBOARD — 'Your Journey' excessive empty space on desktop. 2. /day/12 — 'Complete Challenge' excessive empty space on desktop."
- **Summary:** Added `lg:self-start` to the main content div (`lg:col-span-2`) in both `app/dashboard/page.tsx` and `app/day/[id]/page.tsx`. This prevents the main content column from stretching to match the sidebar height on desktop, so sections like "Your Journey" and "Complete Challenge" end naturally at their own height instead of leaving large blank areas.
- **Files modified:** `app/dashboard/page.tsx`, `app/day/[id]/page.tsx`

### 21. Improve mobile testimonial spacing

- **Prompt:** "Change only the testimonial grid's mobile gap from `gap-4` to `gap-6` in `app/page.tsx`."
- **Summary:** Increased the mobile gap in the Success Stories testimonial grid from `gap-4` (1rem) to `gap-6` (1.5rem) so the three testimonial cards have better breathing room on 390px viewports.
- **Files modified:** `app/page.tsx`

### 22. Add LinkedIn proof submission

- **Prompt:** "Implement the LinkedIn proof submission on `/day/12`. The student should be able to add/paste their LinkedIn post URL as proof of completion. Clearly understand that the LinkedIn post is required proof of work. Submit/save the LinkedIn proof alongside the GitHub proof."
- **Summary:** Added a LinkedIn URL input field to the Complete Challenge form on `/day/12`. The field is labeled "LinkedIn Post URL (Required for proof)" with helper text explaining the requirement. Updated the `StudentProgress.submissions` interface, form state, submission logic, and completion display to include `linkedinUrl`. GitHub and Live Demo remain optional; LinkedIn is marked as required proof.
- **Files modified:** `app/day/[id]/page.tsx`

### 23. Final hackathon visual redesign

- **Prompt:** "Implement the approved improvements for `/`, `/dashboard`, `/day/12`. Use a cohesive, modern, clean visual system. Avoid overusing gradients, glassmorphism, glowing effects, or animations. The site should feel premium and polished rather than visually busy. For the thoughtful student-experience feature, implement a meaningful 60-Day Journey / Momentum system showing completed days, current day, upcoming days, next milestone, and progress toward the 60-day goal. Make the missed-day experience supportive rather than punitive."
- **Summary:** Implemented a comprehensive visual redesign across all three routes with a clean, modern design system. Added a 60-Day Journey timeline component to the dashboard showing progress visually. Improved typography, spacing, card design, and visual hierarchy. Made missed-day experience supportive with encouraging messaging. Kept animations subtle and purposeful. Mobile-first at 390px.
- **Files modified:** `app/page.tsx`, `app/dashboard/page.tsx`, `app/day/[id]/page.tsx`, `app/globals.css`

---

*Entries are appended automatically before each commit.*
