import { useEffect, useState } from 'react';
import { isUndef, scrollbarWidth } from '@fujia/hammer';

export const useScrollbarWidth = (): number | undefined => {
  const [scrollW, setScrollW] = useState(scrollbarWidth());

  useEffect(() => {
    if (isUndef(scrollW)) return;

    const raf = requestAnimationFrame(() => {
      setScrollW(scrollbarWidth());
    });

    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return scrollW;
};
