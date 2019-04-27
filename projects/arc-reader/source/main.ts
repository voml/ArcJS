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
    defaultResult() {
        //console.warn('⚠️  Unreachable!')
        return {}
    }
    visitProgram(ctx: ANTLR.ProgramContext) {
        let element: object[] = []
        for (let i = 1; i < ctx.childCount; i++) {
            element.concat(this.visit(ctx.getChild(i - 1)))
        }
        //console.log("Program: " + element)
        return element
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


    /* Atom: String */
    visitStringEmpty(ctx: ANTLR.StringEmptyContext) {
        //console.log('String: EmptyString!')
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
        const i = new bigDecimal(ctx.text)
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
        switch (true) {
            case s == 'null': {
                s = null
                break
            }
            case s == 'true': {
                s = true
                break
            }
            case s == 'false': {
                s = false
                break
            }
            default: {
                console.warn('⚠️  Unknow Value: ' + s + ', return null')
                s = null
                break
            }
        }
        //TODO: undef, nan, infinity
        //console.log('Special: ' + s)
        return {
            data: s
        }
    }
}