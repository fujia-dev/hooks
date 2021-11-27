import React from 'react';
import useWinSize from '.';

const withWinSize = (Comp: React.ComponentType) => {
  return (props: any) => {
    const winSize = useWinSize();

    return <Comp winSize={winSize} {...props} />
  }
}

export default withWinSize;
