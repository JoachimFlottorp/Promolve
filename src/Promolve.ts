import { IPromolve } from './@Types/index.js';

export function Promolve<T = void>(): IPromolve<T> {
	let resolve = (value: T | PromiseLike<T>) => {};

	let reject = (value: unknown) => {};

	const promise = new Promise<T>((re, rj) => {
		resolve = re;
		reject = rj;
	});

	return {
		promise,
		resolve,
		reject,
	};
}
