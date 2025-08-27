import { Button } from "@/components/ui/button";
import { Menu, X, Calendar, MessageCircle, Home, Heart } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img 
              src="/lcia-logo.jpg" 
              alt="Mulembe Community NSW Logo" 
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold text-foreground">Mulembe Community</span>
              <span className="text-xs text-muted-foreground">NSW, Australia</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="flex items-center space-x-2 text-foreground hover:text-community-warm transition-colors">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </a>
            <a href="#about" className="text-foreground hover:text-community-warm transition-colors">About</a>
            <a href="#events" className="flex items-center space-x-2 text-foreground hover:text-community-warm transition-colors">
              <Calendar className="w-4 h-4" />
              <span>Events</span>
            </a>
            <a href="#community" className="flex items-center space-x-2 text-foreground hover:text-community-warm transition-colors">
              <MessageCircle className="w-4 h-4" />
              <span>Community</span>
            </a>
            <a href="#welfare" className="flex items-center space-x-2 text-foreground hover:text-community-warm transition-colors">
              <Heart className="w-4 h-4" />
              <span>Welfare</span>
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="community">Join LCIA</Button>
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
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="flex items-center space-x-2 text-foreground hover:text-community-warm transition-colors">
                <Home className="w-4 h-4" />
                <span>Home</span>
              </a>
              <a href="#about" className="text-foreground hover:text-community-warm transition-colors">About</a>
              <a href="#events" className="flex items-center space-x-2 text-foreground hover:text-community-warm transition-colors">
                <Calendar className="w-4 h-4" />
                <span>Events</span>
              </a>
              <a href="#community" className="flex items-center space-x-2 text-foreground hover:text-community-warm transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span>Community</span>
              </a>
              <a href="#welfare" className="flex items-center space-x-2 text-foreground hover:text-community-warm transition-colors">
                <Heart className="w-4 h-4" />
                <span>Welfare</span>
              </a>
              <Button variant="community" className="w-fit">Join LCIA</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
