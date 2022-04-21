/*
 * @Author: fujia
 * @Date: 2021-11-23 15:24:39
 * @LastEditTime: 2022-04-21 13:57:00
 * @LastEditors: fujia(as default)
 * @Description: Abstract async request with hooks.
 * @FilePath: /hooks/src/useAsync/useAsyncSimple.ts
 */

import { useState, useCallback } from 'react';

const useAsyncSimple = (asyncFn: () => Promise<any>) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = useCallback(() => {
    setLoading(true);
    setData(null);
    setError(null);

    return asyncFn()
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, [asyncFn]);

  return {
    data,
    loading,
    error,
    execute,
  };
};

export default useAsyncSimple;
