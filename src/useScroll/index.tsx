import { useState, useEffect, useRef, RefObject } from 'react';
import _ from '@fujia/hammer';

export type UseScrollState = {
  top: number;
  left: number;
};

const useScroll = (ref: RefObject<HTMLElement>, interval = 300) => {
  if (_.isDev && _.isUndef(ref?.current)) {
    _.errorLog('`useScroll` expects a single ref argument.')
  }

  const [position, setPosition] = useState<UseScrollState>({
    top: 0,
    left: 0
  });

  const cachedHandler = useRef<VoidFunction | null>(_.debounce(() => {
    if (ref.current) {
      setPosition({
        top: ref.current.scrollTop,
        left: ref.current.scrollLeft
      });
    }
  }, interval));

  useEffect(() => {
    const refNode = ref.current;
  
    if (refNode && cachedHandler.current) {
      _.addListener(refNode, 'scroll', cachedHandler.current, {
        capture: false,
        passive: true,
      });
    }

    return () => {
      if (refNode && cachedHandler.current) {
        _.removeListener(refNode, 'scroll', cachedHandler.current);
        cachedHandler.current = null;
      }
    }
  }, [ref]);

  return position;
};

export default useScroll;

