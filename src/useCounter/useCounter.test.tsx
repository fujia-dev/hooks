import { renderHook, act } from '@testing-library/react-hooks';

import useCounter from './index';

describe('useCounter', () => {
  it('should use counter', () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.count).toBe(0);
    expect(typeof result.current.decrement).toBe('function');
    expect(typeof result.current.increment).toBe('function');
    expect(typeof result.current.reset).toBe('function');
  });

  it('should increment, decrement or reset counter from custom initial value', () => {
    const { result } = renderHook(() => useCounter(8888));

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(8889);

    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(8888);

    act(() => {
      result.current.decrement();
      result.current.reset();
    });

    expect(result.current.count).toBe(8888);
  });

  it('should increment or decrement the specify value from custom step value', () => {
    const { result } = renderHook(() => useCounter(0, 3));

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(3);

    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(0);
  });

  it('should reset counter to updated initial value', () => {
    const { result, rerender } = renderHook(({
      initialValue
    }) => useCounter(initialValue), {
      initialProps: {
        initialValue: 0,
      }
    });

    rerender({
      initialValue: 10
    });

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.reset();
    });

    expect(result.current.count).toBe(10);
  });
});