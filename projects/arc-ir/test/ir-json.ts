import R from 'ramda'
import { writeFileSync } from 'fs'
// tslint:disable-next-line: no-var-requires
interface record {
    'type': 'record',
    'path': any[]
    'data': any
}
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
function testFile(name: string) {
    const tasks = require(`./ir/${name}`)
    const json = JSON.stringify(tasks.reduce(addNode, {}), null, 4)
    writeFileSync(`${__dirname}/json/${name}.json`, json)
}

const files = ['list', 'dict', 'json', 'bugs']
files.map(testFile)