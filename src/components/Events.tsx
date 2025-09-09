import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users, ArrowRight, Heart, MessageCircle } from "lucide-react";
import { ADDRESS_LINE_1, ADDRESS_LINE_2, PHONE_DISPLAY, PHONE_TEL, EMAIL } from "@/constants/contact";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Chris’s Birthday Party 🎉",
      date: "September 14, 2025",
      time: "3:00 PM till late",
      location: "Parramatta",
      attendees: 50,
      description: "Come and celebrate with us as we join our brother Chris for his birthday party! 🎂🎶 Community & friends invited."
    },
    {
      title: "End of Year Mulembe Community Gathering 🎉",
      date: "December 14, 2025",
      time: "2:00 PM till late",
      location: "Henry Lawson Dr, Lansdowne NSW",
      attendees: 120,
      description: "Join us for our final community gathering of the year — discussions, updates, food, and fellowship as we celebrate our achievements and unity. 🍲 Please bring a Kenyan dish to share."
    }
  ];


  return (
    <section id="events" className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Community{" "}
            <span className="bg-gradient-to-r from-community-warm to-community-sky bg-clip-text text-transparent">
              Events & Activities
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay connected with neighbors through our regular events and activities. 
            There's always something happening in Hearthstone Village!
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <Calendar className="w-6 h-6 mr-2 text-community-warm" />
            Upcoming Events
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="group hover:shadow-[var(--shadow-clean)] transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-community-warm transition-colors">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Calendar className="w-4 h-4 mr-2 text-community-warm" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="w-4 h-4 mr-2 text-community-sky" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="w-4 h-4 mr-2 text-community-earth" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm">
                      <Users className="w-4 h-4 mr-2 text-community-warm" />
                      {event.attendees} attending
                    </div>
                  </div>

                  <Button variant="communityOutline" size="sm" className="w-full group">
                    RSVP Now
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Culture & Heritage */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <Heart className="w-6 h-6 mr-2 text-luhya-red" />
            Culture & Heritage
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Sub-tribes Spotlight */}
            <Card className="group hover:shadow-[var(--shadow-clean)] transition-all duration-300 border-luhya-gold/20">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-luhya-gold to-luhya-green rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-3 text-luhya-navy">Sub-tribes Spotlight</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Discover the rich diversity of Luhya sub-tribes: Bukusu, Maragoli, Wanga, Tiriki, and more.
                </p>
                <div className="text-xs text-luhya-gold font-medium">
                  Learn about traditions, customs, and unique practices of each sub-tribe.
                </div>
              </CardContent>
            </Card>

            {/* Taste of Home */}
            <Card className="group hover:shadow-[var(--shadow-clean)] transition-all duration-300 border-luhya-green/20">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-luhya-green to-luhya-red rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-3 text-luhya-navy">Taste of Home</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Authentic recipes and food memories: Chapati, ugali, ingokho, and traditional Luhya dishes.
                </p>
                <div className="text-xs text-luhya-green font-medium">
                  Share recipes, cooking tips, and stories behind our favorite meals.
                </div>
              </CardContent>
            </Card>

            {/* Sounds & Stories */}
            <Card className="group hover:shadow-[var(--shadow-clean)] transition-all duration-300 border-luhya-red/20">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-luhya-red to-luhya-navy rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-3 text-luhya-navy">Sounds & Stories</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Traditional music, drumming, isukuti rhythms, proverbs, and folktales passed down through generations.
                </p>
                <div className="text-xs text-luhya-red font-medium">
                  Experience the rhythm and wisdom of our cultural heritage.
                </div>
              </CardContent>
            </Card>

            {/* Language Corner */}
            <Card className="group hover:shadow-[var(--shadow-clean)] transition-all duration-300 border-luhya-navy/20">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-luhya-navy to-luhya-gold rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-3 text-luhya-navy">Language Corner</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Common Luhya greetings and phrases with pronunciations. (Working on this - liaising with people back home).
                </p>
                <div className="text-xs text-luhya-navy font-medium">
                  Keep our language alive and accessible to the next generation.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-luhya-gold/10 to-luhya-green/10 p-8 rounded-2xl border border-luhya-gold/20">
          <h3 className="text-2xl font-bold mb-4 text-luhya-navy">Explore Our Heritage</h3>
          <p className="text-muted-foreground mb-6">
            Dive deeper into our rich Luhya culture and traditions. Join us in preserving and celebrating our heritage.
          </p>
          <Button variant="community" size="lg">
            Explore Our Heritage
          </Button>
          <div className="mt-6 text-sm text-muted-foreground">
            <p>{ADDRESS_LINE_1}</p>
            <p>{ADDRESS_LINE_2}</p>
            <p>
              <a href={`tel:${PHONE_TEL}`} className="underline hover:no-underline">{PHONE_DISPLAY}</a>
               <br/>
              <a href={`mailto:${EMAIL}`} className="underline hover:no-underline">{EMAIL}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
