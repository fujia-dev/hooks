import { useState, useEffect } from 'react';
var useWinSize = function () {
    var _a = useState({
        width: 0,
        height: 0
    }), winSize = _a[0], setWinSize = _a[1];
    useEffect(function () {
        var handleWinSize = function () {
            var width = window.innerWidth;
            var height = window.innerHeight;
            setWinSize({
                width: width,
                height: height,
            });
        };
        window.addEventListener('resize', handleWinSize);
        return function () {
            window.removeEventListener('resize', handleWinSize);
        };
    }, []);
    return winSize;
};
export default useWinSize;
