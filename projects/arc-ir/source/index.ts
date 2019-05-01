import { TaskListVisitor } from './task-list'
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
export function ArcParser(raw: string) {
    const tree = ArcInputStream(raw)
    const tasks: any = Visitor.visitProgram(tree)
    return tasks.reduce(addNode, {})
}

const ans = ArcParser(`
d=[
    [{a:4}]
    [1,2]
    [{b:3}]
]
`)
console.log(JSON.stringify(ans, null, 4))
