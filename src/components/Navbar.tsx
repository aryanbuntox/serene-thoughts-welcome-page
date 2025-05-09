
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 shadow-sm backdrop-blur-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="text-xl md:text-2xl font-playfair font-semibold text-serene-700">
          Serene of Thoughts
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavItem href="#about">About</NavItem>
          <NavItem href="#gallery">Gallery</NavItem>
          <NavItem href="#contact">Contact</NavItem>
          <Button 
            asChild 
            className="bg-serene-500 hover:bg-serene-600 text-white rounded-full"
          >
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              Follow on Instagram
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md animate-fade-in">
          <div className="container py-4 flex flex-col gap-4">
            <MobileNavItem href="#about" onClick={toggleMobileMenu}>About</MobileNavItem>
            <MobileNavItem href="#gallery" onClick={toggleMobileMenu}>Gallery</MobileNavItem>
            <MobileNavItem href="#contact" onClick={toggleMobileMenu}>Contact</MobileNavItem>
            <Button 
              asChild 
              className="bg-serene-500 hover:bg-serene-600 text-white rounded-full w-full"
            >
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={toggleMobileMenu}
              >
                Follow on Instagram
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a 
      href={href} 
      className="text-gray-800 hover:text-serene-600 transition-colors font-medium"
    >
      {children}
    </a>
  );
};

const MobileNavItem = ({ 
  href, 
  onClick, 
  children 
}: { 
  href: string; 
  onClick: () => void;
  children: React.ReactNode 
}) => {
  return (
    <a 
      href={href} 
      className="text-gray-800 hover:text-serene-600 py-2 text-lg font-medium border-b border-gray-100"
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default Navbar;
