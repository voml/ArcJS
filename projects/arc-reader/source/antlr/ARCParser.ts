// Generated from ../../node_modules/@nyar/arc-antlr/ARC.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN'
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer'
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException'
import { NotNull } from 'antlr4ts/Decorators'
import { NoViableAltException } from 'antlr4ts/NoViableAltException'
import { Override } from 'antlr4ts/Decorators'
import { Parser } from 'antlr4ts/Parser'
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext'
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator'
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener'
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor'
import { RecognitionException } from 'antlr4ts/RecognitionException'
import { RuleContext } from 'antlr4ts/RuleContext'
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import { Token } from 'antlr4ts/Token'
import { TokenStream } from 'antlr4ts/TokenStream'
import { Vocabulary } from 'antlr4ts/Vocabulary'
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl'

import * as Utils from 'antlr4ts/misc/Utils'

import { ARCListener } from './ARCListener'
import { ARCVisitor } from './ARCVisitor'


export class ARCParser extends Parser {
    public static readonly T__0 = 1
    public static readonly T__1 = 2
    public static readonly T__2 = 3
    public static readonly T__3 = 4
    public static readonly T__4 = 5
    public static readonly T__5 = 6
    public static readonly T__6 = 7
    public static readonly T__7 = 8
    public static readonly T__8 = 9
    public static readonly T__9 = 10
    public static readonly T__10 = 11
    public static readonly T__11 = 12
    public static readonly T__12 = 13
    public static readonly T__13 = 14
    public static readonly T__14 = 15
    public static readonly T__15 = 16
    public static readonly T__16 = 17
    public static readonly T__17 = 18
    public static readonly Semicolon = 19
    public static readonly Comma = 20
    public static readonly Assign = 21
    public static readonly Dot = 22
    public static readonly Identifier = 23
    public static readonly Integer = 24
    public static readonly Underline = 25
    public static readonly Sign = 26
    public static readonly StringEscapeBlock = 27
    public static readonly StringEscapeSingle = 28
    public static readonly StringLiteralBlock = 29
    public static readonly StringLiteralSingle = 30
    public static readonly NewLine = 31
    public static readonly MacroEscape = 32
    public static readonly LineComment = 33
    public static readonly PartComment = 34
    public static readonly WhiteSpace = 35
    public static readonly RULE_program = 0
    public static readonly RULE_statement = 1
    public static readonly RULE_record = 2
    public static readonly RULE_recordEOS = 3
    public static readonly RULE_key = 4
    public static readonly RULE_eos = 5
    public static readonly RULE_symbol = 6
    public static readonly RULE_integer = 7
    public static readonly RULE_specialID = 8
    public static readonly RULE_decimal = 9
    public static readonly RULE_string = 10
    public static readonly RULE_macro = 11
    public static readonly RULE_reference = 12
    public static readonly RULE_data = 13
    public static readonly RULE_list = 14
    public static readonly RULE_dict = 15
    public static readonly RULE_dict_scope = 16
    public static readonly RULE_list_scope = 17
    public static readonly RULE_scopes = 18
    public static readonly RULE_group = 19
    // tslint:disable:no-trailing-whitespace
    public static readonly ruleNames: string[] = [
        'program', 'statement', 'record', 'recordEOS', 'key', 'eos', 'symbol', 
        'integer', 'specialID', 'decimal', 'string', 'macro', 'reference', 'data', 
        'list', 'dict', 'dict_scope', 'list_scope', 'scopes', 'group',
    ]

