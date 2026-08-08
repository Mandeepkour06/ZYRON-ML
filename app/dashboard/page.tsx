'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getTodayChallenge, getProgressPercentage, aiMentor } from '@/lib/data';
import {
  getCoachGreeting,
  getCoachStatus,
  getCoachTips,
  getCoachResponse,
  quickQuestions,
  CoachMessage
} from '@/lib/coach';

interface StudentProgress {
  currentDay: number;
  xp: number;
  streak: number;
  completedDays: number[];
  submissions: { [key: number]: { githubUrl?: string; liveUrl?: string; completedAt: string } };
}

export default function Dashboard() {
  const [studentProgress, setStudentProgress] = useState<StudentProgress>({
    currentDay: 1,
    xp: 0,
    streak: 0,
    completedDays: [],
    submissions: {}
  });

  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState<CoachMessage[]>([]);

  useEffect(() => {
    // Load progress from localStorage
    const savedProgress = localStorage.getItem('abtalks_progress');
    if (savedProgress) {
      setStudentProgress(JSON.parse(savedProgress));
    }
  }, []);

  const student = { ...studentProgress, isAuthenticated: false, joinedDate: "2026-08-07" };
  const todayChallenge = getTodayChallenge(student);
  const progressPercentage = getProgressPercentage(student);
  const daysRemaining = 60 - student.completedDays.length;

  const coachGreeting = getCoachGreeting(student);
  const coachStatus = getCoachStatus(student);
  const coachTips = getCoachTips(student);

  const askCoach = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const reply = getCoachResponse(student, trimmed);
    setMessages(prev => [
      ...prev,
      { role: 'student', text: trimmed },
      { role: 'coach', text: reply }
    ]);
    setQuestion('');
  };

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <Link href="/" className="text-xl sm:text-2xl font-bold text-blue-500">
              ABTalks
            </Link>
            <div className="flex items-center gap-3 sm:gap-6">
              <Link href="/dashboard" className="hidden sm:inline text-white font-medium text-sm">
                Dashboard
              </Link>
              <Link href="/leaderboard" className="text-gray-400 hover:text-white transition-colors text-sm">
                Leaderboard
              </Link>
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="hidden md:inline text-gray-400 text-sm">Guest</span>
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-full flex items-center justify-center text-gray-400 font-semibold">
                  ?
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Welcome to ABTalks</h1>
          <p className="text-gray-400 mt-1 text-sm sm:text-base">Start your 60-day journey to becoming a confident developer</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
          <div className="bg-gray-900 rounded-xl p-4 sm:p-5 border border-gray-800/50">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">📅</span>
              <span className="text-gray-400 text-xs font-medium">Current Day</span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-white">{student.currentDay}</div>
            <div className="text-gray-500 text-xs mt-1">of 60 days</div>
          </div>

          <div className="bg-gray-900 rounded-xl p-4 sm:p-5 border border-gray-800/50">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">⭐</span>
              <span className="text-gray-400 text-xs font-medium">XP</span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-white">{student.xp}</div>
            <div className="text-gray-500 text-xs mt-1">points</div>
          </div>

          <div className="bg-gray-900 rounded-xl p-4 sm:p-5 border border-gray-800/50">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">🔥</span>
              <span className="text-gray-400 text-xs font-medium">Streak</span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-white">{student.streak}</div>
            <div className="text-gray-500 text-xs mt-1">days</div>
          </div>

          <div className="bg-gray-900 rounded-xl p-4 sm:p-5 border border-gray-800/50">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">📊</span>
              <span className="text-gray-400 text-xs font-medium">Progress</span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-white">{progressPercentage}%</div>
            <div className="text-gray-500 text-xs mt-1">completed</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 lg:self-start space-y-4 sm:space-y-6">
            {/* Today's Challenge */}
            <div className="bg-gray-900 rounded-xl p-5 sm:p-6 lg:p-8 border border-gray-800/50">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h2 className="text-lg sm:text-xl font-bold text-white">Today's Challenge</h2>
                <span className={`px-2.5 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium ${
                  todayChallenge?.difficulty === 'beginner' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                  todayChallenge?.difficulty === 'intermediate' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' :
                  'bg-red-500/10 text-red-400 border border-red-500/20'
                }`}>
                  {todayChallenge?.difficulty}
                </span>
              </div>

              {todayChallenge ? (
                <>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                    Day {todayChallenge.day}: {todayChallenge.title}
                  </h3>
                  <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                    {todayChallenge.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5 sm:mb-6">
                    {todayChallenge.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs sm:text-sm border border-gray-700">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/day/${todayChallenge.day}`}
                    className="inline-flex w-full sm:w-auto items-center justify-center px-6 py-3.5 sm:px-8 bg-blue-600 text-white rounded-lg font-semibold text-sm sm:text-base hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl active:scale-[0.98] min-h-[48px]"
                  >
                    Start Today's Challenge →
                  </Link>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="text-4xl mb-3">🎉</div>
                  <p className="text-gray-400">Congratulations! You've completed all available challenges.</p>
                </div>
              )}
            </div>

            {/* Mobile-only AI Learning Coach — between Today's Challenge and Your Journey */}
            <div className="lg:hidden">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-5 sm:p-6 shadow-sm text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
                    🤖
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-lg sm:text-xl font-bold truncate">CodeMentor AI</h2>
                    <p className="text-blue-100 text-xs sm:text-sm">Your AI Learning Coach</p>
                  </div>
                </div>

                <p className="text-white mb-1 text-sm sm:text-base">{coachGreeting}</p>
                <p className="text-blue-200 text-xs sm:text-sm mb-4">{coachStatus}</p>

                <div className="space-y-3 mb-4">
                  {coachTips.map((tip, i) => (
                    <div key={i} className="flex gap-2 items-start">
                      <span className="text-blue-200 text-sm mt-1 flex-shrink-0">💡</span>
                      <p className="text-blue-50 text-sm leading-relaxed">{tip}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  {quickQuestions.map((qq) => (
                    <button
                      key={qq}
                      onClick={() => askCoach(qq)}
                      className="px-3 py-2 bg-white/15 hover:bg-white/25 text-blue-50 text-xs rounded-full transition-colors min-h-[44px]"
                    >
                      {qq}
                    </button>
                  ))}
                </div>

                {messages.length > 0 && (
                  <div className="mb-3 max-h-40 overflow-y-auto space-y-2">
                    {messages.map((m, i) => (
                      <div
                        key={i}
                        className={`text-sm leading-relaxed rounded-lg px-3 py-2 ${
                          m.role === 'coach'
                            ? 'bg-white/15 text-blue-50'
                            : 'bg-black/30 text-white'
                        }`}
                      >
                        {m.text}
                      </div>
                    ))}
                  </div>
                )}

                <form
                  onSubmit={(e) => { e.preventDefault(); askCoach(question); }}
                  className="flex gap-2"
                >
                  <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Ask me anything..."
                    className="flex-1 min-w-0 px-3 py-2 bg-black/30 border border-white/20 text-white text-base rounded-lg placeholder-blue-200 outline-none focus:ring-2 focus:ring-white/40 min-h-[44px]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-white text-blue-700 text-sm font-semibold rounded-lg hover:bg-blue-50 transition-colors min-h-[44px]"
                  >
                    Ask
                  </button>
                </form>
              </div>
            </div>

            {/* Your Journey */}
            <div className="bg-gray-900 rounded-xl p-5 sm:p-6 shadow-sm border border-gray-800">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-4">Your Journey</h2>

              <div className="mb-5 sm:mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-300">Overall Completion</span>
                  <span className="text-sm font-semibold text-white">{progressPercentage}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2.5 sm:h-3">
                  <div
                    className="bg-blue-600 h-full rounded-full transition-all duration-500"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  {daysRemaining} days remaining in your challenge
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🎯</span>
                  <h3 className="font-semibold text-white text-sm sm:text-base">Getting Started</h3>
                </div>
                <ul className="space-y-2.5 text-gray-400 text-sm leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5 flex-shrink-0">•</span>
                    <span>Complete Day {student.currentDay} to earn your next {todayChallenge?.xpReward || 100} XP</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5 flex-shrink-0">•</span>
                    <span>Build your streak by completing challenges daily</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5 flex-shrink-0">•</span>
                    <span>URLs are optional - perfect for hackathon demos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5 flex-shrink-0">•</span>
                    <span>Your progress is saved automatically</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            {/* AI Mentor — hidden on mobile, visible on desktop (mobile uses the coach card above) */}
            <div className="hidden lg:block bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-5 sm:p-6 shadow-sm text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
                  🤖
                </div>
                <div className="min-w-0">
                  <h2 className="text-lg sm:text-xl font-bold truncate">CodeMentor AI</h2>
                  <p className="text-blue-100 text-xs sm:text-sm">Your AI Learning Coach</p>
                </div>
              </div>

              <p className="text-white mb-1 text-sm sm:text-base">{coachGreeting}</p>
              <p className="text-blue-200 text-xs sm:text-sm mb-4">{coachStatus}</p>

              <div className="space-y-3 mb-4">
                {coachTips.map((tip, i) => (
                  <div key={i} className="flex gap-2 items-start">
                    <span className="text-blue-200 text-sm mt-1 flex-shrink-0">💡</span>
                    <p className="text-blue-50 text-sm leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                {quickQuestions.map((qq) => (
                  <button
                    key={qq}
                    onClick={() => askCoach(qq)}
                    className="px-3 py-2 bg-white/15 hover:bg-white/25 text-blue-50 text-xs rounded-full transition-colors min-h-[44px]"
                  >
                    {qq}
                  </button>
                ))}
              </div>

              {messages.length > 0 && (
                <div className="mb-3 max-h-40 overflow-y-auto space-y-2">
                  {messages.map((m, i) => (
                    <div
                      key={i}
                      className={`text-sm leading-relaxed rounded-lg px-3 py-2 ${
                        m.role === 'coach'
                          ? 'bg-white/15 text-blue-50'
                          : 'bg-black/30 text-white'
                      }`}
                    >
                      {m.text}
                    </div>
                  ))}
                </div>
              )}

              <form
                onSubmit={(e) => { e.preventDefault(); askCoach(question); }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 min-w-0 px-3 py-2 bg-black/30 border border-white/20 text-white text-base rounded-lg placeholder-blue-200 outline-none focus:ring-2 focus:ring-white/40 min-h-[44px]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-white text-blue-700 text-sm font-semibold rounded-lg hover:bg-blue-50 transition-colors min-h-[44px]"
                >
                  Ask
                </button>
              </form>
            </div>

            {/* Quick Stats */}
            <div className="bg-gray-900 rounded-xl p-5 sm:p-6 shadow-sm border border-gray-800">
              <h2 className="text-base sm:text-lg font-bold text-white mb-4">Quick Stats</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Joined</span>
                  <span className="font-medium text-white">
                    {new Date(student.joinedDate).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Total XP</span>
                  <span className="font-medium text-white">{student.xp}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Days Completed</span>
                  <span className="font-medium text-white">{student.completedDays.length} / 60</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Current Streak</span>
                  <span className="font-medium text-white">{student.streak} days</span>
                </div>
              </div>
            </div>

            {/* Next Milestones */}
            <div className="bg-gray-900 rounded-xl p-5 sm:p-6 shadow-sm border border-gray-800">
              <h2 className="text-base sm:text-lg font-bold text-white mb-4">Next Milestones</h2>
              <div className="space-y-4">
                <div className={`flex items-start gap-3 ${student.completedDays.length >= 1 ? 'opacity-50' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    student.completedDays.length >= 1 ? 'bg-green-500 text-white' : 'bg-gray-800 text-gray-400'
                  }`}>
                    {student.completedDays.length >= 1 ? '✓' : '1'}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white text-sm">First Step</h3>
                    <p className="text-gray-400 text-xs">Complete Day 1</p>
                  </div>
                </div>
                <div className={`flex items-start gap-3 ${student.completedDays.length < 7 ? 'opacity-50' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    student.completedDays.length >= 7 ? 'bg-green-500 text-white' : 'bg-gray-800 text-gray-400'
                  }`}>
                    {student.completedDays.length >= 7 ? '✓' : '7'}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white text-sm">Week One</h3>
                    <p className="text-gray-400 text-xs">Complete 7 days</p>
                  </div>
                </div>
                <div className={`flex items-start gap-3 ${student.completedDays.length < 30 ? 'opacity-50' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    student.completedDays.length >= 30 ? 'bg-green-500 text-white' : 'bg-gray-800 text-gray-400'
                  }`}>
                    {student.completedDays.length >= 30 ? '✓' : '30'}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white text-sm">Halfway There</h3>
                    <p className="text-gray-400 text-xs">Complete 30 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
