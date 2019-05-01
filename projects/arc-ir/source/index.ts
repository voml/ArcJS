import { TaskListVisitor } from './main'
import { ArcInputStream } from './lib'
import R from 'ramda'
interface record {
    'type': 'record',
    'path': any[]
    'data': any
}
const Visitor = new TaskListVisitor()
function addNode(raw: object, task: record) {
    function minus(_: any) {
        if (typeof _ == 'string') {
            return _
        }
        else {
            return _ - 1
        }
    }
    const path = task.path.map(minus)
    return R.assocPath(path, task.data, raw)
}
export function ArcIR(raw: string) {
    const tree = ArcInputStream(raw)
    return Visitor.visitProgram(tree)
}
export function ArcParser(raw: string) {
    const tree = ArcInputStream(raw)
    const tasks: any = Visitor.visitProgram(tree)
    return tasks.reduce(addNode, {})
}