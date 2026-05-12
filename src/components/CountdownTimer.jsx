import { useState, useEffect } from 'react';

export default function CountdownTimer({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    return (
      <div key={interval} className="flex flex-col items-center mx-2 sm:mx-4">
        <div className="glass-card w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center border-neon-blue/30 shadow-[0_0_15px_rgba(0,243,255,0.2)]">
          <span className="text-2xl sm:text-4xl font-orbitron font-bold neon-text-blue">
            {timeLeft[interval].toString().padStart(2, '0')}
          </span>
        </div>
        <span className="mt-2 text-xs sm:text-sm uppercase tracking-widest text-gray-400">
          {interval}
        </span>
      </div>
    );
  });

  return (
    <div className="flex flex-wrap justify-center mt-8">
      {timerComponents}
    </div>
  );
}
