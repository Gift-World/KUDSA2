import { useState, useEffect } from 'react';

const PosterAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Start the animation after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Animated decorative elements */}
      <div 
        className={`absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-kudsa-green via-kudsa-gold to-kudsa-red transition-transform duration-1000 ease-out ${
          isVisible ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ transitionDelay: '100ms' }}
      />
      
      <div 
        className={`absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-kudsa-red via-kudsa-gold to-kudsa-green transition-transform duration-1000 ease-out ${
          isVisible ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ transitionDelay: '300ms' }}
      />
      
      <div 
        className={`absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-kudsa-green via-kudsa-gold to-kudsa-red transition-transform duration-1000 ease-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ transitionDelay: '200ms' }}
      />
      
      <div 
        className={`absolute right-0 top-0 h-full w-2 bg-gradient-to-b from-kudsa-red via-kudsa-gold to-kudsa-green transition-transform duration-1000 ease-out ${
          isVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ transitionDelay: '400ms' }}
      />
      
      {/* Corner dots */}
      {[
        'top-0 left-0',
        'top-0 right-0',
        'bottom-0 left-0',
        'bottom-0 right-0'
      ].map((position, index) => (
        <div
          key={index}
          className={`absolute ${position} w-4 h-4 rounded-full bg-kudsa-gold transition-all duration-700 ${
            isVisible ? 'scale-100 opacity-70' : 'scale-0 opacity-0'
          }`}
          style={{ transitionDelay: `${500 + index * 100}ms` }}
        />
      ))}
    </div>
  );
};

export default PosterAnimation;