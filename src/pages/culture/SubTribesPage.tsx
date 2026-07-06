import CulturePageLayout from "@/components/CulturePageLayout";
import { SUB_TRIBES, SUB_TRIBES_FOOTNOTE } from "@/constants/culture";

const SubTribesPage = () => {
  return (
    <CulturePageLayout
      title="Sub-tribes Spotlight"
      subtitle="Discover the rich diversity of Luhya sub-tribes and their unique cultural heritage across Western Kenya."
    >
      <div className="space-y-5">
        {SUB_TRIBES.map((tribe) => (
          <article
            key={tribe.name}
            className={`rounded-xl border border-luhya-gold/15 bg-white p-4 sm:p-5 md:p-6 border-l-4 ${tribe.borderColor} shadow-sm min-w-0`}
          >
            <h2 className="font-semibold text-base sm:text-lg text-luhya-navy mb-2 break-words">{tribe.name}</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed break-words">{tribe.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-luhya-gold/20 bg-gradient-to-r from-luhya-gold/10 to-luhya-green/10 p-5 sm:p-6 border-l-4 border-luhya-gold">
        <p className="text-sm sm:text-base text-luhya-navy font-medium leading-relaxed">
          ✨ {SUB_TRIBES_FOOTNOTE}
        </p>
      </div>
    </CulturePageLayout>
  );
};

export default SubTribesPage;
