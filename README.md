### Promolve

> CommonJS
```javascript
const { Promolve } = require("@melon95/promolve");

const p = Promolve();

function DoSomethingCB(resolve) {
    resolve(1 + 1);
}

p.promise.then((result) => {
    console.log(result);
    /* result = 2 */
})

DoSomethingCB(p.resolve);
```

> ES6
```javascript
import { Promolve } from '@melon95/promolve';

const p = Promolve();

function DoSomethingCB(resolve) {
    resolve(1 + 1);
}

p.promise.then((result) => {
    console.log(result); 
    /* result = 2 */
})

DoSomethingCB(p.resolve);
```

> Typings
```typescript
import { Promolve, IResolve } from '@melon95/promolve';

const p = Promolve<number>();

function DoSomethingCB(resolve: IResolve<number>): void {
    resolve(1 + 1);
}

p.promise.then((result/*: number*/) => {
    console.log(result);
    /* result = 2 */
})

DoSomethingCB(p.resolve);

```