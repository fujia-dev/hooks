import { useState, useEffect, useRef } from 'react';
import { debounce } from '@fujia/hammer';

interface UseMousePosition {
  eventType: 'click' | 'mousemove';
  interval: number;
}

export const useMousePosition = (
  options: UseMousePosition = {
    eventType: 'mousemove',
    interval: 300,
  }
) => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  const { eventType, interval } = options;

  const updatePosition = (e: MouseEvent) => {
    const { pageX, pageY } = e;

    setPosition({
      x: pageX,
      y: pageY,
    });
  };
  const debounceUpdatePosition = useRef(
    debounce(updatePosition, interval)
  ).current;

  useEffect(() => {
    document.addEventListener(eventType, debounceUpdatePosition);

    return () => {
      document.removeEventListener(eventType, debounceUpdatePosition);
    };
  }, [debounceUpdatePosition, eventType]);

  return position;
};
