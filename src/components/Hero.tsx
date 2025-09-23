import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users } from "lucide-react";
import heroImg from "@/assets/image (4).jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 sm:pt-24 pb-16 sm:pb-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              {/* Main Title */}
              <div className="space-y-2">
                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                  Welcome to Mulembe Community NSW, Australia
                </h1>
              </div>
              
              <div className="space-y-4 text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                <p>
                  Far from the rolling hills and rich traditions of Western Kenya, the spirit of the Luhya people continues to thrive here in New South Wales. What began with a handful of friends longing to stay connected to their roots has grown into a vibrant and diverse community that brings together all Luhya sub-tribes under one roof.
                </p>
                <p>
                  Join our growing family of 200+ members representing all 18 Luhya sub-tribes, united in preserving our cultural heritage while building meaningful connections in our new home.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
              <div className="text-center">
                <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-luhya-red">200+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Members</div>
              </div>
              <div className="text-center">
                <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-luhya-green">18</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Sub-tribes</div>
              </div>
              <div className="text-center">
                <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-luhya-navy">3+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Years Strong</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button onClick={() => scrollToSection('join-form')} variant="hero" size="lg" className="group text-sm sm:text-base">
                Become a Member
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button onClick={() => scrollToSection('about')} variant="communityOutline" size="lg" className="group text-sm sm:text-base">
                <Heart className="w-4 h-4" />
                Learn More
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-clean)]">
              <img
                src={heroImg}
                alt="Vibrant family community gathering and celebration"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 lg:-bottom-6 lg:-left-6 bg-card p-3 sm:p-4 lg:p-6 rounded-xl shadow-[var(--shadow-clean)] border border-border max-w-[calc(100%-1rem)] sm:max-w-none">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-luhya-red to-luhya-green rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-sm sm:text-base">Vibrant Culture</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Preserving our heritage</div>
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
