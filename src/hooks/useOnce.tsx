import { useRef } from 'react';

export default function useOnce(callback: CallableFunction) {
  const called = useRef(false);

  if (called.current) return;

  callback();
  called.current = true;
};
