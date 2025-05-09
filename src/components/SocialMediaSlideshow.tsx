import React, { useEffect, useRef } from 'react';
import { Instagram, Facebook, Twitter, Linkedin, Youtube, Github } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

interface SocialIconProps {
  icon: React.ReactNode;
  color: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon, color }) => (
  <div className={`p-4 ${color} rounded-full flex items-center justify-center`}>
    {icon}
  </div>
);

const SocialMediaSlideshow = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    containScroll: 'trimSnaps',
  });

  const animationRef = useRef<number>();

  // Continuous slow scroll
  useEffect(() => {
    if (!emblaApi) return;

    const scrollStep = () => {
      emblaApi.scrollBy(0.1); // Scroll by 0.1 pixels for ultra-smooth movement
      animationRef.current = requestAnimationFrame(scrollStep);
    };

    animationRef.current = requestAnimationFrame(scrollStep);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [emblaApi]);

  const socialIcons = [
    { icon: <Instagram size={28} />, color: 'text-pink-500' },
    { icon: <Facebook size={28} />, color: 'text-blue-500' },
    { icon: <Twitter size={28} />, color: 'text-sky-400' },
    { icon: <Linkedin size={28} />, color: 'text-blue-700' },
    { icon: <Youtube size={28} />, color: 'text-red-500' },
    { icon: <Github size={28} />, color: 'text-gray-300' },
  ];

  const multipleIcons = [...socialIcons, ...socialIcons, ...socialIcons, ...socialIcons];

  return (
    <section className="py-6 bg-black/30 backdrop-blur-sm border-y border-white/10">
      <div className="overflow-hidden">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {multipleIcons.map((item, index) => (
              <div key={index} className="flex-none mx-6">
                <div className="flex items-center justify-center">
                  <SocialIcon icon={item.icon} color={item.color} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSlideshow;
