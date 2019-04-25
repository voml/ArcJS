import { ARCLexer, ARCParser } from '../antlr'
import { ANTLRInputStream, CommonTokenStream,CharStreams } from 'antlr4ts'

function ArcInputStream(_: string) {
    let inputStream = new ANTLRInputStream(_)
    let lexer = new ARCLexer(inputStream)
    let tokenStream = new CommonTokenStream(lexer)
    let parser = new ARCParser(tokenStream)
    return parser.program()
}



export {
    ArcInputStream
}
