import { ARCVisitor } from './antlr'
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import * as ANTLR from './antlr'
import bigDecimal from 'js-big-decimal'
import allPass from 'ramda/es/allPass';
export class TaskListVisitor extends AbstractParseTreeVisitor<object> implements ARCVisitor<object> {
    private atom(_: any) {
        return { task: 'value', data: _ }
    }
    private stack(_: any) {
        return { task: 'stack', data: _ }
    }
    defaultResult() {
        //console.warn('⚠️  Unreachable!')
        return { task: 'error' }
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
        function merge(o: any) {
            switch (o.task) {
                case 'empty': {
                    return
                }
                case 'value': {
                    return {
                        task: 'insert',
                        path: lhs.concat(o.path),
                        data: o.data
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
        switch (true) {
            case JSON.stringify(rhs.data) == '[]':
                return {
                    task: 'insert',
                    path: lhs,
                    data: []
                }
            case !Array.isArray(rhs.data):
                return {
                    task: 'insert',
                    path: lhs,
                    data: rhs.data
                }
            case rhs.data[0].task == undefined:
                return {
                    task: 'insert',
                    path: lhs,
                    data: rhs.data
                }
            default:
                return rhs.data.map(merge)
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
        return this.atom([])
    }
    visitFilledList(ctx: ANTLR.FilledListContext) {
        let element: any = []
        function merge(o: any, idx: number) {
            let path = [idx + 1]
            if (Array.isArray(o.path)) {
                path = path.concat(o.path)
            }
            function link(_: any) {
                _.path = path.concat(_.path)
                return _
            }
            if (Array.isArray(o.data)) {
                return o.data.map(link)
            }
            switch (o.task) {
                case 'value': {
                    return {
                        task: 'insert',
                        path: path,
                        data: o.data
                    }
                }
                case 'insert': {
                    return {
                        task: 'insert',
                        path: path,
                        data: o.data
                    }
                }
                case 'stack': {
                    return o.data
                }
            }
        }
        for (let i = 0; i < ctx.data().length; i++) {
            let v: any = this.visit(ctx.data(i))
            console.log(`Data: ${JSON.stringify(v, null, 4)}`)
            element = element.concat(v)
        }
        console.log(`List: ${JSON.stringify(element, null, 4)}`)
        return {
            task: 'value',
            data: element.map(merge)
        }
    }


    /* DataType: Dict */
    visitEmptyDict(ctx: ANTLR.EmptyDictContext) {
        //console.log('Empty: EmptyDict!')
        return this.atom({})
    }
    visitFilledDict(ctx: ANTLR.FilledDictContext) {
        let element: object[] = []
        for (let i = 0; i < ctx.recordEOS().length; i++) {
            const v: any = this.visit(ctx.recordEOS(i))
            //console.log(`Record: ${JSON.stringify(v, null, 4)}`)
            element = element.concat(v)
        }
        //console.log(`Dict: ${JSON.stringify(element, null, 4)}`)
        return element
    }


    /* Atom: String */
    visitStringEmpty(ctx: ANTLR.StringEmptyContext) {
        //console.log('Empty: EmptyString!')
        return this.atom('')
    }
    visitStringLiteralSingle(ctx: ANTLR.StringLiteralSingleContext) {
        const s = JSON.stringify(ctx.text).slice(2, -2)
        //console.log('String: ' + s)
        return this.atom(s)
    }
    visitStringLiteralBlock(ctx: ANTLR.StringLiteralBlockContext) {
        const s = JSON.stringify(ctx.text).slice(4, -4)
        //console.log('String: ' + s)
        return this.atom(s)
    }
    visitStringEscapeSingle(ctx: ANTLR.StringEscapeSingleContext) {
        const s = ctx.text.slice(1, -1)
        //console.log('String: ' + s)
        return this.atom(s)
    }
    visitStringEscapeBlock(ctx: ANTLR.StringEscapeBlockContext) {
        const s = ctx.text.slice(3, -3)
        //console.log('String: ' + s)
        return this.atom(s)
    }


    /* Atom: Integer */
    visitIntegerLiteral(ctx: ANTLR.IntegerLiteralContext) {
        const i = new bigDecimal(ctx.text.replace('_', ''))
        //console.log('Integer: ' + i.getPrettyValue(4, '_'))
        //TODO:Delete leading Zero
        return this.atom(i)
    }


    /* Atom: Decimal */
    visitDecimalLiteral(ctx: ANTLR.DecimalLiteralContext) {
        const i = new bigDecimal(ctx.text.replace('_', ''))
        //console.log('Decimal: ' + i.getPrettyValue(4, '_'))
        //TODO:Delete leading Zero
        return this.atom(i)
    }
    visitDecimalZero(ctx: ANTLR.DecimalZeroContext) {
        const i = new bigDecimal(ctx.text.replace('_', ''))
        //console.log('Decimal: ' + i.getPrettyValue(4, '_'))
        //TODO:Delete leading Zero
        return this.atom(i)
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
            return this.atom(null)
        }
        else {
            return this.atom(jump[s])
        }
    }
}