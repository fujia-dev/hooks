import { useEffect } from 'react';
import _ from '@fujia/hammer';

const usePageLeave = (onPageLeave: CallableFunction, args = []) => {
  useEffect(() => {
    if (!_.isFunction(onPageLeave)) return;

    const handler = (event: MouseEventInit) => {
      const from = event.relatedTarget;

      if (!from || (from as any).nodeName === 'HTML') {
        onPageLeave();
      }
    };

    _.addListener(document, 'mouseout', handler);

    return () => {
      _.removeListener(document, 'mouseout', handler);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, args);
};

export default usePageLeave;
