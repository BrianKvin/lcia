import type { LucideIcon } from "lucide-react";
import { Users, Heart, BookOpen, MessageCircle } from "lucide-react";

export type CultureAreaId = "sub-tribes" | "taste-of-home" | "stories" | "language";

export type SubTribe = {
  name: string;
  description: string;
  borderColor: string;
};

export type LuhyaDish = {
  name: string;
  description: string;
};

export type LanguageTopic = {
  title: string;
  description: string;
  borderColor: string;
};

export type CultureArea = {
  id: CultureAreaId;
  path: string;
  title: string;
  teaser: string;
  icon: LucideIcon;
  iconGradient: string;
  borderColor: string;
  hoverGlow: string;
};

export const CULTURE_AREAS: CultureArea[] = [
  {
    id: "sub-tribes",
    path: "/culture/sub-tribes",
    title: "Sub-tribes Spotlight",
    teaser: "Explore the 17 Luhya sub-tribes, their languages, homelands, and cultural gifts.",
    icon: Users,
    iconGradient: "from-luhya-gold to-luhya-green",
    borderColor: "border-luhya-gold/30 hover:border-luhya-gold/60",
    hoverGlow: "group-hover:shadow-luhya-gold/20",
  },
  {
    id: "taste-of-home",
    path: "/culture/taste-of-home",
    title: "Taste of Home",
    teaser: "Traditional Luhya dishes, shared meals, and our Busia community cookbook.",
    icon: Heart,
    iconGradient: "from-luhya-green to-luhya-red",
    borderColor: "border-luhya-green/30 hover:border-luhya-green/60",
    hoverGlow: "group-hover:shadow-luhya-green/20",
  },
  {
    id: "stories",
    path: "/culture/stories",
    title: "Stories & Folktales",
    teaser: "Timeless tales of Mwambu and Sela, told for adults and children alike.",
    icon: BookOpen,
    iconGradient: "from-luhya-red to-luhya-navy",
    borderColor: "border-luhya-red/30 hover:border-luhya-red/60",
    hoverGlow: "group-hover:shadow-luhya-red/20",
  },
  {
    id: "language",
    path: "/culture/language",
    title: "Language Corner",
    teaser: "Greetings, family words, proverbs, and keeping our dialects alive.",
    icon: MessageCircle,
    iconGradient: "from-luhya-navy to-luhya-gold",
    borderColor: "border-luhya-navy/30 hover:border-luhya-navy/60",
    hoverGlow: "group-hover:shadow-luhya-navy/20",
  },
];

export const SUB_TRIBES: SubTribe[] = [
  { name: "1. Bukusu", description: "Bungoma & Mt. Elgon. Lubukusu. Famous for bravery, colorful initiation ceremonies, and strong community bonds.", borderColor: "border-luhya-gold" },
  { name: "2. Maragoli (Logoli)", description: "Vihiga County. Lulogooli. Known for tea farming, ancestor naming traditions, and cultural preservation abroad.", borderColor: "border-luhya-green" },
  { name: "3. Wanga (Abawanga)", description: "Mumias & Matungu. Unique kingdom with Nabongo leadership. Blend of traditional values and modern influences.", borderColor: "border-luhya-red" },
  { name: "4. Kabras", description: "Malava, Kakamega. Lukabarasi. Known for adaptability and sugarcane farming.", borderColor: "border-luhya-gold" },
  { name: "5. Idakho", description: "Ikolomani, Kakamega. Lwidakho. UNESCO-recognized Isukuti drumming custodians.", borderColor: "border-luhya-green" },
  { name: "6. Isukha", description: "Neighbors to Idakho. Lwisukha. Rich oral traditions and Isukuti dance custodians.", borderColor: "border-luhya-red" },
  { name: "7. Tsotso (Abatsotso)", description: "Western Kakamega. Farming-focused with vibrant clan networks and community ceremonies.", borderColor: "border-luhya-gold" },
  { name: "8. Tiriki (AbaTiriki)", description: "Vihiga County. Ludirichi. Highland region with strong community bonds and rich folklore.", borderColor: "border-luhya-green" },
  { name: "9. Kisa (Abakisa)", description: "Khwisero, Butere-Mumias. Olushisa. Famous for Isukuti drums in celebrations.", borderColor: "border-luhya-red" },
  { name: "10. Khayo", description: "Busia County. Lukhayo. Cross-border culture with Uganda, fishing and trade focus.", borderColor: "border-luhya-gold" },
  { name: "11. Samia", description: "Busia County. Lusamia. Lake Victoria culture with fishing, boat-building, and colorful ceremonies.", borderColor: "border-luhya-green" },
  { name: "12. Marachi", description: "Busia County. Lumarachi. Warrior history with strong farming and fishing traditions.", borderColor: "border-luhya-red" },
  { name: "13. Nyala (Banyala)", description: "Busia & Kakamega. Lunyala. Migration-shaped history with preserved ceremonies.", borderColor: "border-luhya-gold" },
  { name: "14. Marama (Abamarama)", description: "Butere. Lumarama. Calm-natured with strong clan systems and farming traditions.", borderColor: "border-luhya-green" },
  { name: "15. Tachoni", description: "Lugari, Bungoma, Kakamega. Lutachoni. Proud warrior history with initiation ceremonies.", borderColor: "border-luhya-red" },
  { name: "16. Nyole (Abanyole)", description: "Vihiga. Close-knit farming community with distinctive dialect and wedding traditions.", borderColor: "border-luhya-gold" },
  { name: "17. Banyore", description: "Vihiga. Education-focused while preserving dialect, rituals, and clan ceremonies.", borderColor: "border-luhya-green" },
];

