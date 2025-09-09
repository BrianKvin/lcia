import { Mail, Phone, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-community-earth text-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo & Motto */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/lcia-logo.jpg" 
                alt="Mulembe Community NSW Logo" 
                className="w-8 h-8 object-contain rounded-lg"
              />
              <span className="text-xl font-bold">Mulembe Community NSW</span>
            </div>
            <div className="space-y-3">
              <p className="text-white/80 text-sm">
                A vibrant community where neighbors become family and every day 
                brings new opportunities to connect, grow, and thrive together.
              </p>
              <p className="text-luhya-gold/90 text-sm italic font-medium">
                "From stories to songs to shared meals — there's a place for you here."
              </p>
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
              <li><a href="#leadership" className="text-white/80 hover:text-white transition-colors">Leadership</a></li>
              <li><a href="#membership" className="text-white/80 hover:text-white transition-colors">Membership</a></li>
              <li><a href="#business" className="text-white/80 hover:text-white transition-colors">Business Directory</a></li>
              <li><a href="#welfare" className="text-white/80 hover:text-white transition-colors">Welfare</a></li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="font-semibold mb-4">Contact & Legal</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-community-warm mt-0.5" />
                <span className="text-white/80">Unit 17/ 328 Woodville Road<br />Guildford, 2161 NSW</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-community-warm" />
                <a href="tel:+61410107026" className="text-white/80 hover:text-white transition-colors">+61 410 107 026</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-community-warm" />
                <a href="mailto:mulembecommunitysydneyau@gmail.com" className="text-white/80 hover:text-white transition-colors">Contact Us</a>
              </div>
              <div className="pt-2">
                <a href="#" className="text-white/80 hover:text-white transition-colors">Privacy Policy</a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="space-y-3">
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors group">
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors group">
                  <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors group">
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
              <div className="text-xs text-white/60 space-y-1">
                <div>WhatsApp</div>
                <div>Facebook</div>
                <div>Instagram</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">© 2024 Mulembe Community NSW. All rights reserved.</p>
            <p className="text-luhya-gold text-sm font-medium italic">
              Proudly preserving Luhya culture in NSW Australia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
