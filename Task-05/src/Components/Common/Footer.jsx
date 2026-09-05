import { Wrench } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#000C22]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between  py-12 ">
          {/* Brand */}
          <div className="flex items-start gap-4">
            <div className=" rounded-sm border border-gray-300 flex items-center justify-center ">
              <div className="rounded-sm bg-[#FFAA19] p-3">
                <Wrench className="size-5 text-black" />
              </div>
            </div>

            {/* Reuse the navbar element */}
            <div>
              <h1 className="text-2xl font-medium text-white">
                Ce<span className="text-[#FFAA19]">pair</span>
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Learn Today, Build Tomorrow.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-sm font-semibold text-white pb-3">Quick Links</p>
            <ul className="space-y-2 text-sm text-center">
              {["Home", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`${link.toLowerCase()}`}
                    className="text-gray-500 underline underline-offset-2 hover:text-gray-800 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <p className="text-sm font-semibold text-white mb-3">Follow Us</p>
            <div className="flex gap-3">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href={i}
                    className="w-8 h-8 border border-gray-300 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:border-gray-500 transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                ),
              )}
            </div>
          </div>
        </div>

        <div className=" border-t border-gray-100">
          <p className="text-center text-sm text-gray-500 py-5">
            &copy; 2026 Cepair. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
