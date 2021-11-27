import { useState, useEffect, useRef } from 'react';
import debounce from 'lodash/debounce';
var useMousePosition = function (options) {
    if (options === void 0) { options = {
        eventType: "mousemove",
        interval: 300
    }; }
    var _a = useState({
        x: 0,
        y: 0
    }), position = _a[0], setPosition = _a[1];
    var eventType = options.eventType, interval = options.interval;
    var updatePosition = function (e) {
        var pageX = e.pageX, pageY = e.pageY;
        setPosition({
            x: pageX,
            y: pageY
        });
    };
    var debounceUpdatePosition = useRef(debounce(updatePosition, interval)).current;
    useEffect(function () {
        document.addEventListener(eventType, debounceUpdatePosition);
        return function () {
            document.removeEventListener(eventType, debounceUpdatePosition);
        };
    }, []);
    return position;
};
export default useMousePosition;
