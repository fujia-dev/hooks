import { useEffect, useState } from 'react';
var useKeyPress = function (elem) {
    if (elem === void 0) { elem = document.body; }
    var _a = useState(null), key = _a[0], setKey = _a[1];
    useEffect(function () {
        var handleKeyPress = function (e) {
            setKey(e.key);
        };
        elem.addEventListener('keypress', handleKeyPress);
        return function () {
            elem.removeEventListener('keypress', handleKeyPress);
        };
    }, [elem]);
    return key;
};
export default useKeyPress;
