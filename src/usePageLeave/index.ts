import { useEffect } from 'react';
import { isFunction, addListener, removeListener } from '@fujia/hammer';

const usePageLeave = (onPageLeave: CallableFunction, args = []) => {
  useEffect(() => {
    if (!isFunction(onPageLeave)) return;

    const handler = (event: MouseEventInit) => {
      const from = event.relatedTarget;

      if (!from || (from as any).nodeName === 'HTML') {
        onPageLeave();
      }
    };

    addListener(document, 'mouseout', handler);

    return () => {
      removeListener(document, 'mouseout', handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, args);
};

export default usePageLeave;
