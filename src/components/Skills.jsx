export default function Skills() {

  return (

    <section id="skills">

      {/* paste Skills section */}
        <section id="skills" className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Expertise</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900">Technical Skills</h3>
              <p className="text-slate-600 text-lg mt-4 max-w-2xl">A comprehensive overview of the testing tools, languages, and methodologies I use to ensure software quality.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-muted border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-white rounded-xl shadow-sm text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flask-conical w-6 h-6" aria-hidden="true">
                      <path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path>
                      <path d="M6.453 15h11.094"></path>
                      <path d="M8.5 2h7"></path>
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">Testing</h4>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  <span className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium shadow-sm hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-200 cursor-default">Manual Testing</span>
                  <span className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium shadow-sm hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-200 cursor-default">Automation Testing</span>
                  <span className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium shadow-sm hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-200 cursor-default">Selenium WebDriver</span>
                  <span className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium shadow-sm hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-200 cursor-default">PyTest</span>
                  <span className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium shadow-sm hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-200 cursor-default">BDD</span>
                  <span className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium shadow-sm hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-200 cursor-default">Functional Testing</span>
                  <span className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium shadow-sm hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-200 cursor-default">Regression Testing</span>
                  <span className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium shadow-sm hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-200 cursor-default">API Testing</span>
                  <span className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium shadow-sm hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-200 cursor-default">Cross-Browser Testing</span>
                  <span className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium shadow-sm hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-200 cursor-default">UI Testing</span>
                </div>
              </div>
              <div className="p-8 rounded-3xl bg-muted border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-white rounded-xl shadow-sm text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-xml w-6 h-6" aria-hidden="true">
                      <path d="m18 16 4-4-4-4"></path>
                      <path d="m6 8-4 4 4 4"></path>
                      <path d="m14.5 4-5 16"></path>
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">Languages &amp; Web</h4>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  <span className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium shadow-sm hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-200 cursor-default">Python</span>
                  <span className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium shadow-sm hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-200 cursor-default">HTML</span>
                  <span className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium shadow-sm hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-200 cursor-default">CSS</span>
                  <span className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium shadow-sm hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-200 cursor-default">SQL</span>
                </div>
              </div>
              <div className="p-8 rounded-3xl bg-muted border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-white rounded-xl shadow-sm text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wrench w-6 h-6" aria-hidden="true">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path>
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">Tools &amp; Platforms</h4>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  <span className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium shadow-sm hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-200 cursor-default">Jira</span>
                  <span className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium shadow-sm hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-200 cursor-default">Postman</span>
                  <span className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium shadow-sm hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-200 cursor-default">Git</span>
                  <span className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium shadow-sm hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-200 cursor-default">GitHub</span>
                  <span className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium shadow-sm hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-200 cursor-default">Browser DevTools</span>
                </div>
              </div>
              <div className="p-8 rounded-3xl bg-muted border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-white rounded-xl shadow-sm text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open w-6 h-6" aria-hidden="true">
                      <path d="M12 7v14"></path>
                      <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">Methodologies</h4>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  <span className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium shadow-sm hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-200 cursor-default">Agile</span>
                  <span className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium shadow-sm hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-200 cursor-default">SDLC</span>
                  <span className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium shadow-sm hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-200 cursor-default">STLC</span>
                  <span className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium shadow-sm hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-200 cursor-default">Test Planning</span>
                  <span className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium shadow-sm hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-200 cursor-default">Test Case Writing</span>
                  <span className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium shadow-sm hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-200 cursor-default">Bug Life Cycle</span>
                  <span className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium shadow-sm hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-200 cursor-default">Sprint Planning</span>
                  <span className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium shadow-sm hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-200 cursor-default">Defect Reporting</span>
                </div>
              </div>
            </div>
          </div>
        </section>

    </section>

  )

}