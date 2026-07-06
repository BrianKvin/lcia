import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CULTURE_AREAS } from "@/constants/culture";

const CultureHeritageCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
      {CULTURE_AREAS.map((area) => (
        <Link
          key={area.id}
          to={area.path}
          className="group block min-w-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-luhya-gold focus-visible:ring-offset-2 rounded-xl"
          aria-label={`Explore ${area.title}`}
        >
          <Card
            className={`h-full overflow-hidden border-2 transition-all duration-300 motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:shadow-xl active:scale-[0.99] ${area.borderColor} ${area.hoverGlow}`}
          >
            <CardContent className="flex h-full flex-col p-5 sm:p-6 md:p-8">
              <div
                className={`mb-4 sm:mb-5 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-gradient-to-br ${area.iconGradient} shadow-md transition-transform duration-300 motion-safe:group-hover:scale-110`}
              >
                <area.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" aria-hidden />
              </div>

              <h4 className="mb-2 sm:mb-3 text-lg sm:text-xl font-semibold text-luhya-navy group-hover:text-community-warm transition-colors break-words">
                {area.title}
              </h4>

              <p className="mb-5 sm:mb-6 flex-1 text-sm sm:text-base text-muted-foreground leading-relaxed break-words">
                {area.teaser}
              </p>

              <span className="inline-flex items-center min-h-11 text-sm font-medium text-luhya-gold group-hover:text-luhya-red transition-colors">
                Explore
                <ArrowRight className="ml-2 h-4 w-4 shrink-0 transition-transform motion-safe:group-hover:translate-x-1" aria-hidden />
              </span>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default CultureHeritageCards;
