import { ARCVisitor } from './antlr'
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import * as ANTLR from './antlr'
import R from 'ramda'
import bigDecimal from 'js-big-decimal'


export class ObjectVisitor extends AbstractParseTreeVisitor<object> implements ARCVisitor<object> {
    root = {}
    private insert(path: string[], value: any) {
        R.assocPath(path, value, this.root)
    }
    defaultResult() { return this.root }
    visitProgram(ctx: ANTLR.ProgramContext) {
        let element: object[] = []
        for (let i = 1; i < ctx.childCount; i++) {
            element.concat(this.visit(ctx.getChild(i - 1)))
        }
        //console.log("Program: " + element)
        return this.visit(ctx.getChild(0))
    }
}