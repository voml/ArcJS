import { ArcParser } from '../dist'

const ans = ArcParser(`
(a)
b = null
(/c)
d = true
e/f = false
`)
console.log(JSON.stringify(ans, null, 4))
