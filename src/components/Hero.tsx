import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-luhya-red font-medium">
                <MapPin className="w-4 h-4" />
                <span>Mulembe Community NSW, Australia</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-luhya-red to-luhya-green bg-clip-text text-transparent">
                  Culture.
                </span>{" "}
                <span className="bg-gradient-to-r from-luhya-green to-luhya-navy bg-clip-text text-transparent">
                  Strength.
                </span>{" "}
                <span className="bg-gradient-to-r from-luhya-navy to-luhya-gold bg-clip-text text-transparent">
                  Unity.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Empowering and bringing the Mulembe community together abroad while preserving our rich 
                cultural heritage. Join us in maintaining the bonds that connect us to our roots and to each other.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-luhya-red">500+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Members</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-luhya-green">18</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Sub-tribes</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-luhya-navy">10+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Years Strong</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Become a Member
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="communityOutline" size="lg" className="group">
                <Heart className="w-4 h-4" />
                Learn More
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-soft)]">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=500&fit=crop"
                alt="Hearthstone Village community gathering with families enjoying time together"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-card p-4 sm:p-6 rounded-xl shadow-[var(--shadow-soft)] border border-border">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-luhya-red to-luhya-green rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Vibrant Culture</div>
                  <div className="text-sm text-muted-foreground">Preserving our heritage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
