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

// Rule-based Q&A with flexible intent matching. Every answer folds in the
// student's actual numbers so the coach feels aware of their progress.
export function getCoachResponse(s: CoachState, question: string): string {
  const q = question.toLowerCase();
  const done = daysCompleted(s);
  const today = Math.min(s.currentDay, 60);
  const left = daysRemaining(s);
  const pct = progressPct(s);

  // What to learn next / learning path
  if (/(what.*(should|do|can).*(i|to).*(learn|study|read|practice|explore)|learn.*(next|new|more)|next.*(skill|topic|thing|step)|what.*next)/.test(q)) {
    if (done === 0) {
      return `Start with Day 1: Build Your Portfolio Website — it earns you 100 XP and creates your digital identity. That's the best foundation for everything that follows.`;
    }
    const nextDay = Math.min(today + 1, 60);
    return `After Day ${today}, move to Day ${nextDay}. Each day teaches a new skill — by Day ${Math.min(today + 7, 60)} you'll have a solid foundation. Keep the momentum going!`;
  }

  // Today's challenge / what to focus on
  if (/(what.*(should|do|can|to).*(i|do|focus|work|start|tackle)|today.*(challenge|task|project|do)|which day|where.*start|current day|day\s*\d)/.test(q)) {
    if (done === 0) {
      return `Start with Day 1: Build Your Portfolio Website — it earns you 100 XP and creates your digital identity. That's the best place to begin your journey.`;
    }
    return `Today's focus is Day ${today}. Complete it to earn 100 XP and ${s.streak > 0 ? `extend your ${s.streak}-day streak` : 'start a new streak'}. You've got this!`;
  }

  // Streak
  if (/(streak|habit|consistent|daily|consecutive|keep.*going|maintain)/.test(q)) {
    if (/(improve|increase|grow|better|longer|how.*can.*i)/.test(q)) {
      return s.streak > 0
        ? `To grow your ${s.streak}-day streak, set a daily reminder and complete each challenge before midnight. Even 30 minutes counts — consistency beats perfection.`
        : `Start a new streak today! Complete Day ${today} and come back tomorrow. Set a phone reminder at a time you're usually free — that one habit changes everything.`;
    }
    if (s.streak > 0) {
      return `Your current streak is ${s.streak} day${s.streak === 1 ? '' : 's'} 🔥. It grows one day at a time — finish today's challenge to keep it alive.`;
    }
    if (done > 0) {
      return `You've completed ${done} day${done === 1 ? '' : 's'} but your streak reset. No stress — streaks rebuild daily. Finish today's challenge to start a fresh one.`;
    }
    return `You don't have a streak yet, and that's fine — it starts today. Complete Day 1, come back tomorrow for Day 2, and consistency does the rest.`;
  }

  // XP / points / score
  if (/(xp|points|score|rank|stats|how much|how many.*point)/.test(q)) {
    if (/(days|completed|done|finished)/.test(q)) {
      return `You've completed ${done} of 60 days (${pct}%). ${left > 0 ? `${left} days to go — you're making real progress.` : 'You finished all 60 days — incredible!'}`;
    }
    return `You have ${s.xp} XP from ${done} completed day${done === 1 ? '' : 's'}. Every challenge is worth 100 XP, so completing Day ${today} takes you to ${s.xp + 100} XP.`;
  }

  // Progress / how am I doing
  if (/(progress|how.*(am i|doing|far|going|well)|status|where.*i.*stand)/.test(q)) {
    if (done === 0) {
      return `You're at the very start of the challenge — 0 of 60 days done. Every expert was once a beginner, so Day 1 is the most important step.`;
    }
    if (done >= 50) {
      return `You're ${pct}% through — ${done} of 60 days done! You're in the final stretch. Only ${left} days to go — finish strong.`;
    }
    return `You're ${pct}% through — ${done} of 60 days done, ${left} remaining. That's steady, real progress. Keep it up!`;
  }

  // Stuck / difficulty / trouble — specific patterns, not generic "help"
  if (/(stuck|hard to|difficult|confused|can't (?:do|figure|get|make|understand)|not working|bug|trouble|struggling|issue|problem|error|fail|stumped|overwhelmed|frustrat)/.test(q)) {
    if (/(today|current|this.*challenge|this.*day)/.test(q)) {
      return `For today's challenge (Day ${today}), try breaking it into smaller steps. Re-read the instructions, check the Resources section, and tackle one piece at a time. You can always come back to it.`;
    }
    return `Getting stuck is part of building. Re-read the step-by-step instructions on the challenge page, check the linked resources, and break the task into smaller pieces. Progress is saved automatically, so you can come back anytime.`;
  }

  // Milestones / goals
  if (/(milestone|goal|target|achievement|badge)/.test(q)) {
    return `Your next milestone: ${nextMilestone(s)}. Milestones are worth celebrating — hit it and the next one feels closer.`;
  }

  // Motivation / tired / quit
  if (/(motivat|tired|give up|quit|lazy|unmotivat|bored|done.*with|why.*bother)/.test(q)) {
    return done > 0
      ? `You've got this — you're ${done} days in, which is further than most people ever get. Focus only on today's challenge. Small steps beat heroic effort. 💪`
      : `You've got this. Focus only on today's challenge — small consistent steps beat heroic effort, and your streak starts now. 💪`;
  }

  // Time management
  if (/(time|schedule|busy|manage|when|how long|minute|hour)/.test(q)) {
    return `Block 30–45 focused minutes a day for your challenge. Set a daily reminder and treat it like a meeting you can't skip. Consistency beats marathon sessions.`;
  }

  // Projects / portfolio / what to build
  if (/(portfolio|project|idea|what.*build|app|website|tool)/.test(q)) {
    return `Every day builds a real project — portfolios, apps, tools. Browse the Resources on any challenge page for curated docs and tutorials, and pick projects that interest you to stay motivated.`;
  }

  // Conversational — greeting / "can I ask" / general question
  if (/(^(hi|hello|hey|howdy|good (morning|afternoon|evening)|yo\b)|can i ask|just asking|quick question|tell me|explain|what do you|how do you|do you know)/.test(q)) {
    return `Of course! I'm here to help with your 60-day challenge. Ask me about today's task, your XP, streak, progress, what to learn next, or if you're stuck on something — I'll give you a tailored answer.`;
  }

  // Who are you / what can you do
  if (/(who are you|what can you do|what are you|introduce|about you)/.test(q)) {
    return `I'm CodeMentor AI, your personal coach for this 60-day challenge. I know your progress, streak, and XP — ask me anything about your journey and I'll give you a tailored answer.`;
  }

  // Fallback
  return `I'm your Code Mentor for this 60-day journey. Ask me about today's challenge, your progress, XP, streak, what to learn next, or getting unstuck — I'll give you a tailored answer based on where you are.`;
}

// One-tap prompts for the demo — touch-friendly and screenshot-friendly.
export const quickQuestions = [
  'What should I do today?',
  'How am I doing?',
  'Tell me about my stats',
  'I\'m stuck'
];
