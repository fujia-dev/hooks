import React, { FC } from 'react';

import useArticle from './useArticle';

interface ArticleDetailProps {
  id: string;
}

const ArticleDetail: FC<ArticleDetailProps> = (props) => {
  const { id } = props;

  const { data, loading, error } = useArticle(id);

  if (error) {
    return <div>Failed.</div>;
  }

  if (!data || loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{(data as any).title}</h1>
    </div>
  )
};

export default ArticleDetail;
