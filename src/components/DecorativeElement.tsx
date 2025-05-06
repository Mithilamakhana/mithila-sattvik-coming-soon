
import React from 'react';

interface DecorativeElementProps {
  type: 'leaf' | 'flower' | 'border' | 'zigzag' | 'peacock' | 'fish' | 'mithila-border';
  className?: string;
  style?: React.CSSProperties;
  position?: 'top' | 'bottom' | 'left' | 'right' | 'all';
}

const DecorativeElement = ({ type, className = '', style, position = 'all' }: DecorativeElementProps) => {
  switch (type) {
    case 'leaf':
      return (
        <div className={`w-16 h-16 md:w-24 md:h-24 text-mithila-green opacity-70 ${className}`} style={style}>
          <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M50,10 C30,10 10,30 10,50 C10,70 30,90 50,90 C70,90 90,70 90,50 C70,50 50,30 50,10 Z" />
          </svg>
        </div>
      );
    
    case 'flower':
      return (
        <div className={`w-20 h-20 md:w-28 md:h-28 text-mithila-orange opacity-70 ${className}`} style={style}>
          <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="15" />
            <path d="M50,20 Q35,35 20,50 Q35,65 50,80 Q65,65 80,50 Q65,35 50,20 Z" fill="none" stroke="currentColor" strokeWidth="5" />
            <path d="M20,50 Q35,35 50,20 Q65,35 80,50 Q65,65 50,80 Q35,65 20,50 Z" fill="none" stroke="currentColor" strokeWidth="5" />
          </svg>
        </div>
      );
    
    case 'peacock':
      return (
        <div className={`w-32 h-32 md:w-40 md:h-40 text-mithila-blue opacity-60 ${className}`} style={style}>
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="30" r="10" />
            <path d="M50,40 L50,70" />
            <path d="M30,50 Q50,30 70,50" />
            <path d="M20,60 Q50,20 80,60" />
            <path d="M10,70 Q50,10 90,70" />
            <path d="M30,75 L50,70 L70,75" />
          </svg>
        </div>
      );
      
    case 'fish':
      return (
        <div className={`w-24 h-24 md:w-32 md:h-32 text-mithila-orange opacity-60 ${className}`} style={style}>
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
            <path d="M20,50 C40,30 60,30 80,50 C60,70 40,70 20,50 Z" />
            <circle cx="70" cy="50" r="5" />
            <path d="M80,50 L90,40" />
            <path d="M80,50 L90,60" />
          </svg>
        </div>
      );
      
    case 'border':
      return (
        <div className={`decorative-border h-3 ${className}`} style={style}></div>
      );
      
    case 'zigzag':
      return (
        <div className={`w-full h-8 overflow-hidden ${className}`} style={style}>
          <svg viewBox="0 0 100 10" preserveAspectRatio="none">
            <path 
              d="M0,0 L10,10 L20,0 L30,10 L40,0 L50,10 L60,0 L70,10 L80,0 L90,10 L100,0 L100,10 L0,10 Z" 
              fill="currentColor"
              className="text-mithila-blue opacity-30"
            />
          </svg>
        </div>
      );
      
    case 'mithila-border':
      if (position === 'top' || position === 'bottom') {
        return (
          <div className={`w-full ${className}`} style={style}>
            <div className="mithila-horizontal-border"></div>
          </div>
        );
      } else if (position === 'left' || position === 'right') {
        return (
          <div className={`h-full ${className}`} style={style}>
            <div className={`mithila-vertical-border ${position === 'right' ? 'rotate-180' : ''}`}></div>
          </div>
        );
      } else { // 'all'
        return (
          <div className={`mithila-border-frame ${className}`} style={style}></div>
        );
      }

    default:
      return null;
  }
};

export default DecorativeElement;
