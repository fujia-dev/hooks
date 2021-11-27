import { useEffect, useState } from 'react';

const useKeyPress = (elem = document.body) => {
  const [key, setKey] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      setKey(e.key);
    };

    elem.addEventListener('keypress', handleKeyPress);

    return () => {
      elem.removeEventListener('keypress', handleKeyPress);
    }
  }, [elem])

  return key;
}

export default useKeyPress;

