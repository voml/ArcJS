// Generated from ../../node_modules/@nyar/arc-antlr/ARC.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener'

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
 * This interface defines a complete listener for a parse tree produced by
 * `ARCParser`.
 */
export interface ARCListener extends ParseTreeListener {
    /**
	 * Enter a parse tree produced by the `LiteralMacro`
	 * labeled alternative in `ARCParser.macro`.
	 * @param ctx the parse tree
	 */
    enterLiteralMacro?: (ctx: LiteralMacroContext) => void
    /**
	 * Exit a parse tree produced by the `LiteralMacro`
	 * labeled alternative in `ARCParser.macro`.
	 * @param ctx the parse tree
	 */
    exitLiteralMacro?: (ctx: LiteralMacroContext) => void

    /**
	 * Enter a parse tree produced by the `SimpleMacro`
	 * labeled alternative in `ARCParser.macro`.
	 * @param ctx the parse tree
	 */
    enterSimpleMacro?: (ctx: SimpleMacroContext) => void
    /**
	 * Exit a parse tree produced by the `SimpleMacro`
	 * labeled alternative in `ARCParser.macro`.
	 * @param ctx the parse tree
	 */
    exitSimpleMacro?: (ctx: SimpleMacroContext) => void

    /**
	 * Enter a parse tree produced by the `EmptyMacro`
	 * labeled alternative in `ARCParser.macro`.
	 * @param ctx the parse tree
	 */
    enterEmptyMacro?: (ctx: EmptyMacroContext) => void
    /**
	 * Exit a parse tree produced by the `EmptyMacro`
	 * labeled alternative in `ARCParser.macro`.
	 * @param ctx the parse tree
	 */
    exitEmptyMacro?: (ctx: EmptyMacroContext) => void

    /**
	 * Enter a parse tree produced by the `FilledDictScope`
	 * labeled alternative in `ARCParser.dict_scope`.
	 * @param ctx the parse tree
	 */
    enterFilledDictScope?: (ctx: FilledDictScopeContext) => void
    /**
	 * Exit a parse tree produced by the `FilledDictScope`
	 * labeled alternative in `ARCParser.dict_scope`.
	 * @param ctx the parse tree
	 */
    exitFilledDictScope?: (ctx: FilledDictScopeContext) => void

    /**
	 * Enter a parse tree produced by the `EmptyDictScope`
	 * labeled alternative in `ARCParser.dict_scope`.
	 * @param ctx the parse tree
	 */
    enterEmptyDictScope?: (ctx: EmptyDictScopeContext) => void
    /**
	 * Exit a parse tree produced by the `EmptyDictScope`
	 * labeled alternative in `ARCParser.dict_scope`.
	 * @param ctx the parse tree
	 */
    exitEmptyDictScope?: (ctx: EmptyDictScopeContext) => void

    /**
	 * Enter a parse tree produced by the `StringEscapeBlock`
	 * labeled alternative in `ARCParser.string`.
	 * @param ctx the parse tree
	 */
    enterStringEscapeBlock?: (ctx: StringEscapeBlockContext) => void
    /**
	 * Exit a parse tree produced by the `StringEscapeBlock`
	 * labeled alternative in `ARCParser.string`.
	 * @param ctx the parse tree
	 */
    exitStringEscapeBlock?: (ctx: StringEscapeBlockContext) => void

    /**
	 * Enter a parse tree produced by the `StringEscapeSingle`
	 * labeled alternative in `ARCParser.string`.
	 * @param ctx the parse tree
	 */
    enterStringEscapeSingle?: (ctx: StringEscapeSingleContext) => void
    /**
	 * Exit a parse tree produced by the `StringEscapeSingle`
	 * labeled alternative in `ARCParser.string`.
	 * @param ctx the parse tree
	 */
    exitStringEscapeSingle?: (ctx: StringEscapeSingleContext) => void

    /**
	 * Enter a parse tree produced by the `StringLiteralBlock`
	 * labeled alternative in `ARCParser.string`.
	 * @param ctx the parse tree
	 */
    enterStringLiteralBlock?: (ctx: StringLiteralBlockContext) => void
    /**
	 * Exit a parse tree produced by the `StringLiteralBlock`
	 * labeled alternative in `ARCParser.string`.
	 * @param ctx the parse tree
	 */
    exitStringLiteralBlock?: (ctx: StringLiteralBlockContext) => void

