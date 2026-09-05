import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-gray-50 px-16 py-20">
      <div className="flex items-start justify-between max-w-6xl mx-auto gap-16">
        {/* Left: Info */}
        <div className="max-w-md pt-2">
          <p className="text-gray-400 text-sm tracking-widest mb-4">
            GET IN TOUCH
          </p>

          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Contact Us
          </h1>

          <p className="text-gray-500 text-lg leading-relaxed mb-10">
            Have a question or want to work with us? Feel free to reach out.
            We'd love to hear from you!
          </p>

          <div className="space-y-8">
            {/* Our Location */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-gray-600" size={20} />
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Our Location</p>
                <p className="text-gray-500 text-sm">
                  123 Learning Street, Dhaka, Bangladesh
                </p>
              </div>
            </div>

            {/* Email Us */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                <Mail className="text-gray-600" size={20} />
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Email Us</p>
                <p className="text-gray-500 text-sm">info@example.com</p>
              </div>
            </div>

            {/* Call Us */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                <Phone className="text-gray-600" size={20} />
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Call Us</p>
                <p className="text-gray-500 text-sm">+880 1234 567890</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form card */}
        <div className="bg-white rounded-lg shadow-sm p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Send Us a Message
          </h2>

          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              rows={4}
              className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm placeholder-gray-400 resize-y focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-gray-800 text-white font-medium py-3 rounded-md hover:bg-gray-900 transition-colors"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
