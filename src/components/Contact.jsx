import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

function Contact() {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_skuxtsc",
        "template_x11t2bh",
        form.current,
        "aUREJcw4WSbPwBsPE"
      )
      .then(() => {
        setDone(true);
        form.current.reset();
      })
      .catch((error) => console.error(error.text));
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-10 px-4 sm:px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-black"
    >
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-white animate-fade-in">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="mx-4">
            <h3 className="text-xl sm:text-2xl text-white font-semibold mb-4">
              Get in Touch
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-indigo-500 flex-shrink-0" size={22} />
                <a
                  href="mailto:ganipinjala@gmail.com"
                  className="text-white text-base hover:underline break-words"
                >
                  ganipinjala@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-indigo-500 flex-shrink-0" size={22} />
                <a
                  href="tel:+918074078756"
                  className="text-white text-base hover:underline"
                >
                  +91 8074078756
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-indigo-500 flex-shrink-0" size={22} />
                <span className="text-white text-base">Hyderabad, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-5 mt-6">
              <a
                href="https://www.linkedin.com/in/bala-naga-ganesh-pinjala-051377317/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin
                  className="text-indigo-500 hover:text-indigo-700 transition"
                  size={26}
                />
              </a>
              <a
                href="https://github.com/ganeshbala-88"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github
                  className="text-indigo-500 hover:text-indigo-700 transition"
                  size={26}
                />
              </a>
            </div>
          </div>

          {/* Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-4 sm:space-y-5 bg-gray-800 p-5 rounded-lg shadow-lg animate-fade-in"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 border border-gray-300 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 border border-gray-300 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              name="Company"
              placeholder="Company Name"
              required
              className="w-full p-3 border border-gray-300 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full p-3 border border-gray-300 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>

            <input
              type="hidden"
              name="time"
              value={new Date().toLocaleString()}
            />

            <button
              type="submit"
              className="w-full sm:w-auto bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-md hover:opacity-90 transition duration-300"
            >
              Send Message
            </button>

            {done && (
              <p className="text-green-500 mt-3 text-sm">
                ✅ Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
