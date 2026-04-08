export default function About() {

  return (

    <section id="about">

      {/* paste About section code */}
        <section id="about" className="py-24 bg-muted relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">About Me</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">Driven by Quality</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">I'm a detail-oriented QA Engineer with hands-on experience in manual and automation testing of web applications. During my internships at <span className="font-semibold text-slate-900">KLoc Technologies</span>, <span className="font-semibold text-slate-900">Wyreflow Technologies</span>, and <span className="font-semibold text-slate-900">Prodigy InfoTech</span>, I designed and executed test cases, performed regression and cross-browser testing, and automated workflows using Selenium WebDriver, Python, and PyTest. I also logged and tracked defects using Jira, ensuring seamless coordination between QA and development teams.</p>
              <p className="text-slate-600 text-lg leading-relaxed">I hold an <span className="font-semibold text-primary">MCA from Acharya Nagarjuna University</span> and completed the AI: Transformative Learning Internship (Microsoft &amp; SAP – TechSaksham Initiative), gaining hands-on exposure to Artificial Intelligence fundamentals.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border-l-4 border-l-primary transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check w-6 h-6" aria-hidden="true">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Quality First</h4>
                <p className="text-slate-600 leading-relaxed text-sm">Ensuring high-quality, reliable software through precise validation and comprehensive test coverage.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border-l-4 border-l-primary transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bug w-6 h-6" aria-hidden="true">
                    <path d="M12 20v-9"></path>
                    <path d="M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z"></path>
                    <path d="M14.12 3.88 16 2"></path>
                    <path d="M21 21a4 4 0 0 0-3.81-4"></path>
                    <path d="M21 5a4 4 0 0 1-3.55 3.97"></path>
                    <path d="M22 13h-4"></path>
                    <path d="M3 21a4 4 0 0 1 3.81-4"></path>
                    <path d="M3 5a4 4 0 0 0 3.55 3.97"></path>
                    <path d="M6 13H2"></path>
                    <path d="m8 2 1.88 1.88"></path>
                    <path d="M9 7.13V6a3 3 0 1 1 6 0v1.13"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Bug Hunter</h4>
                <p className="text-slate-600 leading-relaxed text-sm">Identifying UI inconsistencies and defects using manual and automated testing across browsers and devices.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border-l-4 border-l-primary transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-6 h-6" aria-hidden="true">
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Automation</h4>
                <p className="text-slate-600 leading-relaxed text-sm">Building efficient automation frameworks with Selenium WebDriver, Python &amp; PyTest — reducing test time by 40%.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border-l-4 border-l-primary transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-6 h-6" aria-hidden="true">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Agile Team Player</h4>
                <p className="text-slate-600 leading-relaxed text-sm">Collaborating with developers in Agile sprints, contributing to sprint planning, reviews, and retrospectives.</p>
              </div>
            </div>
          </div>
        </section>

    </section>

  )

}