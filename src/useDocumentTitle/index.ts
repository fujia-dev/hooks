import React, { useEffect, useRef } from 'react';

export const useDocumentTitle = (title: string, keepOnUnmount = false) => {
  const originDocTitleRef = useRef(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(
    () => () => {
      if (keepOnUnmount) return;

      document.title = originDocTitleRef.current;
    },
    [keepOnUnmount]
  );
};
