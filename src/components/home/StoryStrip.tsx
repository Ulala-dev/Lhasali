import { useLanguage } from "@/hooks/useLanguage";      // custom hook
import { Button } from "@/components/ui/button";   // local UI component

const cloudStyles = `
  @keyframes cloud-slow {
    0% { left: -100vw; }
    100% { left: 100vw; }
  }
  @keyframes cloud-medium {
    0% { left: 33vw; }
    100% { left: 110vw; }
  }
  @keyframes cloud-fast {
    0% { left: 66vw; }
    100% { left: 120vw; }
  }
  .animate-cloud-slow {
    animation: cloud-slow 60s linear infinite;
  }
  .animate-cloud-medium {
    animation: cloud-medium 45s linear infinite;
  }
  .animate-cloud-fast {
    animation: cloud-fast 30s linear infinite;
  }
  @keyframes bird-fly1 {
    0% { left: -10vw; }
    100% { left: 110vw; }
  }
  @keyframes bird-fly2 {
    0% { left: -20vw; }
    100% { left: 120vw; }
  }
  @keyframes bird-fly3 {
    0% { left: -15vw; }
    100% { left: 115vw; }
  }
  .animate-bird-fly1 {
    animation: bird-fly1 35s linear infinite;
  }
  .animate-bird-fly2 {
    animation: bird-fly2 50s linear infinite;
  }
  .animate-bird-fly3 {
    animation: bird-fly3 40s linear infinite;
  }
`;

// Stylized bird SVG path (flying V silhouette)
const BirdSVG = ({ width = 40, height = 20, color = "#5A1212", opacity = 0.7 }) => (
  <svg width={width} height={height} viewBox="0 0 40 20" fill="none" style={{ opacity }}>
    <path d="M2 18 Q10 2 20 10 Q30 2 38 18" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <path d="M12 12 Q15 7 20 10 Q25 7 28 12" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" />
  </svg>
);

export default function StoryStrip() {
  const { language } = useLanguage();

  return (
    <section id="story-strip" className="relative py-16 overflow-hidden bg-white">
      {/* Animated Maroon Clouds and Birds */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0" aria-hidden="true">
        {/* Clouds */}
        <svg className="absolute top-10 left-0 animate-cloud-slow" width="260" height="120" viewBox="0 0 260 120" fill="none" style={{ opacity: 0.18 }}>
          <ellipse cx="90" cy="60" rx="90" ry="40" fill="#8B3A3A" />
          <ellipse cx="190" cy="60" rx="70" ry="30" fill="#8B3A3A" />
        </svg>
        <svg className="absolute top-32 left-1/4 animate-cloud-medium" width="200" height="90" viewBox="0 0 200 90" fill="none" style={{ opacity: 0.15 }}>
          <ellipse cx="70" cy="45" rx="70" ry="28" fill="#8B3A3A" />
          <ellipse cx="150" cy="45" rx="50" ry="20" fill="#8B3A3A" />
        </svg>
        <svg className="absolute top-56 left-1/2 animate-cloud-fast" width="160" height="70" viewBox="0 0 160 70" fill="none" style={{ opacity: 0.13 }}>
          <ellipse cx="50" cy="35" rx="50" ry="18" fill="#8B3A3A" />
          <ellipse cx="120" cy="35" rx="40" ry="15" fill="#8B3A3A" />
        </svg>
        <svg className="absolute top-20 left-2/3 animate-cloud-medium" width="180" height="80" viewBox="0 0 180 80" fill="none" style={{ opacity: 0.12 }}>
          <ellipse cx="60" cy="40" rx="60" ry="20" fill="#8B3A3A" />
          <ellipse cx="130" cy="40" rx="40" ry="15" fill="#8B3A3A" />
        </svg>
        <svg className="absolute top-72 left-1/5 animate-cloud-slow" width="220" height="100" viewBox="0 0 220 100" fill="none" style={{ opacity: 0.10 }}>
          <ellipse cx="80" cy="50" rx="80" ry="30" fill="#8B3A3A" />
          <ellipse cx="170" cy="50" rx="60" ry="22" fill="#8B3A3A" />
        </svg>
        {/* Birds - more, random places, stylized */}
        <div>
          <div className="absolute top-24 left-0 animate-bird-fly1">
            <BirdSVG width={60} height={30} color="#5A1212" opacity={0.7} />
          </div>
          <div className="absolute top-40 left-1/3 animate-bird-fly2">
            <BirdSVG width={40} height={20} color="#5A1212" opacity={0.6} />
          </div>
          <div className="absolute top-60 left-1/2 animate-bird-fly1">
            <BirdSVG width={30} height={15} color="#5A1212" opacity={0.5} />
          </div>
          <div className="absolute top-16 left-1/5 animate-bird-fly3">
            <BirdSVG width={50} height={25} color="#8B3A3A" opacity={0.55} />
          </div>
          <div className="absolute top-80 left-1/4 animate-bird-fly2">
            <BirdSVG width={35} height={18} color="#7A2323" opacity={0.5} />
          </div>
          <div className="absolute top-52 left-2/3 animate-bird-fly3">
            <BirdSVG width={45} height={22} color="#5A1212" opacity={0.6} />
          </div>
        </div>
      </div>
      {/* Cloud & Bird Animations Style */}
      <style dangerouslySetInnerHTML={{ __html: cloudStyles }} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-himalaya-maroon mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              For centuries, people have journeyed from Kathmandu (Nepal) to Lhasa (Tibet) and back, undertaking a demanding and arduous expedition. They would reach Hetauda and then travel by lorry to Raxaul which is one of several routes leading to Lhasa. From Raxaul, they would take a train to Siliguri and continue to Kalimpong by truck or any available means. The journey from there grew even more challenging as they navigated on foot, rode horses, and crossed lakes in makeshift boats. After a grueling caravan trek lasting 25 to 30 days, they finally reached Lhasa.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              These travelers’ lives became those of true caravan adventurers as they had to set up camp for days at a time before pressing onward without regard for the hardships faced. Their dedication to trading goods, exchanging cultures, and forging bonds across lands earned them the name 'Lhasalis.' In tribute to their unwavering spirit, we present our brand name ‘Lhasali’ to serve everyone with an ageless adventure.
            </p>
            <Button
              variant="link"
              className="text-himalaya-orange hover:text-himalaya-gold"
              asChild
            >
              <a href="/about">Read more</a>
            </Button>
          </div>
          <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
            <img
              src="lhasa.png"
              alt="Historic caravan"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
