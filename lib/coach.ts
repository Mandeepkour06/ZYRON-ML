// lib/coach.ts
// AI Learning Coach — progress-aware coaching + rule-based Q&A.
// Pure functions over the student's progress so it slots into the existing
// mock-data + localStorage architecture (no backend, no new routes).

export interface CoachState {
  currentDay: number;
  xp: number;
  streak: number;
  completedDays: number[];
}

export interface CoachMessage {
  role: 'coach' | 'student';
  text: string;
}

const daysCompleted = (s: CoachState) => s.completedDays.length;
const daysRemaining = (s: CoachState) => 60 - daysCompleted(s);
const progressPct = (s: CoachState) => Math.round((daysCompleted(s) / 60) * 100);

// Short status line shown under the greeting, e.g. "Day 3 of 60 · 2 days done".
export function getCoachStatus(s: CoachState): string {
  const done = daysCompleted(s);
  return `Day ${Math.min(s.currentDay, 60)} of 60 · ${done} day${done === 1 ? '' : 's'} done · ${s.xp} XP`;
}

// Greeting adapts to where the student actually is in the journey.
export function getCoachGreeting(s: CoachState): string {
  const done = daysCompleted(s);
  if (done === 0) {
    return "Welcome! I'll be your AI coach for the next 60 days. Let's build your first project together.";
  }
  if (s.streak > 0) {
    return `Great to see you back! Day ${Math.min(s.currentDay, 60)} is waiting — keep your ${s.streak}-day streak alive.`;
  }
  return "Welcome back! Your streak reset, but today is a fresh chance to start a new one.";
}

// Contextual tips computed from real progress (up to 3, screenshot-friendly).
export function getCoachTips(s: CoachState): string[] {
  const done = daysCompleted(s);
  const left = daysRemaining(s);

  if (done === 0) {
    return [
      'Complete Day 1 to earn your first 100 XP',
      'Start with 30 focused minutes — momentum beats marathon sessions',
      'URLs are optional in demo mode, so finishing takes one click'
    ];
  }

  if (s.streak > 0 && s.streak < 7) {
    return [
      `You're on a ${s.streak}-day streak — finish today's challenge to keep it alive`,
      `${left} days to go — you're ${progressPct(s)}% through the journey`,
      done < 7
        ? `${7 - done} more day${7 - done === 1 ? '' : 's'} to your Week One milestone`
        : 'Next milestone: complete 30 days'
    ];
  }

  if (done < 30) {
    return [
      `${done} days done, ${left} to go — you're ${progressPct(s)}% through`,
      'Consistency beats intensity: show up daily even if the project is small',
      'Share progress on LinkedIn with #ABTalks to stay accountable'
    ];
  }

  if (done < 60) {
    return [
      `You've completed ${done} days — only ${left} to go, the finish line is in sight`,
      "You're past the halfway point, so stretch yourself with an advanced challenge",
      'Keep the streak alive — every day now counts double'
    ];
  }

  return [
    'You completed all 60 days — that is extraordinary!',
    'Celebrate this win, then keep building — the streak was the skill'
  ];
}

// Names the next un-reached milestone so answers reference real goals.
function nextMilestone(s: CoachState): string {
  const done = daysCompleted(s);
  const targets = [1, 7, 30, 60];
  for (const t of targets) {
    if (done < t) return `${t - done} more day${t - done === 1 ? '' : 's'} to reach ${t} days completed`;
  }
  return 'You have completed every milestone — legendary!';
}

// Rule-based Q&A. Every answer folds in the student's actual numbers so the
// coach feels aware of their progress during the demo.
export function getCoachResponse(s: CoachState, question: string): string {
  const q = question.toLowerCase();
  const done = daysCompleted(s);
  const today = Math.min(s.currentDay, 60);

  if (/(what should i|what do i|today|next|which day|where.*start)/.test(q)) {
    return done === 0
      ? `Let's get moving. Start with Day 1: Build Your Portfolio Website — it earns you 100 XP and creates your digital identity.`
      : `Today's focus is Day ${today}. Complete it to earn 100 XP and ${s.streak > 0 ? `extend your ${s.streak}-day streak` : 'start a new streak'}.`;
  }

  if (/(streak|habit|consistent)/.test(q)) {
    if (s.streak > 0) {
      return `Your current streak is ${s.streak} day${s.streak === 1 ? '' : 's'} 🔥. It grows one day at a time — finish today's challenge to keep it alive.`;
    }
    if (done > 0) {
      return `You've completed ${done} day${done === 1 ? '' : 's'} but your streak reset. No stress — streaks rebuild daily. Finish today's challenge to start a fresh one.`;
    }
    return `You don't have a streak yet, and that's fine — it starts today. Complete Day 1, come back tomorrow for Day 2, and consistency does the rest.`;
  }

  if (/(xp|points|score|rank)/.test(q)) {
    return `You have ${s.xp} XP from ${done} completed day${done === 1 ? '' : 's'}. Every challenge is worth 100 XP, so completing Day ${today} takes you to ${s.xp + 100} XP.`;
  }

  if (/(progress|how.*doing|how.*far|doing.*well)/.test(q)) {
    return done === 0
      ? `You're at the very start of the challenge — 0 of 60 days done. Every expert was once a beginner, so Day 1 is the most important step.`
      : `You're ${progressPct(s)}% through — ${done} of 60 days done, ${daysRemaining(s)} remaining. That's steady, real progress.`;
  }

  if (/(stuck|hard|difficult|confused|help|can't|not working|bug)/.test(q)) {
    return `Getting stuck is part of building. Re-read the step-by-step instructions on the challenge page, check the linked resources, and break the task into smaller pieces. Progress is saved automatically, so you can come back anytime.`;
  }

  if (/(milestone|goal|target)/.test(q)) {
    return `Your next milestone: ${nextMilestone(s)}. Milestones are worth celebrating — hit it and the next one feels closer.`;
  }

  if (/(motivat|tired|give up|quit|lazy)/.test(q)) {
    return done > 0
      ? `You've got this — you're ${done} days in, which is further than most people ever get. Focus only on today's challenge. Small steps beat heroic effort. 💪`
      : `You've got this. Focus only on today's challenge — small consistent steps beat heroic effort, and your streak starts now. 💪`;
  }

  if (/(time|schedule|busy|manage)/.test(q)) {
    return `Block 30–45 focused minutes a day for your challenge. Set a daily reminder and treat it like a meeting you can't skip. Consistency beats marathon sessions.`;
  }

  if (/(portfolio|project|idea|what.*build)/.test(q)) {
    return `Every day builds a real project — portfolios, apps, tools. Browse the Resources on any challenge page for curated docs and tutorials, and pick projects that interest you to stay motivated.`;
  }

  if (/(who are you|what can you do|what are you)/.test(q)) {
    return `I'm CodeMentor AI, your personal coach for this 60-day challenge. Ask me about today's challenge, your streak, XP, milestones, or tell me you're stuck — I'll nudge you in the right direction.`;
  }

  return `Good question! I can help with today's challenge, your streak, XP, or motivation. Try "What should I do today?" or "How am I doing?" — or just start Day ${today} and let momentum do the rest.`;
}

// One-tap prompts for the demo — touch-friendly and screenshot-friendly.
export const quickQuestions = [
  'What should I do today?',
  'How am I doing?',
  'Tell me about my streak',
  'I\'m stuck'
];
