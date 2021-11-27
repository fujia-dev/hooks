import { useState, useEffect, useRef } from 'react';
import debounce from 'lodash/debounce';
var getScrollPosition = function (container) {
    if (container === void 0) { container = document.body; }
    return ({
        left: container.scrollLeft,
        top: container.scrollTop,
    });
};
var useScroll = function (container, interval) {
    if (container === void 0) { container = document.body; }
    if (interval === void 0) { interval = 500; }
    var _a = useState(getScrollPosition(container)), position = _a[0], setPosition = _a[1];
    var cachedHandler = useRef(debounce(function () {
        setPosition(getScrollPosition(container));
    }, interval));
    useEffect(function () {
        if (cachedHandler.current) {
            document.addEventListener('scroll', cachedHandler.current);
        }
        return function () {
            if (cachedHandler.current) {
                document.removeEventListener('scroll', cachedHandler.current);
                cachedHandler.current = null;
            }
        };
    }, []);
    return position;
};
export default useScroll;
