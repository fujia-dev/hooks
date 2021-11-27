/**
 * @description A counter with React Hooks
 *
 * @param {number} [initialValue=0] initial value
 * @param {number} [step=1] value per change
 * @return {*}
 */
declare const useCounter: (initialValue?: number, step?: number) => {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
};
export default useCounter;
