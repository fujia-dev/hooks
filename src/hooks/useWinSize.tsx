
import { useState, useEffect } from 'react';

const useWinSize = () => {
  const [winSize, setWinSize] = useState({
    width: 0,
    height: 0
  });
  
  useEffect(() => {
    const handleWinSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setWinSize({
        width,
        height,
      });
    };

    window.addEventListener('resize', handleWinSize);
  
    return () => {
      window.removeEventListener('resize', handleWinSize);
    }
  }, []);

  return winSize;
}

export default useWinSize;
