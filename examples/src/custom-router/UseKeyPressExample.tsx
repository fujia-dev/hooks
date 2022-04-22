// import useKeyPress from '../hooks/common/useKeyPress';
import { useKeyPress } from '../../../src';

const UseKeyPressExample = () => {
  const key = useKeyPress();

  return (
    <div>
      <h1>useKeyPress examples</h1>
      <label>Key pressed: {key || 'N/A'}</label>
    </div>
  );
};

export default UseKeyPressExample;
