import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-community-earth text-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/lcia-logo.jpg" 
                alt="Mulembe Community NSW Logo" 
                className="w-8 h-8 object-contain rounded-lg"
              />
              <span className="text-xl font-bold">Mulembe Community NSW</span>
            </div>
            <p className="text-white/80 text-sm">
              A vibrant community where neighbors become family and every day 
              brings new opportunities to connect, grow, and thrive together.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#events" className="text-white/80 hover:text-white transition-colors">Events</a></li>
              <li><a href="#community" className="text-white/80 hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Amenities</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Policies</a></li>
            </ul>
          </div>

          {/* Community Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Community Center</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Event Planning</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Maintenance</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Newsletter</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Resident Portal</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-community-warm" />
                <span className="text-white/80">123 Community Lane<br />Hearthstone, ST 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-community-warm" />
                <span className="text-white/80">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-community-warm" />
                <span className="text-white/80">hello@hearthstonevillage.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2024 Mulembe Community NSW. All rights reserved. Built with ❤️ for our neighbors.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