    /**
	 * Enter a parse tree produced by the `StringLiteralSingle`
	 * labeled alternative in `ARCParser.string`.
	 * @param ctx the parse tree
	 */
    enterStringLiteralSingle?: (ctx: StringLiteralSingleContext) => void
    /**
	 * Exit a parse tree produced by the `StringLiteralSingle`
	 * labeled alternative in `ARCParser.string`.
	 * @param ctx the parse tree
	 */
    exitStringLiteralSingle?: (ctx: StringLiteralSingleContext) => void

    /**
	 * Enter a parse tree produced by the `StringEmpty`
	 * labeled alternative in `ARCParser.string`.
	 * @param ctx the parse tree
	 */
    enterStringEmpty?: (ctx: StringEmptyContext) => void
    /**
	 * Exit a parse tree produced by the `StringEmpty`
	 * labeled alternative in `ARCParser.string`.
	 * @param ctx the parse tree
	 */
    exitStringEmpty?: (ctx: StringEmptyContext) => void

    /**
	 * Enter a parse tree produced by the `IntegerLiteral`
	 * labeled alternative in `ARCParser.integer`.
	 * @param ctx the parse tree
	 */
    enterIntegerLiteral?: (ctx: IntegerLiteralContext) => void
    /**
	 * Exit a parse tree produced by the `IntegerLiteral`
	 * labeled alternative in `ARCParser.integer`.
	 * @param ctx the parse tree
	 */
    exitIntegerLiteral?: (ctx: IntegerLiteralContext) => void

    /**
	 * Enter a parse tree produced by the `EmptyList`
	 * labeled alternative in `ARCParser.list`.
	 * @param ctx the parse tree
	 */
    enterEmptyList?: (ctx: EmptyListContext) => void
    /**
	 * Exit a parse tree produced by the `EmptyList`
	 * labeled alternative in `ARCParser.list`.
	 * @param ctx the parse tree
	 */
    exitEmptyList?: (ctx: EmptyListContext) => void

    /**
	 * Enter a parse tree produced by the `FilledList`
	 * labeled alternative in `ARCParser.list`.
	 * @param ctx the parse tree
	 */
    enterFilledList?: (ctx: FilledListContext) => void
    /**
	 * Exit a parse tree produced by the `FilledList`
	 * labeled alternative in `ARCParser.list`.
	 * @param ctx the parse tree
	 */
    exitFilledList?: (ctx: FilledListContext) => void

    /**
	 * Enter a parse tree produced by the `EmptyStatement`
	 * labeled alternative in `ARCParser.empty`.
	 * @param ctx the parse tree
	 */
    enterEmptyStatement?: (ctx: EmptyStatementContext) => void
    /**
	 * Exit a parse tree produced by the `EmptyStatement`
	 * labeled alternative in `ARCParser.empty`.
	 * @param ctx the parse tree
	 */
    exitEmptyStatement?: (ctx: EmptyStatementContext) => void

    /**
	 * Enter a parse tree produced by the `RecordStatement`
	 * labeled alternative in `ARCParser.recordEOS`.
	 * @param ctx the parse tree
	 */
    enterRecordStatement?: (ctx: RecordStatementContext) => void
    /**
	 * Exit a parse tree produced by the `RecordStatement`
	 * labeled alternative in `ARCParser.recordEOS`.
	 * @param ctx the parse tree
	 */
    exitRecordStatement?: (ctx: RecordStatementContext) => void

    /**
	 * Enter a parse tree produced by the `FilledListScope`
	 * labeled alternative in `ARCParser.list_scope`.
	 * @param ctx the parse tree
	 */
    enterFilledListScope?: (ctx: FilledListScopeContext) => void
    /**
	 * Exit a parse tree produced by the `FilledListScope`
	 * labeled alternative in `ARCParser.list_scope`.
	 * @param ctx the parse tree
	 */
    exitFilledListScope?: (ctx: FilledListScopeContext) => void

    /**
	 * Enter a parse tree produced by the `EmptyListScope`
	 * labeled alternative in `ARCParser.list_scope`.
	 * @param ctx the parse tree
	 */
    enterEmptyListScope?: (ctx: EmptyListScopeContext) => void
    /**
	 * Exit a parse tree produced by the `EmptyListScope`
	 * labeled alternative in `ARCParser.list_scope`.
	 * @param ctx the parse tree
	 */
    exitEmptyListScope?: (ctx: EmptyListScopeContext) => void

    /**
	 * Enter a parse tree produced by the `IntegerAssign`
	 * labeled alternative in `ARCParser.record`.
	 * @param ctx the parse tree
	 */
    enterIntegerAssign?: (ctx: IntegerAssignContext) => void
    /**
	 * Exit a parse tree produced by the `IntegerAssign`
	 * labeled alternative in `ARCParser.record`.
	 * @param ctx the parse tree
	 */
    exitIntegerAssign?: (ctx: IntegerAssignContext) => void

