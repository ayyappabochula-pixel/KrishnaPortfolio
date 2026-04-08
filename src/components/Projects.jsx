export default function Projects() {

  return (

    <section id="projects">

      {/* paste Projects section */}
        <section id="projects" className="py-24 bg-muted relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-16 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder-git2 lucide-folder-git-2 w-7 h-7" aria-hidden="true">
                  <path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"></path>
                  <circle cx="13" cy="12" r="2"></circle>
                  <path d="M18 19c-2.8 0-5-2.2-5-5v8"></path>
                  <circle cx="20" cy="19" r="2"></circle>
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">Featured Projects</h2>
              <p className="text-slate-600 text-lg mt-4 max-w-2xl">Real-world testing applications and automation frameworks.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="group bg-white rounded-3xl overflow-hidden border border-border shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col">
                <div className="relative h-60 overflow-hidden bg-slate-200">
                  <img alt="OrangeHRM Web Application Testing" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&amp;q=80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white drop-shadow-md">OrangeHRM Web Application Testing</h3>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <p className="text-slate-600 leading-relaxed mb-6 flex-grow">Comprehensive QA testing of the OrangeHRM HR management platform. Identified UI inconsistencies across modules, optimized automation frameworks using Selenium WebDriver with Python, and delivered actionable test reports that enhanced product reliability and usability.</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-md">Selenium WebDriver</span>
                    <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-md">Python</span>
                    <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-md">PyTest</span>
                    <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-md">Manual Testing</span>
                    <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-md">Jira</span>
                  </div>
                  <div className="pt-5 border-t border-border mt-auto">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-orange-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github w-5 h-5" aria-hidden="true">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                      </svg>View on GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="group bg-white rounded-3xl overflow-hidden border border-border shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col">
                <div className="relative h-60 overflow-hidden bg-slate-200">
                  <img alt="VectorShift AI Platform Testing" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&amp;q=80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white drop-shadow-md">VectorShift AI Platform Testing</h3>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <p className="text-slate-600 leading-relaxed mb-6 flex-grow">End-to-end QA testing of the VectorShift AI platform. Conducted functional, UI, and regression testing, identified critical defects in the AI workflow builder, and delivered comprehensive test reports that significantly improved platform reliability.</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-md">Automation Testing</span>
                    <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-md">API Testing</span>
                    <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-md">Selenium</span>
                    <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-md">PyTest</span>
                    <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-md">BDD</span>
                  </div>
                  <div className="pt-5 border-t border-border mt-auto">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-orange-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github w-5 h-5" aria-hidden="true">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                      </svg>View on GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="group bg-white rounded-3xl overflow-hidden border border-border shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col">
                <div className="relative h-60 overflow-hidden bg-slate-200">
                  <img alt="Calculator &amp; Weather App Automation" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&amp;q=80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white drop-shadow-md">Calculator &amp; Weather App Automation</h3>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <p className="text-slate-600 leading-relaxed mb-6 flex-grow">Designed and executed manual and automated test cases for web-based calculator and weather applications. Automated UI test scripts using Selenium WebDriver with Python and organized test suites using PyTest, reducing testing time by 40%.</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-md">Selenium WebDriver</span>
                    <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-md">Python</span>
                    <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-md">PyTest</span>
                    <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-md">Cross-Browser Testing</span>
                    <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-md">HTML/CSS</span>
                  </div>
                  <div className="pt-5 border-t border-border mt-auto">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-orange-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github w-5 h-5" aria-hidden="true">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                      </svg>View on GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="group bg-white rounded-3xl overflow-hidden border border-border shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col">
                <div className="relative h-60 overflow-hidden bg-slate-200">
                  <img alt="AI &amp; Machine Learning Internship Project" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&amp;q=80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white drop-shadow-md">AI &amp; Machine Learning Internship Project</h3>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <p className="text-slate-600 leading-relaxed mb-6 flex-grow">Completed the AI: Transformative Learning Internship under Microsoft &amp; SAP – TechSaksham Initiative. Gained hands-on exposure to Artificial Intelligence fundamentals and real-world AI applications through structured projects and assignments.</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-md">Artificial Intelligence</span>
                    <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-md">Machine Learning</span>
                    <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-md">Python</span>
                    <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-md">Microsoft</span>
                    <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-md">SAP</span>
                  </div>
                  <div className="pt-5 border-t border-border mt-auto">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-orange-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github w-5 h-5" aria-hidden="true">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                      </svg>View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

    </section>

  )

}