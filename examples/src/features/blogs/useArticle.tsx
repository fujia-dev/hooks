import { useState, useEffect } from 'react';

import request from '@/utils/request';

const useArticle = (id: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);

    request
      .get(`/posts/${id}`)
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, [id]);

  return {
    loading,
    error,
    data
  }
};

export default useArticle;
