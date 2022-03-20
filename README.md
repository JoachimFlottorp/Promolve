### Promolve

> ES6
```javascript
import { Promolve } from '@melon095/Promolve';

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
import { Promolve } from '@melon095/Promolve';
import { IResolve } from '@melon095/Promolve/@Types';

const p = Promolve<number>();

function DoSomethingCB(resolve: IResolve<number>): void {
    resolve(1 + 1);
}

p.promise.then((result /*Knows it's number*/) => {
    console.log(result);
    /* result = 2 */
})

DoSomethingCB(p.resolve);

```