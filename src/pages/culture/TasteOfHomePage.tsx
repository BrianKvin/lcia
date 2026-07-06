import CulturePageLayout from "@/components/CulturePageLayout";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { FOOD_FOOTNOTE, FOOD_INTRO, LUHYA_DISHES } from "@/constants/culture";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import busiaTraditionalRecipesPdf from "@/assets/Busia_Traditional_Recipes_compressed.pdf";

const TasteOfHomePage = () => {
  return (
    <CulturePageLayout
      title="Taste of Home"
      subtitle="Traditional recipes and Luhya dishes that carry memory, welcome, and love."
    >
      <p className="text-base text-muted-foreground leading-relaxed mb-8">{FOOD_INTRO}</p>

      <div className="mb-10 rounded-xl border border-luhya-green/25 bg-gradient-to-r from-luhya-green/10 to-luhya-gold/10 p-5 sm:p-6">
        <h2 className="text-lg font-semibold text-luhya-navy mb-2">Busia traditional recipes</h2>
        <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
          Download our community cookbook (PDF) with dishes and flavours from the Busia region.
        </p>
        <Button variant="communityOutline" size="sm" className="w-full sm:w-auto" asChild>
          <a
            href={busiaTraditionalRecipesPdf}
            download="Busia-Traditional-Recipes.pdf"
            aria-label="Download Busia traditional recipes as PDF"
          >
            <Download className="mr-2 h-4 w-4 shrink-0" aria-hidden />
            Download PDF
          </a>
        </Button>
      </div>

      <div className="space-y-5">
        {LUHYA_DISHES.map((dish) => (
          <article
            key={dish.name}
            className="rounded-xl border border-luhya-green/15 bg-white p-4 sm:p-5 md:p-6 shadow-sm min-w-0"
          >
            <h2 className="font-semibold text-base sm:text-lg text-luhya-navy mb-2 break-words">{dish.name}</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed break-words">{dish.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-luhya-gold/20 bg-gradient-to-r from-luhya-gold/10 to-luhya-green/10 p-5 sm:p-6 border-l-4 border-luhya-gold">
        <p className="text-sm sm:text-base text-luhya-navy font-medium leading-relaxed">
          💛 {FOOD_FOOTNOTE}
        </p>
      </div>
    </CulturePageLayout>
  );
};

export default TasteOfHomePage;
