import React, { FC, ReactNode } from 'react';

interface ListWithMoreProps {
  data: any[];
  max: number;
  renderItem: (item: any, index: number, data: any[]) => ReactNode[]
}

function ListWithMore(props: ListWithMoreProps) {
  const { data, max, renderItem } = props;
  const elements = data.map((item, index) => renderItem(item, index, data));
  const show = elements.slice(0, max);
  const hide = elements.slice(max);

  return (
    <div className="list-with-more">
      {show}
      {hide.length > 0 && (
        <div>
          <div style={{ maxWidth: 500 }}>{hide}</div>
          <div className="more-items-wrapper">
            and{" "}
            <span className="more-items-trigger"> {hide.length} more...</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListWithMore;