    private static readonly _LITERAL_NAMES: Array<string | undefined> = [
        undefined, "'/'", "'\"\"\"'", "'''''", "'\"'", "'''", "'@'", "'`'", "'$'", 
        "'['", "']'", "'{'", "'}'", "'('", "')'", "'<'", "'>'", "'*'", "'&'", 
        "';'", "','", undefined, "'.'", undefined, undefined, "'_'",
    ]
    private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
        undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
        undefined, undefined, undefined, undefined, undefined, 'Semicolon', 'Comma', 
        'Assign', 'Dot', 'Identifier', 'Integer', 'Underline', 'Sign', 'StringEscapeBlock', 
        'StringEscapeSingle', 'StringLiteralBlock', 'StringLiteralSingle', 'NewLine', 
        'MacroEscape', 'LineComment', 'PartComment', 'WhiteSpace',
    ]
    public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ARCParser._LITERAL_NAMES, ARCParser._SYMBOLIC_NAMES, [])

    // @Override
    // @NotNull
    public get vocabulary(): Vocabulary {
        return ARCParser.VOCABULARY
    }
    // tslint:enable:no-trailing-whitespace

    // @Override
    public get grammarFileName(): string { return 'ARC.g4' }

    // @Override
    public get ruleNames(): string[] { return ARCParser.ruleNames }

    // @Override
    public get serializedATN(): string { return ARCParser._serializedATN }

    constructor(input: TokenStream) {
        super(input)
        this._interp = new ParserATNSimulator(ARCParser._ATN, this)
    }
    // @RuleVersion(0)
    public program(): ProgramContext {
        let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state)
        this.enterRule(_localctx, 0, ARCParser.RULE_program)
        let _la: number
        try {
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 43
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ARCParser.T__1) | (1 << ARCParser.T__2) | (1 << ARCParser.T__3) | (1 << ARCParser.T__4) | (1 << ARCParser.T__12) | (1 << ARCParser.T__14) | (1 << ARCParser.Identifier) | (1 << ARCParser.Integer) | (1 << ARCParser.StringEscapeBlock) | (1 << ARCParser.StringEscapeSingle) | (1 << ARCParser.StringLiteralBlock) | (1 << ARCParser.StringLiteralSingle))) !== 0)) {
                {
                {
                this.state = 40
                this.statement()
                }
                }
                this.state = 45
                this._errHandler.sync(this)
                _la = this._input.LA(1)
            }
            this.state = 46
            this.match(ARCParser.EOF)
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public statement(): StatementContext {
        let _localctx: StatementContext = new StatementContext(this._ctx, this.state)
        this.enterRule(_localctx, 2, ARCParser.RULE_statement)
        try {
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 51
            this._errHandler.sync(this)
            switch (this._input.LA(1)) {
            case ARCParser.T__1:
            case ARCParser.T__2:
            case ARCParser.T__3:
            case ARCParser.T__4:
            case ARCParser.Identifier:
            case ARCParser.Integer:
            case ARCParser.StringEscapeBlock:
            case ARCParser.StringEscapeSingle:
            case ARCParser.StringLiteralBlock:
            case ARCParser.StringLiteralSingle:
                {
                this.state = 48
                this.recordEOS()
                }
                break
            case ARCParser.T__12:
                {
                this.state = 49
                this.dict_scope()
                }
                break
            case ARCParser.T__14:
                {
                this.state = 50
                this.list_scope()
                }
                break
            default:
                throw new NoViableAltException(this)
            }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public record(): RecordContext {
        let _localctx: RecordContext = new RecordContext(this._ctx, this.state)
        this.enterRule(_localctx, 4, ARCParser.RULE_record)
        try {
            this.state = 85
            this._errHandler.sync(this)
            switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
            case 1:
                _localctx = new IntegerAssignContext(_localctx)
                this.enterOuterAlt(_localctx, 1)
                {
                this.state = 53;
                (_localctx as IntegerAssignContext)._left = this.key()
                this.state = 54
                this.match(ARCParser.Assign)
                this.state = 55;
                (_localctx as IntegerAssignContext)._right = this.integer()
                }
                break

            case 2:
                _localctx = new DecimalAssignContext(_localctx)
                this.enterOuterAlt(_localctx, 2)
                {
                this.state = 57;
                (_localctx as DecimalAssignContext)._left = this.key()
                this.state = 58
                this.match(ARCParser.Assign)
                this.state = 59;
                (_localctx as DecimalAssignContext)._right = this.decimal()
                }
                break

            case 3:
                _localctx = new SpecialAssignContext(_localctx)
                this.enterOuterAlt(_localctx, 3)
                {
                this.state = 61;
                (_localctx as SpecialAssignContext)._left = this.key()
                this.state = 62
                this.match(ARCParser.Assign)
                this.state = 63;
                (_localctx as SpecialAssignContext)._right = this.specialID()
                }
                break

            case 4:
                _localctx = new StringAssignContext(_localctx)
                this.enterOuterAlt(_localctx, 4)
                {
                this.state = 65;
                (_localctx as StringAssignContext)._left = this.key()
                this.state = 66
                this.match(ARCParser.Assign)
                this.state = 67;
                (_localctx as StringAssignContext)._right = this.string()
                }
                break

            case 5:
                _localctx = new ListAssignContext(_localctx)
                this.enterOuterAlt(_localctx, 5)
                {
                this.state = 69;
                (_localctx as ListAssignContext)._left = this.key()
                this.state = 70
                this.match(ARCParser.Assign)
                this.state = 71;
                (_localctx as ListAssignContext)._right = this.list()
                }
                break

            case 6:
                _localctx = new DictAssignContext(_localctx)
                this.enterOuterAlt(_localctx, 6)
                {
                this.state = 73;
                (_localctx as DictAssignContext)._left = this.key()
                this.state = 74
                this.match(ARCParser.Assign)
                this.state = 75;
                (_localctx as DictAssignContext)._right = this.dict()
                }
                break

            case 7:
                _localctx = new CiteAssignContext(_localctx)
                this.enterOuterAlt(_localctx, 7)
                {
                this.state = 77;
                (_localctx as CiteAssignContext)._left = this.key()
                this.state = 78
                this.match(ARCParser.Assign)
                this.state = 79;
                (_localctx as CiteAssignContext)._right = this.reference()
                }
                break

            case 8:
                _localctx = new MacroAssignContext(_localctx)
                this.enterOuterAlt(_localctx, 8)
                {
                this.state = 81;
                (_localctx as MacroAssignContext)._left = this.key()
                this.state = 82
                this.match(ARCParser.Assign)
                this.state = 83;
                (_localctx as MacroAssignContext)._right = this.macro()
                }
                break
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public recordEOS(): RecordEOSContext {
        let _localctx: RecordEOSContext = new RecordEOSContext(this._ctx, this.state)
        this.enterRule(_localctx, 6, ARCParser.RULE_recordEOS)
        let _la: number
        try {
            _localctx = new RecordStatementContext(_localctx)
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 87
            this.record()
            this.state = 89
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (_la === ARCParser.Semicolon || _la === ARCParser.Comma) {
                {
                this.state = 88
                this.eos()
                }
            }

            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public key(): KeyContext {
        let _localctx: KeyContext = new KeyContext(this._ctx, this.state)
        this.enterRule(_localctx, 8, ARCParser.RULE_key)
        let _la: number
        try {
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 91
            this.symbol()
            this.state = 96
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            while (_la === ARCParser.T__0) {
                {
                {
                this.state = 92
                this.match(ARCParser.T__0)
                this.state = 93
                this.symbol()
                }
                }
                this.state = 98
                this._errHandler.sync(this)
                _la = this._input.LA(1)
            }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public eos(): EosContext {
        let _localctx: EosContext = new EosContext(this._ctx, this.state)
        this.enterRule(_localctx, 10, ARCParser.RULE_eos)
        let _la: number
        try {
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 99
            _la = this._input.LA(1)
            if (!(_la === ARCParser.Semicolon || _la === ARCParser.Comma)) {
            this._errHandler.recoverInline(this)
            } else {
                if (this._input.LA(1) === Token.EOF) {
                    this.matchedEOF = true
                }

                this._errHandler.reportMatch(this)
                this.consume()
            }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public symbol(): SymbolContext {
        let _localctx: SymbolContext = new SymbolContext(this._ctx, this.state)
        this.enterRule(_localctx, 12, ARCParser.RULE_symbol)
        try {
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 104
            this._errHandler.sync(this)
            switch (this._input.LA(1)) {
            case ARCParser.Integer:
                {
                this.state = 101
                this.match(ARCParser.Integer)
                }
                break
            case ARCParser.T__1:
            case ARCParser.T__2:
            case ARCParser.T__3:
            case ARCParser.T__4:
            case ARCParser.StringEscapeBlock:
            case ARCParser.StringEscapeSingle:
            case ARCParser.StringLiteralBlock:
            case ARCParser.StringLiteralSingle:
                {
                this.state = 102
                this.string()
                }
                break
            case ARCParser.Identifier:
                {
                this.state = 103
                this.match(ARCParser.Identifier)
                }
                break
            default:
                throw new NoViableAltException(this)
            }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public integer(): IntegerContext {
        let _localctx: IntegerContext = new IntegerContext(this._ctx, this.state)
        this.enterRule(_localctx, 14, ARCParser.RULE_integer)
        let _la: number
        try {
            _localctx = new IntegerLiteralContext(_localctx)
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 107
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (_la === ARCParser.Sign) {
                {
                this.state = 106
                this.match(ARCParser.Sign)
                }
            }

            this.state = 109
            this.match(ARCParser.Integer)
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public specialID(): SpecialIDContext {
        let _localctx: SpecialIDContext = new SpecialIDContext(this._ctx, this.state)
        this.enterRule(_localctx, 16, ARCParser.RULE_specialID)
        let _la: number
        try {
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 112
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (_la === ARCParser.Sign) {
                {
                this.state = 111
                this.match(ARCParser.Sign)
                }
            }

            this.state = 114
            this.match(ARCParser.Identifier)
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public decimal(): DecimalContext {
        let _localctx: DecimalContext = new DecimalContext(this._ctx, this.state)
        this.enterRule(_localctx, 18, ARCParser.RULE_decimal)
        let _la: number
        try {
            this.state = 129
            this._errHandler.sync(this)
            switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
            case 1:
                _localctx = new DecimalLiteralContext(_localctx)
                this.enterOuterAlt(_localctx, 1)
                {
                this.state = 117
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                if (_la === ARCParser.Sign) {
                    {
                    this.state = 116
                    this.match(ARCParser.Sign)
                    }
                }

                this.state = 119;
                (_localctx as DecimalLiteralContext)._left = this.match(ARCParser.Integer)
                this.state = 120
                this.match(ARCParser.Dot)
                this.state = 122
                this._errHandler.sync(this)
                switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
                case 1:
                    {
                    this.state = 121;
                    (_localctx as DecimalLiteralContext)._right = this.match(ARCParser.Integer)
                    }
                    break
                }
                }
                break

            case 2:
                _localctx = new DecimalZeroContext(_localctx)
                this.enterOuterAlt(_localctx, 2)
                {
                this.state = 125
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                if (_la === ARCParser.Sign) {
                    {
                    this.state = 124
                    this.match(ARCParser.Sign)
                    }
                }

                this.state = 127
                this.match(ARCParser.Dot)
                this.state = 128;
                (_localctx as DecimalZeroContext)._right = this.match(ARCParser.Integer)
                }
                break
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public string(): StringContext {
        let _localctx: StringContext = new StringContext(this._ctx, this.state)
        this.enterRule(_localctx, 20, ARCParser.RULE_string)
        try {
            this.state = 143
            this._errHandler.sync(this)
            switch (this._input.LA(1)) {
            case ARCParser.StringEscapeBlock:
                _localctx = new StringEscapeBlockContext(_localctx)
                this.enterOuterAlt(_localctx, 1)
                {
                this.state = 131
                this.match(ARCParser.StringEscapeBlock)
                }
                break
            case ARCParser.StringEscapeSingle:
                _localctx = new StringEscapeSingleContext(_localctx)
                this.enterOuterAlt(_localctx, 2)
                {
                this.state = 132
                this.match(ARCParser.StringEscapeSingle)
                }
                break
            case ARCParser.StringLiteralBlock:
                _localctx = new StringLiteralBlockContext(_localctx)
                this.enterOuterAlt(_localctx, 3)
                {
                this.state = 133
                this.match(ARCParser.StringLiteralBlock)
                }
                break
            case ARCParser.StringLiteralSingle:
                _localctx = new StringLiteralSingleContext(_localctx)
                this.enterOuterAlt(_localctx, 4)
                {
                this.state = 134
                this.match(ARCParser.StringLiteralSingle)
                }
                break
            case ARCParser.T__1:
                _localctx = new StringEmptyContext(_localctx)
                this.enterOuterAlt(_localctx, 5)
                {
                this.state = 135
                this.match(ARCParser.T__1)
                this.state = 136
                this.match(ARCParser.T__1)
                }
                break
            case ARCParser.T__2:
                _localctx = new StringEmptyContext(_localctx)
                this.enterOuterAlt(_localctx, 6)
                {
                this.state = 137
                this.match(ARCParser.T__2)
                this.state = 138
                this.match(ARCParser.T__2)
                }
                break
            case ARCParser.T__3:
                _localctx = new StringEmptyContext(_localctx)
                this.enterOuterAlt(_localctx, 7)
                {
                this.state = 139
                this.match(ARCParser.T__3)
                this.state = 140
                this.match(ARCParser.T__3)
                }
                break
            case ARCParser.T__4:
                _localctx = new StringEmptyContext(_localctx)
                this.enterOuterAlt(_localctx, 8)
                {
                this.state = 141
                this.match(ARCParser.T__4)
                this.state = 142
                this.match(ARCParser.T__4)
                }
                break
            default:
                throw new NoViableAltException(this)
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public macro(): MacroContext {
        let _localctx: MacroContext = new MacroContext(this._ctx, this.state)
        this.enterRule(_localctx, 22, ARCParser.RULE_macro)
        try {
            this.state = 155
            this._errHandler.sync(this)
            switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
            case 1:
                _localctx = new LiteralMacroContext(_localctx)
                this.enterOuterAlt(_localctx, 1)
                {
                this.state = 145
                this.match(ARCParser.T__5)
                this.state = 146;
                (_localctx as LiteralMacroContext)._apply = this.match(ARCParser.Identifier)
                this.state = 147;
                (_localctx as LiteralMacroContext)._value = this.match(ARCParser.StringLiteralBlock)
                }
                break

            case 2:
                _localctx = new SimpleMacroContext(_localctx)
                this.enterOuterAlt(_localctx, 2)
                {
                this.state = 148
                this.match(ARCParser.T__5)
                this.state = 149;
                (_localctx as SimpleMacroContext)._apply = this.match(ARCParser.Identifier)
                this.state = 150
                this.match(ARCParser.MacroEscape)
                }
                break

            case 3:
                _localctx = new EmptyMacroContext(_localctx)
                this.enterOuterAlt(_localctx, 3)
                {
                this.state = 151
                this.match(ARCParser.T__5)
                this.state = 152;
                (_localctx as EmptyMacroContext)._apply = this.match(ARCParser.Identifier)
                this.state = 153
                this.match(ARCParser.T__6)
                this.state = 154
                this.match(ARCParser.T__6)
                }
                break
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public reference(): ReferenceContext {
        let _localctx: ReferenceContext = new ReferenceContext(this._ctx, this.state)
        this.enterRule(_localctx, 24, ARCParser.RULE_reference)
        try {
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 157
            this.match(ARCParser.T__7)
            this.state = 158
            this.match(ARCParser.Identifier)
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public data(): DataContext {
        let _localctx: DataContext = new DataContext(this._ctx, this.state)
        this.enterRule(_localctx, 26, ARCParser.RULE_data)
        try {
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 168
            this._errHandler.sync(this)
            switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
            case 1:
                {
                this.state = 160
                this.integer()
                }
                break

            case 2:
                {
                this.state = 161
                this.decimal()
                }
                break

            case 3:
                {
                this.state = 162
                this.specialID()
                }
                break

            case 4:
                {
                this.state = 163
                this.string()
                }
                break

            case 5:
                {
                this.state = 164
                this.list()
                }
                break

            case 6:
                {
                this.state = 165
                this.dict()
                }
                break

            case 7:
                {
                this.state = 166
                this.reference()
                }
                break

            case 8:
                {
                this.state = 167
                this.macro()
                }
                break
            }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public list(): ListContext {
        let _localctx: ListContext = new ListContext(this._ctx, this.state)
        this.enterRule(_localctx, 28, ARCParser.RULE_list)
        let _la: number
        try {
            this.state = 183
            this._errHandler.sync(this)
            switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
            case 1:
                _localctx = new EmptyListContext(_localctx)
                this.enterOuterAlt(_localctx, 1)
                {
                this.state = 170
                this.match(ARCParser.T__8)
                this.state = 171
                this.match(ARCParser.T__9)
                }
                break

            case 2:
                _localctx = new FilledListContext(_localctx)
                this.enterOuterAlt(_localctx, 2)
                {
                this.state = 172
                this.match(ARCParser.T__8)
                this.state = 177
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                do {
                    {
                    {
                    this.state = 173
                    this.data()
                    this.state = 175
                    this._errHandler.sync(this)
                    _la = this._input.LA(1)
                    if (_la === ARCParser.Semicolon || _la === ARCParser.Comma) {
                        {
                        this.state = 174
                        this.eos()
                        }
                    }

                    }
                    }
                    this.state = 179
                    this._errHandler.sync(this)
                    _la = this._input.LA(1)
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ARCParser.T__1) | (1 << ARCParser.T__2) | (1 << ARCParser.T__3) | (1 << ARCParser.T__4) | (1 << ARCParser.T__5) | (1 << ARCParser.T__7) | (1 << ARCParser.T__8) | (1 << ARCParser.T__10) | (1 << ARCParser.Dot) | (1 << ARCParser.Identifier) | (1 << ARCParser.Integer) | (1 << ARCParser.Sign) | (1 << ARCParser.StringEscapeBlock) | (1 << ARCParser.StringEscapeSingle) | (1 << ARCParser.StringLiteralBlock) | (1 << ARCParser.StringLiteralSingle))) !== 0))
                this.state = 181
                this.match(ARCParser.T__9)
                }
                break
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public dict(): DictContext {
        let _localctx: DictContext = new DictContext(this._ctx, this.state)
        this.enterRule(_localctx, 30, ARCParser.RULE_dict)
        let _la: number
        try {
            this.state = 203
            this._errHandler.sync(this)
            switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
            case 1:
                _localctx = new EmptyDictContext(_localctx)
                this.enterOuterAlt(_localctx, 1)
                {
                this.state = 185
                this.match(ARCParser.T__10)
                this.state = 186
                this.match(ARCParser.T__11)
                }
                break

            case 2:
                _localctx = new FilledDictContext(_localctx)
                this.enterOuterAlt(_localctx, 2)
                {
                this.state = 187
                this.match(ARCParser.T__10)
                this.state = 189
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                do {
                    {
                    {
                    this.state = 188
                    this.recordEOS()
                    }
                    }
                    this.state = 191
                    this._errHandler.sync(this)
                    _la = this._input.LA(1)
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ARCParser.T__1) | (1 << ARCParser.T__2) | (1 << ARCParser.T__3) | (1 << ARCParser.T__4) | (1 << ARCParser.Identifier) | (1 << ARCParser.Integer) | (1 << ARCParser.StringEscapeBlock) | (1 << ARCParser.StringEscapeSingle) | (1 << ARCParser.StringLiteralBlock) | (1 << ARCParser.StringLiteralSingle))) !== 0))
                this.state = 193
                this.match(ARCParser.T__11)
                }
                break

            case 3:
                _localctx = new NestedDictContext(_localctx)
                this.enterOuterAlt(_localctx, 3)
                {
                this.state = 195
                this.match(ARCParser.T__10)
                this.state = 197
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                do {
                    {
                    {
                    this.state = 196
                    this.scopes()
                    }
                    }
                    this.state = 199
                    this._errHandler.sync(this)
                    _la = this._input.LA(1)
                } while (_la === ARCParser.T__12 || _la === ARCParser.T__14)
                this.state = 201
                this.match(ARCParser.T__11)
                }
                break
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public dict_scope(): Dict_scopeContext {
        let _localctx: Dict_scopeContext = new Dict_scopeContext(this._ctx, this.state)
        this.enterRule(_localctx, 32, ARCParser.RULE_dict_scope)
        try {
            let _alt: number
            this.state = 217
            this._errHandler.sync(this)
            switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
            case 1:
                _localctx = new FilledDictScopeContext(_localctx)
                this.enterOuterAlt(_localctx, 1)
                {
                this.state = 205
                this.match(ARCParser.T__12)
                this.state = 206;
                (_localctx as FilledDictScopeContext)._header = this.key()
                this.state = 207
                this.match(ARCParser.T__13)
                this.state = 209
                this._errHandler.sync(this)
                _alt = 1
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 208
                        this.recordEOS()
                        }
                        }
                        break
                    default:
                        throw new NoViableAltException(this)
                    }
                    this.state = 211
                    this._errHandler.sync(this)
                    _alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx)
                } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER)
                }
                break

            case 2:
                _localctx = new EmptyDictScopeContext(_localctx)
                this.enterOuterAlt(_localctx, 2)
                {
                this.state = 213
                this.match(ARCParser.T__12)
                this.state = 214;
                (_localctx as EmptyDictScopeContext)._header = this.key()
                this.state = 215
                this.match(ARCParser.T__13)
                }
                break
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public list_scope(): List_scopeContext {
        let _localctx: List_scopeContext = new List_scopeContext(this._ctx, this.state)
        this.enterRule(_localctx, 34, ARCParser.RULE_list_scope)
        let _la: number
        try {
            this.state = 231
            this._errHandler.sync(this)
            switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
            case 1:
                _localctx = new FilledListScopeContext(_localctx)
                this.enterOuterAlt(_localctx, 1)
                {
                this.state = 219
                this.match(ARCParser.T__14)
                this.state = 220;
                (_localctx as FilledListScopeContext)._header = this.key()
                this.state = 221
                this.match(ARCParser.T__15)
                this.state = 223
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                do {
                    {
                    {
                    this.state = 222
                    this.group()
                    }
                    }
                    this.state = 225
                    this._errHandler.sync(this)
                    _la = this._input.LA(1)
                } while (_la === ARCParser.T__16 || _la === ARCParser.T__17)
                }
                break

            case 2:
                _localctx = new EmptyListScopeContext(_localctx)
                this.enterOuterAlt(_localctx, 2)
                {
                this.state = 227
                this.match(ARCParser.T__14)
                this.state = 228;
                (_localctx as EmptyListScopeContext)._header = this.key()
                this.state = 229
                this.match(ARCParser.T__15)
                }
                break
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public scopes(): ScopesContext {
        let _localctx: ScopesContext = new ScopesContext(this._ctx, this.state)
        this.enterRule(_localctx, 36, ARCParser.RULE_scopes)
        try {
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 235
            this._errHandler.sync(this)
            switch (this._input.LA(1)) {
            case ARCParser.T__12:
                {
                this.state = 233
                this.dict_scope()
                }
                break
            case ARCParser.T__14:
                {
                this.state = 234
                this.list_scope()
                }
                break
            default:
                throw new NoViableAltException(this)
            }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public group(): GroupContext {
        let _localctx: GroupContext = new GroupContext(this._ctx, this.state)
        this.enterRule(_localctx, 38, ARCParser.RULE_group)
        try {
            let _alt: number
            this.state = 245
            this._errHandler.sync(this)
            switch (this._input.LA(1)) {
            case ARCParser.T__16:
                _localctx = new DictGroupContext(_localctx)
                this.enterOuterAlt(_localctx, 1)
                {
                this.state = 237
                this.match(ARCParser.T__16)
                this.state = 239
                this._errHandler.sync(this)
                _alt = 1
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 238
                        this.recordEOS()
                        }
                        }
                        break
                    default:
                        throw new NoViableAltException(this)
                    }
                    this.state = 241
                    this._errHandler.sync(this)
                    _alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx)
                } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER)
                }
                break
            case ARCParser.T__17:
                _localctx = new DataGroupContext(_localctx)
                this.enterOuterAlt(_localctx, 2)
                {
                this.state = 243
                this.match(ARCParser.T__17)
                this.state = 244
                this.data()
                }
                break
            default:
                throw new NoViableAltException(this)
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return _localctx
    }

    public static readonly _serializedATN: string =
        '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03%\xFA\x04\x02' +
        '\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07' +
        '\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04' +
        '\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04' +
        '\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x03\x02\x07\x02,\n\x02\f\x02\x0E' +
        '\x02/\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x05\x036\n\x03\x03' +
        '\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03' +
        '\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03' +
        '\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03' +
        '\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04X\n\x04\x03\x05\x03\x05\x05' +
        '\x05\\\n\x05\x03\x06\x03\x06\x03\x06\x07\x06a\n\x06\f\x06\x0E\x06d\v\x06' +
        '\x03\x07\x03\x07\x03\b\x03\b\x03\b\x05\bk\n\b\x03\t\x05\tn\n\t\x03\t\x03' +
        '\t\x03\n\x05\ns\n\n\x03\n\x03\n\x03\v\x05\vx\n\v\x03\v\x03\v\x03\v\x05' +
        '\v}\n\v\x03\v\x05\v\x80\n\v\x03\v\x03\v\x05\v\x84\n\v\x03\f\x03\f\x03' +
        '\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\x92\n\f' +
        '\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\x9E' +
        '\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03' +
        '\x0F\x03\x0F\x03\x0F\x05\x0F\xAB\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10' +
        '\x03\x10\x05\x10\xB2\n\x10\x06\x10\xB4\n\x10\r\x10\x0E\x10\xB5\x03\x10' +
        '\x03\x10\x05\x10\xBA\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x06\x11\xC0' +
        '\n\x11\r\x11\x0E\x11\xC1\x03\x11\x03\x11\x03\x11\x03\x11\x06\x11\xC8\n' +
        '\x11\r\x11\x0E\x11\xC9\x03\x11\x03\x11\x05\x11\xCE\n\x11\x03\x12\x03\x12' +
        '\x03\x12\x03\x12\x06\x12\xD4\n\x12\r\x12\x0E\x12\xD5\x03\x12\x03\x12\x03' +
        '\x12\x03\x12\x05\x12\xDC\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x06\x13' +
        '\xE2\n\x13\r\x13\x0E\x13\xE3\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\xEA' +
        '\n\x13\x03\x14\x03\x14\x05\x14\xEE\n\x14\x03\x15\x03\x15\x06\x15\xF2\n' +
        '\x15\r\x15\x0E\x15\xF3\x03\x15\x03\x15\x05\x15\xF8\n\x15\x03\x15\x02\x02' +
        '\x02\x16\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12' +
        '\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02"\x02$\x02&' +
        '\x02(\x02\x02\x03\x03\x02\x15\x16\x02\u0117\x02-\x03\x02\x02\x02\x045' +
        '\x03\x02\x02\x02\x06W\x03\x02\x02\x02\bY\x03\x02\x02\x02\n]\x03\x02\x02' +
        '\x02\fe\x03\x02\x02\x02\x0Ej\x03\x02\x02\x02\x10m\x03\x02\x02\x02\x12' +
        'r\x03\x02\x02\x02\x14\x83\x03\x02\x02\x02\x16\x91\x03\x02\x02\x02\x18' +
        '\x9D\x03\x02\x02\x02\x1A\x9F\x03\x02\x02\x02\x1C\xAA\x03\x02\x02\x02\x1E' +
        '\xB9\x03\x02\x02\x02 \xCD\x03\x02\x02\x02"\xDB\x03\x02\x02\x02$\xE9\x03' +
        '\x02\x02\x02&\xED\x03\x02\x02\x02(\xF7\x03\x02\x02\x02*,\x05\x04\x03\x02' +
        '+*\x03\x02\x02\x02,/\x03\x02\x02\x02-+\x03\x02\x02\x02-.\x03\x02\x02\x02' +
        '.0\x03\x02\x02\x02/-\x03\x02\x02\x0201\x07\x02\x02\x031\x03\x03\x02\x02' +
        '\x0226\x05\b\x05\x0236\x05"\x12\x0246\x05$\x13\x0252\x03\x02\x02\x02' +
        '53\x03\x02\x02\x0254\x03\x02\x02\x026\x05\x03\x02\x02\x0278\x05\n\x06' +
        '\x0289\x07\x17\x02\x029:\x05\x10\t\x02:X\x03\x02\x02\x02;<\x05\n\x06\x02' +
        '<=\x07\x17\x02\x02=>\x05\x14\v\x02>X\x03\x02\x02\x02?@\x05\n\x06\x02@' +
        'A\x07\x17\x02\x02AB\x05\x12\n\x02BX\x03\x02\x02\x02CD\x05\n\x06\x02DE' +
        '\x07\x17\x02\x02EF\x05\x16\f\x02FX\x03\x02\x02\x02GH\x05\n\x06\x02HI\x07' +
        '\x17\x02\x02IJ\x05\x1E\x10\x02JX\x03\x02\x02\x02KL\x05\n\x06\x02LM\x07' +
        '\x17\x02\x02MN\x05 \x11\x02NX\x03\x02\x02\x02OP\x05\n\x06\x02PQ\x07\x17' +
        '\x02\x02QR\x05\x1A\x0E\x02RX\x03\x02\x02\x02ST\x05\n\x06\x02TU\x07\x17' +
        '\x02\x02UV\x05\x18\r\x02VX\x03\x02\x02\x02W7\x03\x02\x02\x02W;\x03\x02' +
        '\x02\x02W?\x03\x02\x02\x02WC\x03\x02\x02\x02WG\x03\x02\x02\x02WK\x03\x02' +
        '\x02\x02WO\x03\x02\x02\x02WS\x03\x02\x02\x02X\x07\x03\x02\x02\x02Y[\x05' +
        '\x06\x04\x02Z\\\x05\f\x07\x02[Z\x03\x02\x02\x02[\\\x03\x02\x02\x02\\\t' +
        '\x03\x02\x02\x02]b\x05\x0E\b\x02^_\x07\x03\x02\x02_a\x05\x0E\b\x02`^\x03' +
        '\x02\x02\x02ad\x03\x02\x02\x02b`\x03\x02\x02\x02bc\x03\x02\x02\x02c\v' +
        '\x03\x02\x02\x02db\x03\x02\x02\x02ef\t\x02\x02\x02f\r\x03\x02\x02\x02' +
        'gk\x07\x1A\x02\x02hk\x05\x16\f\x02ik\x07\x19\x02\x02jg\x03\x02\x02\x02' +
        'jh\x03\x02\x02\x02ji\x03\x02\x02\x02k\x0F\x03\x02\x02\x02ln\x07\x1C\x02' +
        '\x02ml\x03\x02\x02\x02mn\x03\x02\x02\x02no\x03\x02\x02\x02op\x07\x1A\x02' +
        '\x02p\x11\x03\x02\x02\x02qs\x07\x1C\x02\x02rq\x03\x02\x02\x02rs\x03\x02' +
        '\x02\x02st\x03\x02\x02\x02tu\x07\x19\x02\x02u\x13\x03\x02\x02\x02vx\x07' +
        '\x1C\x02\x02wv\x03\x02\x02\x02wx\x03\x02\x02\x02xy\x03\x02\x02\x02yz\x07' +
        '\x1A\x02\x02z|\x07\x18\x02\x02{}\x07\x1A\x02\x02|{\x03\x02\x02\x02|}\x03' +
        '\x02\x02\x02}\x84\x03\x02\x02\x02~\x80\x07\x1C\x02\x02\x7F~\x03\x02\x02' +
        '\x02\x7F\x80\x03\x02\x02\x02\x80\x81\x03\x02\x02\x02\x81\x82\x07\x18\x02' +
        '\x02\x82\x84\x07\x1A\x02\x02\x83w\x03\x02\x02\x02\x83\x7F\x03\x02\x02' +
        '\x02\x84\x15\x03\x02\x02\x02\x85\x92\x07\x1D\x02\x02\x86\x92\x07\x1E\x02' +
        '\x02\x87\x92\x07\x1F\x02\x02\x88\x92\x07 \x02\x02\x89\x8A\x07\x04\x02' +
        '\x02\x8A\x92\x07\x04\x02\x02\x8B\x8C\x07\x05\x02\x02\x8C\x92\x07\x05\x02' +
        '\x02\x8D\x8E\x07\x06\x02\x02\x8E\x92\x07\x06\x02\x02\x8F\x90\x07\x07\x02' +
        '\x02\x90\x92\x07\x07\x02\x02\x91\x85\x03\x02\x02\x02\x91\x86\x03\x02\x02' +
        '\x02\x91\x87\x03\x02\x02\x02\x91\x88\x03\x02\x02\x02\x91\x89\x03\x02\x02' +
        '\x02\x91\x8B\x03\x02\x02\x02\x91\x8D\x03\x02\x02\x02\x91\x8F\x03\x02\x02' +
        '\x02\x92\x17\x03\x02\x02\x02\x93\x94\x07\b\x02\x02\x94\x95\x07\x19\x02' +
        '\x02\x95\x9E\x07\x1F\x02\x02\x96\x97\x07\b\x02\x02\x97\x98\x07\x19\x02' +
        '\x02\x98\x9E\x07"\x02\x02\x99\x9A\x07\b\x02\x02\x9A\x9B\x07\x19\x02\x02' +
        '\x9B\x9C\x07\t\x02\x02\x9C\x9E\x07\t\x02\x02\x9D\x93\x03\x02\x02\x02\x9D' +
        '\x96\x03\x02\x02\x02\x9D\x99\x03\x02\x02\x02\x9E\x19\x03\x02\x02\x02\x9F' +
        '\xA0\x07\n\x02\x02\xA0\xA1\x07\x19\x02\x02\xA1\x1B\x03\x02\x02\x02\xA2' +
        '\xAB\x05\x10\t\x02\xA3\xAB\x05\x14\v\x02\xA4\xAB\x05\x12\n\x02\xA5\xAB' +
        '\x05\x16\f\x02\xA6\xAB\x05\x1E\x10\x02\xA7\xAB\x05 \x11\x02\xA8\xAB\x05' +
        '\x1A\x0E\x02\xA9\xAB\x05\x18\r\x02\xAA\xA2\x03\x02\x02\x02\xAA\xA3\x03' +
        '\x02\x02\x02\xAA\xA4\x03\x02\x02\x02\xAA\xA5\x03\x02\x02\x02\xAA\xA6\x03' +
        '\x02\x02\x02\xAA\xA7\x03\x02\x02\x02\xAA\xA8\x03\x02\x02\x02\xAA\xA9\x03' +
        '\x02\x02\x02\xAB\x1D\x03\x02\x02\x02\xAC\xAD\x07\v\x02\x02\xAD\xBA\x07' +
        '\f\x02\x02\xAE\xB3\x07\v\x02\x02\xAF\xB1\x05\x1C\x0F\x02\xB0\xB2\x05\f' +
        '\x07\x02\xB1\xB0\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\xB4\x03\x02' +
        '\x02\x02\xB3\xAF\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB3\x03\x02' +
        '\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\xB8\x07\f' +
        '\x02\x02\xB8\xBA\x03\x02\x02\x02\xB9\xAC\x03\x02\x02\x02\xB9\xAE\x03\x02' +
        '\x02\x02\xBA\x1F\x03\x02\x02\x02\xBB\xBC\x07\r\x02\x02\xBC\xCE\x07\x0E' +
        '\x02\x02\xBD\xBF\x07\r\x02\x02\xBE\xC0\x05\b\x05\x02\xBF\xBE\x03\x02\x02' +
        '\x02\xC0\xC1\x03\x02\x02\x02\xC1\xBF\x03\x02\x02\x02\xC1\xC2\x03\x02\x02' +
        '\x02\xC2\xC3\x03\x02\x02\x02\xC3\xC4\x07\x0E\x02\x02\xC4\xCE\x03\x02\x02' +
        '\x02\xC5\xC7\x07\r\x02\x02\xC6\xC8\x05&\x14\x02\xC7\xC6\x03\x02\x02\x02' +
        '\xC8\xC9\x03\x02\x02\x02\xC9\xC7\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02' +
        '\xCA\xCB\x03\x02\x02\x02\xCB\xCC\x07\x0E\x02\x02\xCC\xCE\x03\x02\x02\x02' +
        '\xCD\xBB\x03\x02\x02\x02\xCD\xBD\x03\x02\x02\x02\xCD\xC5\x03\x02\x02\x02' +
        '\xCE!\x03\x02\x02\x02\xCF\xD0\x07\x0F\x02\x02\xD0\xD1\x05\n\x06\x02\xD1' +
        '\xD3\x07\x10\x02\x02\xD2\xD4\x05\b\x05\x02\xD3\xD2\x03\x02\x02\x02\xD4' +
        '\xD5\x03\x02\x02\x02\xD5\xD3\x03\x02\x02\x02\xD5\xD6\x03\x02\x02\x02\xD6' +
        '\xDC\x03\x02\x02\x02\xD7\xD8\x07\x0F\x02\x02\xD8\xD9\x05\n\x06\x02\xD9' +
        '\xDA\x07\x10\x02\x02\xDA\xDC\x03\x02\x02\x02\xDB\xCF\x03\x02\x02\x02\xDB' +
        '\xD7\x03\x02\x02\x02\xDC#\x03\x02\x02\x02\xDD\xDE\x07\x11\x02\x02\xDE' +
        '\xDF\x05\n\x06\x02\xDF\xE1\x07\x12\x02\x02\xE0\xE2\x05(\x15\x02\xE1\xE0' +
        '\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3\xE1\x03\x02\x02\x02\xE3\xE4' +
        '\x03\x02\x02\x02\xE4\xEA\x03\x02\x02\x02\xE5\xE6\x07\x11\x02\x02\xE6\xE7' +
        '\x05\n\x06\x02\xE7\xE8\x07\x12\x02\x02\xE8\xEA\x03\x02\x02\x02\xE9\xDD' +
        '\x03\x02\x02\x02\xE9\xE5\x03\x02\x02\x02\xEA%\x03\x02\x02\x02\xEB\xEE' +
        '\x05"\x12\x02\xEC\xEE\x05$\x13\x02\xED\xEB\x03\x02\x02\x02\xED\xEC\x03' +
        "\x02\x02\x02\xEE\'\x03\x02\x02\x02\xEF\xF1\x07\x13\x02\x02\xF0\xF2\x05" +
        '\b\x05\x02\xF1\xF0\x03\x02\x02\x02\xF2\xF3\x03\x02\x02\x02\xF3\xF1\x03' +
        '\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\xF8\x03\x02\x02\x02\xF5\xF6\x07' +
        '\x14\x02\x02\xF6\xF8\x05\x1C\x0F\x02\xF7\xEF\x03\x02\x02\x02\xF7\xF5\x03' +
        '\x02\x02\x02\xF8)\x03\x02\x02\x02\x1E-5W[bjmrw|\x7F\x83\x91\x9D\xAA\xB1' +
        '\xB5\xB9\xC1\xC9\xCD\xD5\xDB\xE3\xE9\xED\xF3\xF7'
    public static __ATN: ATN
    public static get _ATN(): ATN {
        if (!ARCParser.__ATN) {
            ARCParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ARCParser._serializedATN))
        }

        return ARCParser.__ATN
    }

}

export class ProgramContext extends ParserRuleContext {
    public EOF(): TerminalNode { return this.getToken(ARCParser.EOF, 0) }
    public statement(): StatementContext[]
    public statement(i: number): StatementContext
    public statement(i?: number): StatementContext | StatementContext[] {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext)
        } else {
            return this.getRuleContext(i, StatementContext)
        }
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return ARCParser.RULE_program }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterProgram) {
            listener.enterProgram(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitProgram) {
            listener.exitProgram(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitProgram) {
            return visitor.visitProgram(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class StatementContext extends ParserRuleContext {
    public recordEOS(): RecordEOSContext | undefined {
        return this.tryGetRuleContext(0, RecordEOSContext)
    }
    public dict_scope(): Dict_scopeContext | undefined {
        return this.tryGetRuleContext(0, Dict_scopeContext)
    }
    public list_scope(): List_scopeContext | undefined {
        return this.tryGetRuleContext(0, List_scopeContext)
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return ARCParser.RULE_statement }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterStatement) {
            listener.enterStatement(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitStatement) {
            listener.exitStatement(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class RecordContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return ARCParser.RULE_record }
    public copyFrom(ctx: RecordContext): void {
        super.copyFrom(ctx)
    }
}
export class IntegerAssignContext extends RecordContext {
    public _left: KeyContext
    public _right: IntegerContext
    public Assign(): TerminalNode { return this.getToken(ARCParser.Assign, 0) }
    public key(): KeyContext {
        return this.getRuleContext(0, KeyContext)
    }
    public integer(): IntegerContext {
        return this.getRuleContext(0, IntegerContext)
    }
    constructor(ctx: RecordContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterIntegerAssign) {
            listener.enterIntegerAssign(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitIntegerAssign) {
            listener.exitIntegerAssign(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitIntegerAssign) {
            return visitor.visitIntegerAssign(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class DecimalAssignContext extends RecordContext {
    public _left: KeyContext
    public _right: DecimalContext
    public Assign(): TerminalNode { return this.getToken(ARCParser.Assign, 0) }
    public key(): KeyContext {
        return this.getRuleContext(0, KeyContext)
    }
    public decimal(): DecimalContext {
        return this.getRuleContext(0, DecimalContext)
    }
    constructor(ctx: RecordContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterDecimalAssign) {
            listener.enterDecimalAssign(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitDecimalAssign) {
            listener.exitDecimalAssign(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitDecimalAssign) {
            return visitor.visitDecimalAssign(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class SpecialAssignContext extends RecordContext {
    public _left: KeyContext
    public _right: SpecialIDContext
    public Assign(): TerminalNode { return this.getToken(ARCParser.Assign, 0) }
    public key(): KeyContext {
        return this.getRuleContext(0, KeyContext)
    }
    public specialID(): SpecialIDContext {
        return this.getRuleContext(0, SpecialIDContext)
    }
    constructor(ctx: RecordContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterSpecialAssign) {
            listener.enterSpecialAssign(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitSpecialAssign) {
            listener.exitSpecialAssign(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitSpecialAssign) {
            return visitor.visitSpecialAssign(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class StringAssignContext extends RecordContext {
    public _left: KeyContext
    public _right: StringContext
    public Assign(): TerminalNode { return this.getToken(ARCParser.Assign, 0) }
    public key(): KeyContext {
        return this.getRuleContext(0, KeyContext)
    }
    public string(): StringContext {
        return this.getRuleContext(0, StringContext)
    }
    constructor(ctx: RecordContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterStringAssign) {
            listener.enterStringAssign(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitStringAssign) {
            listener.exitStringAssign(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitStringAssign) {
            return visitor.visitStringAssign(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class ListAssignContext extends RecordContext {
    public _left: KeyContext
    public _right: ListContext
    public Assign(): TerminalNode { return this.getToken(ARCParser.Assign, 0) }
    public key(): KeyContext {
        return this.getRuleContext(0, KeyContext)
    }
    public list(): ListContext {
        return this.getRuleContext(0, ListContext)
    }
    constructor(ctx: RecordContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterListAssign) {
            listener.enterListAssign(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitListAssign) {
            listener.exitListAssign(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitListAssign) {
            return visitor.visitListAssign(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class DictAssignContext extends RecordContext {
    public _left: KeyContext
    public _right: DictContext
    public Assign(): TerminalNode { return this.getToken(ARCParser.Assign, 0) }
    public key(): KeyContext {
        return this.getRuleContext(0, KeyContext)
    }
    public dict(): DictContext {
        return this.getRuleContext(0, DictContext)
    }
    constructor(ctx: RecordContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterDictAssign) {
            listener.enterDictAssign(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitDictAssign) {
            listener.exitDictAssign(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitDictAssign) {
            return visitor.visitDictAssign(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class CiteAssignContext extends RecordContext {
    public _left: KeyContext
    public _right: ReferenceContext
    public Assign(): TerminalNode { return this.getToken(ARCParser.Assign, 0) }
    public key(): KeyContext {
        return this.getRuleContext(0, KeyContext)
    }
    public reference(): ReferenceContext {
        return this.getRuleContext(0, ReferenceContext)
    }
    constructor(ctx: RecordContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterCiteAssign) {
            listener.enterCiteAssign(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitCiteAssign) {
            listener.exitCiteAssign(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitCiteAssign) {
            return visitor.visitCiteAssign(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class MacroAssignContext extends RecordContext {
    public _left: KeyContext
    public _right: MacroContext
    public Assign(): TerminalNode { return this.getToken(ARCParser.Assign, 0) }
    public key(): KeyContext {
        return this.getRuleContext(0, KeyContext)
    }
    public macro(): MacroContext {
        return this.getRuleContext(0, MacroContext)
    }
    constructor(ctx: RecordContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterMacroAssign) {
            listener.enterMacroAssign(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitMacroAssign) {
            listener.exitMacroAssign(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitMacroAssign) {
            return visitor.visitMacroAssign(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class RecordEOSContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return ARCParser.RULE_recordEOS }
    public copyFrom(ctx: RecordEOSContext): void {
        super.copyFrom(ctx)
    }
}
export class RecordStatementContext extends RecordEOSContext {
    public record(): RecordContext {
        return this.getRuleContext(0, RecordContext)
    }
    public eos(): EosContext | undefined {
        return this.tryGetRuleContext(0, EosContext)
    }
    constructor(ctx: RecordEOSContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterRecordStatement) {
            listener.enterRecordStatement(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitRecordStatement) {
            listener.exitRecordStatement(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitRecordStatement) {
            return visitor.visitRecordStatement(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class KeyContext extends ParserRuleContext {
    public symbol(): SymbolContext[]
    public symbol(i: number): SymbolContext
    public symbol(i?: number): SymbolContext | SymbolContext[] {
        if (i === undefined) {
            return this.getRuleContexts(SymbolContext)
        } else {
            return this.getRuleContext(i, SymbolContext)
        }
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return ARCParser.RULE_key }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterKey) {
            listener.enterKey(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitKey) {
            listener.exitKey(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitKey) {
            return visitor.visitKey(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class EosContext extends ParserRuleContext {
    public Semicolon(): TerminalNode | undefined { return this.tryGetToken(ARCParser.Semicolon, 0) }
    public Comma(): TerminalNode | undefined { return this.tryGetToken(ARCParser.Comma, 0) }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return ARCParser.RULE_eos }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterEos) {
            listener.enterEos(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitEos) {
            listener.exitEos(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitEos) {
            return visitor.visitEos(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class SymbolContext extends ParserRuleContext {
    public Integer(): TerminalNode | undefined { return this.tryGetToken(ARCParser.Integer, 0) }
    public string(): StringContext | undefined {
        return this.tryGetRuleContext(0, StringContext)
    }
    public Identifier(): TerminalNode | undefined { return this.tryGetToken(ARCParser.Identifier, 0) }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return ARCParser.RULE_symbol }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterSymbol) {
            listener.enterSymbol(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitSymbol) {
            listener.exitSymbol(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitSymbol) {
            return visitor.visitSymbol(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class IntegerContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return ARCParser.RULE_integer }
    public copyFrom(ctx: IntegerContext): void {
        super.copyFrom(ctx)
    }
}
export class IntegerLiteralContext extends IntegerContext {
    public Integer(): TerminalNode { return this.getToken(ARCParser.Integer, 0) }
    public Sign(): TerminalNode | undefined { return this.tryGetToken(ARCParser.Sign, 0) }
    constructor(ctx: IntegerContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterIntegerLiteral) {
            listener.enterIntegerLiteral(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitIntegerLiteral) {
            listener.exitIntegerLiteral(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitIntegerLiteral) {
            return visitor.visitIntegerLiteral(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class SpecialIDContext extends ParserRuleContext {
    public Identifier(): TerminalNode { return this.getToken(ARCParser.Identifier, 0) }
    public Sign(): TerminalNode | undefined { return this.tryGetToken(ARCParser.Sign, 0) }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return ARCParser.RULE_specialID }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterSpecialID) {
            listener.enterSpecialID(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitSpecialID) {
            listener.exitSpecialID(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitSpecialID) {
            return visitor.visitSpecialID(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class DecimalContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return ARCParser.RULE_decimal }
    public copyFrom(ctx: DecimalContext): void {
        super.copyFrom(ctx)
    }
}
export class DecimalLiteralContext extends DecimalContext {
    public _left: Token
    public _right: Token
    public Dot(): TerminalNode { return this.getToken(ARCParser.Dot, 0) }
    public Integer(): TerminalNode[]
    public Integer(i: number): TerminalNode
    public Integer(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(ARCParser.Integer)
        } else {
            return this.getToken(ARCParser.Integer, i)
        }
    }
    public Sign(): TerminalNode | undefined { return this.tryGetToken(ARCParser.Sign, 0) }
    constructor(ctx: DecimalContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterDecimalLiteral) {
            listener.enterDecimalLiteral(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitDecimalLiteral) {
            listener.exitDecimalLiteral(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitDecimalLiteral) {
            return visitor.visitDecimalLiteral(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class DecimalZeroContext extends DecimalContext {
    public _right: Token
    public Dot(): TerminalNode { return this.getToken(ARCParser.Dot, 0) }
    public Integer(): TerminalNode { return this.getToken(ARCParser.Integer, 0) }
    public Sign(): TerminalNode | undefined { return this.tryGetToken(ARCParser.Sign, 0) }
    constructor(ctx: DecimalContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterDecimalZero) {
            listener.enterDecimalZero(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitDecimalZero) {
            listener.exitDecimalZero(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitDecimalZero) {
            return visitor.visitDecimalZero(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class StringContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return ARCParser.RULE_string }
    public copyFrom(ctx: StringContext): void {
        super.copyFrom(ctx)
    }
}
export class StringEscapeBlockContext extends StringContext {
    public StringEscapeBlock(): TerminalNode { return this.getToken(ARCParser.StringEscapeBlock, 0) }
    constructor(ctx: StringContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterStringEscapeBlock) {
            listener.enterStringEscapeBlock(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitStringEscapeBlock) {
            listener.exitStringEscapeBlock(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitStringEscapeBlock) {
            return visitor.visitStringEscapeBlock(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class StringEscapeSingleContext extends StringContext {
    public StringEscapeSingle(): TerminalNode { return this.getToken(ARCParser.StringEscapeSingle, 0) }
    constructor(ctx: StringContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterStringEscapeSingle) {
            listener.enterStringEscapeSingle(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitStringEscapeSingle) {
            listener.exitStringEscapeSingle(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitStringEscapeSingle) {
            return visitor.visitStringEscapeSingle(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class StringLiteralBlockContext extends StringContext {
    public StringLiteralBlock(): TerminalNode { return this.getToken(ARCParser.StringLiteralBlock, 0) }
    constructor(ctx: StringContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterStringLiteralBlock) {
            listener.enterStringLiteralBlock(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitStringLiteralBlock) {
            listener.exitStringLiteralBlock(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitStringLiteralBlock) {
            return visitor.visitStringLiteralBlock(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class StringLiteralSingleContext extends StringContext {
    public StringLiteralSingle(): TerminalNode { return this.getToken(ARCParser.StringLiteralSingle, 0) }
    constructor(ctx: StringContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterStringLiteralSingle) {
            listener.enterStringLiteralSingle(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitStringLiteralSingle) {
            listener.exitStringLiteralSingle(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitStringLiteralSingle) {
            return visitor.visitStringLiteralSingle(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class StringEmptyContext extends StringContext {
    constructor(ctx: StringContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterStringEmpty) {
            listener.enterStringEmpty(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitStringEmpty) {
            listener.exitStringEmpty(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitStringEmpty) {
            return visitor.visitStringEmpty(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class MacroContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return ARCParser.RULE_macro }
    public copyFrom(ctx: MacroContext): void {
        super.copyFrom(ctx)
    }
}
export class LiteralMacroContext extends MacroContext {
    public _apply: Token
    public _value: Token
    public Identifier(): TerminalNode { return this.getToken(ARCParser.Identifier, 0) }
    public StringLiteralBlock(): TerminalNode { return this.getToken(ARCParser.StringLiteralBlock, 0) }
    constructor(ctx: MacroContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterLiteralMacro) {
            listener.enterLiteralMacro(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitLiteralMacro) {
            listener.exitLiteralMacro(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitLiteralMacro) {
            return visitor.visitLiteralMacro(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class SimpleMacroContext extends MacroContext {
    public _apply: Token
    public MacroEscape(): TerminalNode { return this.getToken(ARCParser.MacroEscape, 0) }
    public Identifier(): TerminalNode { return this.getToken(ARCParser.Identifier, 0) }
    constructor(ctx: MacroContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterSimpleMacro) {
            listener.enterSimpleMacro(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitSimpleMacro) {
            listener.exitSimpleMacro(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitSimpleMacro) {
            return visitor.visitSimpleMacro(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class EmptyMacroContext extends MacroContext {
    public _apply: Token
    public Identifier(): TerminalNode { return this.getToken(ARCParser.Identifier, 0) }
    constructor(ctx: MacroContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterEmptyMacro) {
            listener.enterEmptyMacro(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitEmptyMacro) {
            listener.exitEmptyMacro(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitEmptyMacro) {
            return visitor.visitEmptyMacro(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class ReferenceContext extends ParserRuleContext {
    public Identifier(): TerminalNode { return this.getToken(ARCParser.Identifier, 0) }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return ARCParser.RULE_reference }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterReference) {
            listener.enterReference(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitReference) {
            listener.exitReference(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitReference) {
            return visitor.visitReference(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class DataContext extends ParserRuleContext {
    public integer(): IntegerContext | undefined {
        return this.tryGetRuleContext(0, IntegerContext)
    }
    public decimal(): DecimalContext | undefined {
        return this.tryGetRuleContext(0, DecimalContext)
    }
    public specialID(): SpecialIDContext | undefined {
        return this.tryGetRuleContext(0, SpecialIDContext)
    }
    public string(): StringContext | undefined {
        return this.tryGetRuleContext(0, StringContext)
    }
    public list(): ListContext | undefined {
        return this.tryGetRuleContext(0, ListContext)
    }
    public dict(): DictContext | undefined {
        return this.tryGetRuleContext(0, DictContext)
    }
    public reference(): ReferenceContext | undefined {
        return this.tryGetRuleContext(0, ReferenceContext)
    }
    public macro(): MacroContext | undefined {
        return this.tryGetRuleContext(0, MacroContext)
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return ARCParser.RULE_data }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterData) {
            listener.enterData(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitData) {
            listener.exitData(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitData) {
            return visitor.visitData(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class ListContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return ARCParser.RULE_list }
    public copyFrom(ctx: ListContext): void {
        super.copyFrom(ctx)
    }
}
export class EmptyListContext extends ListContext {
    constructor(ctx: ListContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterEmptyList) {
            listener.enterEmptyList(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitEmptyList) {
            listener.exitEmptyList(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitEmptyList) {
            return visitor.visitEmptyList(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class FilledListContext extends ListContext {
    public data(): DataContext[]
    public data(i: number): DataContext
    public data(i?: number): DataContext | DataContext[] {
        if (i === undefined) {
            return this.getRuleContexts(DataContext)
        } else {
            return this.getRuleContext(i, DataContext)
        }
    }
    public eos(): EosContext[]
    public eos(i: number): EosContext
    public eos(i?: number): EosContext | EosContext[] {
        if (i === undefined) {
            return this.getRuleContexts(EosContext)
        } else {
            return this.getRuleContext(i, EosContext)
        }
    }
    constructor(ctx: ListContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterFilledList) {
            listener.enterFilledList(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitFilledList) {
            listener.exitFilledList(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitFilledList) {
            return visitor.visitFilledList(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class DictContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return ARCParser.RULE_dict }
    public copyFrom(ctx: DictContext): void {
        super.copyFrom(ctx)
    }
}
export class EmptyDictContext extends DictContext {
    constructor(ctx: DictContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterEmptyDict) {
            listener.enterEmptyDict(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitEmptyDict) {
            listener.exitEmptyDict(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitEmptyDict) {
            return visitor.visitEmptyDict(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class FilledDictContext extends DictContext {
    public recordEOS(): RecordEOSContext[]
    public recordEOS(i: number): RecordEOSContext
    public recordEOS(i?: number): RecordEOSContext | RecordEOSContext[] {
        if (i === undefined) {
            return this.getRuleContexts(RecordEOSContext)
        } else {
            return this.getRuleContext(i, RecordEOSContext)
        }
    }
    constructor(ctx: DictContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterFilledDict) {
            listener.enterFilledDict(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitFilledDict) {
            listener.exitFilledDict(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitFilledDict) {
            return visitor.visitFilledDict(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class NestedDictContext extends DictContext {
    public scopes(): ScopesContext[]
    public scopes(i: number): ScopesContext
    public scopes(i?: number): ScopesContext | ScopesContext[] {
        if (i === undefined) {
            return this.getRuleContexts(ScopesContext)
        } else {
            return this.getRuleContext(i, ScopesContext)
        }
    }
    constructor(ctx: DictContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterNestedDict) {
            listener.enterNestedDict(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitNestedDict) {
            listener.exitNestedDict(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitNestedDict) {
            return visitor.visitNestedDict(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class Dict_scopeContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return ARCParser.RULE_dict_scope }
    public copyFrom(ctx: Dict_scopeContext): void {
        super.copyFrom(ctx)
    }
}
export class FilledDictScopeContext extends Dict_scopeContext {
    public _header: KeyContext
    public key(): KeyContext {
        return this.getRuleContext(0, KeyContext)
    }
    public recordEOS(): RecordEOSContext[]
    public recordEOS(i: number): RecordEOSContext
    public recordEOS(i?: number): RecordEOSContext | RecordEOSContext[] {
        if (i === undefined) {
            return this.getRuleContexts(RecordEOSContext)
        } else {
            return this.getRuleContext(i, RecordEOSContext)
        }
    }
    constructor(ctx: Dict_scopeContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterFilledDictScope) {
            listener.enterFilledDictScope(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitFilledDictScope) {
            listener.exitFilledDictScope(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitFilledDictScope) {
            return visitor.visitFilledDictScope(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class EmptyDictScopeContext extends Dict_scopeContext {
    public _header: KeyContext
    public key(): KeyContext {
        return this.getRuleContext(0, KeyContext)
    }
    constructor(ctx: Dict_scopeContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterEmptyDictScope) {
            listener.enterEmptyDictScope(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitEmptyDictScope) {
            listener.exitEmptyDictScope(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitEmptyDictScope) {
            return visitor.visitEmptyDictScope(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class List_scopeContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return ARCParser.RULE_list_scope }
    public copyFrom(ctx: List_scopeContext): void {
        super.copyFrom(ctx)
    }
}
export class FilledListScopeContext extends List_scopeContext {
    public _header: KeyContext
    public key(): KeyContext {
        return this.getRuleContext(0, KeyContext)
    }
    public group(): GroupContext[]
    public group(i: number): GroupContext
    public group(i?: number): GroupContext | GroupContext[] {
        if (i === undefined) {
            return this.getRuleContexts(GroupContext)
        } else {
            return this.getRuleContext(i, GroupContext)
        }
    }
    constructor(ctx: List_scopeContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterFilledListScope) {
            listener.enterFilledListScope(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitFilledListScope) {
            listener.exitFilledListScope(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitFilledListScope) {
            return visitor.visitFilledListScope(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class EmptyListScopeContext extends List_scopeContext {
    public _header: KeyContext
    public key(): KeyContext {
        return this.getRuleContext(0, KeyContext)
    }
    constructor(ctx: List_scopeContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterEmptyListScope) {
            listener.enterEmptyListScope(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitEmptyListScope) {
            listener.exitEmptyListScope(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitEmptyListScope) {
            return visitor.visitEmptyListScope(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class ScopesContext extends ParserRuleContext {
    public dict_scope(): Dict_scopeContext | undefined {
        return this.tryGetRuleContext(0, Dict_scopeContext)
    }
    public list_scope(): List_scopeContext | undefined {
        return this.tryGetRuleContext(0, List_scopeContext)
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return ARCParser.RULE_scopes }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterScopes) {
            listener.enterScopes(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitScopes) {
            listener.exitScopes(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitScopes) {
            return visitor.visitScopes(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class GroupContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return ARCParser.RULE_group }
    public copyFrom(ctx: GroupContext): void {
        super.copyFrom(ctx)
    }
}
export class DictGroupContext extends GroupContext {
    public recordEOS(): RecordEOSContext[]
    public recordEOS(i: number): RecordEOSContext
    public recordEOS(i?: number): RecordEOSContext | RecordEOSContext[] {
        if (i === undefined) {
            return this.getRuleContexts(RecordEOSContext)
        } else {
            return this.getRuleContext(i, RecordEOSContext)
        }
    }
    constructor(ctx: GroupContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterDictGroup) {
            listener.enterDictGroup(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitDictGroup) {
            listener.exitDictGroup(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitDictGroup) {
            return visitor.visitDictGroup(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class DataGroupContext extends GroupContext {
    public data(): DataContext {
        return this.getRuleContext(0, DataContext)
    }
    constructor(ctx: GroupContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterDataGroup) {
            listener.enterDataGroup(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitDataGroup) {
            listener.exitDataGroup(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitDataGroup) {
            return visitor.visitDataGroup(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


