import { Card, CardContent } from "@/components/ui/card";
import { Users, Shield, Heart, DollarSign, FileText } from "lucide-react";
// Explicitly import as a URL to satisfy TS image typing
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import chairImg from "@/assets/IMG_3862120.JPEG";

const Leadership = () => {
  const leadershipTeam = [
    {
      name: "Elizabeth Khisa",
      position: "Chairperson",
      icon: Users,
      description: "Leading our community with wisdom and vision, ensuring our cultural heritage thrives in NSW."
    },
    {
      name: "Joseph Ikatanyi", 
      position: "Vice Chairperson",
      icon: Shield,
      description: "Supporting our community's growth and strengthening the bonds that unite all Luhya sub-tribes."
    },
    {
      name: "Melanie Odundo",
      position: "Secretary General", 
      icon: FileText,
      description: "Managing our community communications and ensuring smooth operations of all our activities."
    },
    {
      name: "Douglas Marango",
      position: "Treasurer",
      icon: DollarSign,
      description: "Overseeing our community finances and welfare fund with transparency and accountability."
    },
    {
      name: "Natalia Andati",
      position: "Public Officer",
      icon: Heart,
      description: "Representing our community publicly and fostering connections with the broader Australian society."
    }
  ];

  return (
    <section id="leadership" className="py-20 bg-gradient-to-b from-white to-luhya-cream/20 scroll-mt-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-luhya-navy to-luhya-gold bg-clip-text text-transparent">
              Leadership Team
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated leaders who guide our community with passion, integrity, and commitment to preserving our Luhya heritage.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {leadershipTeam.map((leader, index) => {
            // Generate initials from name
            const getInitials = (name: string) => {
              return name.split(' ').map(n => n[0]).join('').toUpperCase();
            };

            return (
              <Card key={index} className="group hover:shadow-[var(--shadow-clean)] transition-all duration-300 border-luhya-gold/20">
                <CardContent className="p-6 text-center">
                  {/* Profile Avatar */}
                  <div className="w-32 h-32 mx-auto mb-4">
                    {/* Background circle with gradient */}
                    <div className="w-32 h-32 bg-gradient-to-br from-luhya-gold to-luhya-green rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg overflow-hidden">
                      {leader.name === "Elizabeth Khisa" ? (
                        <img
                          src={chairImg}
                          alt={`${leader.name} - ${leader.position}`}
                          className="w-28 h-28 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-inner">
                          <span className="text-2xl font-bold text-luhya-navy">
                            {getInitials(leader.name)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2 text-luhya-navy">
                    {leader.name}
                  </h3>
                  
                  <div className="text-sm font-medium text-luhya-gold mb-3">
                    {leader.position}
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {leader.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-luhya-navy/10 to-luhya-gold/10 p-8 rounded-2xl border border-luhya-navy/20">
          <h3 className="text-2xl font-bold mb-4 text-luhya-navy">Get to Know Our Leaders</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our leadership team is always available to answer questions, provide support, and welcome new members to our community.
          </p>
          <div className="text-sm text-muted-foreground">
            <p>Contact any of our leaders through our community channels</p>
            <p className="text-luhya-gold font-medium">mulembecommunitysydneyau@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
