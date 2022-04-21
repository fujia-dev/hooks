import { useEffect, useState } from 'react';

export const useDebounce = <V>(value: V, delay = 300) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounceValue(value), delay);

    return () => timer && clearTimeout(timer);
  }, [value, delay]);

  return debounceValue;
};
