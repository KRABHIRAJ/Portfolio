import { useState, useEffect } from 'react';

const GradientBackground = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="relative w-screen h-screen"
      style={{
        background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(31, 41, 55, 0.9), rgba(15, 23, 42, 0) 60%)`,
      }}
    >
      {/* Your content goes here */}
    </div>
  );
};

export default GradientBackground;
