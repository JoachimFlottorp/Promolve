export declare type IResolve<T = void> = (value: T | PromiseLike<T>) => void;
export declare type IReject = (value: unknown) => void;
export interface IPromolve<T = void> {
    promise: Promise<T>;
    resolve: IResolve<T>;
    reject: IReject;
}
