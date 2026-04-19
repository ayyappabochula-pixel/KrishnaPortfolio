import { useState } from "react";
import resume from "../assets/resume.pdf";

export default function Hero() {

  const [loading, setLoading] = useState(false);

  // ✅ ADD THIS FUNCTION ONLY
  const handleDownloadResume = () => {

    setLoading(true);

    const link = document.createElement("a");
    link.href = resume;
    link.download = "Kali_Krishna_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setLoading(false);
    }, 1000);

  };

  return (

    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-slate-50"
    >

      {/* background dots */}

      <div className="absolute inset-0 opacity-50 pointer-events-none
      [background-image:radial-gradient(#e5e7eb_1px,transparent_1px)]
      [background-size:16px_16px]" />


      {/* glow blobs */}

      <div className="absolute top-[-10%] right-[-5%]
      w-[500px] h-[500px]
      rounded-full bg-primary/5 blur-[100px]" />

      <div className="absolute bottom-[-10%] left-[-5%]
      w-[400px] h-[400px]
      rounded-full bg-accent/5 blur-[100px]" />


      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="max-w-3xl">

            {/* badge */}

            <div className="flex flex-wrap items-center gap-4 mb-6">

              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border shadow-sm">

                <span className="relative flex h-2.5 w-2.5">

                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />

                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />

                </span>

                <span className="text-sm font-medium text-slate-700">
                  Currently Open to Work
                </span>

              </div>

              <div className="flex items-center gap-3">

                <div className="h-4 w-px bg-slate-300" />

                <span className="text-primary font-semibold tracking-wide uppercase text-sm">
                  QA Engineer · Bengaluru, India
                </span>

              </div>

            </div>


            {/* heading */}

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.15] mb-6 text-slate-900">

              Hi, I'm <span className="text-primary">
                Kali Krishna
              </span>

              <br />

              QA Automation Engineer.

            </h1>


            {/* description */}

            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">

              Detail-oriented QA Engineer with hands-on experience in manual
              and automation testing of web applications using Selenium,
              Python & PyTest.

            </p>


            {/* buttons */}

            <div className="flex flex-wrap items-center gap-4">


              {/* experience button */}

              <a
                href="#experience"
                className="group flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold bg-primary text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                View Experience
              </a>


              {/* ✅ resume button fixed */}

              <button
                onClick={handleDownloadResume}
                disabled={loading}
                className="flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold bg-white text-slate-700 border shadow-sm hover:border-primary/50 hover:text-primary transition-all duration-300"
              >
                {loading ? "Downloading..." : "Download Resume"}
              </button>


              {/* contact icons */}

              <div className="flex items-center gap-3 ml-2 mt-4 sm:mt-0">

                <a
                  href="tel:9951474620"
                  className="p-3 rounded-full bg-white border shadow-sm hover:border-primary/50 hover:text-primary hover:shadow-md transition-all duration-300"
                >
                  📞
                </a>


                <a
                  href="https://www.linkedin.com/in/kali-krishna027/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white border shadow-sm hover:border-primary/50 hover:text-primary hover:shadow-md transition-all duration-300"
                >
                  in
                </a>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE ORBIT CIRCLE */}

          <div className="relative hidden lg:block h-[600px]">

            <div className="absolute inset-0 flex items-center justify-center">

              <div className="relative w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-primary/10 to-accent/10 border border-white shadow-2xl flex items-center justify-center">

                <div className="absolute w-64 h-64 border-[40px] border-primary/5 rounded-full animate-spinSlow"></div>

                <div className="absolute w-40 h-40 border-[20px] border-accent/5 rounded-full animate-spin"></div>


                {/* CARD 1 */}

                <div className="absolute animate-orbit1">

                  <div className="bg-white p-5 rounded-2xl shadow-lg border w-48">

                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary mb-3">
                      💼
                    </div>

                    <h3 className="font-bold text-slate-900">
                      3+ Internships
                    </h3>

                    <p className="text-xs text-slate-500 mt-1">
                      QA & Automation
                    </p>

                  </div>

                </div>


                {/* CARD 2 */}

                <div className="absolute animate-orbit2">

                  <div className="bg-white p-5 rounded-2xl shadow-lg border w-52">

                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-accent mb-3">
                      ⚡
                    </div>

                    <h3 className="font-bold text-slate-900">
                      40% Faster Testing
                    </h3>

                    <p className="text-xs text-slate-500 mt-1">
                      Via PyTest & Selenium
                    </p>

                  </div>

                </div>


                {/* CARD 3 */}

                <div className="absolute animate-orbit3">

                  <div className="bg-white p-5 rounded-2xl shadow-lg border w-48">

                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-3">
                      🎓
                    </div>

                    <h3 className="font-bold text-slate-900">
                      MCA Graduate
                    </h3>

                    <p className="text-xs text-slate-500 mt-1">
                      Acharya Nagarjuna
                    </p>

                  </div>

                </div>


              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}