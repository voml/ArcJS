import { ArcParser } from '../dist'

const ans = ArcParser(`
(profile)
  (/release)
  opt-level = 2
  (/bench)
  opt-level = 2
`)
console.log(JSON.stringify(ans, null, 4))
