
import { MapPin, Mail, Phone } from "lucide-react";

const Contact = () => {
  

  return (
    <div className="bg-gray-50 px-16 py-20">
      <div className="flex justify-between max-w-6xl mx-auto gap-16">
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
            <div className="flex  gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-gray-600" size={20} />
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Our Location</p>
                <p className="text-gray-500 text-sm">
                  123 Learning Street, Khulna, Bangladesh
                </p>
              </div>
            </div>

            {/* Email Us */}
            <div className="flex  gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                <Mail className="text-gray-600" size={20} />
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Email Us</p>
                <p className="text-gray-500 text-sm">Cepair@gmail.com</p>
              </div>
            </div>

            {/* Call Us */}
            <div className="flex  gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                <Phone className="text-gray-600" size={20} />
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Call Us</p>
                <p className="text-gray-500 text-sm">+880 1759626470</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form  */}
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
              placeholder="Enter your name"
              className="w-full text-sm border border-gray-300 rounded-md px-4 py-2.5  placeholder-gray-400 "
            />
          </div>

          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              
              placeholder="Enter your email"
              className="w-full text-sm border border-gray-300 rounded-md px-4 py-2.5  placeholder-gray-400 "
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Message
            </label>
            <textarea
              name="message"
              
              placeholder="Write your message here..."
              rows={4}
              className="w-full text-sm border border-gray-300 rounded-md px-4 py-2.5  placeholder-gray-400  "
            />
          </div>

          <button
            
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
