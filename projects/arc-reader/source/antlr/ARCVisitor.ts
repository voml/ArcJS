// Generated from ../../node_modules/@nyar/arc-antlr/ARC.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor'

import { LiteralMacroContext } from './ARCParser'
import { SimpleMacroContext } from './ARCParser'
import { EmptyMacroContext } from './ARCParser'
import { FilledDictScopeContext } from './ARCParser'
import { EmptyDictScopeContext } from './ARCParser'
import { StringEscapeBlockContext } from './ARCParser'
import { StringEscapeSingleContext } from './ARCParser'
import { StringLiteralBlockContext } from './ARCParser'
import { StringLiteralSingleContext } from './ARCParser'
import { StringEmptyContext } from './ARCParser'
import { IntegerLiteralContext } from './ARCParser'
import { EmptyListContext } from './ARCParser'
import { FilledListContext } from './ARCParser'
import { EmptyStatementContext } from './ARCParser'
import { RecordStatementContext } from './ARCParser'
import { FilledListScopeContext } from './ARCParser'
import { EmptyListScopeContext } from './ARCParser'
import { IntegerAssignContext } from './ARCParser'
import { DecimalAssignContext } from './ARCParser'
import { SpecialLiteralContext } from './ARCParser'
import { StringAssignContext } from './ARCParser'
import { ListAssignContext } from './ARCParser'
import { DictAssignContext } from './ARCParser'
import { CiteAssignContext } from './ARCParser'
import { MacroAssignContext } from './ARCParser'
import { EmptyDictContext } from './ARCParser'
import { FilledDictContext } from './ARCParser'
import { DecimalLiteralContext } from './ARCParser'
import { DecimalZeroContext } from './ARCParser'
import { DictGroupContext } from './ARCParser'
import { DataGroupContext } from './ARCParser'
import { ProgramContext } from './ARCParser'
import { StatementContext } from './ARCParser'
import { EmptyContext } from './ARCParser'
import { EosContext } from './ARCParser'
import { RecordEOSContext } from './ARCParser'
import { RecordContext } from './ARCParser'
import { KeyContext } from './ARCParser'
import { SymbolContext } from './ARCParser'
import { IntegerContext } from './ARCParser'
import { SpecialIDContext } from './ARCParser'
import { DecimalContext } from './ARCParser'
import { StringContext } from './ARCParser'
import { MacroContext } from './ARCParser'
import { ReferenceContext } from './ARCParser'
import { DataContext } from './ARCParser'
import { ListContext } from './ARCParser'
import { DictContext } from './ARCParser'
import { Dict_scopeContext } from './ARCParser'
import { List_scopeContext } from './ARCParser'
import { GroupContext } from './ARCParser'


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ARCParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ARCVisitor<Result> extends ParseTreeVisitor<Result> {
    /**
	 * Visit a parse tree produced by the `LiteralMacro`
	 * labeled alternative in `ARCParser.macro`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitLiteralMacro?: (ctx: LiteralMacroContext) => Result

    /**
	 * Visit a parse tree produced by the `SimpleMacro`
	 * labeled alternative in `ARCParser.macro`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitSimpleMacro?: (ctx: SimpleMacroContext) => Result

    /**
	 * Visit a parse tree produced by the `EmptyMacro`
	 * labeled alternative in `ARCParser.macro`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitEmptyMacro?: (ctx: EmptyMacroContext) => Result

    /**
	 * Visit a parse tree produced by the `FilledDictScope`
	 * labeled alternative in `ARCParser.dict_scope`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitFilledDictScope?: (ctx: FilledDictScopeContext) => Result

    /**
	 * Visit a parse tree produced by the `EmptyDictScope`
	 * labeled alternative in `ARCParser.dict_scope`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitEmptyDictScope?: (ctx: EmptyDictScopeContext) => Result

    /**
	 * Visit a parse tree produced by the `StringEscapeBlock`
	 * labeled alternative in `ARCParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitStringEscapeBlock?: (ctx: StringEscapeBlockContext) => Result

    /**
	 * Visit a parse tree produced by the `StringEscapeSingle`
	 * labeled alternative in `ARCParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitStringEscapeSingle?: (ctx: StringEscapeSingleContext) => Result

    /**
	 * Visit a parse tree produced by the `StringLiteralBlock`
	 * labeled alternative in `ARCParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitStringLiteralBlock?: (ctx: StringLiteralBlockContext) => Result

    /**
	 * Visit a parse tree produced by the `StringLiteralSingle`
	 * labeled alternative in `ARCParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitStringLiteralSingle?: (ctx: StringLiteralSingleContext) => Result

    /**
	 * Visit a parse tree produced by the `StringEmpty`
	 * labeled alternative in `ARCParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitStringEmpty?: (ctx: StringEmptyContext) => Result

    /**
	 * Visit a parse tree produced by the `IntegerLiteral`
	 * labeled alternative in `ARCParser.integer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitIntegerLiteral?: (ctx: IntegerLiteralContext) => Result

    /**
	 * Visit a parse tree produced by the `EmptyList`
	 * labeled alternative in `ARCParser.list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitEmptyList?: (ctx: EmptyListContext) => Result

    /**
	 * Visit a parse tree produced by the `FilledList`
	 * labeled alternative in `ARCParser.list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitFilledList?: (ctx: FilledListContext) => Result

    /**
	 * Visit a parse tree produced by the `EmptyStatement`
	 * labeled alternative in `ARCParser.empty`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitEmptyStatement?: (ctx: EmptyStatementContext) => Result

    /**
	 * Visit a parse tree produced by the `RecordStatement`
	 * labeled alternative in `ARCParser.recordEOS`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitRecordStatement?: (ctx: RecordStatementContext) => Result

    /**
	 * Visit a parse tree produced by the `FilledListScope`
	 * labeled alternative in `ARCParser.list_scope`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitFilledListScope?: (ctx: FilledListScopeContext) => Result

    /**
	 * Visit a parse tree produced by the `EmptyListScope`
	 * labeled alternative in `ARCParser.list_scope`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitEmptyListScope?: (ctx: EmptyListScopeContext) => Result

    /**
	 * Visit a parse tree produced by the `IntegerAssign`
	 * labeled alternative in `ARCParser.record`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitIntegerAssign?: (ctx: IntegerAssignContext) => Result

    /**
	 * Visit a parse tree produced by the `DecimalAssign`
	 * labeled alternative in `ARCParser.record`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitDecimalAssign?: (ctx: DecimalAssignContext) => Result

    /**
	 * Visit a parse tree produced by the `SpecialLiteral`
	 * labeled alternative in `ARCParser.record`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitSpecialLiteral?: (ctx: SpecialLiteralContext) => Result

    /**
	 * Visit a parse tree produced by the `StringAssign`
	 * labeled alternative in `ARCParser.record`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitStringAssign?: (ctx: StringAssignContext) => Result

    /**
	 * Visit a parse tree produced by the `ListAssign`
	 * labeled alternative in `ARCParser.record`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitListAssign?: (ctx: ListAssignContext) => Result

    /**
	 * Visit a parse tree produced by the `DictAssign`
	 * labeled alternative in `ARCParser.record`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitDictAssign?: (ctx: DictAssignContext) => Result

    /**
	 * Visit a parse tree produced by the `CiteAssign`
	 * labeled alternative in `ARCParser.record`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitCiteAssign?: (ctx: CiteAssignContext) => Result

    /**
	 * Visit a parse tree produced by the `MacroAssign`
	 * labeled alternative in `ARCParser.record`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitMacroAssign?: (ctx: MacroAssignContext) => Result

    /**
	 * Visit a parse tree produced by the `EmptyDict`
	 * labeled alternative in `ARCParser.dict`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitEmptyDict?: (ctx: EmptyDictContext) => Result

    /**
	 * Visit a parse tree produced by the `FilledDict`
	 * labeled alternative in `ARCParser.dict`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitFilledDict?: (ctx: FilledDictContext) => Result

    /**
	 * Visit a parse tree produced by the `DecimalLiteral`
	 * labeled alternative in `ARCParser.decimal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitDecimalLiteral?: (ctx: DecimalLiteralContext) => Result

    /**
	 * Visit a parse tree produced by the `DecimalZero`
	 * labeled alternative in `ARCParser.decimal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitDecimalZero?: (ctx: DecimalZeroContext) => Result

    /**
	 * Visit a parse tree produced by the `DictGroup`
	 * labeled alternative in `ARCParser.group`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitDictGroup?: (ctx: DictGroupContext) => Result

    /**
	 * Visit a parse tree produced by the `DataGroup`
	 * labeled alternative in `ARCParser.group`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitDataGroup?: (ctx: DataGroupContext) => Result

    /**
	 * Visit a parse tree produced by `ARCParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitProgram?: (ctx: ProgramContext) => Result

    /**
	 * Visit a parse tree produced by `ARCParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitStatement?: (ctx: StatementContext) => Result

    /**
	 * Visit a parse tree produced by `ARCParser.empty`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitEmpty?: (ctx: EmptyContext) => Result

    /**
	 * Visit a parse tree produced by `ARCParser.eos`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitEos?: (ctx: EosContext) => Result

    /**
	 * Visit a parse tree produced by `ARCParser.recordEOS`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitRecordEOS?: (ctx: RecordEOSContext) => Result

    /**
	 * Visit a parse tree produced by `ARCParser.record`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitRecord?: (ctx: RecordContext) => Result

    /**
	 * Visit a parse tree produced by `ARCParser.key`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitKey?: (ctx: KeyContext) => Result

    /**
	 * Visit a parse tree produced by `ARCParser.symbol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitSymbol?: (ctx: SymbolContext) => Result

    /**
	 * Visit a parse tree produced by `ARCParser.integer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitInteger?: (ctx: IntegerContext) => Result

    /**
	 * Visit a parse tree produced by `ARCParser.specialID`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitSpecialID?: (ctx: SpecialIDContext) => Result

    /**
	 * Visit a parse tree produced by `ARCParser.decimal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitDecimal?: (ctx: DecimalContext) => Result

    /**
	 * Visit a parse tree produced by `ARCParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitString?: (ctx: StringContext) => Result

    /**
	 * Visit a parse tree produced by `ARCParser.macro`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitMacro?: (ctx: MacroContext) => Result

    /**
	 * Visit a parse tree produced by `ARCParser.reference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitReference?: (ctx: ReferenceContext) => Result

    /**
	 * Visit a parse tree produced by `ARCParser.data`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitData?: (ctx: DataContext) => Result

    /**
	 * Visit a parse tree produced by `ARCParser.list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitList?: (ctx: ListContext) => Result

    /**
	 * Visit a parse tree produced by `ARCParser.dict`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitDict?: (ctx: DictContext) => Result

    /**
	 * Visit a parse tree produced by `ARCParser.dict_scope`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitDict_scope?: (ctx: Dict_scopeContext) => Result

    /**
	 * Visit a parse tree produced by `ARCParser.list_scope`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitList_scope?: (ctx: List_scopeContext) => Result

    /**
	 * Visit a parse tree produced by `ARCParser.group`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
    visitGroup?: (ctx: GroupContext) => Result
}

