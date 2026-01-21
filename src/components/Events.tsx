import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users, ArrowRight, Heart, MessageCircle, CheckCircle2 } from "lucide-react";
import StoriesModal from "@/components/StoriesModal";
import { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Events = () => {
  const [isStoriesModalOpen, setIsStoriesModalOpen] = useState(false);
  const [selectedStoryType, setSelectedStoryType] = useState<'adult' | 'kids'>('adult');

  const openStory = (type: 'adult' | 'kids') => {
    setSelectedStoryType(type);
    setIsStoriesModalOpen(true);
  };

  const upcomingEvents: Array<{
    title: string;
    date: string;
    time: string;
    location: string;
    attendees: string;
    description: string;
  }> = [];

  const pastEvents: Array<{
    title: string;
    date: string;
    time: string;
    location: string;
    attendees: string;
    description: string;
  }> = [
    {
      title: "End of Year Mulembe Community Meetup 🎉",
      date: "December 13, 2025",
      time: "2:00 PM till late",
      location: "Henry Lawson Dr, Lansdowne NSW",
      attendees: "60+",
      description: "Join us for our final community gathering of the year — discussions, updates, food, and fellowship as we celebrate our achievements and unity. 🍲 Please bring a Kenyan dish to share."
    }
  ];


  return (
    <>
      <section id="events" className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex-shrink-0">
              <DotLottieReact
                src="/Calendar.json"
                loop
                autoplay
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
              <span>Community,</span>
              <span className="bg-gradient-to-r from-community-warm to-community-sky bg-clip-text text-transparent">
                Events & Activities
              </span>
            </div>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay connected with neighbors through our regular events and activities. 
            There's always something happening in Hearthstone Village!
          </p>
        </div>

        {/* Upcoming Events */}
        {upcomingEvents.length > 0 && (
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
        )}

        {/* Past Events */}
        {pastEvents.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <CheckCircle2 className="w-6 h-6 mr-2 text-muted-foreground" />
              Past Events
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event, index) => (
                <Card key={index} className="group hover:shadow-[var(--shadow-clean)] transition-all duration-300 opacity-90">
                  <CardHeader>
                    <CardTitle className="text-lg text-muted-foreground group-hover:text-foreground transition-colors">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm">
                        <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="w-4 h-4 mr-2 text-muted-foreground" />
                        {event.attendees} attended
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Culture & Heritage */}
        <div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex-shrink-0">
              <DotLottieReact
                src="/Pepa Hover Effect.json"
                loop
                autoplay
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <span>Culture & Heritage</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Sub-tribes Spotlight */}
            <Card className="group hover:shadow-[var(--shadow-clean)] transition-all duration-300 border-luhya-gold/20">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-luhya-gold to-luhya-green rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-3 text-luhya-navy">🌿 Sub-tribes Spotlight</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Discover the rich diversity of Luhya sub-tribes and their unique cultural heritage.
                </p>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  <div className="text-xs space-y-2">
                    <div className="border-l-2 border-luhya-gold pl-3">
                      <div className="font-semibold text-luhya-navy">1. Bukusu</div>
                      <div className="text-muted-foreground">Bungoma & Mt. Elgon • Lubukusu • Famous for bravery, colorful initiation ceremonies, and strong community bonds.</div>
                    </div>
                    <div className="border-l-2 border-luhya-green pl-3">
                      <div className="font-semibold text-luhya-navy">2. Maragoli (Logoli)</div>
                      <div className="text-muted-foreground">Vihiga County • Lulogooli • Known for tea farming, ancestor naming traditions, and cultural preservation abroad.</div>
                    </div>
                    <div className="border-l-2 border-luhya-red pl-3">
                      <div className="font-semibold text-luhya-navy">3. Wanga (Abawanga)</div>
                      <div className="text-muted-foreground">Mumias & Matungu • Unique kingdom with Nabongo leadership • Blend of traditional values and modern influences.</div>
                    </div>
                    <div className="border-l-2 border-luhya-gold pl-3">
                      <div className="font-semibold text-luhya-navy">4. Kabras</div>
                      <div className="text-muted-foreground">Malava, Kakamega • Lukabarasi • Known for adaptability and sugarcane farming.</div>
                    </div>
                    <div className="border-l-2 border-luhya-green pl-3">
                      <div className="font-semibold text-luhya-navy">5. Idakho</div>
                      <div className="text-muted-foreground">Ikolomani, Kakamega • Lwidakho • UNESCO-recognized Isukuti drumming custodians.</div>
                    </div>
                    <div className="border-l-2 border-luhya-red pl-3">
                      <div className="font-semibold text-luhya-navy">6. Isukha</div>
                      <div className="text-muted-foreground">Neighbors to Idakho • Lwisukha • Rich oral traditions and Isukuti dance custodians.</div>
                    </div>
                    <div className="border-l-2 border-luhya-gold pl-3">
                      <div className="font-semibold text-luhya-navy">7. Tsotso (Abatsotso)</div>
                      <div className="text-muted-foreground">Western Kakamega • Farming-focused with vibrant clan networks and community ceremonies.</div>
                    </div>
                    <div className="border-l-2 border-luhya-green pl-3">
                      <div className="font-semibold text-luhya-navy">8. Tiriki (AbaTiriki)</div>
                      <div className="text-muted-foreground">Vihiga County • Ludirichi • Highland region with strong community bonds and rich folklore.</div>
                    </div>
                    <div className="border-l-2 border-luhya-red pl-3">
                      <div className="font-semibold text-luhya-navy">9. Kisa (Abakisa)</div>
                      <div className="text-muted-foreground">Khwisero, Butere-Mumias • Olushisa • Famous for Isukuti drums in celebrations.</div>
                    </div>
                    <div className="border-l-2 border-luhya-gold pl-3">
                      <div className="font-semibold text-luhya-navy">10. Khayo</div>
                      <div className="text-muted-foreground">Busia County • Lukhayo • Cross-border culture with Uganda, fishing and trade focus.</div>
                    </div>
                    <div className="border-l-2 border-luhya-green pl-3">
                      <div className="font-semibold text-luhya-navy">11. Samia</div>
                      <div className="text-muted-foreground">Busia County • Lusamia • Lake Victoria culture with fishing, boat-building, and colorful ceremonies.</div>
                    </div>
                    <div className="border-l-2 border-luhya-red pl-3">
                      <div className="font-semibold text-luhya-navy">12. Marachi</div>
                      <div className="text-muted-foreground">Busia County • Lumarachi • Warrior history with strong farming and fishing traditions.</div>
                    </div>
                    <div className="border-l-2 border-luhya-gold pl-3">
                      <div className="font-semibold text-luhya-navy">13. Nyala (Banyala)</div>
                      <div className="text-muted-foreground">Busia & Kakamega • Lunyala • Migration-shaped history with preserved ceremonies.</div>
                    </div>
                    <div className="border-l-2 border-luhya-green pl-3">
                      <div className="font-semibold text-luhya-navy">14. Marama (Abamarama)</div>
                      <div className="text-muted-foreground">Butere • Lumarama • Calm-natured with strong clan systems and farming traditions.</div>
                    </div>
                    <div className="border-l-2 border-luhya-red pl-3">
                      <div className="font-semibold text-luhya-navy">15. Tachoni</div>
                      <div className="text-muted-foreground">Lugari, Bungoma, Kakamega • Lutachoni • Proud warrior history with initiation ceremonies.</div>
                    </div>
                    <div className="border-l-2 border-luhya-gold pl-3">
                      <div className="font-semibold text-luhya-navy">16. Nyole (Abanyole)</div>
                      <div className="text-muted-foreground">Vihiga • Close-knit farming community with distinctive dialect and wedding traditions.</div>
                    </div>
                    <div className="border-l-2 border-luhya-green pl-3">
                      <div className="font-semibold text-luhya-navy">17. Banyore</div>
                      <div className="text-muted-foreground">Vihiga • Education-focused while preserving dialect, rituals, and clan ceremonies.</div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-gradient-to-r from-luhya-gold/10 to-luhya-green/10 rounded-lg border-l-4 border-luhya-gold">
                  <div className="text-xs text-luhya-navy font-medium">
                    ✨ Together, these sub-tribes form the beautiful mosaic of the Luhya nation — united by culture, language, and the belief that "Omundu khu mundu" (a person is because of other people).
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Taste of Home */}
            <Card className="group hover:shadow-[var(--shadow-clean)] transition-all duration-300 border-luhya-green/20">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-luhya-green to-luhya-red rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-3 text-luhya-navy">Taste of Home – Luhya Dishes</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Food is more than just a meal for the Luhya people — it is a story, a welcome, and a way of showing love. Every dish carries memories of childhood, family, visitors, and celebrations.
                </p>
                
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  <div className="text-xs space-y-2">
                    <div className="flex items-start space-x-2">
                      <span className="text-luhya-gold font-bold">✨</span>
                      <div>
                        <span className="font-semibold text-luhya-navy">Ugali (Obusuma)</span>
                        <span className="text-muted-foreground"> – The foundation of every meal. Made from maize flour, ugali gives strength and brings people together.</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-luhya-gold font-bold">✨</span>
                      <div>
                        <span className="font-semibold text-luhya-navy">Ingoho (Chicken)</span>
                        <span className="text-muted-foreground"> – A true delicacy! Served to guests of honor and during special occasions.</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-luhya-gold font-bold">✨</span>
                      <div>
                        <span className="font-semibold text-luhya-navy">Mrenda & Kunde</span>
                        <span className="text-muted-foreground"> – Traditional leafy vegetables, sticky and delicious, packed with nutrition.</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-luhya-gold font-bold">✨</span>
                      <div>
                        <span className="font-semibold text-luhya-navy">Obusera (Millet Porridge)</span>
                        <span className="text-muted-foreground"> – A refreshing, energizing drink that cools the body and restores energy.</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-luhya-gold font-bold">✨</span>
                      <div>
                        <span className="font-semibold text-luhya-navy">Busaa (Traditional Brew)</span>
                        <span className="text-muted-foreground"> – Brewed from millet or sorghum, more than a drink; it's about togetherness and storytelling.</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-luhya-gold font-bold">✨</span>
                      <div>
                        <span className="font-semibold text-luhya-navy">Isindu (Beans Stew)</span>
                        <span className="text-muted-foreground"> – Simple but hearty, giving families strength during farming seasons.</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-luhya-gold font-bold">✨</span>
                      <div>
                        <span className="font-semibold text-luhya-navy">Chapati</span>
                        <span className="text-muted-foreground"> – Soft, golden, and festive. Marks celebrations like Christmas and weddings.</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-luhya-gold font-bold">✨</span>
                      <div>
                        <span className="font-semibold text-luhya-navy">Sweet Potatoes (Obukima)</span>
                        <span className="text-muted-foreground"> – A breakfast favorite, full of childhood memories.</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-luhya-gold font-bold">✨</span>
                      <div>
                        <span className="font-semibold text-luhya-navy">Ugali & Sour Milk (Obusuma na Amalea)</span>
                        <span className="text-muted-foreground"> – Comfort food at its best, perfect after a long day of work.</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-luhya-gold font-bold">✨</span>
                      <div>
                        <span className="font-semibold text-luhya-navy">Omwoyo (Cowpeas/Black-eyed peas)</span>
                        <span className="text-muted-foreground"> – Rich in protein and history, sustained families in hard times.</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-luhya-gold font-bold">✨</span>
                      <div>
                        <span className="font-semibold text-luhya-navy">Emikimo (Mashed beans & pumpkin leaves)</span>
                        <span className="text-muted-foreground"> – Balanced and nourishing, a symbol of health and unity.</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-gradient-to-r from-luhya-gold/10 to-luhya-green/10 rounded-lg border-l-4 border-luhya-gold">
                  <div className="text-xs text-luhya-navy font-medium">
                    💛 To the Luhya, food is not just eaten — it is shared. It's how we celebrate, welcome guests, and remind ourselves that no one should sit alone at mealtime.
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stories and Folktales */}
            <Card className="group hover:shadow-[var(--shadow-clean)] transition-all duration-300 border-luhya-red/20">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-luhya-red to-luhya-navy rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-3 text-luhya-navy">Stories and Folktales</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Traditional folktales, proverbs, and stories passed down through generations.
                </p>
                
                {/* Adult Version */}
                <div 
                  className="mb-4 p-3 bg-luhya-gold/10 rounded-lg border-l-2 border-luhya-gold cursor-pointer hover:bg-luhya-gold/20 transition-colors"
                  onClick={() => openStory('adult')}
                >
                  <h5 className="font-semibold text-luhya-navy mb-2 text-sm">Adult Version</h5>
                  <div className="text-xs text-muted-foreground space-y-2 max-h-32 overflow-y-auto">
                    <p><strong>The Story of Sela – Mother of the People</strong></p>
                    <p>Long ago, before there were clans, villages, or the many voices of the Luhya people, there was silence across the earth. From this silence, the supreme god Were looked upon the land at a place called Mumbo...</p>
                    <p className="text-luhya-gold font-medium">Read the full story →</p>
                  </div>
                </div>

                {/* Kids Version */}
                <div 
                  className="mb-3 p-3 bg-luhya-green/10 rounded-lg border-l-2 border-luhya-green cursor-pointer hover:bg-luhya-green/20 transition-colors"
                  onClick={() => openStory('kids')}
                >
                  <h5 className="font-semibold text-luhya-navy mb-2 text-sm">Kids Version</h5>
                  <div className="text-xs text-muted-foreground space-y-2 max-h-32 overflow-y-auto">
                    <p><strong>🌟 The Story of Mwambu and Sela</strong></p>
                    <p>A long, long time ago, the world was quiet. There were no villages, no drums, no people. Only the land, the rivers, and the sky...</p>
                    <p className="text-luhya-green font-medium">Read the kids' story →</p>
                  </div>
                </div>

                <div className="text-xs text-luhya-red font-medium">
                  Experience the wisdom and magic of our cultural heritage.
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
                  Common Luhya greetings and phrases with pronunciations.
                </p>
                <div className="text-xs text-luhya-navy font-medium">
                  Keep our language alive and accessible to the next generation.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </section>

    {/* Stories Modal */}
    <StoriesModal 
      isOpen={isStoriesModalOpen}
      onClose={() => setIsStoriesModalOpen(false)}
      storyType={selectedStoryType}
    />
    </>
  );
};

export default Events;
