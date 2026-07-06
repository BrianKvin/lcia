import CulturePageLayout from "@/components/CulturePageLayout";
import { LANGUAGE_CLOSING, LANGUAGE_INTRO, LANGUAGE_TOPICS } from "@/constants/culture";

const LanguagePage = () => {
  return (
    <CulturePageLayout
      title="Language Corner"
      subtitle={LANGUAGE_INTRO}
    >
      <ul className="space-y-5 mb-8">
        {LANGUAGE_TOPICS.map((topic) => (
          <li
            key={topic.title}
            className={`rounded-xl border border-luhya-navy/10 bg-white p-4 sm:p-5 md:p-6 border-l-4 ${topic.borderColor} shadow-sm min-w-0`}
          >
            <h2 className="font-semibold text-base sm:text-lg text-luhya-navy mb-2 break-words">{topic.title}</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed break-words">{topic.description}</p>
          </li>
        ))}
      </ul>

      <div className="rounded-xl border border-dashed border-luhya-navy/25 bg-muted/30 p-5 sm:p-6 mb-6">
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          Dialects vary across sub-tribes. At meetups we learn from each other and keep our language alive for children and newcomers.
        </p>
      </div>

      <p className="text-base font-medium text-luhya-navy">{LANGUAGE_CLOSING}</p>
    </CulturePageLayout>
  );
};

export default LanguagePage;
