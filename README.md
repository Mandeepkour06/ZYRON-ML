# ABTalks 60-Day Challenge

## Live Demo
https://abtalks-blond.vercel.app

## 🎥 Project Presentation
📊 [View ABTalks Presentation]
https://github.com/Mandeepkour06/ZYRON-ML/blob/
main/presentation/ABTalks-Presentation.pptx

▶️ [Watch ABTalks Presentation]
https://github.com/Mandeepkour06/ZYRON-ML/blob/
main/presentation/ABTalks-Presentation-video.mp4

## Tech Stack
- Next.js
- React
- TypeScript
- Tailwind CSS
- Vercel

---

A modern, interactive platform for developers to complete a 60-day coding challenge. Built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **60 Complete Challenges** - From beginner to advanced projects
- **Real-time Progress Tracking** - XP, streaks, and completion stats
- **Interactive Dashboard** - Visual progress indicators and daily challenges
- **Leaderboard System** - Compete with other developers
- **LocalStorage Persistence** - Progress saved automatically
- **Responsive Design** - Works on all devices
- **Dark Theme** - Professional UI with smooth animations

## 📋 Pages

- **Landing Page** (`/`) - Introduction and sign-up
- **Dashboard** (`/dashboard`) - Main hub with current challenge
- **Challenge Pages** (`/day/[id]`) - Detailed daily challenges (1-60)
- **Leaderboard** (`/leaderboard`) - Rankings and stats

## 🛠️ Tech Stack

- **Framework:** Next.js 16.3.0 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** React Hooks + LocalStorage
- **Deployment:** Vercel-ready

## 🏃 Getting Started

First, install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

Build for production:

```bash
npm run build
npm start
```

## 📂 Project Structure

```
abtalks/
├── app/
│   ├── page.tsx              # Landing page
│   ├── dashboard/            # Dashboard page
│   ├── day/[id]/            # Dynamic challenge pages
│   └── leaderboard/         # Leaderboard page
├── lib/
│   ├── data.ts              # Challenge data (60 days)
│   └── leaderboard.ts       # Leaderboard mock data
├── public/                   # Static assets
└── package.json             # Dependencies
```

## 🎮 How It Works

1. **Start Challenge** - Visit dashboard and begin Day 1
2. **Complete Tasks** - Follow step-by-step instructions
3. **Submit Work** - Optional GitHub/Live URLs (demo mode available)
4. **Earn XP** - 100 XP per completed challenge
5. **Track Progress** - See your rank on the leaderboard

## 🏆 Challenge Categories

- **Days 1-20:** Beginner (HTML, CSS, JavaScript fundamentals)
- **Days 21-45:** Intermediate (React, APIs, State Management)
- **Days 46-60:** Advanced (Full-stack, Complex Architectures)

## 📊 Features in Detail

### Dashboard
- Current day challenge preview
- XP and streak tracking
- Progress visualization
- AI Mentor guidance

### Challenge Pages
- Complete project description
- Step-by-step instructions with code samples
- Interactive requirements checklist
- Curated learning resources
- Optional submission (hackathon demo mode)

### Leaderboard
- Top 10 students ranking
- Search and sort functionality
- Real-time rank calculation
- Progress comparison

## 🎨 Design System

- **Colors:** Dark theme (Black, Gray-900, Blue-500 accents)
- **Typography:** System fonts with careful hierarchy
- **Spacing:** Consistent padding and margins
- **Components:** Reusable, accessible UI elements

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: 768px (tablet), 1024px (desktop)
- Touch-friendly interactions
- Optimized layouts for all screen sizes

## 🔒 Data Persistence

Progress is saved to browser localStorage:
- Current day
- Total XP
- Streak count
- Completed challenges
- Submission history

## 🚀 Deployment

Deploy to Vercel:

```bash
vercel
```

Or use the [Vercel Platform](https://vercel.com/new) - one-click deployment from GitHub.

## 📝 License

This project is open source and available under the MIT License.

## 👥 Credits

Built for the ABTalks 60-day developer challenge initiative.

---

**Last Updated:** August 7, 2026  
**Version:** 1.0.0  
**Status:** Production Ready 🎉
