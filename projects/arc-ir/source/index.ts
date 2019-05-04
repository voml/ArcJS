import { TaskListVisitor } from './main'
import { ArcInputStream } from './lib'
import R from 'ramda'
interface record {
    'type': 'record',
    'path': (string | number)[]
    'data': any
}
const Visitor = new TaskListVisitor()
function addNode(raw: object, task: record) {
    function offset(_: string | number) {
        if (typeof _ == 'string') { return _ }
        else { return _ - 1 }
    }
    const path = task.path.map(offset)
    return R.assocPath(path, task.data, raw)
}
export function ArcIR(raw: string) {
    const tree = ArcInputStream(raw)
    return Visitor.visitProgram(tree)
}
export function ArcParser(raw: string) {
    const tree = ArcInputStream(raw)
    const tasks = Visitor.visitProgram(tree) as record[]
    return tasks.reduce(addNode, {})
}