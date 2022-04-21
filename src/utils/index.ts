/*
 * @Author: fujia
 * @Date: 2021-11-30 11:51:54
 * @LastEditTime: 2021-11-30 17:09:34
 * @LastEditors: fujia(as default)
 * @Description: utilities functions
 * @FilePath: /hooks/src/utils/index.ts
 */

export const timedCallback = (fn: VoidFunction, interval = 35) => setTimeout(fn, interval);
