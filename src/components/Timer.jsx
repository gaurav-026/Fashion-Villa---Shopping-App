import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  // Set the initial countdown duration (e.g., 1 day in milliseconds)
  const COUNTDOWN_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

  // State to hold remaining time
  const [remainingTime, setRemainingTime] = useState(COUNTDOWN_DURATION);

  // Function to format time into days, hours, minutes, and seconds
  const formatTime = (time) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  // Effect to start the countdown
  useEffect(() => {
    // Create a function that updates the remaining time
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime <= 0) {
          // Restart the countdown when it reaches zero
          return COUNTDOWN_DURATION;
        }
        return prevTime - 1000;
      });
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Destructure formatted time
  const { days, hours, minutes, seconds } = formatTime(remainingTime);

  return (
    <div className="countdown-timer">
      <div className="flex gap-2">
        <div className='p-4 bg-white rounded-md text-lg text-semibold'>{days}d</div>
        <div className='p-4 bg-white rounded-md text-lg text-semibold'>{hours}h</div>
        <div className='p-4 bg-white rounded-md text-lg text-semibold'>{minutes}m</div>
        <div className='p-4 bg-white rounded-md text-lg text-semibold'>{seconds}s</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
