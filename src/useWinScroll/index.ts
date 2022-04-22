import { useEffect, useState, useRef } from 'react';
import { addListener, removeListener, debounce } from '@fujia/hammer';

export type UseWinScroll = {
  x: number;
  y: number;
};

export const useWinScroll = (interval = 300): UseWinScroll => {
  const [state, setState] = useState(() => ({
    x: window?.scrollX || 0,
    y: window?.scrollY || 0,
  }));

  const cachedHandler = useRef<VoidFunction | null>(
    debounce(() => {
      setState(() => {
        const { scrollX = 0, scrollY = 0 } = window || {};

        return {
          x: scrollX,
          y: scrollY,
        };
      });
    }, interval)
  );

  useEffect(() => {
    addListener(window, 'scroll', cachedHandler.current);

    return () => {
      removeListener(window, 'scroll', cachedHandler.current);
      cachedHandler.current = null;
    };
  }, []);

  return state;
};
