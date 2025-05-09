
import React from 'react';
import { Instagram } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const FollowSection = () => {
  return (
    <section className="py-20 bg-serene-500 text-white overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-serene-400 rounded-full opacity-20 -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-serene-600 rounded-full opacity-20 translate-y-1/2 -translate-x-1/4"></div>
      
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <Instagram size={48} className="mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-playfair font-medium mb-6">
            Join Our Serene Community
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-xl mx-auto">
            Follow our Instagram page and become part of a mindful community dedicated to finding peace in everyday moments.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              asChild 
              size="lg"
              className="bg-white text-serene-800 hover:bg-serene-50 rounded-full px-8"
            >
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                Follow @sereneofthoughts
              </a>
            </Button>
            <p className="text-white/80">
              Join 10,000+ followers on our mindful journey
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FollowSection;