    /**
	 * Enter a parse tree produced by the `DecimalAssign`
	 * labeled alternative in `ARCParser.record`.
	 * @param ctx the parse tree
	 */
    enterDecimalAssign?: (ctx: DecimalAssignContext) => void
    /**
	 * Exit a parse tree produced by the `DecimalAssign`
	 * labeled alternative in `ARCParser.record`.
	 * @param ctx the parse tree
	 */
    exitDecimalAssign?: (ctx: DecimalAssignContext) => void

    /**
	 * Enter a parse tree produced by the `SpecialLiteral`
	 * labeled alternative in `ARCParser.record`.
	 * @param ctx the parse tree
	 */
    enterSpecialLiteral?: (ctx: SpecialLiteralContext) => void
    /**
	 * Exit a parse tree produced by the `SpecialLiteral`
	 * labeled alternative in `ARCParser.record`.
	 * @param ctx the parse tree
	 */
    exitSpecialLiteral?: (ctx: SpecialLiteralContext) => void

    /**
	 * Enter a parse tree produced by the `StringAssign`
	 * labeled alternative in `ARCParser.record`.
	 * @param ctx the parse tree
	 */
    enterStringAssign?: (ctx: StringAssignContext) => void
    /**
	 * Exit a parse tree produced by the `StringAssign`
	 * labeled alternative in `ARCParser.record`.
	 * @param ctx the parse tree
	 */
    exitStringAssign?: (ctx: StringAssignContext) => void

    /**
	 * Enter a parse tree produced by the `ListAssign`
	 * labeled alternative in `ARCParser.record`.
	 * @param ctx the parse tree
	 */
    enterListAssign?: (ctx: ListAssignContext) => void
    /**
	 * Exit a parse tree produced by the `ListAssign`
	 * labeled alternative in `ARCParser.record`.
	 * @param ctx the parse tree
	 */
    exitListAssign?: (ctx: ListAssignContext) => void

    /**
	 * Enter a parse tree produced by the `DictAssign`
	 * labeled alternative in `ARCParser.record`.
	 * @param ctx the parse tree
	 */
    enterDictAssign?: (ctx: DictAssignContext) => void
    /**
	 * Exit a parse tree produced by the `DictAssign`
	 * labeled alternative in `ARCParser.record`.
	 * @param ctx the parse tree
	 */
    exitDictAssign?: (ctx: DictAssignContext) => void

    /**
	 * Enter a parse tree produced by the `CiteAssign`
	 * labeled alternative in `ARCParser.record`.
	 * @param ctx the parse tree
	 */
    enterCiteAssign?: (ctx: CiteAssignContext) => void
    /**
	 * Exit a parse tree produced by the `CiteAssign`
	 * labeled alternative in `ARCParser.record`.
	 * @param ctx the parse tree
	 */
    exitCiteAssign?: (ctx: CiteAssignContext) => void

    /**
	 * Enter a parse tree produced by the `MacroAssign`
	 * labeled alternative in `ARCParser.record`.
	 * @param ctx the parse tree
	 */
    enterMacroAssign?: (ctx: MacroAssignContext) => void
    /**
	 * Exit a parse tree produced by the `MacroAssign`
	 * labeled alternative in `ARCParser.record`.
	 * @param ctx the parse tree
	 */
    exitMacroAssign?: (ctx: MacroAssignContext) => void

    /**
	 * Enter a parse tree produced by the `EmptyDict`
	 * labeled alternative in `ARCParser.dict`.
	 * @param ctx the parse tree
	 */
    enterEmptyDict?: (ctx: EmptyDictContext) => void
    /**
	 * Exit a parse tree produced by the `EmptyDict`
	 * labeled alternative in `ARCParser.dict`.
	 * @param ctx the parse tree
	 */
    exitEmptyDict?: (ctx: EmptyDictContext) => void

    /**
	 * Enter a parse tree produced by the `FilledDict`
	 * labeled alternative in `ARCParser.dict`.
	 * @param ctx the parse tree
	 */
    enterFilledDict?: (ctx: FilledDictContext) => void
    /**
	 * Exit a parse tree produced by the `FilledDict`
	 * labeled alternative in `ARCParser.dict`.
	 * @param ctx the parse tree
	 */
    exitFilledDict?: (ctx: FilledDictContext) => void

