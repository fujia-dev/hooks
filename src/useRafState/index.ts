import {
  useState,
  useEffect,
  useCallback,
  useRef,
  SetStateAction,
  Dispatch
} from 'react';

const useRafState = <S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>] => {
  /**
  * NOTE: Raf is shorthand of requestAnimationFrame
  */
  const frame = useRef(0);
  const [state, setState] = useState(initialState);

  const setRafState = useCallback((val: S | ((prevState: S) => S)) => {
    cancelAnimationFrame(frame.current);

    frame.current = requestAnimationFrame(() => {
      setState(val);
    });
  }, []);

  // also use useUnmount
  useEffect(() => {
    return () => {
      cancelAnimationFrame(frame.current);
    }
  }, []);

  return [state, setRafState];
};

export default useRafState;