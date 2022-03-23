import { Promolve, IReject, IResolve } from '../index.js';

const DEFAULT_ERROR = 'This promise failed!';

function ResolveCB(resolve: IResolve<number>) {
    const a = 5;
    const b = 10;

    resolve(a + b);
}

function RejectCB(reject: IReject) {
    const error = new Error(DEFAULT_ERROR);

    reject(error);
}

test('Resolve value is number', () => {
    const p = Promolve<number>();

    p.promise.then((value) => {
        expect(value).toBe(15);
        expect(typeof value).toBe('number');
    });

    ResolveCB(p.resolve);
});

test('Reject value should be Error', () => {
    const p = Promolve();

    p.promise.catch((error) => {
        expect(error.message).toBe(DEFAULT_ERROR);
        expect(error instanceof Error).toBe(true);
    });

    RejectCB(p.reject);
});
