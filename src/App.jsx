import { useState, useEffect } from 'react';
import { MainContainer } from './components';

const GradientBackground = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.pageX, y: e.pageY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="relative w-screen"
      style={{
        background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(31, 41, 55, 0.9), rgba(15, 23, 42, 0) 60%)`,
      }}
    >
      <MainContainer />
    </div>
  );
};

export default GradientBackground;
