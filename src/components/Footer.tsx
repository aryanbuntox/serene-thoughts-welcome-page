
import React from 'react';
import { Instagram, Mail, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-medium mb-4 text-white">Serene of Thoughts</h3>
            <p className="text-gray-400 mb-6">
              A peaceful journey through mindful moments and thoughtful reflections.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://instagram.com" aria-label="Instagram">
                <Instagram size={20} />
              </SocialLink>
              <SocialLink href="mailto:hello@sereneofthoughts.com" aria-label="Email">
                <Mail size={20} />
              </SocialLink>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-white transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">Join Our Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to receive updates on new content and special announcements.
            </p>
            <form className="flex mb-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-2 rounded-l-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-1 focus:ring-serene-400"
                required
              />
              <button 
                type="submit"
                className="bg-serene-500 hover:bg-serene-600 px-4 py-2 rounded-r-md"
              >
                Subscribe
              </button>
            </form>
            <p className="text-gray-500 text-sm">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Serene of Thoughts. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center">
            Made with <Heart size={14} className="mx-1 text-red-500" /> for mindful moments
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ 
  children, 
  href, 
  ...props 
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { 
  children: React.ReactNode 
}) => {
  return (
    <a 
      href={href} 
      className="bg-gray-800 hover:bg-serene-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
};

export default Footer;
