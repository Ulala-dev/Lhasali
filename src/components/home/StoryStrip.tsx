import { useLanguage } from "@/hooks/useLanguage.tsx";      // custom hook
import { Button } from "@/components/ui/button";   // local UI component

export default function StoryStrip() {
  const { language } = useLanguage();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <h2 className="text-3xl font-bold text-himalaya-maroon">Our Story</h2>
            <p className="text-gray-700 leading-relaxed">
              Born from the trails of the Himalayas, Lhasali Gear bridges ancient craftsmanship
              with modern adventure needs. Our journey began with local artisans and
              continues with global trekkers who trust our gear in the world's most challenging terrains.
            </p>
            <Button
              variant="link"
              className="text-himalaya-orange hover:text-himalaya-gold"
            >
              Read more
            </Button>
          </div>
          <div className="aspect-[4/3] relative overflow-hidden rounded-lg order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1609770231080-e321deccc34c?w=800&auto=format"
              alt="Historic caravan"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
