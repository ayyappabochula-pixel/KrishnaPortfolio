import { useEffect, useState } from "react";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  // detect scroll
  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <section id="navbar">

      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 py-5
        ${scrolled
            ? "bg-white/70 backdrop-blur-lg shadow-md"
            : "bg-transparent"
          }`}
      >

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="flex items-center justify-between">

            {/* LOGO */}

            <a href="#" className="flex items-center gap-2 group outline-none">

              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">

                <svg xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-code-xml w-5 h-5"
                >

                  <path d="m18 16 4-4-4-4"></path>
                  <path d="m6 8-4 4 4 4"></path>
                  <path d="m14.5 4-5 16"></path>

                </svg>

              </div>

              <span className="font-display font-bold text-xl tracking-tight text-slate-900 group-hover:text-primary transition-colors">

                Kali Krishna

              </span>

            </a>


            {/* MENU */}

            <div className="hidden md:flex items-center gap-8">

              <div className="flex items-center gap-6">

                <a href="#about" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
                  About
                </a>

                <a href="#skills" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
                  Skills
                </a>

                <a href="#projects" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
                  Projects
                </a>

                <a href="#experience" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
                  Experience
                </a>

                <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
                  Contact
                </a>

              </div>


              {/* CONNECT BUTTON */}

              <a
                href="https://www.linkedin.com/in/kali-krishna027/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full text-sm font-semibold bg-primary text-white hover:bg-blue-700 hover:shadow-md transition-all duration-300"
              >

                Let's Connect

              </a>

            </div>


            {/* MOBILE MENU BUTTON */}

            <button
              className="md:hidden p-2 rounded-lg bg-secondary text-slate-700 hover:bg-secondary/80 transition-colors"
            >

              <svg xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu w-6 h-6"
              >

                <path d="M4 5h16"></path>
                <path d="M4 12h16"></path>
                <path d="M4 19h16"></path>

              </svg>

            </button>

          </div>

        </div>

      </nav>

    </section>

  );

}