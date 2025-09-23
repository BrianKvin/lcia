import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Calendar, Briefcase, Users2, ArrowRight } from "lucide-react";

const Membership = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const membershipBenefits = [
    {
      icon: Heart,
      title: "Welfare Support",
      description: "Comprehensive welfare fund providing financial and emotional support during times of need and bereavement",
      highlight: true
    },
    {
      icon: Calendar,
      title: "Four Meetups a Year",
      description: "Regular gatherings featuring food, music, language, and stories that bring our community together"
    },
    {
      icon: Briefcase,
      title: "Business & Career Support",
      description: "Networking opportunities and mutual support within our community for professional growth"
    },
    {
      icon: Users2,
      title: "Family-Friendly Activities",
      description: "Youth mentorship programs and activities that strengthen bonds across all generations"
    }
  ];

  return (
    <section id="membership" className="py-20 bg-gradient-to-b from-luhya-cream/30 to-white scroll-mt-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-luhya-red to-luhya-green bg-clip-text text-transparent">
              Membership
            </span>
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-luhya-navy mb-6">
            Be part of something that feels like home.
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our vibrant community and experience the warmth, support, and cultural richness that makes the Mulembe Community NSW a true home away from home.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {membershipBenefits.map((benefit, index) => (
            <Card key={index} className={`group hover:shadow-[var(--shadow-clean)] transition-all duration-300 ${
              benefit.highlight 
                ? 'border-luhya-red/30 bg-gradient-to-br from-luhya-red/5 to-luhya-gold/5' 
                : 'border-luhya-gold/20'
            }`}>
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 ${
                  benefit.highlight
                    ? 'bg-gradient-to-br from-luhya-red to-luhya-gold'
                    : 'bg-gradient-to-br from-luhya-gold to-luhya-green'
                }`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className={`font-semibold text-lg mb-3 ${
                  benefit.highlight ? 'text-luhya-red' : 'text-luhya-navy'
                }`}>
                  {benefit.title}
                </h4>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-luhya-red/10 to-luhya-gold/10 p-8 rounded-2xl border border-luhya-red/20">
          <h3 className="text-2xl font-bold mb-4 text-luhya-navy">Ready to Join Our Family?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Become a member of the Mulembe Community NSW and connect with your heritage while building lasting relationships in Australia.
          </p>
          <Button onClick={() => scrollToSection('join-form')} variant="community" size="lg" className="group">
            Become a Member
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Membership;
