import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <nav className="border-b border-gray-800 bg-black/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-blue-500">ABTalks</div>
            <Link
              href="/dashboard"
              className="px-4 py-2 text-sm font-medium text-blue-500 hover:text-blue-400 border border-blue-500 rounded-lg hover:bg-blue-500/10 transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-8">
          <div className="inline-block px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
            🚀 Transform Your Career in 60 Days
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Build Real Projects.<br />
            <span className="text-blue-500">Ship Every Day.</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Join thousands of students who went from beginners to confident developers
            by building 60 real-world projects in 60 days. No fluff, just hands-on learning.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              href="/dashboard"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Start Your Challenge
            </Link>
            <button className="px-8 py-4 bg-gray-800 text-gray-200 rounded-lg font-semibold text-lg border-2 border-gray-700 hover:border-gray-600 transition-colors">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 rounded-xl p-8 shadow-md text-center border border-gray-800">
            <div className="text-4xl font-bold text-blue-500">15,000+</div>
            <div className="text-gray-400 mt-2">Active Students</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-8 shadow-md text-center border border-gray-800">
            <div className="text-4xl font-bold text-blue-500">900,000+</div>
            <div className="text-gray-400 mt-2">Projects Built</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-8 shadow-md text-center border border-gray-800">
            <div className="text-4xl font-bold text-blue-500">87%</div>
            <div className="text-gray-400 mt-2">Complete the Challenge</div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">How It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto text-2xl">
              📝
            </div>
            <h3 className="text-xl font-semibold text-white">Daily Challenge</h3>
            <p className="text-gray-400">
              Get a new real-world project every day. Each challenge builds on the previous one.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto text-2xl">
              💻
            </div>
            <h3 className="text-xl font-semibold text-white">Build & Submit</h3>
            <p className="text-gray-400">
              Code your solution, push to GitHub, and share your progress on LinkedIn.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto text-2xl">
              🏆
            </div>
            <h3 className="text-xl font-semibold text-white">Level Up</h3>
            <p className="text-gray-400">
              Track your streak, earn achievements, and build a portfolio that gets you hired.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">What You'll Build</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Portfolio Websites", icon: "🌐" },
              { title: "REST APIs", icon: "🔌" },
              { title: "Mobile Apps", icon: "📱" },
              { title: "Chrome Extensions", icon: "🧩" },
              { title: "AI Applications", icon: "🤖" },
              { title: "Full-Stack Projects", icon: "⚡" }
            ].map((item, i) => (
              <div key={i} className="bg-gray-900 rounded-lg p-6 shadow-sm border border-gray-800 hover:shadow-md hover:border-gray-700 transition-all">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-lg text-white">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Success Stories</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Priya Sharma",
              role: "Hired at Google",
              quote: "The 60-day challenge gave me the confidence and portfolio I needed. Got my dream job offer within 2 weeks of completing it!",
              avatar: "👩‍💻"
            },
            {
              name: "Rahul Kumar",
              role: "Freelancer earning $5k/month",
              quote: "I went from zero to building production apps. Now I have clients lining up for my services.",
              avatar: "👨‍💼"
            },
            {
              name: "Ananya Singh",
              role: "Full-Stack Developer",
              quote: "Best investment I made in my career. The daily consistency and real projects made all the difference.",
              avatar: "👩‍🔬"
            }
          ].map((testimonial, i) => (
            <div key={i} className="bg-gray-900 rounded-xl p-6 shadow-md border border-gray-800">
              <div className="text-4xl mb-4">{testimonial.avatar}</div>
              <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
              <div>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-sm text-gray-400">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl mb-2">✓</div>
              <div className="font-semibold">100% Free</div>
              <div className="text-blue-100 text-sm mt-1">No hidden costs ever</div>
            </div>
            <div>
              <div className="text-3xl mb-2">✓</div>
              <div className="font-semibold">Self-Paced</div>
              <div className="text-blue-100 text-sm mt-1">Learn at your speed</div>
            </div>
            <div>
              <div className="text-3xl mb-2">✓</div>
              <div className="font-semibold">Community Support</div>
              <div className="text-blue-100 text-sm mt-1">Join our Discord</div>
            </div>
            <div>
              <div className="text-3xl mb-2">✓</div>
              <div className="font-semibold">Industry-Ready</div>
              <div className="text-blue-100 text-sm mt-1">Real-world projects</div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">Ready to Transform Your Career?</h2>
        <p className="text-xl text-gray-400 mb-8">
          Join the challenge today. No credit card required. Start building immediately.
        </p>
        <Link
          href="/dashboard"
          className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Start Your 60-Day Challenge
        </Link>
      </section>

      <footer className="border-t border-gray-800 bg-gray-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-xl font-bold text-blue-500 mb-4">ABTalks</div>
              <p className="text-gray-400 text-sm">
                Building the next generation of developers through hands-on learning.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Challenge</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-blue-500">How It Works</a></li>
                <li><a href="#" className="hover:text-blue-500">FAQ</a></li>
                <li><a href="#" className="hover:text-blue-500">Success Stories</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Community</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-blue-500">Discord</a></li>
                <li><a href="#" className="hover:text-blue-500">Twitter</a></li>
                <li><a href="#" className="hover:text-blue-500">LinkedIn</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Legal</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-blue-500">Privacy</a></li>
                <li><a href="#" className="hover:text-blue-500">Terms</a></li>
                <li><a href="#" className="hover:text-blue-500">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            © 2026 ABTalks. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
