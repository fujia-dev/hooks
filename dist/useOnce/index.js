import { useRef } from 'react';
export default function useOnce(callback) {
    var called = useRef(false);
    if (called.current)
        return;
    callback();
    called.current = true;
}
;
