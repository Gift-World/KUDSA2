import { useEffect, useRef } from 'react';

const PosterHighlight = ({ children }) => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const handleMouseMove = (e) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      // Calculate rotation based on mouse position
      const rotateX = (y - 0.5) * 10; // -5 to 5 degrees
      const rotateY = (x - 0.5) * -10; // -5 to 5 degrees
      
      container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    
    const handleMouseLeave = () => {
      container.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      container.style.transition = 'transform 0.5s ease';
    };
    
    const handleMouseEnter = () => {
      container.style.transition = 'transform 0.1s ease';
    };
    
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('mouseenter', handleMouseEnter);
    
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="transition-transform duration-200 ease-out relative"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
};

export default PosterHighlight;