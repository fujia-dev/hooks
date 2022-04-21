
import { useState, useEffect, useRef } from 'react';
import _ from '@fujia/hammer';

const useWinSize = ({
  initialWidth = Infinity,
  initialHeight = Infinity,
  interval = 300
}) => {
  const [winSize, setWinSize] = useState<{
    width: number;
    height: number;
  }>({
    width: _.isBrowser ? window.innerWidth : initialWidth,
    height: _.isBrowser ? window.innerHeight : initialHeight
  });

  const cachedHandler = useRef<VoidFunction | null>(_.debounce(() => {
    setWinSize({
      width: window?.innerWidth || initialWidth,
      height: window?.innerHeight || initialHeight,
    });
  }, interval));
  
  useEffect(() => {
    if (_.isBrowser) {
      _.addListener(window, 'resize', cachedHandler.current);
    
      return () => {
        _.removeListener(window, 'resize', cachedHandler.current);
        cachedHandler.current = null;
      }
    }
  }, []);

  return winSize;
}

export default useWinSize;
