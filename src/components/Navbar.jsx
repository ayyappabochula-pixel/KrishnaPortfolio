export default function Navbar() {

  return (

    <section id="navbar">

      {/* paste About section code */}
      <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-transparent py-5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-2 group outline-none">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-xml w-5 h-5" aria-hidden="true">
                  <path d="m18 16 4-4-4-4"></path>
                  <path d="m6 8-4 4 4 4"></path>
                  <path d="m14.5 4-5 16"></path>
                </svg>
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-slate-900 group-hover:text-primary transition-colors">Kali Krishna</span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-6">
                <a href="#about" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-2 py-1">About</a>
                <a href="#skills" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-2 py-1">Skills</a>
                <a href="#projects" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-2 py-1">Projects</a>
                <a href="#experience" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-2 py-1">Experience</a>
                <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-2 py-1">Contact</a>
              </div>
              <a href="https://www.linkedin.com/in/kali-krishna027/" target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 rounded-full text-sm font-semibold bg-primary text-white hover:bg-blue-700 hover:shadow-md transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">Let's Connect</a>
            </div>
            <button className="md:hidden p-2 rounded-lg bg-secondary text-slate-700 hover:bg-secondary/80 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label="Toggle menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu w-6 h-6" aria-hidden="true">
                <path d="M4 5h16"></path>
                <path d="M4 12h16"></path>
                <path d="M4 19h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </section>

  )

}

