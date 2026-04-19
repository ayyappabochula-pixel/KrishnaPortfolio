import { useState } from "react";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {

      // 1. Get old messages from localStorage
      const oldMessages = JSON.parse(localStorage.getItem("messages")) || [];

      // 2. Add new message
      const newMessage = {
        ...formData,
        time: new Date().toLocaleString()
      };

      const updatedMessages = [...oldMessages, newMessage];

      // 3. Save back to localStorage
      localStorage.setItem("messages", JSON.stringify(updatedMessages));

      // 4. UI update
      setStatus(" Thank You For Your Message!");

      setFormData({
        name: "",
        email: "",
        message: ""
      });

    } catch (error) {
      setStatus("❌ Something went wrong");
    }

    setLoading(false);
  };

  return (

    <section id="contact" className="py-24 bg-white relative">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center">

            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
              Contact
            </h2>

            <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
              Let's work together.
            </h3>

            <p className="text-slate-600 text-lg mb-10 leading-relaxed max-w-md">
              I'm currently looking for QA or SDET opportunities. Whether you
              have a role, a project, or just want to connect — I'd love to hear
              from you!
            </p>

            <a
              href="mailto:kalikrishna027@gmail.com"
              className="flex items-center gap-4 group p-4 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all w-fit"
            >

              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center">
                📧
              </div>

              <div>
                <p className="text-sm text-slate-500 font-medium">
                  Email Me
                </p>

                <p className="text-slate-900 font-semibold text-lg">
                  kalikrishna027@gmail.com
                </p>
              </div>

            </a>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-border shadow-xl shadow-slate-200/50">

            <form className="space-y-6" onSubmit={handleSubmit}>

              <h4 className="text-2xl font-bold text-slate-900 mb-8">
                Send a Message
              </h4>

              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Your Name
                </label>

                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-border"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Email Address
                </label>

                <input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-border"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about the role or project..."
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-border resize-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 rounded-xl font-bold bg-primary text-white"
              >
                {loading ? "Saving..." : "Send Message"}
              </button>

              {/* Status */}
              {status && (
                <p className="text-center mt-4 text-lg">
                  {status}
                </p>
              )}

            </form>

          </div>

        </div>

      </div>

    </section>

  );

}