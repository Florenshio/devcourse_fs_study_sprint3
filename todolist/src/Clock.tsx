import React, { useState, useEffect } from 'react';
import './Clock.css';

const Clock: React.FC = () => {
  const [time, setTime] = useState<Date>(new Date());
  
  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    // Clean up the interval on component unmount
    return () => {
      clearInterval(timer);
    };
  }, []); // Empty dependency array means this effect runs once on mount
  
  return (
    <div className="clock-container">
      <h2>현재 시간</h2>
      <div className="clock">
        {time.toLocaleTimeString()}
      </div>
      <p>날짜: {time.toLocaleDateString()}</p>
    </div>
  );
};

export default Clock;
