'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getLeaderboardWithCurrentUser, LeaderboardUser } from '@/lib/leaderboard';

interface StudentProgress {
  currentDay: number;
  xp: number;
  streak: number;
  completedDays: number[];
}

export default function LeaderboardPage() {
  const [studentProgress, setStudentProgress] = useState<StudentProgress>({
    currentDay: 1,
    xp: 0,
    streak: 0,
    completedDays: []
  });

  const [leaderboardData, setLeaderboardData] = useState<LeaderboardUser[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'xp' | 'streak' | 'completed'>('xp');
  const [filteredData, setFilteredData] = useState<LeaderboardUser[]>([]);

  useEffect(() => {
    // Load progress from localStorage
    const savedProgress = localStorage.getItem('abtalks_progress');
    if (savedProgress) {
      const progress = JSON.parse(savedProgress);
      setStudentProgress(progress);

      // Get leaderboard with current user
      const data = getLeaderboardWithCurrentUser(
        progress.xp || 0,
        progress.streak || 0,
        progress.completedDays?.length || 0
      );
      setLeaderboardData(data);
      setFilteredData(data);
    } else {
      // Default leaderboard
      const data = getLeaderboardWithCurrentUser(0, 0, 0);
      setLeaderboardData(data);
      setFilteredData(data);
    }
  }, []);

  useEffect(() => {
    // Filter and sort data
    let filtered = [...leaderboardData];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'xp':
          return b.xp - a.xp;
        case 'streak':
          return b.streak - a.streak;
        case 'completed':
          return b.completedDays - a.completedDays;
        default:
          return 0;
      }
    });

    // Update ranks after sorting
    filtered.forEach((user, index) => {
      user.rank = index + 1;
    });

    setFilteredData(filtered);
  }, [searchQuery, sortBy, leaderboardData]);

  const getRankBadge = (rank: number) => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return `#${rank}`;
  };

  const getRankColor = (rank: number) => {
    if (rank === 1) return 'text-yellow-400';
    if (rank === 2) return 'text-gray-300';
    if (rank === 3) return 'text-orange-400';
    return 'text-gray-400';
  };

  const getProgressColor = (completed: number) => {
    const percentage = (completed / 60) * 100;
    if (percentage >= 80) return 'bg-green-500';
    if (percentage >= 50) return 'bg-blue-500';
    if (percentage >= 25) return 'bg-yellow-500';
    return 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-blue-500">
              ABTalks
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/dashboard" className="text-gray-400 hover:text-white transition-colors">
                Dashboard
              </Link>
              <Link href="/leaderboard" className="text-white font-medium">
                Leaderboard
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">🏆 Leaderboard</h1>
          <p className="text-gray-400">See how you rank against other students in the challenge</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium opacity-90">Your Rank</span>
              <span className="text-3xl">🏅</span>
            </div>
            <div className="text-4xl font-bold mb-1">
              #{leaderboardData.find(u => u.isCurrentUser)?.rank || '-'}
            </div>
            <div className="text-sm opacity-90">out of 1,247 students</div>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium opacity-90">Your XP</span>
              <span className="text-3xl">⭐</span>
            </div>
            <div className="text-4xl font-bold mb-1">{studentProgress.xp}</div>
            <div className="text-sm opacity-90">experience points</div>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium opacity-90">Your Streak</span>
              <span className="text-3xl">🔥</span>
            </div>
            <div className="text-4xl font-bold mb-1">{studentProgress.streak}</div>
            <div className="text-sm opacity-90">days in a row</div>
          </div>
        </div>

        {/* Search and Sort */}
        <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <label htmlFor="search" className="block text-sm font-medium text-gray-300 mb-2">
                Search Students
              </label>
              <input
                type="text"
                id="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name..."
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-gray-500"
              />
            </div>

            {/* Sort */}
            <div className="md:w-64">
              <label htmlFor="sort" className="block text-sm font-medium text-gray-300 mb-2">
                Sort By
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'xp' | 'streak' | 'completed')}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all cursor-pointer"
              >
                <option value="xp">XP (Highest)</option>
                <option value="streak">Streak (Longest)</option>
                <option value="completed">Days Completed (Most)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Leaderboard Table */}
        <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
          {/* Table Header - Desktop */}
          <div className="hidden md:grid md:grid-cols-12 gap-4 px-6 py-4 bg-gray-800 border-b border-gray-700 font-semibold text-gray-300 text-sm">
            <div className="col-span-1">Rank</div>
            <div className="col-span-4">Student</div>
            <div className="col-span-2 text-center">XP</div>
            <div className="col-span-2 text-center">Streak</div>
            <div className="col-span-3 text-center">Progress</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-800">
            {filteredData.length === 0 ? (
              <div className="px-6 py-12 text-center text-gray-400">
                <div className="text-4xl mb-4">🔍</div>
                <p>No students found matching your search.</p>
              </div>
            ) : (
              filteredData.map((user, index) => (
                <div
                  key={user.id}
                  className={`
                    grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-4 items-center
                    transition-all duration-200
                    ${user.isCurrentUser
                      ? 'bg-blue-500/10 border-l-4 border-blue-500 hover:bg-blue-500/20'
                      : 'hover:bg-gray-800'
                    }
                  `}
                >
                  {/* Rank */}
                  <div className="md:col-span-1 flex md:block items-center gap-3 md:gap-0">
                    <span className="md:hidden text-gray-400 text-sm">Rank:</span>
                    <div className={`text-2xl md:text-3xl font-bold ${getRankColor(user.rank)}`}>
                      {getRankBadge(user.rank)}
                    </div>
                  </div>

                  {/* Student Info */}
                  <div className="md:col-span-4 flex items-center gap-4">
                    <div className={`
                      w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0
                      ${user.isCurrentUser ? 'bg-blue-600' : 'bg-gray-700'}
                    `}>
                      {user.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white flex items-center gap-2">
                        {user.name}
                        {user.isCurrentUser && (
                          <span className="px-2 py-0.5 bg-blue-500 text-white text-xs rounded-full">
                            You
                          </span>
                        )}
                      </div>
                      {user.rank <= 3 && !user.isCurrentUser && (
                        <div className="text-xs text-gray-400 mt-0.5">Top Performer</div>
                      )}
                    </div>
                  </div>

                  {/* XP */}
                  <div className="md:col-span-2 flex md:block items-center gap-3 md:gap-0">
                    <span className="md:hidden text-gray-400 text-sm">XP:</span>
                    <div className="md:text-center">
                      <div className="text-white font-bold text-lg">{user.xp.toLocaleString()}</div>
                      <div className="text-gray-400 text-xs md:mt-1">points</div>
                    </div>
                  </div>

                  {/* Streak */}
                  <div className="md:col-span-2 flex md:block items-center gap-3 md:gap-0">
                    <span className="md:hidden text-gray-400 text-sm">Streak:</span>
                    <div className="md:text-center">
                      <div className="flex items-center md:justify-center gap-2">
                        <span className="text-white font-bold text-lg">{user.streak}</span>
                        <span className="text-orange-500">🔥</span>
                      </div>
                      <div className="text-gray-400 text-xs md:mt-1">days</div>
                    </div>
                  </div>

                  {/* Progress */}
                  <div className="md:col-span-3">
                    <div className="mb-2 md:text-center">
                      <span className="text-white font-medium">{user.completedDays}</span>
                      <span className="text-gray-400 text-sm"> / 60 days</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(user.completedDays)}`}
                        style={{ width: `${(user.completedDays / 60) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* How Rankings Work */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span>ℹ️</span> How Rankings Work
            </h2>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Rankings are based on total XP earned</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Each completed challenge awards 100 XP</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Streaks show consecutive days of completion</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Top 3 students receive special badges</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Leaderboard updates in real-time</span>
              </li>
            </ul>
          </div>

          {/* Motivation */}
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl p-6 text-white">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span>💪</span> Keep Pushing!
            </h2>
            <div className="space-y-3 text-sm">
              <p className="opacity-90">
                Remember, the leaderboard is just for motivation. Your real progress is measured by the skills you gain and projects you build.
              </p>
              <p className="opacity-90">
                Focus on consistency over competition. Complete your daily challenges and watch your rank improve naturally!
              </p>
              <Link
                href="/dashboard"
                className="inline-block mt-4 px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg font-medium transition-colors"
              >
                Continue Your Challenge →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
