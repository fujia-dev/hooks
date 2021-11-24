import { useState, useEffect, useRef } from 'react';
import debounce from 'lodash/debounce';

const getScrollPosition = (container = document.body) => ({
  left: container.scrollLeft,
  top: container.scrollTop,
});

const useScroll = (container = document.body, interval = 500) => {
  const [position, setPosition] = useState(getScrollPosition(container));

  const cachedHandler = useRef<(() => void) | null>(debounce(() => {
    setPosition(getScrollPosition(container));
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

