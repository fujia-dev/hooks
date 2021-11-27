/*
 * @Author: fujia
 * @Date: 2021-11-27 11:53:40
 * @LastEditTime: 2021-11-27 12:09:40
 * @LastEditors: fujia(as default)
 * @Description: A counter with React Hooks.
 * @FilePath: /hooks/src/useCounter/index.tsx
 */
import { useState, useCallback } from 'react';
/**
 * @description A counter with React Hooks
 *
 * @param {number} [initialValue=0] initial value
 * @param {number} [step=1] value per change
 * @return {*}
 */
var useCounter = function (initialValue, step) {
    if (initialValue === void 0) { initialValue = 0; }
    if (step === void 0) { step = 1; }
    var _a = useState(initialValue), count = _a[0], setCount = _a[1];
    var increment = useCallback(function () {
        setCount(function (preState) { return preState + step; });
    }, []);
    var decrement = useCallback(function () {
        setCount(function (preState) { return preState - step; });
    }, []);
    var reset = useCallback(function () { return setCount(initialValue); }, [initialValue]);
    return {
        count: count,
        increment: increment,
        decrement: decrement,
        reset: reset
    };
};
export default useCounter;
