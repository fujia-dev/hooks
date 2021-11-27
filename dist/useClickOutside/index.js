import { useEffect } from 'react';
var useClickOutside = function (ref, handler) {
    useEffect(function () {
        var docListener = function (event) {
            if (!ref.current || ref.current.contains(event.target))
                return;
            handler(event);
        };
        document.addEventListener('click', docListener);
        return function () {
            document.removeEventListener('click', docListener);
        };
    }, [ref, handler]);
};
export default useClickOutside;
