import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0F1C] overflow-x-hidden">
      {/* Navigation */}
      <nav className="border-b border-[#1F2937] bg-[#0A0F1C]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="text-xl sm:text-2xl font-bold text-[#3B82F6]">ABTalks</div>
            <Link
              href="/dashboard"
              className="px-4 py-2 text-sm font-medium text-[#3B82F6] hover:text-[#60A5FA] border border-[#3B82F6] rounded-lg hover:bg-[#3B82F6]/10 transition-colors min-h-[44px] flex items-center"
            >
              Sign In
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 text-center">
        <div className="space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#3B82F6]/10 text-[#60A5FA] rounded-full text-xs sm:text-sm font-medium border border-[#3B82F6]/20">
            <span className="w-2 h-2 bg-[#3B82F6] rounded-full animate-pulse"></span>
            Transform Your Career in 60 Days
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#F9FAFB] leading-[1.1] tracking-tight">
            Build Real Projects.<br />
            <span className="text-[#3B82F6]">Ship Every Day.</span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-xl text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed">
            Join thousands of students who went from beginners to confident developers
            by building 60 real-world projects in 60 days.
          </p>

          <div className="pt-2 sm:pt-4">
            <Link
              href="/dashboard"
              className="inline-flex w-full sm:w-auto px-8 py-4 bg-[#3B82F6] text-white rounded-lg font-semibold text-base sm:text-lg hover:bg-[#2563EB] transition-all shadow-lg shadow-[#3B82F6]/25 hover:shadow-xl hover:shadow-[#3B82F6]/30 active:scale-[0.98] min-h-[52px] items-center justify-center"
            >
              Start Your Challenge
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div className="bg-[#111827] rounded-xl p-6 sm:p-8 text-center border border-[#1F2937]">
            <div className="text-2xl mb-3">👥</div>
            <div className="text-3xl sm:text-4xl font-bold text-[#3B82F6]">15,000+</div>
            <div className="text-[#9CA3AF] mt-2 text-sm">Active Students</div>
          </div>
          <div className="bg-[#111827] rounded-xl p-6 sm:p-8 text-center border border-[#1F2937]">
            <div className="text-2xl mb-3">🚀</div>
            <div className="text-3xl sm:text-4xl font-bold text-[#3B82F6]">900,000+</div>
            <div className="text-[#9CA3AF] mt-2 text-sm">Projects Built</div>
          </div>
          <div className="bg-[#111827] rounded-xl p-6 sm:p-8 text-center border border-[#1F2937]">
            <div className="text-2xl mb-3">🎯</div>
            <div className="text-3xl sm:text-4xl font-bold text-[#3B82F6]">87%</div>
            <div className="text-[#9CA3AF] mt-2 text-sm">Complete the Challenge</div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 sm:mb-14 lg:mb-16 text-[#F9FAFB]">How It Works</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-[#3B82F6] rounded-2xl flex items-center justify-center mx-auto text-2xl shadow-lg shadow-[#3B82F6]/20">
              📝
            </div>
            <div className="text-[#3B82F6] font-semibold text-sm">Step 1</div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#F9FAFB]">Daily Challenge</h3>
            <p className="text-[#9CA3AF] text-sm sm:text-base leading-relaxed">
              Get a new real-world project every day. Each challenge builds on the previous one.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-[#3B82F6] rounded-2xl flex items-center justify-center mx-auto text-2xl shadow-lg shadow-[#3B82F6]/20">
              💻
            </div>
            <div className="text-[#3B82F6] font-semibold text-sm">Step 2</div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#F9FAFB]">Build & Submit</h3>
            <p className="text-[#9CA3AF] text-sm sm:text-base leading-relaxed">
              Code your solution, push to GitHub, and share your progress on LinkedIn.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-[#3B82F6] rounded-2xl flex items-center justify-center mx-auto text-2xl shadow-lg shadow-[#3B82F6]/20">
              🏆
            </div>
            <div className="text-[#3B82F6] font-semibold text-sm">Step 3</div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#F9FAFB]">Level Up</h3>
            <p className="text-[#9CA3AF] text-sm sm:text-base leading-relaxed">
              Track your streak, earn achievements, and build a portfolio that gets you hired.
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Build */}
      <section className="bg-[#111827] py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 sm:mb-14 lg:mb-16 text-[#F9FAFB]">What You'll Build</h2>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {[
              { title: "Portfolio Websites", icon: "🌐" },
              { title: "REST APIs", icon: "🔌" },
              { title: "Mobile Apps", icon: "📱" },
              { title: "Chrome Extensions", icon: "🧩" },
              { title: "AI Applications", icon: "🤖" },
              { title: "Full-Stack Projects", icon: "⚡" }
            ].map((item, i) => (
              <div key={i} className="bg-[#1F2937] rounded-lg p-4 sm:p-5 lg:p-6 shadow-sm border border-[#374151] hover:shadow-md hover:border-[#4B5563] transition-all">
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{item.icon}</div>
                <h3 className="font-semibold text-sm sm:text-base lg:text-lg text-[#F9FAFB]">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 sm:mb-14 lg:mb-16 text-[#F9FAFB]">Success Stories</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 lg:gap-8">
          {[
            {
              name: "Priya Sharma",
              role: "Hired at Google",
              quote: "The 60-day challenge gave me the confidence and portfolio I needed.",
              avatar: "👩‍💻"
            },
            {
              name: "Rahul Kumar",
              role: "Freelancer earning $5k/month",
              quote: "I went from zero to building production apps. Now I have clients lining up.",
              avatar: "👨‍💼"
            },
            {
              name: "Ananya Singh",
              role: "Full-Stack Developer",
              quote: "Best investment I made in my career. The daily consistency made all the difference.",
              avatar: "👩‍🔬"
            }
          ].map((testimonial, i) => (
            <div key={i} className="bg-[#111827] rounded-xl p-6 sm:p-8 border border-[#1F2937]">
              <div className="text-4xl mb-4">{testimonial.avatar}</div>
              <p className="text-[#D1D5DB] mb-6 text-sm sm:text-base leading-relaxed">"{testimonial.quote}"</p>
              <div className="border-t border-[#1F2937] pt-4">
                <div className="font-semibold text-[#F9FAFB] text-sm">{testimonial.name}</div>
                <div className="text-xs text-[#60A5FA] mt-1">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white py-10 sm:py-14 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl mb-2">✓</div>
              <div className="font-semibold text-sm sm:text-base">100% Free</div>
              <div className="text-blue-100 text-xs sm:text-sm mt-1">No hidden costs ever</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl mb-2">✓</div>
              <div className="font-semibold text-sm sm:text-base">Self-Paced</div>
              <div className="text-blue-100 text-xs sm:text-sm mt-1">Learn at your speed</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl mb-2">✓</div>
              <div className="font-semibold text-sm sm:text-base">Community</div>
              <div className="text-blue-100 text-xs sm:text-sm mt-1">Join our Discord</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl mb-2">✓</div>
              <div className="font-semibold text-sm sm:text-base">Industry-Ready</div>
              <div className="text-blue-100 text-xs sm:text-sm mt-1">Real-world projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-[#F9FAFB]">Ready to Transform Your Career?</h2>
        <p className="text-base sm:text-lg lg:text-xl text-[#9CA3AF] mb-6 sm:mb-8 px-2">
          Join the challenge today. No credit card required. Start building immediately.
        </p>
        <Link
          href="/dashboard"
          className="inline-block w-full sm:w-auto px-8 py-4 bg-[#3B82F6] text-white rounded-lg font-semibold text-base sm:text-lg hover:bg-[#2563EB] transition-all shadow-lg shadow-[#3B82F6]/25 hover:shadow-xl hover:shadow-[#3B82F6]/30 active:scale-[0.98] min-h-[52px]"
        >
          Start Your 60-Day Challenge
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1F2937] bg-[#111827] py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="col-span-2 sm:col-span-2 md:col-span-1">
              <div className="text-xl font-bold text-[#3B82F6] mb-3 sm:mb-4">ABTalks</div>
              <p className="text-[#9CA3AF] text-sm leading-relaxed">
                Building the next generation of developers through hands-on learning.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-[#F9FAFB] text-sm sm:text-base">Challenge</h3>
              <ul className="space-y-2 text-[#9CA3AF] text-sm">
                <li><a href="#" className="hover:text-[#3B82F6] transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-[#3B82F6] transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-[#3B82F6] transition-colors">Success Stories</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-[#F9FAFB] text-sm sm:text-base">Community</h3>
              <ul className="space-y-2 text-[#9CA3AF] text-sm">
                <li><a href="#" className="hover:text-[#3B82F6] transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-[#3B82F6] transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-[#3B82F6] transition-colors">LinkedIn</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-[#F9FAFB] text-sm sm:text-base">Legal</h3>
              <ul className="space-y-2 text-[#9CA3AF] text-sm">
                <li><a href="#" className="hover:text-[#3B82F6] transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-[#3B82F6] transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-[#3B82F6] transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#1F2937] mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-[#9CA3AF] text-xs sm:text-sm">
            © 2026 ABTalks. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
