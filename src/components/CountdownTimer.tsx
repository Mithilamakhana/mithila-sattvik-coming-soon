
import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = ({ targetDate }: { targetDate: Date }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = targetDate.getTime() - new Date().getTime();
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };
  
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearInterval(timer);
  }, [targetDate]);
  
  return (
    <div className="grid grid-cols-4 gap-4 lg:gap-6 max-w-3xl mx-auto">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div 
          key={unit} 
          className="flex flex-col items-center"
        >
          <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-3 md:p-4 w-full aspect-square flex items-center justify-center relative overflow-hidden border border-mithila-green border-opacity-20">
            <span className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-mithila-green">
              {value < 10 ? `0${value}` : value}
            </span>
          </div>
          <span className="mt-2 text-xs md:text-sm lg:text-base text-mithila-green capitalize font-medium">
            {unit}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
