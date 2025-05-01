
export type Artisan = {
  id: string;
  name: string;
  nameNe: string;
  location: string;
  locationNe: string;
  craft: string;
  craftNe: string;
  story: string;
  storyNe: string;
  imageUrl: string;
};

export const artisans: Artisan[] = [
  {
    id: "1",
    name: "Pemba Sherpa",
    nameNe: "पेम्बा शेर्पा",
    location: "Solukhumbu",
    locationNe: "सोलुखुम्बु",
    craft: "Weaving",
    craftNe: "बुनाई",
    story: "Pemba learned the art of traditional weaving from his grandmother at the age of 12. His designs blend traditional Sherpa patterns with modern aesthetics, creating pieces that tell the story of his heritage while appealing to contemporary tastes.",
    storyNe: "पेम्बाले १२ वर्षको उमेरमा आफ्नी हजुरआमाबाट पारम्परिक बुनाइको कला सिके। उनका डिजाइनहरूमा पारम्परिक शेर्पा प्याटर्न र आधुनिक सौन्दर्यशास्त्रको मिश्रण छ, जसले उनको सम्पदाको कथा बताउँदै समकालीन स्वादहरूलाई आकर्षित गर्छ।",
    imageUrl: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d"
  },
  {
    id: "2",
    name: "Laxmi Tamang",
    nameNe: "लक्ष्मी तामाङ",
    location: "Kathmandu",
    locationNe: "काठमाडौं",
    craft: "Pashmina",
    craftNe: "पश्मिना",
    story: "Coming from a family with a 300-year tradition of Pashmina crafting, Laxmi has dedicated her life to preserving this ancient art form. She sources the finest Himalayan mountain goat wool and processes it using techniques passed down through generations.",
    storyNe: "३०० वर्षको पश्मिना शिल्पकला परम्परा भएको परिवारबाट आएकी लक्ष्मीले यो प्राचीन कला रूप संरक्षण गर्न आफ्नो जीवन समर्पित गरेकी छिन्। उनी हिमालयन पहाडी बाख्राको ऊन स्रोत गर्छिन् र पुस्तौंदेखि हस्तान्तरित प्रविधिहरू प्रयोग गरेर प्रशोधन गर्छिन्।",
    imageUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901"
  },
  {
    id: "3",
    name: "Rajesh Shakya",
    nameNe: "राजेश शाक्य",
    location: "Patan",
    locationNe: "पाटन",
    craft: "Metal Work",
    craftNe: "धातु कार्य",
    story: "A seventh-generation metal artisan from Patan, Rajesh specializes in traditional Newari metal crafting techniques. His intricate sculptures and ritual objects are created using lost-wax casting methods that have remained unchanged for centuries.",
    storyNe: "पाटनका सातौं पुस्ताका धातु कलाकार राजेश पारम्परिक नेवारी धातु शिल्प प्रविधिहरूमा विशेषज्ञता राख्छन्। उनका जटिल मूर्तिहरू र अनुष्ठानिक वस्तुहरू लोप-मैन ढलाई विधिहरू प्रयोग गरेर निर्माण गरिएका छन् जुन शताब्दीयौंदेखि अपरिवर्तित छन्।",
    imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
  }
];
