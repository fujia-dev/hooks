import { useCallback, useState } from 'react';

import { useMountedRef } from '../useMountedRef';
import type { State } from './interface';
import { initialDefaultState, defaultConfig } from './constants';

export const useAsync = <D>(
  initialState?: State<D>,
  initialOptions = defaultConfig
) => {
  const [state, setState] = useState<State<D>>({
    ...initialDefaultState,
    ...initialState,
  });
  const mountedRef = useMountedRef();

  const setData = useCallback(
    (data: D) =>
      setState({
        data,
        stat: 'success',
        error: null,
      }),
    []
  );

  const setError = useCallback(
    (error: Error) =>
      setState({
        error,
        stat: 'error',
        data: null,
      }),
    []
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

      setState((preState) => ({ ...preState, stat: 'loading' }));

      return request
        .then((data) => {
          mountedRef.current && setData(data);

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
    [initialOptions.throwOnError, mountedRef, setData, setError]
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
