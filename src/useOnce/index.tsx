import { useRef } from 'react';

export function useOnce(callback: CallableFunction) {
  const called = useRef(false);

  if (called.current) return;

  callback();
  called.current = true;
}
