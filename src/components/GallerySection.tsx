
import React from 'react';
import { Heart, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

const GallerySection = () => {
  // Sample gallery items
  const galleryItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=600&q=80",
      caption: "Find peace in the stillness of night. The stars remind us how vast our possibilities are.",
      likes: 1243,
      comments: 89
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80",
      caption: "Let the light guide you through the darkest forests. There's always a path forward.",
      likes: 956,
      comments: 42
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
      caption: "The strength of nature teaches us resilience. Stand tall through life's storms.",
      likes: 1578,
      comments: 124
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80",
      caption: "Sometimes the journey is unclear, but trust that clarity will come with persistence.",
      likes: 2105,
      comments: 167
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?auto=format&fit=crop&w=600&q=80",
      caption: "Mornings remind us that we can begin again, no matter what came before.",
      likes: 1320,
      comments: 76
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80",
      caption: "In the depths of the forest, we find the silence our souls have been craving.",
      likes: 1782,
      comments: 93
    }
  ];

  return (
    <section id="gallery" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">Our Gallery</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
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
            className="inline-flex items-center text-serene-700 hover:text-serene-900 font-medium"
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
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
      <div className="aspect-square relative overflow-hidden">
        <img 
          src={item.image} 
          alt={item.caption} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <p className="text-gray-700 mb-3 line-clamp-2">{item.caption}</p>
        <div className="flex items-center text-gray-500 text-sm">
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