export const SUB_TRIBES_FOOTNOTE =
  'Together, these sub-tribes form the beautiful mosaic of the Luhya nation, united by culture, language, and the belief that "Omundu khu mundu" (a person is because of other people).';

export const LUHYA_DISHES: LuhyaDish[] = [
  { name: "Ugali (Obusuma)", description: "The foundation of every meal. Made from maize flour, ugali gives strength and brings people together." },
  { name: "Ingoho (Chicken)", description: "A true delicacy! Served to guests of honor and during special occasions." },
  { name: "Mrenda & Kunde", description: "Traditional leafy vegetables, sticky and delicious, packed with nutrition." },
  { name: "Obusera (Millet Porridge)", description: "A refreshing, energizing drink that cools the body and restores energy." },
  { name: "Busaa (Traditional Brew)", description: "Brewed from millet or sorghum, more than a drink; it's about togetherness and storytelling." },
  { name: "Isindu (Beans Stew)", description: "Simple but hearty, giving families strength during farming seasons." },
  { name: "Chapati", description: "Soft, golden, and festive. Marks celebrations like Christmas and weddings." },
  { name: "Sweet Potatoes (Obukima)", description: "A breakfast favorite, full of childhood memories." },
  { name: "Ugali & Sour Milk (Obusuma na Amalea)", description: "Comfort food at its best, perfect after a long day of work." },
  { name: "Omwoyo (Cowpeas/Black-eyed peas)", description: "Rich in protein and history, sustained families in hard times." },
  { name: "Emikimo (Mashed beans & pumpkin leaves)", description: "Balanced and nourishing, a symbol of health and unity." },
];

export const FOOD_INTRO =
  "Food is more than just a meal for the Luhya people. It is a story, a welcome, and a way of showing love. Every dish carries memories of childhood, family, visitors, and celebrations.";

export const FOOD_FOOTNOTE =
  "To the Luhya, food is not just eaten: it is shared. It's how we celebrate, welcome guests, and remind ourselves that no one should sit alone at mealtime.";

export const LANGUAGE_TOPICS: LanguageTopic[] = [
  {
    title: "Everyday greetings",
    description: "Share how-are-you phrases, welcomes, and blessings in the dialects you grew up with, and help younger members hear the sounds of home.",
    borderColor: "border-luhya-gold/60",
  },
  {
    title: "Words for family and daily life",
    description: "Practice vocabulary for kinship, food, work, and celebration so it feels natural when you meet.",
    borderColor: "border-luhya-green/60",
  },
  {
    title: "Proverbs and values",
    description: 'Pass on short sayings that carry community wisdom, including the spirit of "Omundu khu mundu" (a person is because of other people).',
    borderColor: "border-luhya-navy/40",
  },
];

export const LANGUAGE_INTRO =
  "Common Luhya greetings and phrases with pronunciations. Dialects vary across sub-tribes, so we learn from each other at meetups and keep our language alive for children and newcomers.";

export const LANGUAGE_CLOSING =
  "Keep our language alive and accessible to the next generation.";
