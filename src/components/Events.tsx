import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Summer Family BBQ",
      date: "August 15, 2024",
      time: "5:00 PM - 8:00 PM",
      location: "Community Park",
      attendees: 45,
      description: "Join us for our annual summer barbecue with games, food, and fun for the whole family!"
    },
    {
      title: "Children's Art Workshop",
      date: "August 22, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "Community Center",
      attendees: 18,
      description: "Creative art activities for kids ages 5-12. All materials provided!"
    },
    {
      title: "Neighborhood Watch Meeting",
      date: "August 28, 2024",
      time: "7:00 PM - 8:30 PM",
      location: "Community Hall",
      attendees: 32,
      description: "Monthly safety meeting to discuss community security and updates."
    }
  ];

  const regularActivities = [
    { name: "Morning Yoga", schedule: "Mon, Wed, Fri - 7:00 AM", location: "Park Pavilion" },
    { name: "Book Club", schedule: "First Tuesday - 7:00 PM", location: "Community Center" },
    { name: "Kids Playgroup", schedule: "Thu, Sat - 10:00 AM", location: "Playground" },
    { name: "Garden Club", schedule: "Sundays - 9:00 AM", location: "Community Garden" }
  ];

  return (
    <section id="events" className="py-20 bg-background">
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
              <Card key={index} className="group hover:shadow-[var(--shadow-soft)] transition-all duration-300">
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

        {/* Regular Activities */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <Clock className="w-6 h-6 mr-2 text-community-sky" />
            Regular Activities
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {regularActivities.map((activity, index) => (
              <Card key={index} className="hover:shadow-[var(--shadow-soft)] transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold mb-1">{activity.name}</h4>
                      <p className="text-sm text-muted-foreground mb-1">{activity.schedule}</p>
                      <p className="text-sm text-community-warm">{activity.location}</p>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-community-warm-light to-community-sky-light rounded-lg flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-community-earth" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-community-warm-light to-community-sky-light p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">Want to Organize an Event?</h3>
          <p className="text-muted-foreground mb-6">
            Have an idea for a community event? We'd love to hear from you!
          </p>
          <Button variant="community" size="lg">
            Contact Event Committee
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Events;
