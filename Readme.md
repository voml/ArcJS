Arc Hive
========

Arc Language: https://github.com/Moe-Net/Arc-Language

## Install

```sh
yarn add @nyar/arc-ir
npm install @nyar/arc-ir
```

## Start

```ts
import { ArcParser } from '@nyar/arc-ir'
const ans = ArcParser(`
(a)
b = null
(/c)
d = true
e/f = false
`)
console.log(JSON.stringify(ans, null, 4))
```



```json
{
    "a": {
        "b": null,
        "c": {
            "d": true,
            "e": {
                "f": false
            }
        }
    }
}
```