import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Heart, Users, MapPin } from "lucide-react";

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Cultural Heritage Day 2024",
      description: "Celebrating our rich Luhya traditions with traditional dances and music",
      category: "Cultural Events",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      date: "March 2024"
    },
    {
      id: 2,
      title: "Community Harambee",
      description: "Coming together to support one of our families in need",
      category: "Community Support",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop",
      date: "February 2024"
    },
    {
      id: 3,
      title: "Children's Day Celebration",
      description: "Young ones learning about their heritage through storytelling",
      category: "Youth Programs",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=400&fit=crop",
      date: "January 2024"
    },
    {
      id: 4,
      title: "Traditional Cooking Workshop",
      description: "Mothers teaching the preparation of authentic Luhya dishes",
      category: "Cultural Workshops",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      date: "December 2023"
    },
    {
      id: 5,
      title: "Wedding Celebration",
      description: "Beautiful traditional Luhya wedding ceremony with the community",
      category: "Life Events",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
      date: "November 2023"
    },
    {
      id: 6,
      title: "Annual Sports Day",
      description: "Friendly competition and unity through sports activities",
      category: "Recreation",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      date: "October 2023"
    }
  ];

  const categories = ["All", "Cultural Events", "Community Support", "Youth Programs", "Cultural Workshops", "Life Events", "Recreation"];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Community{" "}
            <span className="bg-gradient-to-r from-luhya-gold to-luhya-green bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Moments of joy, unity, and cultural celebration captured throughout our journey as the Mulembe Community in NSW.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "community" : "outline"}
              size="sm"
              className="hover:scale-105 transition-transform"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {galleryItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-[var(--shadow-warm)] transition-all duration-500 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2 text-sm">
                    <Camera className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-luhya-gold/20 text-luhya-gold px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-luhya-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      <span>24</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span>Community</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-luhya-gold hover:text-luhya-gold hover:bg-luhya-gold/10">
                    View Full
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-luhya-gold to-luhya-green rounded-full flex items-center justify-center mx-auto mb-4">
              <Camera className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl font-bold text-luhya-gold">500+</div>
            <div className="text-sm text-muted-foreground">Photos Captured</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-luhya-green to-luhya-red rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl font-bold text-luhya-green">50+</div>
            <div className="text-sm text-muted-foreground">Events Documented</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-luhya-red to-luhya-navy rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl font-bold text-luhya-red">1000+</div>
            <div className="text-sm text-muted-foreground">Memories Made</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-luhya-navy to-luhya-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl font-bold text-luhya-navy">8+</div>
            <div className="text-sm text-muted-foreground">Years Together</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-luhya-gold/10 to-luhya-green/10 p-8 rounded-2xl border border-luhya-gold/20">
          <h3 className="text-2xl font-bold mb-4">Share Your Moments</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Have photos from our community events? We'd love to feature them in our gallery. Help us preserve our beautiful memories together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="community" size="lg">
              Submit Photos
            </Button>
            <Button variant="outline" size="lg">
              Download Gallery
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
