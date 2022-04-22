import { useState, useEffect, useRef, RefObject } from 'react';
import {
  isDev,
  errorLog,
  debounce,
  addListener,
  isUndef,
  removeListener,
} from '@fujia/hammer';

export type UseScrollState = {
  top: number;
  left: number;
};

export const useScroll = (ref: RefObject<HTMLElement>, interval = 300) => {
  if (isDev && isUndef(ref?.current)) {
    errorLog('`useScroll` expects a single ref argument.');
  }

  const [position, setPosition] = useState<UseScrollState>({
    top: 0,
    left: 0,
  });

  const cachedHandler = useRef<VoidFunction | null>(
    debounce(() => {
      if (ref.current) {
        setPosition({
          top: ref.current.scrollTop,
          left: ref.current.scrollLeft,
        });
      }
    }, interval)
  );

  useEffect(() => {
    const refNode = ref.current;

    if (refNode && cachedHandler.current) {
      addListener(refNode, 'scroll', cachedHandler.current, {
        capture: false,
        passive: true,
      });
    }

    return () => {
      if (refNode && cachedHandler.current) {
        removeListener(refNode, 'scroll', cachedHandler.current);
        cachedHandler.current = null;
      }
    };
  }, [ref]);

  return position;
};
