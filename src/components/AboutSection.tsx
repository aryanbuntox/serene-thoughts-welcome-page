
import React from 'react';
import { cn } from '@/lib/utils';

const AboutSection = () => {
  return (
    <section id="about" className="section bg-gray-900">
      <div className="container">
        <h2 className="section-title text-white">About Our Journey</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80" 
                alt="Serene landscape with reflection in water" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-lg bg-serene-600/30 -z-10" />
          </div>
          
          {/* Content */}
          <div>
            <h3 className="subsection-title text-serene-300">Finding Peace in Reflection</h3>
            <p className="text-gray-300 mb-6">
              Serene of Thoughts was born from a simple desire: to capture and share moments of tranquility in our fast-paced world. Our Instagram page serves as a sanctuary for those seeking mindful content that inspires reflection and inner peace.
            </p>
            <p className="text-gray-300 mb-6">
              Through carefully curated visuals and thoughtful captions, we explore the beauty of mindfulness, personal growth, and the serene moments that often go unnoticed in our daily lives.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <AboutStat number="10K+" text="Followers" />
              <AboutStat number="500+" text="Posts" />
              <AboutStat number="3+" text="Years" />
              <AboutStat number="100K+" text="Engagements" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutStat = ({ number, text }: { number: string; text: string }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 text-center">
      <p className="text-2xl font-medium text-serene-400">{number}</p>
      <p className="text-gray-400">{text}</p>
    </div>
  );
};

export default AboutSection;
