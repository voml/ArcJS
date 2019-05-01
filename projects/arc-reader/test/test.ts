import { TaskListVisitor } from '../source/task-list'
import { ArcInputStream } from '../source/lib'
import { readFileSync, writeFileSync } from 'fs'
const Visitor = new TaskListVisitor()
const files = ['dict', 'json']
function testString(raw: string) {
    const tree = ArcInputStream(raw)
    const ans = Visitor.visitProgram(tree)
    console.log(ans)
}
function testFile(name: string) {
    const file = readFileSync(`${__dirname}/${name}.arc`)
    const tree = ArcInputStream(`${ file.toString() }`)
    const ans = Visitor.visitProgram(tree)
    writeFileSync(`${__dirname}/${name}.json`, JSON.stringify(ans, null, 4))
}


/*
testString(`
`)
    
*/



files.map(testFile)
