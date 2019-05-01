Arc Language IR
===============



```arc
t1 = 1
t2 = {a:2}
t3 = [{a:3}]
t4 = [
    [1, 2],
    [3, 4];
]
(t5)
a: 5
```


```js
module.exports = [
    { type: 'record', path: ['t1'], data: 1 },
    { type: 'record', path: ['t2', 'a'], data: 2 },
    { type: 'record', path: ['t3', 1, 'a'], data: 3 },
    { type: 'record', path: ['t4', 1, 1], data: 1 },
    { type: 'record', path: ['t4', 1, 2], data: 2 },
    { type: 'record', path: ['t4', 2, 1], data: 3 },
    { type: 'record', path: ['t4', 2, 2], data: 4 },
    { type: 'record', path: ['t5', 'a'], data: 5 }
]
```