    /**
	 * Enter a parse tree produced by the `DecimalLiteral`
	 * labeled alternative in `ARCParser.decimal`.
	 * @param ctx the parse tree
	 */
    enterDecimalLiteral?: (ctx: DecimalLiteralContext) => void
    /**
	 * Exit a parse tree produced by the `DecimalLiteral`
	 * labeled alternative in `ARCParser.decimal`.
	 * @param ctx the parse tree
	 */
    exitDecimalLiteral?: (ctx: DecimalLiteralContext) => void

    /**
	 * Enter a parse tree produced by the `DecimalZero`
	 * labeled alternative in `ARCParser.decimal`.
	 * @param ctx the parse tree
	 */
    enterDecimalZero?: (ctx: DecimalZeroContext) => void
    /**
	 * Exit a parse tree produced by the `DecimalZero`
	 * labeled alternative in `ARCParser.decimal`.
	 * @param ctx the parse tree
	 */
    exitDecimalZero?: (ctx: DecimalZeroContext) => void

    /**
	 * Enter a parse tree produced by the `DictGroup`
	 * labeled alternative in `ARCParser.group`.
	 * @param ctx the parse tree
	 */
    enterDictGroup?: (ctx: DictGroupContext) => void
    /**
	 * Exit a parse tree produced by the `DictGroup`
	 * labeled alternative in `ARCParser.group`.
	 * @param ctx the parse tree
	 */
    exitDictGroup?: (ctx: DictGroupContext) => void

    /**
	 * Enter a parse tree produced by the `DataGroup`
	 * labeled alternative in `ARCParser.group`.
	 * @param ctx the parse tree
	 */
    enterDataGroup?: (ctx: DataGroupContext) => void
    /**
	 * Exit a parse tree produced by the `DataGroup`
	 * labeled alternative in `ARCParser.group`.
	 * @param ctx the parse tree
	 */
    exitDataGroup?: (ctx: DataGroupContext) => void

    /**
	 * Enter a parse tree produced by `ARCParser.program`.
	 * @param ctx the parse tree
	 */
    enterProgram?: (ctx: ProgramContext) => void
    /**
	 * Exit a parse tree produced by `ARCParser.program`.
	 * @param ctx the parse tree
	 */
    exitProgram?: (ctx: ProgramContext) => void

    /**
	 * Enter a parse tree produced by `ARCParser.statement`.
	 * @param ctx the parse tree
	 */
    enterStatement?: (ctx: StatementContext) => void
    /**
	 * Exit a parse tree produced by `ARCParser.statement`.
	 * @param ctx the parse tree
	 */
    exitStatement?: (ctx: StatementContext) => void

    /**
	 * Enter a parse tree produced by `ARCParser.empty`.
	 * @param ctx the parse tree
	 */
    enterEmpty?: (ctx: EmptyContext) => void
    /**
	 * Exit a parse tree produced by `ARCParser.empty`.
	 * @param ctx the parse tree
	 */
    exitEmpty?: (ctx: EmptyContext) => void

    /**
	 * Enter a parse tree produced by `ARCParser.eos`.
	 * @param ctx the parse tree
	 */
    enterEos?: (ctx: EosContext) => void
    /**
	 * Exit a parse tree produced by `ARCParser.eos`.
	 * @param ctx the parse tree
	 */
    exitEos?: (ctx: EosContext) => void

    /**
	 * Enter a parse tree produced by `ARCParser.recordEOS`.
	 * @param ctx the parse tree
	 */
    enterRecordEOS?: (ctx: RecordEOSContext) => void
    /**
	 * Exit a parse tree produced by `ARCParser.recordEOS`.
	 * @param ctx the parse tree
	 */
    exitRecordEOS?: (ctx: RecordEOSContext) => void

    /**
	 * Enter a parse tree produced by `ARCParser.record`.
	 * @param ctx the parse tree
	 */
    enterRecord?: (ctx: RecordContext) => void
    /**
	 * Exit a parse tree produced by `ARCParser.record`.
	 * @param ctx the parse tree
	 */
    exitRecord?: (ctx: RecordContext) => void

    /**
	 * Enter a parse tree produced by `ARCParser.key`.
	 * @param ctx the parse tree
	 */
    enterKey?: (ctx: KeyContext) => void
    /**
	 * Exit a parse tree produced by `ARCParser.key`.
	 * @param ctx the parse tree
	 */
    exitKey?: (ctx: KeyContext) => void

