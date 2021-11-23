import { useState, useEffect, useRef } from 'react';
import debounce from 'lodash/debounce';

const getScrollPosition = () => ({
  left: document.body.scrollLeft,
  top: document.body.scrollTop,
});

const useScroll = (interval = 500) => {
  const [position, setPosition] = useState(getScrollPosition());

  const cachedHandler = useRef<(() => void) | null>(debounce(() => {
    setPosition(getScrollPosition());
  }, interval));

  useEffect(() => {
    if (cachedHandler.current) {
      document.addEventListener('scroll', cachedHandler.current);
    }

    return () => {
      if (cachedHandler.current) {
        document.removeEventListener('scroll', cachedHandler.current);
        cachedHandler.current = null;
      }
    }
  }, []);

  return position;
};

export default useScroll;

