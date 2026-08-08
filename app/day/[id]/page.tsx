'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { challenges } from '@/lib/data';

interface StudentProgress {
  currentDay: number;
  xp: number;
  streak: number;
  completedDays: number[];
  submissions: { [key: number]: { githubUrl?: string; liveUrl?: string; completedAt: string } };
}

export default function ChallengeDayPage() {
  const params = useParams();
  const router = useRouter();
  const dayId = parseInt(params.id as string);

  const challenge = challenges.find(c => c.day === dayId);

  const [studentProgress, setStudentProgress] = useState<StudentProgress>({
    currentDay: 1,
    xp: 0,
    streak: 0,
    completedDays: [],
    submissions: {}
  });

  const [githubUrl, setGithubUrl] = useState('');
  const [liveUrl, setLiveUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showXPAnimation, setShowXPAnimation] = useState(false);
  const [checkedRequirements, setCheckedRequirements] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    // Load progress from localStorage
    const savedProgress = localStorage.getItem('abtalks_progress');
    if (savedProgress) {
      const progress = JSON.parse(savedProgress);
      setStudentProgress(progress);

      // Load submission data if exists
      if (progress.submissions[dayId]) {
        setGithubUrl(progress.submissions[dayId].githubUrl || '');
        setLiveUrl(progress.submissions[dayId].liveUrl || '');
      }
    }

    if (challenge) {
      const initialChecked: { [key: string]: boolean } = {};
      challenge.requirements.forEach(req => {
        initialChecked[req.id] = req.completed;
      });
      setCheckedRequirements(initialChecked);
    }
  }, [challenge, dayId]);

  const saveProgress = (progress: StudentProgress) => {
    localStorage.setItem('abtalks_progress', JSON.stringify(progress));
    setStudentProgress(progress);
  };

  const isCompleted = studentProgress.completedDays.includes(dayId);
  const isLocked = dayId > studentProgress.currentDay && dayId !== 12;

  if (!challenge) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl sm:text-4xl font-bold text-white mb-4">Challenge Not Found</h1>
          <p className="text-gray-400 mb-6">This challenge doesn't exist yet.</p>
          <Link href="/dashboard" className="text-blue-500 hover:text-blue-400 font-medium inline-block py-3">
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  if (isLocked) {
    return (
      <div className="min-h-screen bg-black overflow-x-hidden">
        <nav className="bg-gray-900 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-14 sm:h-16">
              <Link href="/" className="text-xl sm:text-2xl font-bold text-blue-500">
                ABTalks
              </Link>
              <Link href="/dashboard" className="text-gray-400 hover:text-white text-sm">
                Dashboard
              </Link>
            </div>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
          <div className="text-5xl sm:text-6xl mb-6">🔒</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">Challenge Locked</h1>
          <p className="text-gray-400 mb-8">
            Complete Day {studentProgress.currentDay} to unlock this challenge.
          </p>
          <Link
            href="/dashboard"
            className="inline-block px-6 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors min-h-[52px]"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const handleRequirementToggle = (reqId: string) => {
    setCheckedRequirements(prev => ({
      ...prev,
      [reqId]: !prev[reqId]
    }));
  };

  const validateUrl = (url: string): boolean => {
    if (!url) return true; // Empty is valid (optional)
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const completeChallenge = (githubUrl: string, liveUrl: string, isDemoMode: boolean) => {
    // Update progress
    const newCompletedDays = [...new Set([...studentProgress.completedDays, dayId])];
    const newXP = studentProgress.xp + challenge.xpReward;
    const newCurrentDay = Math.max(studentProgress.currentDay, dayId + 1);

    // Calculate streak (simplified for demo)
    const newStreak = studentProgress.streak + 1;

    const newProgress: StudentProgress = {
      ...studentProgress,
      currentDay: newCurrentDay,
      xp: newXP,
      streak: newStreak,
      completedDays: newCompletedDays,
      submissions: {
        ...studentProgress.submissions,
        [dayId]: {
          githubUrl: githubUrl || undefined,
          liveUrl: liveUrl || undefined,
          completedAt: new Date().toISOString()
        }
      }
    };

    saveProgress(newProgress);

    // Show toast
    if (isDemoMode) {
      setToastMessage('Challenge completed in demo mode! 🎉');
    } else {
      setToastMessage('Project submitted successfully! 🚀');
    }
    setShowToast(true);

    // Show XP animation
    setShowXPAnimation(true);

    setTimeout(() => {
      setShowXPAnimation(false);
    }, 3000);

    setTimeout(() => {
      setShowToast(false);
      router.push('/dashboard');
    }, 4000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate URLs if provided
    if (githubUrl && !validateUrl(githubUrl)) {
      setToastMessage('Invalid GitHub URL. Please check and try again.');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      return;
    }

    if (liveUrl && !validateUrl(liveUrl)) {
      setToastMessage('Invalid Live Demo URL. Please check and try again.');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const isDemoMode = !githubUrl && !liveUrl;
      completeChallenge(githubUrl, liveUrl, isDemoMode);
    }, 1000);
  };

  const handleMarkComplete = () => {
    const isDemoMode = !githubUrl && !liveUrl;
    completeChallenge(githubUrl, liveUrl, isDemoMode);
  };

  const allRequirementsChecked = challenge.requirements.every(req => checkedRequirements[req.id]);

  const getDifficultyColor = () => {
    switch (challenge.difficulty) {
      case 'beginner': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'intermediate': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'advanced': return 'bg-red-500/20 text-red-400 border-red-500/30';
    }
  };

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'documentation': return '📚';
      case 'tutorial': return '📝';
      case 'video': return '🎥';
      case 'tool': return '🛠️';
      default: return '🔗';
    }
  };

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-auto max-w-md z-50">
          <div className="bg-gray-900 border border-blue-500 rounded-lg p-4 shadow-lg animate-fade-in">
            <p className="text-white text-sm sm:text-base">{toastMessage}</p>
          </div>
        </div>
      )}

      {/* XP Animation */}
      {showXPAnimation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
          <div className="text-center animate-bounce">
            <div className="text-6xl sm:text-8xl mb-4">🎉</div>
            <div className="text-4xl sm:text-6xl font-bold text-yellow-400 mb-2">+{challenge.xpReward} XP</div>
            <div className="text-xl sm:text-2xl text-white">Challenge Complete!</div>
          </div>
        </div>
      )}

      <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <Link href="/" className="text-xl sm:text-2xl font-bold text-blue-500">
              ABTalks
            </Link>
            <Link href="/dashboard" className="text-gray-400 hover:text-white font-medium text-sm inline-flex items-center gap-1">
              <span className="hidden sm:inline">←</span>
              <span>Dashboard</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-6">
          <Link href="/dashboard" className="text-gray-400 hover:text-white text-sm font-medium">
            Dashboard
          </Link>
          <span className="text-gray-600 text-sm">/</span>
          <span className="text-white text-sm font-medium">Day {challenge.day}</span>
        </div>

        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-3 sm:mb-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Day {challenge.day}: {challenge.title}
            </h1>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3 mb-4">
            <span className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium border ${getDifficultyColor()}`}>
              {challenge.difficulty.charAt(0).toUpperCase() + challenge.difficulty.slice(1)}
            </span>
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-500/20 text-blue-400 rounded-lg text-xs sm:text-sm font-medium border border-blue-500/30 inline-flex items-center">
              ⏱️ {challenge.estimatedTime}
            </span>
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-yellow-500/20 text-yellow-400 rounded-lg text-xs sm:text-sm font-medium border border-yellow-500/30 inline-flex items-center">
              ⭐ {challenge.xpReward} XP
            </span>
            {isCompleted && (
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-green-500 text-white rounded-lg text-xs sm:text-sm font-medium">
                ✓ Completed
              </span>
            )}
          </div>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-5 sm:mb-6">{challenge.description}</p>

          <div className="flex flex-wrap gap-2">
            {challenge.tags.map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs sm:text-sm border border-gray-700">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 lg:self-start space-y-4 sm:space-y-6">
            {/* Skills Section */}
            <div className="bg-gray-900 rounded-xl p-5 sm:p-6 border border-gray-800">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <span>🎯</span> Skills You'll Learn
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3">
                {challenge.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-300 text-sm sm:text-base py-1">
                    <span className="text-blue-500 flex-shrink-0">•</span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-gray-900 rounded-xl p-5 sm:p-6 border border-gray-800">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-5 sm:mb-6 flex items-center gap-2">
                <span>📋</span> Step-by-Step Instructions
              </h2>
              <div className="space-y-5 sm:space-y-6">
                {challenge.instructions.map((instruction) => (
                  <div key={instruction.step} className="border-l-4 border-blue-500 pl-4 sm:pl-6">
                    <div className="flex items-start gap-3 mb-2">
                      <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xs sm:text-sm">
                        {instruction.step}
                      </span>
                      <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white mt-1 leading-snug">{instruction.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-3 text-sm sm:text-base leading-relaxed">{instruction.description}</p>
                    {instruction.code && (
                      <pre className="bg-black border border-gray-700 rounded-lg p-3 sm:p-4 overflow-x-auto">
                        <code className="text-green-400 text-xs sm:text-sm font-mono whitespace-pre">{instruction.code}</code>
                      </pre>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements Checklist */}
            <div className="bg-gray-900 rounded-xl p-5 sm:p-6 border border-gray-800">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span>✅</span> Requirements Checklist
              </h2>
              <div className="space-y-2.5 sm:space-y-3">
                {challenge.requirements.map((req) => (
                  <label
                    key={req.id}
                    className="flex items-start gap-3 p-3 sm:p-3.5 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-750 transition-colors active:bg-gray-700"
                  >
                    <input
                      type="checkbox"
                      checked={checkedRequirements[req.id] || false}
                      onChange={() => handleRequirementToggle(req.id)}
                      className="mt-0.5 w-5 h-5 sm:w-5 sm:h-5 rounded border-gray-600 text-blue-600 focus:ring-blue-500 focus:ring-offset-gray-900 flex-shrink-0"
                    />
                    <span className={`flex-1 text-sm sm:text-base leading-relaxed ${checkedRequirements[req.id] ? 'line-through text-gray-500' : 'text-gray-300'}`}>
                      {req.text}
                    </span>
                  </label>
                ))}
              </div>
              {allRequirementsChecked && (
                <div className="mt-4 p-3 bg-green-500/20 border border-green-500 rounded-lg text-center">
                  <span className="text-green-400 font-medium text-sm sm:text-base">🎉 All requirements checked! Ready to complete.</span>
                </div>
              )}
            </div>

            {/* Submit Project */}
            {!isCompleted && (
              <div className="bg-gray-900 rounded-xl p-5 sm:p-6 border border-gray-800">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <span>🚀</span> Complete Challenge
                </h2>

                <div className="mb-5 sm:mb-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <p className="text-blue-300 text-sm leading-relaxed">
                    <strong>Hackathon Demo Mode:</strong> URLs are optional. You can complete challenges without submitting links.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <div>
                    <label htmlFor="github" className="block text-sm font-medium text-gray-300 mb-2">
                      GitHub Repository URL <span className="text-gray-500">(Optional)</span>
                    </label>
                    <input
                      type="url"
                      id="github"
                      value={githubUrl}
                      onChange={(e) => setGithubUrl(e.target.value)}
                      placeholder="https://github.com/yourusername/project-name"
                      className="w-full px-4 py-3 sm:py-3.5 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-gray-500 text-sm sm:text-base min-h-[48px]"
                    />
                  </div>

                  <div>
                    <label htmlFor="live" className="block text-sm font-medium text-gray-300 mb-2">
                      Live Demo URL <span className="text-gray-500">(Optional)</span>
                    </label>
                    <input
                      type="url"
                      id="live"
                      value={liveUrl}
                      onChange={(e) => setLiveUrl(e.target.value)}
                      placeholder="https://your-project.vercel.app"
                      className="w-full px-4 py-3 sm:py-3.5 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-gray-500 text-sm sm:text-base min-h-[48px]"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    {(githubUrl || liveUrl) && (
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 px-6 py-4 bg-blue-600 text-white rounded-lg font-semibold text-base sm:text-lg hover:bg-blue-700 transition-colors disabled:bg-gray-700 disabled:cursor-not-allowed active:scale-[0.98] min-h-[52px]"
                      >
                        {isSubmitting ? 'Submitting...' : '🚀 Submit Project'}
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={handleMarkComplete}
                      className="flex-1 px-6 py-4 bg-green-600 text-white rounded-lg font-semibold text-base sm:text-lg hover:bg-green-700 transition-colors active:scale-[0.98] min-h-[52px]"
                    >
                      ✓ Mark as Completed
                    </button>
                  </div>
                </form>
              </div>
            )}

            {isCompleted && (
              <div className="bg-green-500/20 border border-green-500 rounded-xl p-6 sm:p-8 text-center">
                <div className="text-5xl sm:text-6xl mb-4">✅</div>
                <h3 className="text-xl sm:text-2xl font-bold text-green-400 mb-2">Challenge Completed!</h3>
                <p className="text-green-300 mb-6 text-sm sm:text-base">
                  You've already completed this challenge. Keep up the great work!
                </p>
                {studentProgress.submissions[dayId] && (
                  <div className="text-left max-w-md mx-auto mb-6 space-y-1">
                    <p className="text-gray-400 text-sm">Completed: {new Date(studentProgress.submissions[dayId].completedAt).toLocaleString()}</p>
                    {studentProgress.submissions[dayId].githubUrl && (
                      <p className="text-gray-400 text-sm break-all">GitHub: {studentProgress.submissions[dayId].githubUrl}</p>
                    )}
                    {studentProgress.submissions[dayId].liveUrl && (
                      <p className="text-gray-400 text-sm break-all">Live: {studentProgress.submissions[dayId].liveUrl}</p>
                    )}
                  </div>
                )}
                <Link
                  href="/dashboard"
                  className="inline-block w-full sm:w-auto px-6 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors min-h-[52px]"
                >
                  Back to Dashboard
                </Link>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            {/* Resources */}
            <div className="bg-gray-900 rounded-xl p-5 sm:p-6 border border-gray-800">
              <h2 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span>📚</span> Resources
              </h2>
              <div className="space-y-2.5 sm:space-y-3">
                {challenge.resources.map((resource, i) => (
                  <a
                    key={i}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors border border-gray-700 hover:border-blue-500 active:bg-gray-700"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-xl sm:text-2xl flex-shrink-0">{getResourceIcon(resource.type)}</span>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-white text-sm mb-1 leading-snug">{resource.title}</h3>
                        <p className="text-xs text-gray-400 capitalize">{resource.type}</p>
                      </div>
                      <span className="text-gray-500 flex-shrink-0">→</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Challenge Info */}
            <div className="bg-gray-900 rounded-xl p-5 sm:p-6 border border-gray-800">
              <h2 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-4">Challenge Info</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Difficulty</span>
                  <span className="font-medium text-white capitalize">{challenge.difficulty}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Estimated Time</span>
                  <span className="font-medium text-white">{challenge.estimatedTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">XP Reward</span>
                  <span className="font-medium text-yellow-400">{challenge.xpReward} XP</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Requirements</span>
                  <span className="font-medium text-white">{challenge.requirements.length}</span>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-5 sm:p-6 text-white">
              <h2 className="text-base sm:text-lg lg:text-xl font-bold mb-4 flex items-center gap-2">
                <span>💡</span> Pro Tips
              </h2>
              <ul className="space-y-3 text-sm leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-blue-200 flex-shrink-0">•</span>
                  <span>Read all instructions before starting</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-200 flex-shrink-0">•</span>
                  <span>Commit your code frequently</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-200 flex-shrink-0">•</span>
                  <span>Test on multiple devices</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-200 flex-shrink-0">•</span>
                  <span>URLs are optional in demo mode</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 sm:mt-12 flex justify-between items-center border-t border-gray-800 pt-6 sm:pt-8 gap-3">
          {dayId > 1 ? (
            <Link
              href={`/day/${dayId - 1}`}
              className="flex items-center gap-1 sm:gap-2 text-gray-400 hover:text-white font-medium transition-colors py-3 px-2 sm:px-0 min-h-[44px] text-sm sm:text-base"
            >
              <span>←</span>
              <span>Day {dayId - 1}</span>
            </Link>
          ) : (
            <div></div>
          )}
          {dayId < 60 && (
            <Link
              href={`/day/${dayId + 1}`}
              className="flex items-center gap-1 sm:gap-2 text-gray-400 hover:text-white font-medium transition-colors py-3 px-2 sm:px-0 min-h-[44px] text-sm sm:text-base"
            >
              <span>Day {dayId + 1}</span>
              <span>→</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
