import { ARCLexer, ARCParser } from '../antlr'
import { ANTLRInputStream, CommonTokenStream,CharStreams } from 'antlr4ts'

export function ArcInputStream(_: string) {
    let inputStream = new ANTLRInputStream(_)
    let lexer = new ARCLexer(inputStream)
    let tokenStream = new CommonTokenStream(lexer)
    let parser = new ARCParser(tokenStream)
    return parser.program()
}

/*
import R from 'ramda'
let root = {}
function insert(path: string[], value: any) {
    R.assocPath(path, value, root)
}
*/

export function notSubmap(_: any): Boolean {
    switch (true) {
        case !Array.isArray(_):
            return true
        case _[0] == undefined:
            return true
        case _[0].task != 'insert':
            return true
        default:
            return false
    }
}