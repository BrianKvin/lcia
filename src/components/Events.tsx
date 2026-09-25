import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Users, CheckCircle2 } from "lucide-react";
import CultureHeritageCards from "@/components/CultureHeritageCards";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import midYearCatchupPoster from "@/assets/Mid-Year catchup.jpeg";

const Events = () => {
  const upcomingEvents: Array<{
    title: string;
    date: string;
    time: string;
    location: string;
    attendees: string;
    description: string;
    image?: string;
  }> = [
    {
      title: "Mulembe Community Mid-Year Catch Up",
      date: "July 4, 2026",
      time: "2:00 PM",
      location: "Venue details will be shared with members",
      attendees: "All members and guests welcome",
      description:
        "Join us for our mid-year gathering: food, music, reconnecting with friends, and celebrating our community together.",
      image: midYearCatchupPoster,
    },
    {
      title: "Community Elections",
      date: "December 2026",
      time: "To be announced",
      location: "Details will be communicated to members",
      attendees: "Eligible members",
      description:
        "Coming up: community elections to choose a new leadership team. Watch this space for dates, nomination information, and how to take part.",
    },
  ];

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
            <div className="grid md:grid-cols-2 gap-6">
              {upcomingEvents.map((event, index) => (
                <Card
                  key={index}
                  className={`group hover:shadow-[var(--shadow-clean)] transition-all duration-300 overflow-hidden ${
                    event.image ? "md:col-span-2" : ""
                  }`}
                >
                  {event.image ? (
                    <div className="flex flex-col md:flex-row min-w-0">
                      <div className="w-full md:w-2/5 lg:w-2/5 shrink-0 bg-muted/40 flex items-center justify-center p-3 sm:p-4 md:p-6">
                        <img
                          src={event.image}
                          alt={`${event.title} poster`}
                          className="w-full max-w-[280px] sm:max-w-sm md:max-w-none mx-auto h-auto object-contain rounded-md"
                        />
                      </div>
                      <div className="flex flex-1 flex-col min-w-0 p-4 sm:p-6 md:p-8">
                        <CardTitle className="text-lg sm:text-xl md:text-2xl mb-3 group-hover:text-community-warm transition-colors break-words">
                          {event.title}
                        </CardTitle>
                        <p className="text-sm sm:text-base text-muted-foreground mb-5 break-words">{event.description}</p>
                        <div className="space-y-2 sm:space-y-3 mt-auto">
                          <div className="flex items-center gap-2 text-sm sm:text-base min-w-0">
                            <Calendar className="w-4 h-4 shrink-0 text-community-warm" />
                            <span className="break-words">{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm sm:text-base min-w-0">
                            <Clock className="w-4 h-4 shrink-0 text-community-sky" />
                            <span className="break-words">{event.time}</span>
                          </div>
                          <div className="flex items-start gap-2 text-sm sm:text-base min-w-0">
                            <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-community-earth" />
                            <span className="break-words">{event.location}</span>
                          </div>
                          <div className="flex items-start gap-2 text-sm sm:text-base min-w-0">
                            <Users className="w-4 h-4 mt-0.5 shrink-0 text-community-warm" />
                            <span className="break-words">{event.attendees} attending</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
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
        <div className="mt-6 border-t pt-6">
<h4 className="text-lg font-semibold text-center mb-4">
🎟️ Get Your Tickets
</h4>

<div className="flex flex-col sm:flex-row gap-3 justify-center">
<a
href="https://buy.stripe.com/aFa5kxcEI9p12pMfZ0bQY00"
target="_blank"
rel="noopener noreferrer"
className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
>
Early Bird — $90
</a>

<a
href="https://buy.stripe.com/7sYfZb0w0gRt3tQ8wybQY02"
target="_blank"
rel="noopener noreferrer"
className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
>
Standard — $100
</a>

<a
href="https://buy.stripe.com/5kQ8wJfqUgRt80a28abQY01"
target="_blank"
rel="noopener noreferrer"
className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
>
Group of 4 — $380
</a>
</div>
</div>              </CardContent>
                    </>
                  )}
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
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 sm:mb-12 flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
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
          <CultureHeritageCards />
        </div>

      </div>
    </section>
    </>
  );
};

export default Events;
