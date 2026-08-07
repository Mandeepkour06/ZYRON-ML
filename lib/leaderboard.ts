export interface LeaderboardUser {
  id: string;
  name: string;
  avatar: string;
  xp: number;
  streak: number;
  completedDays: number;
  rank: number;
  isCurrentUser?: boolean;
}

export const mockLeaderboardData: LeaderboardUser[] = [
  {
    id: "1",
    name: "Sarah Chen",
    avatar: "👩‍💻",
    xp: 5800,
    streak: 58,
    completedDays: 58,
    rank: 1
  },
  {
    id: "2",
    name: "Alex Kumar",
    avatar: "👨‍💼",
    xp: 5600,
    streak: 56,
    completedDays: 56,
    rank: 2
  },
  {
    id: "3",
    name: "Emma Rodriguez",
    avatar: "👩‍🔬",
    xp: 5400,
    streak: 54,
    completedDays: 54,
    rank: 3
  },
  {
    id: "4",
    name: "Michael Zhang",
    avatar: "👨‍🎨",
    xp: 5200,
    streak: 52,
    completedDays: 52,
    rank: 4
  },
  {
    id: "5",
    name: "Priya Patel",
    avatar: "👩‍🚀",
    xp: 5000,
    streak: 50,
    completedDays: 50,
    rank: 5
  },
  {
    id: "6",
    name: "David Kim",
    avatar: "👨‍🔧",
    xp: 4800,
    streak: 48,
    completedDays: 48,
    rank: 6
  },
  {
    id: "7",
    name: "Lisa Wang",
    avatar: "👩‍⚕️",
    xp: 4600,
    streak: 46,
    completedDays: 46,
    rank: 7
  },
  {
    id: "8",
    name: "James Wilson",
    avatar: "👨‍🏫",
    xp: 4400,
    streak: 44,
    completedDays: 44,
    rank: 8
  },
  {
    id: "9",
    name: "Sophia Martinez",
    avatar: "👩‍🎤",
    xp: 4200,
    streak: 42,
    completedDays: 42,
    rank: 9
  },
  {
    id: "10",
    name: "Ryan Anderson",
    avatar: "👨‍🚒",
    xp: 4000,
    streak: 40,
    completedDays: 40,
    rank: 10
  },
  {
    id: "current",
    name: "You",
    avatar: "?",
    xp: 0,
    streak: 0,
    completedDays: 0,
    rank: 1247,
    isCurrentUser: true
  }
];

export const getLeaderboardWithCurrentUser = (currentUserXP: number, currentUserStreak: number, currentUserCompleted: number): LeaderboardUser[] => {
  const leaderboard = [...mockLeaderboardData.filter(u => !u.isCurrentUser)];

  // Update current user data
  const currentUser: LeaderboardUser = {
    id: "current",
    name: "You",
    avatar: "?",
    xp: currentUserXP,
    streak: currentUserStreak,
    completedDays: currentUserCompleted,
    rank: leaderboard.filter(u => u.xp > currentUserXP).length + 1,
    isCurrentUser: true
  };

  // Insert current user in correct position if in top 10
  if (currentUser.rank <= 10) {
    leaderboard.splice(currentUser.rank - 1, 0, currentUser);
    leaderboard.forEach((user, index) => {
      user.rank = index + 1;
    });
    return leaderboard.slice(0, 10);
  }

  return [...leaderboard, currentUser];
};
