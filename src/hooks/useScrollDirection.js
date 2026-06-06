import { useState, useEffect } from 'react';

export function useScrollDirection() {
  const [direction, setDirection] = useState('up');
  const [prevY, setPrevY] = useState(0);

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY;
      setDirection(y > prevY && y > 80 ? 'down' : 'up');
      setPrevY(y);
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [prevY]);

  return direction;
}
