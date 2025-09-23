import { Button } from "@/components/ui/button";
import { Menu, X, Calendar, MessageCircle, Home, Heart, Users, Store, Info } from "lucide-react";
import { useState } from "react";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 lg:px-6 xl:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lcia-logo.jpg" 
              alt="Mulembe Community NSW Logo" 
              className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl lg:text-2xl font-extrabold text-black leading-tight">Mulembe Community</span>
              <span className="text-xs sm:text-sm lg:text-base text-luhya-gold font-bold">NSW Australia</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button onClick={() => scrollToSection('home')} className="flex items-center space-x-1.5 text-sm xl:text-base text-foreground hover:text-community-warm transition-colors">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </button>
            <button onClick={() => scrollToSection('about')} className="flex items-center space-x-1.5 text-sm xl:text-base text-foreground hover:text-community-warm transition-colors">
              <Info className="w-4 h-4" />
              <span>About</span>
            </button>
            <button onClick={() => scrollToSection('events')} className="flex items-center space-x-1.5 text-sm xl:text-base text-foreground hover:text-community-warm transition-colors">
              <Calendar className="w-4 h-4" />
              <span>Events</span>
            </button>
            <button onClick={() => scrollToSection('community')} className="flex items-center space-x-1.5 text-sm xl:text-base text-foreground hover:text-community-warm transition-colors">
              <MessageCircle className="w-4 h-4" />
              <span>Community</span>
            </button>
            <button onClick={() => scrollToSection('leadership')} className="flex items-center space-x-1.5 text-sm xl:text-base text-foreground hover:text-community-warm transition-colors">
              <Users className="w-4 h-4" />
              <span>Leadership</span>
            </button>
            <button onClick={() => scrollToSection('membership')} className="flex items-center space-x-1.5 text-sm xl:text-base text-foreground hover:text-community-warm transition-colors">
              <Heart className="w-4 h-4" />
              <span>Membership</span>
            </button>
            <button onClick={() => scrollToSection('business')} className="flex items-center space-x-1.5 text-sm xl:text-base text-foreground hover:text-community-warm transition-colors">
              <Store className="w-4 h-4" />
              <span>Business</span>
            </button>
            <button onClick={() => scrollToSection('welfare')} className="flex items-center space-x-1.5 text-sm xl:text-base text-foreground hover:text-community-warm transition-colors">
              <Heart className="w-4 h-4" />
              <span>Welfare</span>
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button onClick={() => scrollToSection('join-form')} variant="community" size="sm" className="text-sm px-4 py-2">Join MCNSW</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-background/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-3">
              <button onClick={() => { scrollToSection('home'); setIsMenuOpen(false); }} className="flex items-center space-x-3 px-3 py-2 rounded-md text-foreground hover:text-community-warm hover:bg-gray-50 transition-colors">
                <Home className="w-4 h-4" />
                <span>Home</span>
              </button>
              <button onClick={() => { scrollToSection('about'); setIsMenuOpen(false); }} className="flex items-center space-x-3 px-3 py-2 rounded-md text-foreground hover:text-community-warm hover:bg-gray-50 transition-colors">
                <Info className="w-4 h-4" />
                <span>About</span>
              </button>
              <button onClick={() => { scrollToSection('events'); setIsMenuOpen(false); }} className="flex items-center space-x-3 px-3 py-2 rounded-md text-foreground hover:text-community-warm hover:bg-gray-50 transition-colors">
                <Calendar className="w-4 h-4" />
                <span>Events</span>
              </button>
              <button onClick={() => { scrollToSection('community'); setIsMenuOpen(false); }} className="flex items-center space-x-3 px-3 py-2 rounded-md text-foreground hover:text-community-warm hover:bg-gray-50 transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span>Community</span>
              </button>
              <button onClick={() => { scrollToSection('leadership'); setIsMenuOpen(false); }} className="flex items-center space-x-3 px-3 py-2 rounded-md text-foreground hover:text-community-warm hover:bg-gray-50 transition-colors">
                <Users className="w-4 h-4" />
                <span>Leadership</span>
              </button>
              <button onClick={() => { scrollToSection('membership'); setIsMenuOpen(false); }} className="flex items-center space-x-3 px-3 py-2 rounded-md text-foreground hover:text-community-warm hover:bg-gray-50 transition-colors">
                <Heart className="w-4 h-4" />
                <span>Membership</span>
              </button>
              <button onClick={() => { scrollToSection('business'); setIsMenuOpen(false); }} className="flex items-center space-x-3 px-3 py-2 rounded-md text-foreground hover:text-community-warm hover:bg-gray-50 transition-colors">
                <Store className="w-4 h-4" />
                <span>Business</span>
              </button>
              <button onClick={() => { scrollToSection('welfare'); setIsMenuOpen(false); }} className="flex items-center space-x-3 px-3 py-2 rounded-md text-foreground hover:text-community-warm hover:bg-gray-50 transition-colors">
                <Heart className="w-4 h-4" />
                <span>Welfare</span>
              </button>
              <div className="pt-2 border-t border-border">
                <Button onClick={() => { scrollToSection('join-form'); setIsMenuOpen(false); }} variant="community" size="sm" className="w-full">Join MCNSW</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
