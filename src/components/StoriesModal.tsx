import { Button } from "@/components/ui/button";
import { X, BookOpen, Heart, Star, Drum, Crown, Fish, Wrench, Shield, TreePine, MessageCircle } from "lucide-react";

interface StoriesModalProps {
  isOpen: boolean;
  onClose: () => void;
  storyType: 'adult' | 'kids';
}

const StoriesModal = ({ isOpen, onClose, storyType }: StoriesModalProps) => {
  if (!isOpen) return null;

  const adultStory = {
    title: "The Story of Sela – Mother of the People",
    content: `Long ago, before there were clans, villages, or the many voices of the Luhya people, there was silence across the earth. From this silence, the supreme god Were looked upon the land at a place called Mumbo. With care, Were shaped the first man, Mwambu, from the rich red clay of the earth and breathed life into him.

Mwambu walked the land, but he was lonely. So Were, in his wisdom, created a companion — Sela — a woman of beauty, wisdom, and strength, fashioned to stand beside him. Mwambu and Sela were equals, partners who worked, shared, and grew together. They planted the first gardens, fetched water, and learned the rhythm of the seasons.

From their union came many children. These children spread across the valleys, forests, and hills around Mount Elgon and into the plains of Western Kenya. They built homes, tilled fields, and raised families. From them sprang the great family of the Abaluhya, one people with many voices — but each with a unique gift.

✨ Their children grew into the 18 sub-tribes we know today:

• Bukusu — the Defenders, brave warriors who stood firm to protect their land and resisted invaders.
• Wanga — the Rulers, who built a strong kingdom under Nabongo Mumia, mastering governance and diplomacy.
• Maragoli — the Farmers, hardworking cultivators who made the soil flourish with millet, sorghum, and later tea.
• Isukha — the Drummers, keepers of the Isukuti drum, whose rhythms still beat at weddings, rituals, and festivals.
• Idakho — the Ironworkers, skilled blacksmiths who forged tools, weapons, and ornaments that supported community life.
• Tachoni — the Hunters and Herdsmen, fierce and resourceful in both forest and plain.
• Samia — the Fisherfolk, living by Lake Victoria and thriving through fishing, boat-making, and cross-border trade.
• Khayo — the Organizers, known for strong communal life and farming along the Busia plains.
• Marachi — the River Warriors, remembered for defending the Nzoia and Sio rivers from Luo expansion.
• Nyala (Banyala) — the Canoe and River People, skilled in fishing, navigation, and river trade.
• Tsotso (Abatsotso) — the Community Farmers, small in number but strong in unity and resilience.
• Nyole (Abanyole) — the Wise Ones, rich in witty sayings, clever humor, and deep proverbs that color Luhya culture.
• Tiriki — the Keepers of Rites, custodians of sacred initiation traditions and elaborate ceremonies.
• Marama — the Market Farmers, blending fertile farming in Butere with lively trade and community markets.
• Kabras — the Warriors and Hunters, their very name from Avalasi (warriors), known for fearlessness and the chase.
• Kisa — the Cultivators of Khwisero, respected for their fertile soils and hardworking spirit.
• Bunyore (Abanyore) — the Storytellers and Herbalists, celebrated for rich folklore, sharp wit, and knowledge of natural medicine.
• Other smaller clans — who carried unique songs, dances, and wisdom that enriched the wider Luhya family.

⸻

Sela is remembered as more than a companion; she is the matriarch of the people. Through her, life flowed into generations. Through her, the warmth of motherhood, the wisdom of womanhood, and the strength of community were first revealed. She symbolizes not only the beginning of family, but the truth that no one exists alone.

Even today, when we gather as Luhyas far from home, we invoke her legacy. She reminds us that from two came many, and that in unity there is strength. Every clan meeting, every drumbeat of the Isukuti, every proverb whispered by an elder carries her memory:

"Omundu khu mundu" — a person is a person through others.

And so, the story of Sela is not just history. It is a living reminder that our roots are deep, our bonds are strong, and our identity is eternal.`
  };

  const kidsStory = {
    title: "🌟 The Story of Mwambu and Sela (Children's Version)",
    content: `A long, long time ago, the world was quiet. There were no villages, no drums, no people. Only the land, the rivers, and the sky.

Then, the great God Were took some red clay from a place called Mumbo and shaped the first man. His name was Mwambu. Were breathed life into him, and Mwambu began to walk the earth.

But Mwambu was lonely. So Were made him a friend — Sela. She was kind, strong, and wise. Together, Mwambu and Sela laughed, planted gardens, fetched water, and learned how to live on the land.

After some time, they had children. Their children grew, married, and had more children. They moved across the hills, valleys, and rivers. From them came the Abaluhya people.

Each group of children had something special:
• The Bukusu were brave and strong, always ready to defend their homes.
• The Wanga were leaders, ruling fairly and guiding the people.
• The Maragoli were hardworking farmers, making the land green and full of food.
• The Isukha made music with the Isukuti drum, filling the air with rhythm and dance.
• The Idakho worked with fire and iron, making tools for everyone.
• The Samia fished in Lake Victoria and shared food from the water.
• The Tiriki kept the old traditions and ceremonies alive.
• The Nyole were clever, always telling stories and wise sayings.
…and many more, each with their own gift.

Sela is remembered as the mother of the people. She showed us that no one should live alone — that family and community make us strong.

Even today, when we gather to eat, sing, and dance, we remember Mwambu and Sela. From just two people came a great family — the Abaluhya.

And so we say: "Omundu khu mundu" — a person is a person through others.`
  };

  const story = storyType === 'adult' ? adultStory : kidsStory;

  const subTribeIcons = [
    { name: "Bukusu", icon: Shield, color: "text-red-600" },
    { name: "Wanga", icon: Crown, color: "text-yellow-600" },
    { name: "Maragoli", icon: TreePine, color: "text-green-600" },
    { name: "Isukha", icon: Drum, color: "text-orange-600" },
    { name: "Idakho", icon: Wrench, color: "text-gray-600" },
    { name: "Samia", icon: Fish, color: "text-blue-600" },
    { name: "Tiriki", icon: Heart, color: "text-pink-600" },
    { name: "Nyole", icon: MessageCircle, color: "text-purple-600" }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-2 sm:p-4 z-50">
      <div className="bg-white rounded-2xl max-w-5xl w-full h-[95vh] sm:h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-luhya-navy to-luhya-gold p-4 sm:p-6 text-white flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
              <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
              <h2 className="text-lg sm:text-xl font-bold truncate">{story.title}</h2>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white hover:bg-white/20 flex-shrink-0 ml-2"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="prose prose-sm max-w-none">
            <div className="whitespace-pre-line text-muted-foreground leading-relaxed">
              {story.content}
            </div>
          </div>

          {/* Kids Version Infographic Suggestion */}
          {storyType === 'kids' && (
            <div className="mt-8 p-6 bg-gradient-to-r from-luhya-green/10 to-luhya-gold/10 rounded-xl border border-luhya-green/20">
              <h3 className="text-lg font-bold text-luhya-navy mb-4 flex items-center">
                <Star className="w-5 h-5 mr-2 text-luhya-gold" />
                Colorful Infographic/Poster Version
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                A visual learning tool for children with little icons representing each sub-tribe's special gift:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {subTribeIcons.map((subTribe, index) => (
                  <div key={index} className="flex flex-col items-center p-3 bg-white rounded-lg border border-luhya-gold/20">
                    <subTribe.icon className={`w-8 h-8 ${subTribe.color} mb-2`} />
                    <span className="text-xs font-medium text-luhya-navy text-center">{subTribe.name}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4 italic">
                This visual representation helps children learn about their heritage through colorful icons and symbols.
              </p>
            </div>
          )}
        </div>

        {/* Footer - Fixed at bottom */}
        <div className="bg-gray-50 px-4 sm:px-6 py-4 border-t flex-shrink-0">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
              {storyType === 'adult' ? 'Adult Version' : 'Kids Version'} • Mulembe Community NSW
            </p>
            <Button onClick={onClose} variant="community" size="sm">
              Close Story
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoriesModal;
