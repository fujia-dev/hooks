import { RefObject, useEffect } from 'react';

type HandlerType = (e: MouseEvent) => void;

export const useClickOutside = (
  ref: RefObject<HTMLElement>,
  handler: HandlerType
) => {
  useEffect(() => {
    const docListener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as HTMLLIElement))
        return;

      handler(event);
    };

    document.addEventListener('click', docListener);

    return () => {
      document.removeEventListener('click', docListener);
    };
  }, [ref, handler]);
};
