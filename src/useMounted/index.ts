import { useEffect } from 'react';

export const useMounted = (fn: CallableFunction) => {
  useEffect(() => {
    typeof fn === 'function' && fn();
  }, []);
};
