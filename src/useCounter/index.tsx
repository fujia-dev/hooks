/*
 * @Author: fujia
 * @Date: 2021-11-27 11:53:40
 * @LastEditTime: 2021-11-27 12:09:40
 * @LastEditors: fujia(as default)
 * @Description: A counter with React Hooks.
 * @FilePath: /hooks/src/useCounter/index.tsx
 */

import { useState, useCallback } from 'react';

/**
 * @description A counter with React Hooks
 *
 * @param {number} [initialValue=0] initial value
 * @param {number} [step=1] value per change
 * @return {*} 
 */
const useCounter = (initialValue = 0, step = 1) => {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => {
    setCount(preState => preState + step)
  }, []);

  const decrement = useCallback(() => {
    setCount(preState => preState - step)
  }, []);

  const reset = useCallback(() => setCount(initialValue), [initialValue]);

  return {
    count,
    increment,
    decrement,
    reset
  };
}

export default useCounter;
