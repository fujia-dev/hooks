import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@ui-puzzles/rect';

import { IState } from './store';

const Counter = () => {
  const count = useSelector((state: IState) => state.value);

  // get the dispatch methods of currently store
  const dispatch = useDispatch();

  return (
    <div style={{ margin: 24 }}>
      <Button btnType="primary" onClick={() => dispatch({
        type: 'counter/incremented'
      })}>+</Button>
      <span style={{ padding: '0 16px' }}>{count}</span>
      <Button onClick={() => dispatch({
        type: 'counter/decremented'
      })}>-</Button>
    </div>
  )
};

export default Counter;
