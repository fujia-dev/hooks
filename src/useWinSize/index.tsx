import { useState, useEffect, useRef } from 'react';
import {
  isBrowser,
  debounce,
  addListener,
  removeListener,
} from '@fujia/hammer';

const useWinSize = (
  options = {
    initialWidth: Infinity,
    initialHeight: Infinity,
    interval: 300,
  }
) => {
  const { initialWidth, initialHeight, interval } = options;
  const [winSize, setWinSize] = useState<{
    width: number;
    height: number;
  }>({
    width: isBrowser ? window.innerWidth : initialWidth,
    height: isBrowser ? window.innerHeight : initialHeight,
  });

  const cachedHandler = useRef<VoidFunction | null>(
    debounce(() => {
      setWinSize({
        width: window?.innerWidth || initialWidth,
        height: window?.innerHeight || initialHeight,
      });
    }, interval)
  );

  useEffect(() => {
    if (isBrowser) {
      addListener(window, 'resize', cachedHandler.current);

      return () => {
        removeListener(window, 'resize', cachedHandler.current);
        cachedHandler.current = null;
      };
    }
  }, []);

  return winSize;
};

export default useWinSize;
