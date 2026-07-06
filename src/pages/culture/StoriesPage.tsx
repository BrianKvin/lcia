import { useState } from "react";
import CulturePageLayout from "@/components/CulturePageLayout";
import { ADULT_STORY, KIDS_STORY } from "@/constants/stories";
import type { StoryVersion } from "@/constants/stories";

const StoriesPage = () => {
  const [activeStory, setActiveStory] = useState<StoryVersion>("adult");
  const story = activeStory === "adult" ? ADULT_STORY : KIDS_STORY;

  return (
    <CulturePageLayout
      title="Stories & Folktales"
      subtitle="Traditional folktales, proverbs, and stories passed down through generations."
    >
      <div className="flex flex-col sm:flex-row gap-3 mb-6 sm:mb-8">
        <button
          type="button"
          onClick={() => setActiveStory("adult")}
          className={`w-full sm:w-auto min-h-11 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
            activeStory === "adult"
              ? "bg-luhya-gold text-luhya-navy"
              : "bg-luhya-gold/15 text-luhya-navy hover:bg-luhya-gold/25"
          }`}
        >
          Adult version
        </button>
        <button
          type="button"
          onClick={() => setActiveStory("kids")}
          className={`w-full sm:w-auto min-h-11 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
            activeStory === "kids"
              ? "bg-luhya-green text-white"
              : "bg-luhya-green/15 text-luhya-navy hover:bg-luhya-green/25"
          }`}
        >
          Kids version
        </button>
      </div>

      <article className="rounded-xl border border-luhya-red/20 bg-white p-4 sm:p-6 md:p-8 shadow-sm min-w-0">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-luhya-navy mb-4 sm:mb-6 break-words">{story.title}</h2>
        <div className="whitespace-pre-line text-sm sm:text-base text-muted-foreground leading-relaxed break-words">
          {story.content}
        </div>
      </article>

      <p className="mt-8 text-sm font-medium text-luhya-red">
        Experience the wisdom and magic of our cultural heritage.
      </p>
    </CulturePageLayout>
  );
};

export default StoriesPage;
