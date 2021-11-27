declare const useAsync: (asyncFn: () => Promise<any>) => {
    data: any;
    loading: boolean;
    error: any;
    execute: () => Promise<void>;
};
export default useAsync;
