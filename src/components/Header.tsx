
import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-pink-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div>
              <h1 className="font-bold text-xl bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Darshit Korat
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
            >
              About me
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
            >
              Talk to Darshit
            </button>
            <button 
              onClick={() => scrollToSection('content')} 
              className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
            >
              Content
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-2 rounded-full"
            >
              <Heart className="w-4 h-4 mr-2" />
              Book Session
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-pink-100">
            <nav className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-gray-700 hover:text-pink-600 transition-colors font-medium text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-gray-700 hover:text-pink-600 transition-colors font-medium text-left"
              >
                Talk to Darshit
              </button>
              <button 
                onClick={() => scrollToSection('content')} 
                className="text-gray-700 hover:text-pink-600 transition-colors font-medium text-left"
              >
                Content
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-gray-700 hover:text-pink-600 transition-colors font-medium text-left"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('contact')} 
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-2 rounded-full w-fit"
              >
                <Heart className="w-4 h-4 mr-2" />
                Book Session
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
