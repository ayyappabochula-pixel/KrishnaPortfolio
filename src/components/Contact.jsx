export default function Contact() {

  return (

    <section id="contact">

      {/* paste Contact section */}
            <section id="contact" className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="flex flex-col justify-center">
                <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Contact</h2>
                <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Let's work together.</h3>
                <p className="text-slate-600 text-lg mb-10 leading-relaxed max-w-md">I'm currently looking for QA or SDET opportunities. Whether you have a role, a project, or just want to connect — I'd love to hear from you!</p>
                <div className="space-y-6">
                  <a href="mailto:kalikrishna027@gmail.com" className="flex items-center gap-4 group p-4 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all w-fit">
                    <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-6 h-6" aria-hidden="true">
                        <path d="m22 7-8.991 5.727a2 2 0 0 0-2.009 0L2 7"></path>
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium">Email Me</p>
                      <p className="text-slate-900 font-semibold text-lg">kalikrishna027@gmail.com</p>
                    </div>
                  </a>
                  <a href="tel:9951474620" className="flex items-center gap-4 group p-4 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all w-fit">
                    <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-6 h-6" aria-hidden="true">
                        <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium">Call Me</p>
                      <p className="text-slate-900 font-semibold text-lg">+91 9951474620</p>
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/in/kali-krishna027/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-4 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all w-fit">
                    <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin w-6 h-6" aria-hidden="true">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium">Connect on</p>
                      <p className="text-slate-900 font-semibold text-lg">LinkedIn</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 p-4 rounded-2xl w-fit">
                    <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin w-6 h-6" aria-hidden="true">
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium">Location</p>
                      <p className="text-slate-900 font-semibold text-lg">Bengaluru, Karnataka, India</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 md:p-10 rounded-3xl border border-border shadow-xl shadow-slate-200/50">
                <form className="space-y-6">
                  <h4 className="text-2xl font-bold text-slate-900 mb-8">Send a Message</h4>
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Your Name</label>
                    <input id="name" placeholder="John Doe" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-border text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary focus:bg-white transition-all" type="text" name="name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                    <input id="email" placeholder="john@example.com" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-border text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary focus:bg-white transition-all" type="email" name="email" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                    <textarea name="message" id="message" rows="5" placeholder="Tell me about the role or project..." className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-border text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary focus:bg-white transition-all resize-none"></textarea>
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold bg-primary text-white shadow-md hover:bg-blue-700 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed hover:-translate-y-0.5 transition-all duration-300 mt-4">
                    Send Message
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send w-5 h-5" aria-hidden="true">
                      <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                      <path d="m21.854 2.147-10.94 10.939"></path>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

    </section>

  )

}