export function Promolve() {
    let resolve = (value) => { };
    let reject = (value) => { };
    const promise = new Promise((re, rj) => {
        resolve = re;
        reject = rj;
    });
    return {
        promise,
        resolve,
        reject,
    };
}
//# sourceMappingURL=Promolve.js.map