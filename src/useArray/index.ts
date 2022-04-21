import { useState } from 'react';

export const useArray = <T>(data: T[]) => {
  const [value, setValue] = useState(data);

  const cloneData = [...data];

  const add = (item: T) => setValue([...cloneData, item]);

  const removeByIndex = (index: number) => {
    cloneData.splice(index, 1);
    setValue(cloneData);
  };

  const clear = () => setValue([]);

  const pop = () => {
    cloneData.pop();
    setValue(cloneData);
  };

  return {
    value,
    add,
    removeByIndex,
    clear,
    pop,
  };
};
