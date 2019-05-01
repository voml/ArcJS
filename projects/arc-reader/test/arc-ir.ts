import { TaskListVisitor } from '../source/task-list'
import { ArcInputStream } from '../source/lib'
import { readFileSync, writeFileSync } from 'fs'
const Visitor = new TaskListVisitor()
const files = ['list', 'dict', 'json', 'bugs']
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
    writeFileSync(`${__dirname}/ir/${name}.ts`, json)
}



testString(`
d={;}
`)



/*

files.map(testFile)
  */