import { useState, useCallback } from 'react';

function CounterRenderProps(props: any) {
  const { children } = props;
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const decrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  return children({
    count,
    increment,
    decrement
  });
}

function CounterRenderPropsExample() {
  return (
    <CounterRenderProps>
      {
        ({ count, increment, decrement }: {
          count: number,
          increment: () => void,
          decrement: () => void
        }) => {
          return (
            <div>
              <button onClick={decrement}>-</button>
              <span>{count}</span>
              <button onClick={increment}>+</button>
            </div>
          )
        }
      }
    </CounterRenderProps>
  )
}
