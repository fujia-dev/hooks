/*
 * @Author: fujia
 * @Date: 2021-11-23 15:24:39
 * @LastEditTime: 2021-11-23 16:13:42
 * @LastEditors: fujia(as default)
 * @Description: Abstract async request with hooks.
 * @FilePath: /hooks/src/hooks/useAsync.tsx
 */
import { useState, useCallback } from 'react';
var useAsync = function (asyncFn) {
    var _a = useState(null), data = _a[0], setData = _a[1];
    var _b = useState(false), loading = _b[0], setLoading = _b[1];
    var _c = useState(null), error = _c[0], setError = _c[1];
    var execute = useCallback(function () {
        setLoading(true);
        setData(null);
        setError(null);
        return asyncFn()
            .then(function (res) {
            setData(res);
            setLoading(false);
        })
            .catch(function (err) {
            setLoading(false);
            setError(err);
        });
    }, [asyncFn]);
    return {
        data: data,
        loading: loading,
        error: error,
        execute: execute,
    };
};
export default useAsync;
