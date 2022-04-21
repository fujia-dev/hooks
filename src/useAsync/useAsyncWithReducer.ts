import { useCallback, useReducer } from 'react';

import { useMountedRef } from '../useMountedRef';
import type { State } from './interface';
import { initialDefaultState, defaultConfig } from './constants';

const useSafeDispatch = <T>(dispatch: (...args: T[]) => void) => {
  const mountedRef = useMountedRef();

  return useCallback(
    (...args: T[]) => mountedRef.current && dispatch(...args),
    [dispatch, mountedRef]
  );
};

export const useAsyncWithReducer = <D>(
  initialState?: State<D>,
  initialOptions = defaultConfig
) => {
  const [state, dispatch] = useReducer(
    (state: State<D>, action: Partial<State<D>>) => ({
      ...state,
      ...action,
    }),
    {
      ...initialDefaultState,
      ...initialState,
    }
  );

  const safeDispatch = useSafeDispatch(dispatch);

  const setData = useCallback(
    (data: D) =>
      safeDispatch({
        data,
        stat: 'success',
        error: null,
      }),
    [safeDispatch]
  );

  const setError = useCallback(
    (error: Error) =>
      safeDispatch({
        error,
        stat: 'error',
        data: null,
      }),
    [safeDispatch]
  );

  /**
   * @desc invoke an async request.
   *
   * @param {Promise<D>} request
   */
  const run = useCallback(
    (request: Promise<D>) => {
      if (!request || !request.then)
        throw new Error('The param of run method should be a Promise type!');

      safeDispatch({ stat: 'loading' });

      return request
        .then((data) => {
          setData(data);

          return data;
        })
        .catch((error) => {
          /**
           * NOTE: the catch will consume this error, if you want to catch the error in the outer, you should throw it voluntarily.
           */
          setError(error);

          if (initialOptions.throwOnError) {
            return Promise.reject(error);
          }

          return error;
        });
    },
    [initialOptions.throwOnError, safeDispatch, setData, setError]
  );

  return {
    isIdle: state.stat === 'idle',
    isLoading: state.stat === 'loading',
    isError: state.stat === 'error',
    isSuccess: state.stat === 'success',
    run,
    setData,
    ...state,
  };
};
