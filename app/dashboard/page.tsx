'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getTodayChallenge, getProgressPercentage, aiMentor } from '@/lib/data';

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

  return (
    <div className="min-h-screen bg-black">
      <nav className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-blue-500">
              ABTalks
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/dashboard" className="text-white font-medium">
                Dashboard
              </Link>
              <Link href="/leaderboard" className="text-gray-400 hover:text-white transition-colors">
                Leaderboard
              </Link>
              <div className="flex items-center gap-3 ml-4">
                <span className="text-gray-400 text-sm">Guest</span>
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-gray-400 font-semibold">
                  ?
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Welcome to ABTalks</h1>
          <p className="text-gray-400 mt-1">Start your 60-day journey to becoming a confident developer</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm font-medium">Current Day</span>
              <span className="text-2xl">📅</span>
            </div>
            <div className="text-3xl font-bold text-white">{student.currentDay}</div>
            <div className="text-sm text-gray-500 mt-1">of 60 days</div>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm font-medium">XP</span>
              <span className="text-2xl">⭐</span>
            </div>
            <div className="text-3xl font-bold text-white">{student.xp}</div>
            <div className="text-sm text-gray-500 mt-1">experience points</div>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm font-medium">Streak</span>
              <span className="text-2xl">🔥</span>
            </div>
            <div className="text-3xl font-bold text-white">{student.streak}</div>
            <div className="text-sm text-gray-500 mt-1">days in a row</div>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm font-medium">Progress</span>
              <span className="text-2xl">📊</span>
            </div>
            <div className="text-3xl font-bold text-white">{progressPercentage}%</div>
            <div className="text-sm text-gray-500 mt-1">completed</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gray-900 rounded-xl p-8 shadow-sm border border-gray-800">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Today's Challenge</h2>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  todayChallenge?.difficulty === 'beginner' ? 'bg-green-500/20 text-green-400' :
                  todayChallenge?.difficulty === 'intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  {todayChallenge?.difficulty}
                </span>
              </div>

              {todayChallenge ? (
                <>
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    Day {todayChallenge.day}: {todayChallenge.title}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {todayChallenge.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {todayChallenge.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/day/${todayChallenge.day}`}
                    className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg"
                  >
                    Start Today's Challenge →
                  </Link>
                </>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-400">No challenge available for today</p>
                </div>
              )}
            </div>

            <div className="bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-800">
              <h2 className="text-xl font-bold text-white mb-4">Your Journey</h2>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-300">Overall Completion</span>
                  <span className="text-sm font-semibold text-white">{progressPercentage}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full transition-all duration-500"
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
                  <h3 className="font-semibold text-white">Getting Started</h3>
                </div>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">•</span>
                    <span>Complete Day {student.currentDay} to earn your next {todayChallenge?.xpReward || 100} XP</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">•</span>
                    <span>Build your streak by completing challenges daily</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">•</span>
                    <span>URLs are optional - perfect for hackathon demos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">•</span>
                    <span>Your progress is saved automatically</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 shadow-sm text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                  🤖
                </div>
                <div>
                  <h2 className="text-xl font-bold">{aiMentor.name}</h2>
                  <p className="text-blue-100 text-sm">Your AI Guide</p>
                </div>
              </div>

              <p className="text-white mb-4">{aiMentor.greeting}</p>

              <div className="space-y-3">
                {aiMentor.tips.map((tip, i) => (
                  <div key={i} className="flex gap-2 items-start">
                    <span className="text-blue-200 text-sm mt-1">💡</span>
                    <p className="text-blue-50 text-sm">{tip}</p>
                  </div>
                ))}
              </div>

              <button className="mt-6 w-full px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg font-medium transition-colors text-sm">
                Ask Mentor a Question
              </button>
            </div>

            <div className="bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-800">
              <h2 className="text-lg font-bold text-white mb-4">Quick Stats</h2>
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

            <div className="bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-800">
              <h2 className="text-lg font-bold text-white mb-4">Next Milestones</h2>
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