    /**
	 * Enter a parse tree produced by `ARCParser.symbol`.
	 * @param ctx the parse tree
	 */
    enterSymbol?: (ctx: SymbolContext) => void
    /**
	 * Exit a parse tree produced by `ARCParser.symbol`.
	 * @param ctx the parse tree
	 */
    exitSymbol?: (ctx: SymbolContext) => void

    /**
	 * Enter a parse tree produced by `ARCParser.integer`.
	 * @param ctx the parse tree
	 */
    enterInteger?: (ctx: IntegerContext) => void
    /**
	 * Exit a parse tree produced by `ARCParser.integer`.
	 * @param ctx the parse tree
	 */
    exitInteger?: (ctx: IntegerContext) => void

    /**
	 * Enter a parse tree produced by `ARCParser.specialID`.
	 * @param ctx the parse tree
	 */
    enterSpecialID?: (ctx: SpecialIDContext) => void
    /**
	 * Exit a parse tree produced by `ARCParser.specialID`.
	 * @param ctx the parse tree
	 */
    exitSpecialID?: (ctx: SpecialIDContext) => void

    /**
	 * Enter a parse tree produced by `ARCParser.decimal`.
	 * @param ctx the parse tree
	 */
    enterDecimal?: (ctx: DecimalContext) => void
    /**
	 * Exit a parse tree produced by `ARCParser.decimal`.
	 * @param ctx the parse tree
	 */
    exitDecimal?: (ctx: DecimalContext) => void

    /**
	 * Enter a parse tree produced by `ARCParser.string`.
	 * @param ctx the parse tree
	 */
    enterString?: (ctx: StringContext) => void
    /**
	 * Exit a parse tree produced by `ARCParser.string`.
	 * @param ctx the parse tree
	 */
    exitString?: (ctx: StringContext) => void

    /**
	 * Enter a parse tree produced by `ARCParser.macro`.
	 * @param ctx the parse tree
	 */
    enterMacro?: (ctx: MacroContext) => void
    /**
	 * Exit a parse tree produced by `ARCParser.macro`.
	 * @param ctx the parse tree
	 */
    exitMacro?: (ctx: MacroContext) => void

    /**
	 * Enter a parse tree produced by `ARCParser.reference`.
	 * @param ctx the parse tree
	 */
    enterReference?: (ctx: ReferenceContext) => void
    /**
	 * Exit a parse tree produced by `ARCParser.reference`.
	 * @param ctx the parse tree
	 */
    exitReference?: (ctx: ReferenceContext) => void

    /**
	 * Enter a parse tree produced by `ARCParser.data`.
	 * @param ctx the parse tree
	 */
    enterData?: (ctx: DataContext) => void
    /**
	 * Exit a parse tree produced by `ARCParser.data`.
	 * @param ctx the parse tree
	 */
    exitData?: (ctx: DataContext) => void

    /**
	 * Enter a parse tree produced by `ARCParser.list`.
	 * @param ctx the parse tree
	 */
    enterList?: (ctx: ListContext) => void
    /**
	 * Exit a parse tree produced by `ARCParser.list`.
	 * @param ctx the parse tree
	 */
    exitList?: (ctx: ListContext) => void

    /**
	 * Enter a parse tree produced by `ARCParser.dict`.
	 * @param ctx the parse tree
	 */
    enterDict?: (ctx: DictContext) => void
    /**
	 * Exit a parse tree produced by `ARCParser.dict`.
	 * @param ctx the parse tree
	 */
    exitDict?: (ctx: DictContext) => void

    /**
	 * Enter a parse tree produced by `ARCParser.dict_scope`.
	 * @param ctx the parse tree
	 */
    enterDict_scope?: (ctx: Dict_scopeContext) => void
    /**
	 * Exit a parse tree produced by `ARCParser.dict_scope`.
	 * @param ctx the parse tree
	 */
    exitDict_scope?: (ctx: Dict_scopeContext) => void

    /**
	 * Enter a parse tree produced by `ARCParser.list_scope`.
	 * @param ctx the parse tree
	 */
    enterList_scope?: (ctx: List_scopeContext) => void
    /**
	 * Exit a parse tree produced by `ARCParser.list_scope`.
	 * @param ctx the parse tree
	 */
    exitList_scope?: (ctx: List_scopeContext) => void

    /**
	 * Enter a parse tree produced by `ARCParser.group`.
	 * @param ctx the parse tree
	 */
    enterGroup?: (ctx: GroupContext) => void
    /**
	 * Exit a parse tree produced by `ARCParser.group`.
	 * @param ctx the parse tree
	 */
    exitGroup?: (ctx: GroupContext) => void
}

