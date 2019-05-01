import { ArcParser } from '../dist'

const ans = ArcParser(`
d=[
    [{a:4}]
    [1,2]
    [{b:3}]
]
`)
console.log(JSON.stringify(ans, null, 4))
