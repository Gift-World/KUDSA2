import { useState } from 'react';
import posterImage from '../assets/poster.jpeg';

const ConferencePoster = () => {
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="relative my-8 mx-auto max-w-3xl">
      {/* Decorative elements */}
      <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-kudsa-red opacity-20 animate-pulse-slow"></div>
      <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-kudsa-green opacity-20 animate-pulse-slow"></div>
      
      {/* Poster card */}
      <div 
        className={`relative z-10 bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-[1.01] ${expanded ? 'scale-100' : 'cursor-pointer'}`}
        onClick={!expanded ? toggleExpand : undefined}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-kudsa-green to-kudsa-green/80 text-white p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight">
            Kenya University Deans of Students Association (KUDSA)
          </h2>
          <p className="text-sm md:text-base opacity-90">International Conference 2025</p>
        </div>
        
        {/* Poster image */}
        <div className="relative">
          <img 
            src={posterImage} 
            alt="1st International Multidisciplinary Conference Poster" 
            className="w-full h-auto object-cover shadow-inner"
          />
          
          {/* Overlay with call-to-action if not expanded */}
          
        </div>
        
        {/* Details section */}
        
      </div>
      
      {/* Decorative pattern elements */}
      <div className="absolute top-1/4 -right-4 w-16 h-16 border-r-4 border-t-4 border-kudsa-gold opacity-30 rotate-45"></div>
      <div className="absolute bottom-1/4 -left-4 w-16 h-16 border-l-4 border-b-4 border-kudsa-red opacity-30 -rotate-45"></div>
    </div>
  );
};

export default ConferencePoster;