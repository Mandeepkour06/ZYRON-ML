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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] bg-[radial-gradient(circle,_rgba(59,130,246,0.07)_0%,_transparent_70%)] rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-14 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 text-center">
          <div className="space-y-5 sm:space-y-7">
            <div className="animate-fade-in-up anim-delay-100 inline-flex items-center gap-2 px-4 py-2 bg-[#3B82F6]/10 text-[#60A5FA] rounded-full text-xs sm:text-sm font-medium border border-[#3B82F6]/20">
              <span className="w-2 h-2 bg-[#3B82F6] rounded-full animate-pulse"></span>
              Transform Your Career in 60 Days
            </div>

            <h1 className="animate-fade-in-up anim-delay-200 text-[2rem] leading-[1.15] sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#F9FAFB] tracking-tight">
              Build Real Projects.
              <br />
              <span className="bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent">Ship Every Day.</span>
            </h1>

            <p className="animate-fade-in-up anim-delay-300 text-base sm:text-lg lg:text-xl text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed">
              Join thousands of students who went from beginners to confident developers by building{' '}
              <span className="text-[#3B82F6] font-medium">60 real-world projects</span> in{' '}
              <span className="text-[#3B82F6] font-medium">60 days</span>.
            </p>

            <div className="animate-fade-in-up anim-delay-400 pt-1 sm:pt-3">
              <Link
                href="/dashboard"
                className="group inline-flex w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white rounded-xl font-semibold text-base sm:text-lg hover:shadow-[0_0_35px_rgba(59,130,246,0.35)] hover:-translate-y-0.5 active:scale-[0.97] min-h-[52px] items-center justify-center transition-all duration-200 shadow-lg shadow-[#3B82F6]/25 animate-pulse-glow"
              >
                Start Your Challenge
                <span className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </Link>
              <p className="mt-3 text-xs sm:text-sm text-[#6B7280]">Your first project starts today.</p>
            </div>

            {/* 60-Day Journey Visual */}
            <div className="animate-fade-in-up anim-delay-500 pt-4 sm:pt-6 max-w-xs sm:max-w-sm mx-auto">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-[8px] sm:text-[10px] text-[#6B7280] font-medium tracking-wide whitespace-nowrap">DAY 01</span>
                <div className="flex-1 flex items-center justify-between relative">
                  <div className="absolute top-[3px] left-2 right-2 h-px bg-gradient-to-r from-[#3B82F6]/40 via-[#3B82F6]/25 to-[#10B981]/40"></div>
                  <div className="flex flex-col items-center relative z-10">
                    <div className="w-[7px] h-[7px] sm:w-2 sm:h-2 rounded-full bg-[#3B82F6]"></div>
                    <span className="mt-1 text-[7px] sm:text-[9px] text-[#3B82F6] font-medium">BUILD</span>
                  </div>
                  <div className="flex flex-col items-center relative z-10">
                    <div className="w-[7px] h-[7px] sm:w-2 sm:h-2 rounded-full bg-[#3B82F6]"></div>
                    <span className="mt-1 text-[7px] sm:text-[9px] text-[#3B82F6] font-medium">SHIP</span>
                  </div>
                  <div className="flex flex-col items-center relative z-10">
                    <div className="w-[7px] h-[7px] sm:w-2 sm:h-2 rounded-full bg-[#3B82F6]"></div>
                    <span className="mt-1 text-[7px] sm:text-[9px] text-[#3B82F6] font-medium">SHARE</span>
                  </div>
                  <div className="flex flex-col items-center relative z-10">
                    <div className="w-[7px] h-[7px] sm:w-2 sm:h-2 rounded-full bg-[#10B981]"></div>
                    <span className="mt-1 text-[7px] sm:text-[9px] text-[#10B981] font-medium">GROW</span>
                  </div>
                </div>
                <span className="text-[8px] sm:text-[10px] text-[#6B7280] font-medium tracking-wide whitespace-nowrap">DAY 60</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div className="bg-[#111827] rounded-2xl p-6 sm:p-8 text-center border border-[#1F2937]">
            <div className="w-12 h-12 bg-[#3B82F6]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
              <span className="text-xl">🔥</span>
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-[#3B82F6]">60 Days</div>
            <div className="text-[#9CA3AF] mt-2 text-sm">A new project every day</div>
          </div>
          <div className="bg-[#111827] rounded-2xl p-6 sm:p-8 text-center border border-[#1F2937]">
            <div className="w-12 h-12 bg-[#FBBF24]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
              <span className="text-xl">⚡</span>
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-[#FBBF24]">60 Projects</div>
            <div className="text-[#9CA3AF] mt-2 text-sm">A real-world portfolio</div>
          </div>
          <div className="bg-[#111827] rounded-2xl p-6 sm:p-8 text-center border border-[#1F2937]">
            <div className="w-12 h-12 bg-[#10B981]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
              <span className="text-xl">✓</span>
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-[#10B981]">100% Free</div>
            <div className="text-[#9CA3AF] mt-2 text-sm">Start today, no catch</div>
          </div>
        </div>
      </section>

      {/* How It Works — Journey */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 sm:mb-14 lg:mb-16 text-[#F9FAFB]">How It Works</h2>

        {/* Mobile: vertical timeline */}
        <div className="sm:hidden space-y-0">
          {[
            { num: '01', title: 'Build', desc: 'Create something new every day. Each project is real, hands-on, and portfolio-worthy.', color: '#3B82F6' },
            { num: '02', title: 'Ship', desc: 'Push your code to GitHub. Build a track record of consistent output.', color: '#3B82F6' },
            { num: '03', title: 'Share', desc: 'Post your progress on LinkedIn. Let the world see what you\'re building.', color: '#3B82F6' },
            { num: '04', title: 'Grow', desc: 'Build consistency, confidence, and a visible portfolio that opens doors.', color: '#10B981' },
          ].map((step, i) => (
            <div key={step.num} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold text-white shrink-0 relative z-10" style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}dd)` }}>
                  {step.num}
                </div>
                {i < 3 && <div className="w-px flex-1 bg-gradient-to-b from-[#3B82F6]/30 to-[#3B82F6]/10 my-1"></div>}
              </div>
              <div className="pb-8 pt-1.5">
                <h3 className="text-lg font-semibold text-[#F9FAFB]">{step.title}</h3>
                <p className="text-[#9CA3AF] text-sm mt-1 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: horizontal journey */}
        <div className="hidden sm:block">
          <div className="relative">
            <div className="absolute top-7 left-[12%] right-[12%] h-px bg-gradient-to-r from-[#3B82F6]/40 via-[#3B82F6]/25 to-[#10B981]/40"></div>
            <div className="grid grid-cols-4 gap-6 relative">
              {[
                { num: '01', title: 'Build', desc: 'Create something new every day.', color: '#3B82F6' },
                { num: '02', title: 'Ship', desc: 'Push your code to GitHub.', color: '#3B82F6' },
                { num: '03', title: 'Share', desc: 'Post your progress publicly.', color: '#3B82F6' },
                { num: '04', title: 'Grow', desc: 'Build a visible portfolio.', color: '#10B981' },
              ].map((step) => (
                <div key={step.num} className="flex flex-col items-center text-center relative">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-base font-bold text-white shrink-0 relative z-10 shadow-lg" style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}cc)`, boxShadow: `0 8px 24px -4px ${step.color}30` }}>
                    {step.num}
                  </div>
                  <h3 className="text-lg font-semibold text-[#F9FAFB] mt-4">{step.title}</h3>
                  <p className="text-[#9CA3AF] text-sm mt-1.5 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Build */}
      <section className="bg-[#111827] py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 sm:mb-14 lg:mb-16 text-[#F9FAFB]">What You&apos;ll Build</h2>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {[
              { title: "Portfolio Websites", icon: "🌐" },
              { title: "REST APIs", icon: "🔌" },
              { title: "Mobile Apps", icon: "📱" },
              { title: "Chrome Extensions", icon: "🧩" },
              { title: "AI Applications", icon: "🤖" },
              { title: "Full-Stack Projects", icon: "⚡" }
            ].map((item, i) => (
              <div key={i} className="bg-[#1F2937] rounded-xl p-4 sm:p-5 lg:p-6 border border-[#374151] hover:border-[#4B5563] hover:bg-[#1F2937]/80 transition-all duration-200">
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
              role: "CSE Student",
              quote: "The 60-day challenge gave me the confidence and portfolio I needed.",
              avatar: "👩‍💻"
            },
            {
              name: "Rahul Kumar",
              role: "Final Year Student",
              quote: "I went from zero to building production apps. Now I have a portfolio that speaks for itself.",
              avatar: "👨‍🎓"
            },
            {
              name: "Ananya Singh",
              role: "Self-taught Developer",
              quote: "Best investment I made in my career. The daily consistency made all the difference.",
              avatar: "👩‍🔬"
            }
          ].map((testimonial, i) => (
            <div key={i} className="bg-[#111827] rounded-2xl p-6 sm:p-8 border border-[#1F2937] border-t-2 border-t-[#3B82F6]/30 relative">
              <div className="text-[#3B82F6]/15 text-5xl font-serif leading-none absolute top-4 right-6 select-none">&ldquo;</div>
              <div className="text-3xl mb-3 relative">{testimonial.avatar}</div>
              <p className="text-[#D1D5DB] mb-6 text-sm sm:text-base leading-relaxed relative">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="border-t border-[#1F2937] pt-4 relative">
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

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center">
        <div className="bg-gradient-to-br from-[#111827] to-[#0A0F1C] rounded-2xl p-8 sm:p-12 border border-[#1F2937]">
          <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]"></div>
            <div className="w-10 sm:w-16 h-px bg-gradient-to-r from-[#3B82F6]/40 to-[#10B981]/40"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></div>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-[#F9FAFB]">Your next 60 days start here.</h2>
          <p className="text-base sm:text-lg lg:text-xl text-[#9CA3AF] mb-6 sm:mb-8 px-2">
            Build something every day. Leave with something you can show.
          </p>
          <Link
            href="/dashboard"
            className="group inline-flex w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white rounded-xl font-semibold text-base sm:text-lg hover:shadow-[0_0_35px_rgba(59,130,246,0.35)] hover:-translate-y-0.5 active:scale-[0.97] min-h-[52px] items-center justify-center transition-all duration-200 shadow-lg shadow-[#3B82F6]/25"
          >
            Start the 60-Day Challenge
            <span className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </Link>
        </div>
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
