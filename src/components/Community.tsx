import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, MessageCircle, Phone, Mail } from "lucide-react";
import { ADDRESS_LINE_1, ADDRESS_LINE_2, PHONE_DISPLAY, PHONE_TEL, EMAIL } from "@/constants/contact";

const Community = () => {
  const testimonials = [
    {
      name: "Douglas Marango",
      role: "Community Member",
      content: "At last, we have a community of our own abroad! Being part of Mulembe Community NSW reminds me that even though we are far from Kenya, we have not forgotten our culture. These gatherings feel like home.",
      rating: 5
    },
    {
      name: "Brian Lupia",
      role: "Community Member",
      content: "The meetups are always filled with laughter, stories, and plenty of Kenyan food. Everyone brings something from home, and when we sit together to eat, it feels just like being back in the village.",
      rating: 5
    },
    {
      name: "Daisy",
      role: "Community Member",
      content: "For me, joining these gatherings has been a blessing for my mental health. It calms me, gives me joy, and makes me feel that even though I am away from home, I still have a second family here in Sydney.",
      rating: 5
    },
    {
      name: "Loven",
      role: "Community Member",
      content: "Every time we meet, we not only celebrate our culture but also encourage one another—whether it's supporting businesses, sharing ideas, or simply enjoying each other's company. It's a good initiative that strengthens our unity as Luhyas.",
      rating: 5
    }
  ];

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "Community Forum",
      description: "Join our online discussions",
      action: "Visit Forum"
    },
    {
      icon: Phone,
      title: "Community Office",
      description: "(555) 123-4567",
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "hello@hearthstonevillage.com",
      action: "Send Email"
    }
  ];

  return (
    <section id="community" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-luhya-red to-luhya-green bg-clip-text text-transparent">
              Community Members Say
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our members who have found connection, culture, and belonging 
            in the Mulembe Community NSW.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-[var(--shadow-clean)] transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-community-warm text-community-warm" />
                  ))}
                </div>
                
                <div className="relative mb-4">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-community-warm-light" />
                  <p className="text-muted-foreground pl-6 italic">
                    "{testimonial.content}"
                  </p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-community-warm to-community-sky rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-card rounded-2xl p-8 border border-border">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Our Community?</h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We'd love to welcome you to Hearthstone Village. Get in touch to learn 
              more about our community and how to become a resident.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-community-warm-light to-community-sky-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <method.icon className="w-8 h-8 text-community-earth" />
                </div>
                <h4 className="font-semibold mb-2">{method.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                <Button variant="communityOutline" size="sm">
                  {method.action}
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center text-sm text-muted-foreground mb-4">
            <p>{ADDRESS_LINE_1}</p>
            <p>{ADDRESS_LINE_2}</p>
            <p>
              <a href={`tel:${PHONE_TEL}`} className="underline hover:no-underline">{PHONE_DISPLAY}</a>
               <br/>
              <a href={`mailto:${EMAIL}`} className="underline hover:no-underline">{EMAIL}</a>
            </p>
          </div>

          <div className="text-center">
            <Button variant="hero" size="lg" className="px-12">
              Schedule a Community Tour
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
