interface UseMousePosition {
    eventType: 'click' | 'mousemove';
    interval: number;
}
declare const useMousePosition: (options?: UseMousePosition) => {
    x: number;
    y: number;
};
export default useMousePosition;
