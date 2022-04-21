import { renderHook } from '@testing-library/react-hooks';
// import { fireEvent } from '@testing-library/react';

import useScroll from './index';

it('useScroll', () => {
  const wrapper = ({ children }: { children: any }) => <section>{children}</section>;
  // const { result } = renderHook(() => useScroll(), { wrapper });

  // expect(result.current.top).toBe(0);
});
