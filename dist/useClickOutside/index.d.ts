import { RefObject } from 'react';
declare type HandlerType = (e: MouseEvent) => void;
declare const useClickOutside: (ref: RefObject<HTMLElement>, handler: HandlerType) => void;
export default useClickOutside;
