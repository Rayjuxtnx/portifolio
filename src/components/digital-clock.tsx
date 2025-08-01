'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());
  const { theme } = useTheme();

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const formatTime = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return { hours, minutes, seconds };
  };

  const { hours, minutes, seconds } = formatTime(time);
  
  const isDarkTheme = theme === 'dark' || theme === 'theme-tech-blue' || theme === 'theme-gold-charcoal';

  return (
    <div className={`flex items-center justify-center font-code text-6xl md:text-8xl lg:text-9xl font-bold tracking-widest ${isDarkTheme ? 'text-primary animate-hacker-glitch' : 'text-primary'}`}>
      <span>{hours}</span>
      <span className="animate-pulse">:</span>
      <span>{minutes}</span>
      <span className="animate-pulse">:</span>
      <span>{seconds}</span>
    </div>
  );
};

export default DigitalClock;
