import { Card, CardContent } from "@/components/ui/card";
import { Home, Users, Sparkles, Shield, Heart, TreePine } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Home,
      title: "Cultural Heritage",
      description: "Preserving and celebrating our rich Luhya traditions and customs"
    },
    {
      icon: Users,
      title: "Unity & Brotherhood",
      description: "Building strong bonds among all 18 Luhya sub-tribes in NSW"
    },
    {
      icon: Sparkles,
      title: "Community Events",
      description: "Regular cultural celebrations that bring families together"
    },
    {
      icon: Shield,
      title: "Support System",
      description: "Emotional, social, and financial support for all members"
    },
    {
      icon: Heart,
      title: "Welfare Program",
      description: "Comprehensive assistance during times of need and bereavement"
    },
    {
      icon: TreePine,
      title: "Youth Development",
      description: "Empowering the next generation with cultural knowledge and values"
    }
  ];

  return (
    <section id="about" className="pt-24 pb-20 sm:pt-28 sm:pb-24 bg-white scroll-mt-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About the{" "}
            <span className="bg-gradient-to-r from-luhya-gold to-luhya-green bg-clip-text text-transparent">
              Mulembe Community NSW
            </span>
          </h2>
          <div className="text-lg text-muted-foreground max-w-4xl mx-auto space-y-4">
            <p>
              At the Mulembe Community, we gather four times a year to celebrate, share, and strengthen our heritage. Through music, dance, food, and storytelling, we preserve the beauty of our culture and pass it on to the next generation—even while abroad.
            </p>
            <p>
              We welcome all members of the Luhya community living in NSW to join us, connect with their heritage, and experience the power of belonging. Together, we celebrate who we are, where we come from, and the bonds that unite us—both in Kenya and here in Australia.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-[var(--shadow-clean)] transition-all duration-300 border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                 <div className="w-12 h-12 bg-gradient-to-br from-luhya-gold/20 to-luhya-green/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-luhya-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Community Values */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-8">Our Core Values</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6">
            <div className="space-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-luhya-gold to-luhya-green rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold">Unity</h4>
              <p className="text-sm text-muted-foreground">Stronger together</p>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-luhya-green to-luhya-red rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold">Strength</h4>
              <p className="text-sm text-muted-foreground">Resilient community</p>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-luhya-red to-luhya-navy rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold">Respect</h4>
              <p className="text-sm text-muted-foreground">Honor for all</p>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-luhya-navy to-luhya-cream rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold">Responsibility</h4>
              <p className="text-sm text-muted-foreground">Accountable actions</p>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-luhya-cream to-luhya-gold rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold">Transparency</h4>
              <p className="text-sm text-muted-foreground">Open communication</p>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-luhya-gold to-luhya-green rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold">Compassion</h4>
              <p className="text-sm text-muted-foreground">Care for others</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
