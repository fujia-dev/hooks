/*
 * @Author: fujia
 * @Date: 2021-11-23 15:24:39
 * @LastEditTime: 2021-11-23 16:13:42
 * @LastEditors: fujia(as default)
 * @Description: Abstract async request with hooks.
 * @FilePath: /hooks/src/hooks/useAsync.tsx
 */

import { useState, useCallback } from 'react';

const useAsync = (asyncFn: () => Promise<any>) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = useCallback(() => {
    setLoading(true);
    setData(null);
    setError(null);

    return asyncFn()
      .then(res => {
        setData(res);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        setError(err);
      })
  }, [asyncFn]);

  return {
    data,
    loading,
    error,
    execute,
  };
}

export default useAsync;

