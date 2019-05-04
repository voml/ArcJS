import { TaskListVisitor } from '../source/main'
import { ArcInputStream } from '../source/lib'
import { readFileSync, writeFileSync } from 'fs'
const Visitor = new TaskListVisitor()
export const files = ['list', 'dict', 'json', 'bugs', 'Cargo']
function testString(raw: string) {
    const tree = ArcInputStream(raw)
    const ans = Visitor.visitProgram(tree)
    console.log(ans)
}
function testFile(name: string) {
    const file = readFileSync(`${__dirname}/${name}.arc`)
    const tree = ArcInputStream(`${file.toString()}`)
    const ans = Visitor.visitProgram(tree)
    const json = 'module.exports = ' + JSON.stringify(ans, null, 4)
    writeFileSync(`${__dirname}/ir/${name}.js`, json)
}


/*
testString(`
(a)
(/b)
c = true
d = false
`)
*/



files.map(testFile)
