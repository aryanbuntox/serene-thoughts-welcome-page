
import React from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would typically send the form data to a server
    // For demo purposes, we'll just show a console message
    console.log('Contact form submitted');
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Have questions, collaboration ideas, or just want to say hello? We'd love to hear from you.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="subsection-title text-serene-800">Connect With Us</h3>
            <p className="text-gray-700 mb-8">
              We value every message and strive to respond within 24-48 hours. Whether you're interested in collaborations, have questions about our content, or just want to share your thoughts, we're here to listen.
            </p>
            
            <div className="space-y-6">
              <ContactItem 
                icon={<Mail />}
                title="Email"
                content="hello@sereneofthoughts.com"
              />
              <ContactItem 
                icon={<Instagram />}
                title="Instagram DM"
                content="@sereneofthoughts"
              />
              <ContactItem 
                icon={<MessageSquare />}
                title="Response Time"
                content="Within 24-48 hours"
              />
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-playfair font-medium mb-4">Send us a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-serene-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-serene-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-serene-500"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-serene-500"
                  required
                ></textarea>
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-serene-500 hover:bg-serene-600 text-white flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={16} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ 
  icon, 
  title, 
  content 
}: { 
  icon: React.ReactNode; 
  title: string; 
  content: string;
}) => {
  return (
    <div className="flex items-start">
      <div className="bg-serene-100 p-3 rounded-lg text-serene-700 mr-4">
        {icon}
      </div>
      <div>
        <h4 className="font-medium mb-1">{title}</h4>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
};

// Add this import at the top
const Instagram = (props: React.ComponentProps<"svg">) => {
  return (
    <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
};

export default ContactSection;
