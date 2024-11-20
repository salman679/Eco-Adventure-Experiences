import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Section 1: About */}
        <div>
          <h2 className="text-lg font-bold mb-2">About Us</h2>
          <p className="text-sm">
            Eco Adventure is dedicated to promoting sustainable travel
            experiences. Discover eco-friendly adventures and connect with
            nature responsibly.
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-2">Quick Links</h2>
          <ul className="text-sm space-y-2">
            <li>
              <a href="/" className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-400">
                About Us
              </a>
            </li>
            <li>
              <a href="/adventures" className="hover:text-blue-400">
                Adventures
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Section 3: Social Profiles */}
        <div>
          <h2 className="text-lg font-bold mb-2">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-2xl hover:text-blue-500" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-2xl hover:text-blue-400" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl hover:text-pink-500" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl hover:text-blue-700" />
            </a>
          </div>
        </div>
      </div>
      {/* Bottom Footer */}
      <div className="text-center mt-6 border-t border-gray-600 pt-4">
        <p className="text-sm">
          &copy; 2024 Eco Adventure. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
