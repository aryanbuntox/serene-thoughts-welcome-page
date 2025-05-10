import React from 'react';
import { Heart, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

const GallerySection = () => {
  // Gallery items with new uploaded images
  const galleryItems = [
    {
      id: 1,
      image: "/lovable-uploads/7a1b7cab-e3e8-4459-8489-eb6b24e3508c.png",
      caption: "Find peace in the stillness of night. The stars remind us how vast our possibilities are.",
      likes: 1243,
      comments: 89
    },
    {
      id: 2,
      image: "/lovable-uploads/cce4da85-0f61-4138-bdf2-73dc915a9374.png",
      caption: "Let the light guide you through the darkest forests. There's always a path forward.",
      likes: 956,
      comments: 42
    },
    {
      id: 3,
      image: "/lovable-uploads/de438354-c6c3-4ded-bd9e-84f86e91d224.png",
      caption: "The strength of nature teaches us resilience. Stand tall through life's storms.",
      likes: 1578,
      comments: 124
    },
    {
      id: 4,
      image: "/lovable-uploads/391dd801-e7f4-4e30-954d-a8844c4bf5b5.png",
      caption: "Sometimes the journey is unclear, but trust that clarity will come with persistence.",
      likes: 2105,
      comments: 167
    },
    {
      id: 5,
      image: "/lovable-uploads/756d3931-b678-4c2a-8063-a45e806dbb34.png",
      caption: "Mornings remind us that we can begin again, no matter what came before.",
      likes: 1320,
      comments: 76
    },
    {
      id: 6,
      image: "/lovable-uploads/77cdb188-d241-41cd-879d-38c93158d1aa.png",
      caption: "In the depths of the forest, we find the silence our souls have been craving.",
      likes: 1782,
      comments: 93
    }
  ];

  return (
    <section id="gallery" className="section bg-gray-950">
      <div className="container">
        <h2 className="section-title text-white">Our Gallery</h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
          A glimpse into our most popular posts, capturing moments of tranquility and thoughtful reflection from our Instagram journey.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <GalleryItem key={item.id} item={item} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-serene-400 hover:text-serene-300 font-medium"
          >
            See more on Instagram
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-1" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

const GalleryItem = ({ item }: { item: any }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
      <div className="aspect-square relative overflow-hidden">
        <img 
          src={item.image} 
          alt={item.caption} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <p className="text-gray-300 mb-3 line-clamp-2">{item.caption}</p>
        <div className="flex items-center text-gray-400 text-sm">
          <div className="flex items-center mr-4">
            <Heart className="h-4 w-4 mr-1 text-red-500" />
            {item.likes.toLocaleString()}
          </div>
          <div className="flex items-center">
            <MessageSquare className="h-4 w-4 mr-1 text-serene-500" />
            {item.comments.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
