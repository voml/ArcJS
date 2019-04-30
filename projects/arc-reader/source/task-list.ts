import { ARCVisitor, RecordEOSContext } from './antlr'
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import * as ANTLR from './antlr'
import bigDecimal from 'js-big-decimal'


export class TaskListVisitor extends AbstractParseTreeVisitor<object> implements ARCVisitor<object> {
    private notSubmap(_: any): Boolean {
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
    defaultResult() {
        //console.warn('⚠️  Unreachable!')
        return {}
    }
    visitProgram(ctx: ANTLR.ProgramContext) {
        let tasks: object[] = []
        for (let i = 1; i < ctx.childCount; i++) {
            tasks = tasks.concat(this.visit(ctx.getChild(i - 1)))
        }
        //console.log("Program: " + element)
        return tasks
    }


    /* Statement: Empty */
    visitEmptyStatement(ctx: ANTLR.EmptyStatementContext) {
        return {
            task: 'empty',
        }
    }
    visitRecordStatement(ctx: ANTLR.RecordStatementContext) {
        const v = this.visit(ctx.getChild(0))
        //console.log(`AssignRHS: ${JSON.stringify(v, null, 4)}`)
        return v
    }


    /* Statement: Assign */
    visitStringAssign(ctx: ANTLR.StringAssignContext) {
        const lhs: any = this.visit(ctx._left)
        const rhs: any = this.visit(ctx._right)
        //console.log('AssignLHS: ' + lhs.join('.'))
        //console.log(`AssignRHS: ${JSON.stringify(rhs, null, 4)}`)
        return {
            task: 'insert',
            path: lhs,
            data: rhs.data
        }
    }
    visitSpecialAssign(ctx: ANTLR.SpecialAssignContext) {
        const lhs: any = this.visit(ctx._left)
        const rhs: any = this.visit(ctx._right)
        //console.log('AssignLHS: ' + lhs.join('.'))
        //console.log(`AssignRHS: ${JSON.stringify(rhs, null, 4)}`)
        return {
            task: 'insert',
            path: lhs,
            data: rhs.data
        }
    }
    visitIntegerAssign(ctx: ANTLR.IntegerAssignContext) {
        const lhs: any = this.visit(ctx._left)
        const rhs: any = this.visit(ctx._right)
        //console.log('AssignLHS: ' + lhs.join('.'))
        //console.log(`AssignRHS: ${JSON.stringify(rhs, null, 4)}`)
        return {
            task: 'insert',
            path: lhs,
            data: rhs.data
        }
    }
    visitDecimalAssign(ctx: ANTLR.DecimalAssignContext) {
        const lhs: any = this.visit(ctx._left)
        const rhs: any = this.visit(ctx._right)
        //console.log('AssignLHS: ' + lhs.join('.'))
        //console.log(`AssignRHS: ${JSON.stringify(rhs, null, 4)}`)
        return {
            task: 'insert',
            path: lhs,
            data: rhs.data
        }
    }
    visitListAssign(ctx: ANTLR.ListAssignContext) {
        const lhs: any = this.visit(ctx._left)
        const rhs: any = this.visit(ctx._right)
        console.log('AssignLHS: ' + lhs.join('.'))
        console.log(`AssignRHS: ${JSON.stringify(rhs, null, 4)}`)
        if (rhs.data.every(this.notSubmap)) {
            return {
                task: 'insert',
                path: lhs,
                data: rhs.data
            }
        }
        else {
            return {
                task: 'error',
                path: lhs,
                data: rhs.data
            }
        }
    }
    visitDictAssign(ctx: ANTLR.DictAssignContext) {
        const lhs: any = this.visit(ctx._left)
        const rhs: any = this.visit(ctx._right)
        function merge(o: any) {
            switch (o.task) {
                case 'empty': {
                    return {
                        task: 'empty'
                    }
                }
                case 'insert': {
                    return {
                        task: 'insert',
                        path: lhs.concat(o.path),
                        data: o.data
                    }
                }
            }
        }
        return rhs.data.map(merge)
    }


    /* Node: Key */
    visitKey(ctx: ANTLR.KeyContext) {
        let element: object[] = []
        for (let i = 0; i < ctx.symbol().length; i++) {
            const v = this.visit(ctx.symbol(i))
            //console.log(`Key: ${JSON.stringify(v, null, 4)}`)
            element = element.concat(v)
        }
        //console.log(`Keys: ${JSON.stringify(element, null, 4)}`)
        return element
    }


    /* MixedNode: Symbol */
    visitSymbol(ctx: ANTLR.SymbolContext) {
        const v: any = this.visit(ctx.getChild(0))
        let e: any = v.data
        if (e === undefined) {
            e = ctx.text
        }
        //console.log(`Symbol: ${JSON.stringify(e, null, 4)}`)
        return [e]
    }


    /* DataType: List */
    visitEmptyList(ctx: ANTLR.EmptyListContext) {
        //console.log('Empty: EmptyList!')
        return {
            data: []
        }
    }
    visitFilledList(ctx: ANTLR.FilledListContext) {
        let element: object[] = []
        for (let i = 0; i < ctx.data().length; i++) {
            const v: any = this.visit(ctx.data(i))
            //console.log(`Data: ${JSON.stringify(v.data, null, 4)}`)
            element = element.concat([v.data])
        }
        //console.log(`List: ${JSON.stringify(element, null, 4)}`)
        return {
            data: element
        }
    }


    /* DataType: Dict */
    visitEmptyDict(ctx: ANTLR.EmptyDictContext) {
        //console.log('Empty: EmptyDict!')
        return {
            data: {}
        }
    }
    visitFilledDict(ctx: ANTLR.FilledDictContext) {
        let element: object[] = []
        for (let i = 0; i < ctx.recordEOS().length; i++) {
            const v: any = this.visit(ctx.recordEOS(i))
            //console.log(`Record: ${JSON.stringify(v, null, 4)}`)
            element = element.concat(v)
        }
        //console.log(`Dict: ${JSON.stringify(element, null, 4)}`)
        return {
            data: element
        }
    }


    /* Atom: String */
    visitStringEmpty(ctx: ANTLR.StringEmptyContext) {
        //console.log('Empty: EmptyString!')
        return {
            data: ''
        }
    }
    visitStringLiteralSingle(ctx: ANTLR.StringLiteralSingleContext) {
        const s = JSON.stringify(ctx.text).slice(2, -2)
        //console.log('String: ' + s)
        return {
            data: s
        }
    }
    visitStringLiteralBlock(ctx: ANTLR.StringLiteralBlockContext) {
        const s = JSON.stringify(ctx.text).slice(4, -4)
        //console.log('String: ' + s)
        return {
            data: s
        }
    }
    visitStringEscapeSingle(ctx: ANTLR.StringEscapeSingleContext) {
        const s = ctx.text.slice(1, -1)
        //console.log('String: ' + s)
        return {
            data: s
        }
    }
    visitStringEscapeBlock(ctx: ANTLR.StringEscapeBlockContext) {
        const s = ctx.text.slice(3, -3)
        //console.log('String: ' + s)
        return {
            data: s
        }
    }


    /* Atom: Integer */
    visitIntegerLiteral(ctx: ANTLR.IntegerLiteralContext) {
        const i = new bigDecimal(ctx.text.replace('_', ''))
        //console.log('Integer: ' + i.getPrettyValue(4, '_'))
        return {
            data: i//TODO:Delete leading Zero
        }
    }


    /* Atom: Decimal */
    visitDecimalLiteral(ctx: ANTLR.DecimalLiteralContext) {
        const i = new bigDecimal(ctx.text.replace('_', ''))
        //console.log('Decimal: ' + i.getPrettyValue(4, '_'))
        return {
            data: i//TODO:Delete leading Zero
        }
    }
    visitDecimalZero(ctx: ANTLR.DecimalZeroContext) {
        const i = new bigDecimal(ctx.text.replace('_', ''))
        //console.log('Decimal: ' + i.getPrettyValue(4, '_'))
        return {
            data: i//TODO:Delete leading Zero
        }
    }


    /* Atom: SpecialValue */
    visitSpecialID(ctx: ANTLR.SpecialIDContext) {
        let s: any = ctx.text.toLowerCase()
        //console.log('Special: ' + s)
        const jump: any = {
            null: null,
            true: true,
            false: false,
            infinity: Infinity,
            nan: NaN,
            undefined: undefined,
        }
        if (!jump.hasOwnProperty(s)) {
            console.warn('⚠️  Unknow Value: ' + s + ', return null')
            return {
                data: null
            }
        }
        else {
            return {
                data: jump[s]
            }
        }
    }
}