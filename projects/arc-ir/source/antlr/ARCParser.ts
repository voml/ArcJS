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
    public static readonly Assign = 19
    public static readonly Semicolon = 20
    public static readonly Comma = 21
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
    public static readonly RULE_empty = 3
    public static readonly RULE_symbol = 4
    public static readonly RULE_atom = 5
    public static readonly RULE_key = 6
    public static readonly RULE_eos = 7
    public static readonly RULE_integer = 8
    public static readonly RULE_specialID = 9
    public static readonly RULE_decimal = 10
    public static readonly RULE_string = 11
    public static readonly RULE_macro = 12
    public static readonly RULE_cite = 13
    public static readonly RULE_data = 14
    public static readonly RULE_list = 15
    public static readonly RULE_dict = 16
    public static readonly RULE_dict_scope = 17
    public static readonly RULE_dict_inherit = 18
    public static readonly RULE_list_scope = 19
    public static readonly RULE_list_inherit = 20
    public static readonly RULE_group = 21
    // tslint:disable:no-trailing-whitespace
    public static readonly ruleNames: string[] = [
        'program', 'statement', 'record', 'empty', 'symbol', 'atom', 'key', 'eos', 
        'integer', 'specialID', 'decimal', 'string', 'macro', 'cite', 'data', 
        'list', 'dict', 'dict_scope', 'dict_inherit', 'list_scope', 'list_inherit', 
        'group',
    ]

    private static readonly _LITERAL_NAMES: Array<string | undefined> = [
        undefined, "'/'", "'\"\"\"'", "'''''", "'\"'", "'''", "'@'", "'`'", "'$'", 
        "'['", "']'", "'{'", "'}'", "'('", "')'", "'<'", "'>'", "'*'", "'&'", 
        undefined, "';'", "','", "'.'", undefined, undefined, "'_'",
    ]
    private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
        undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
        undefined, undefined, undefined, undefined, undefined, 'Assign', 'Semicolon', 
        'Comma', 'Dot', 'Identifier', 'Integer', 'Underline', 'Sign', 'StringEscapeBlock', 
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
            this.state = 47
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ARCParser.T__1) | (1 << ARCParser.T__2) | (1 << ARCParser.T__3) | (1 << ARCParser.T__4) | (1 << ARCParser.T__12) | (1 << ARCParser.T__14) | (1 << ARCParser.Semicolon) | (1 << ARCParser.Comma) | (1 << ARCParser.Identifier) | (1 << ARCParser.Integer) | (1 << ARCParser.StringEscapeBlock) | (1 << ARCParser.StringEscapeSingle) | (1 << ARCParser.StringLiteralBlock) | (1 << ARCParser.StringLiteralSingle))) !== 0)) {
                {
                {
                this.state = 44
                this.statement()
                }
                }
                this.state = 49
                this._errHandler.sync(this)
                _la = this._input.LA(1)
            }
            this.state = 50
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
            this.state = 56
            this._errHandler.sync(this)
            switch (this._input.LA(1)) {
            case ARCParser.Semicolon:
            case ARCParser.Comma:
                {
                this.state = 52
                this.empty()
                }
                break
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
                this.state = 53
                this.record()
                }
                break
            case ARCParser.T__12:
                {
                this.state = 54
                this.dict_scope()
                }
                break
            case ARCParser.T__14:
                {
                this.state = 55
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
            this.state = 78
            this._errHandler.sync(this)
            switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
            case 1:
                _localctx = new AtomAssignContext(_localctx)
                this.enterOuterAlt(_localctx, 1)
                {
                this.state = 58;
                (_localctx as AtomAssignContext)._left = this.key()
                this.state = 59
                this.match(ARCParser.Assign)
                this.state = 60;
                (_localctx as AtomAssignContext)._right = this.atom()
                }
                break

            case 2:
                _localctx = new ListAssignContext(_localctx)
                this.enterOuterAlt(_localctx, 2)
                {
                this.state = 62;
                (_localctx as ListAssignContext)._left = this.key()
                this.state = 63
                this.match(ARCParser.Assign)
                this.state = 64;
                (_localctx as ListAssignContext)._right = this.list()
                }
                break

            case 3:
                _localctx = new DictAssignContext(_localctx)
                this.enterOuterAlt(_localctx, 3)
                {
                this.state = 66;
                (_localctx as DictAssignContext)._left = this.key()
                this.state = 67
                this.match(ARCParser.Assign)
                this.state = 68;
                (_localctx as DictAssignContext)._right = this.dict()
                }
                break

            case 4:
                _localctx = new CiteAssignContext(_localctx)
                this.enterOuterAlt(_localctx, 4)
                {
                this.state = 70;
                (_localctx as CiteAssignContext)._left = this.key()
                this.state = 71
                this.match(ARCParser.Assign)
                this.state = 72;
                (_localctx as CiteAssignContext)._right = this.cite()
                }
                break

            case 5:
                _localctx = new MacroAssignContext(_localctx)
                this.enterOuterAlt(_localctx, 5)
                {
                this.state = 74;
                (_localctx as MacroAssignContext)._left = this.key()
                this.state = 75
                this.match(ARCParser.Assign)
                this.state = 76;
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
    public empty(): EmptyContext {
        let _localctx: EmptyContext = new EmptyContext(this._ctx, this.state)
        this.enterRule(_localctx, 6, ARCParser.RULE_empty)
        try {
            _localctx = new EmptyStatementContext(_localctx)
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 80
            this.eos()
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
        this.enterRule(_localctx, 8, ARCParser.RULE_symbol)
        try {
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 85
            this._errHandler.sync(this)
            switch (this._input.LA(1)) {
            case ARCParser.Integer:
                {
                this.state = 82
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
                this.state = 83
                this.string()
                }
                break
            case ARCParser.Identifier:
                {
                this.state = 84
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
    public atom(): AtomContext {
        let _localctx: AtomContext = new AtomContext(this._ctx, this.state)
        this.enterRule(_localctx, 10, ARCParser.RULE_atom)
        try {
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 91
            this._errHandler.sync(this)
            switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
            case 1:
                {
                this.state = 87
                this.integer()
                }
                break

            case 2:
                {
                this.state = 88
                this.decimal()
                }
                break

            case 3:
                {
                this.state = 89
                this.specialID()
                }
                break

            case 4:
                {
                this.state = 90
                this.string()
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
    public key(): KeyContext {
        let _localctx: KeyContext = new KeyContext(this._ctx, this.state)
        this.enterRule(_localctx, 12, ARCParser.RULE_key)
        let _la: number
        try {
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 93
            this.symbol()
            this.state = 98
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            while (_la === ARCParser.T__0) {
                {
                {
                this.state = 94
                this.match(ARCParser.T__0)
                this.state = 95
                this.symbol()
                }
                }
                this.state = 100
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
        this.enterRule(_localctx, 14, ARCParser.RULE_eos)
        let _la: number
        try {
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 101
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
    public integer(): IntegerContext {
        let _localctx: IntegerContext = new IntegerContext(this._ctx, this.state)
        this.enterRule(_localctx, 16, ARCParser.RULE_integer)
        let _la: number
        try {
            _localctx = new IntegerLiteralContext(_localctx)
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 104
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (_la === ARCParser.Sign) {
                {
                this.state = 103
                this.match(ARCParser.Sign)
                }
            }

            this.state = 106
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
        this.enterRule(_localctx, 18, ARCParser.RULE_specialID)
        let _la: number
        try {
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 109
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (_la === ARCParser.Sign) {
                {
                this.state = 108
                this.match(ARCParser.Sign)
                }
            }

            this.state = 111
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
        this.enterRule(_localctx, 20, ARCParser.RULE_decimal)
        let _la: number
        try {
            this.state = 126
            this._errHandler.sync(this)
            switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
            case 1:
                _localctx = new DecimalLiteralContext(_localctx)
                this.enterOuterAlt(_localctx, 1)
                {
                this.state = 114
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                if (_la === ARCParser.Sign) {
                    {
                    this.state = 113
                    this.match(ARCParser.Sign)
                    }
                }

                this.state = 116;
                (_localctx as DecimalLiteralContext)._left = this.match(ARCParser.Integer)
                this.state = 117
                this.match(ARCParser.Dot)
                this.state = 119
                this._errHandler.sync(this)
                switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
                case 1:
                    {
                    this.state = 118;
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
                this.state = 122
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                if (_la === ARCParser.Sign) {
                    {
                    this.state = 121
                    this.match(ARCParser.Sign)
                    }
                }

                this.state = 124
                this.match(ARCParser.Dot)
                this.state = 125;
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
        this.enterRule(_localctx, 22, ARCParser.RULE_string)
        try {
            this.state = 140
            this._errHandler.sync(this)
            switch (this._input.LA(1)) {
            case ARCParser.StringEscapeBlock:
                _localctx = new StringEscapeBlockContext(_localctx)
                this.enterOuterAlt(_localctx, 1)
                {
                this.state = 128
                this.match(ARCParser.StringEscapeBlock)
                }
                break
            case ARCParser.StringEscapeSingle:
                _localctx = new StringEscapeSingleContext(_localctx)
                this.enterOuterAlt(_localctx, 2)
                {
                this.state = 129
                this.match(ARCParser.StringEscapeSingle)
                }
                break
            case ARCParser.StringLiteralBlock:
                _localctx = new StringLiteralBlockContext(_localctx)
                this.enterOuterAlt(_localctx, 3)
                {
                this.state = 130
                this.match(ARCParser.StringLiteralBlock)
                }
                break
            case ARCParser.StringLiteralSingle:
                _localctx = new StringLiteralSingleContext(_localctx)
                this.enterOuterAlt(_localctx, 4)
                {
                this.state = 131
                this.match(ARCParser.StringLiteralSingle)
                }
                break
            case ARCParser.T__1:
                _localctx = new StringEmptyContext(_localctx)
                this.enterOuterAlt(_localctx, 5)
                {
                this.state = 132
                this.match(ARCParser.T__1)
                this.state = 133
                this.match(ARCParser.T__1)
                }
                break
            case ARCParser.T__2:
                _localctx = new StringEmptyContext(_localctx)
                this.enterOuterAlt(_localctx, 6)
                {
                this.state = 134
                this.match(ARCParser.T__2)
                this.state = 135
                this.match(ARCParser.T__2)
                }
                break
            case ARCParser.T__3:
                _localctx = new StringEmptyContext(_localctx)
                this.enterOuterAlt(_localctx, 7)
                {
                this.state = 136
                this.match(ARCParser.T__3)
                this.state = 137
                this.match(ARCParser.T__3)
                }
                break
            case ARCParser.T__4:
                _localctx = new StringEmptyContext(_localctx)
                this.enterOuterAlt(_localctx, 8)
                {
                this.state = 138
                this.match(ARCParser.T__4)
                this.state = 139
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
        this.enterRule(_localctx, 24, ARCParser.RULE_macro)
        try {
            this.state = 152
            this._errHandler.sync(this)
            switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
            case 1:
                _localctx = new LiteralMacroContext(_localctx)
                this.enterOuterAlt(_localctx, 1)
                {
                this.state = 142
                this.match(ARCParser.T__5)
                this.state = 143;
                (_localctx as LiteralMacroContext)._apply = this.match(ARCParser.Identifier)
                this.state = 144;
                (_localctx as LiteralMacroContext)._value = this.match(ARCParser.StringLiteralBlock)
                }
                break

            case 2:
                _localctx = new SimpleMacroContext(_localctx)
                this.enterOuterAlt(_localctx, 2)
                {
                this.state = 145
                this.match(ARCParser.T__5)
                this.state = 146;
                (_localctx as SimpleMacroContext)._apply = this.match(ARCParser.Identifier)
                this.state = 147
                this.match(ARCParser.MacroEscape)
                }
                break

            case 3:
                _localctx = new EmptyMacroContext(_localctx)
                this.enterOuterAlt(_localctx, 3)
                {
                this.state = 148
                this.match(ARCParser.T__5)
                this.state = 149;
                (_localctx as EmptyMacroContext)._apply = this.match(ARCParser.Identifier)
                this.state = 150
                this.match(ARCParser.T__6)
                this.state = 151
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
    public cite(): CiteContext {
        let _localctx: CiteContext = new CiteContext(this._ctx, this.state)
        this.enterRule(_localctx, 26, ARCParser.RULE_cite)
        try {
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 154
            this.match(ARCParser.T__7)
            this.state = 155
            this.key()
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
        this.enterRule(_localctx, 28, ARCParser.RULE_data)
        try {
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 165
            this._errHandler.sync(this)
            switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
            case 1:
                {
                this.state = 157
                this.integer()
                }
                break

            case 2:
                {
                this.state = 158
                this.decimal()
                }
                break

            case 3:
                {
                this.state = 159
                this.specialID()
                }
                break

            case 4:
                {
                this.state = 160
                this.string()
                }
                break

            case 5:
                {
                this.state = 161
                this.list()
                }
                break

            case 6:
                {
                this.state = 162
                this.dict()
                }
                break

            case 7:
                {
                this.state = 163
                this.cite()
                }
                break

            case 8:
                {
                this.state = 164
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
        this.enterRule(_localctx, 30, ARCParser.RULE_list)
        let _la: number
        try {
            this.state = 186
            this._errHandler.sync(this)
            switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
            case 1:
                _localctx = new ListEmptyContext(_localctx)
                this.enterOuterAlt(_localctx, 1)
                {
                this.state = 167
                this.match(ARCParser.T__8)
                this.state = 171
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                while (_la === ARCParser.Semicolon || _la === ARCParser.Comma) {
                    {
                    {
                    this.state = 168
                    this.empty()
                    }
                    }
                    this.state = 173
                    this._errHandler.sync(this)
                    _la = this._input.LA(1)
                }
                this.state = 174
                this.match(ARCParser.T__9)
                }
                break

            case 2:
                _localctx = new ListStatementContext(_localctx)
                this.enterOuterAlt(_localctx, 2)
                {
                this.state = 175
                this.match(ARCParser.T__8)
                this.state = 182
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ARCParser.T__1) | (1 << ARCParser.T__2) | (1 << ARCParser.T__3) | (1 << ARCParser.T__4) | (1 << ARCParser.T__5) | (1 << ARCParser.T__7) | (1 << ARCParser.T__8) | (1 << ARCParser.T__10) | (1 << ARCParser.Dot) | (1 << ARCParser.Identifier) | (1 << ARCParser.Integer) | (1 << ARCParser.Sign) | (1 << ARCParser.StringEscapeBlock) | (1 << ARCParser.StringEscapeSingle) | (1 << ARCParser.StringLiteralBlock) | (1 << ARCParser.StringLiteralSingle))) !== 0)) {
                    {
                    {
                    this.state = 176
                    this.data()
                    this.state = 178
                    this._errHandler.sync(this)
                    _la = this._input.LA(1)
                    if (_la === ARCParser.Semicolon || _la === ARCParser.Comma) {
                        {
                        this.state = 177
                        this.eos()
                        }
                    }

                    }
                    }
                    this.state = 184
                    this._errHandler.sync(this)
                    _la = this._input.LA(1)
                }
                this.state = 185
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
        this.enterRule(_localctx, 32, ARCParser.RULE_dict)
        let _la: number
        try {
            this.state = 204
            this._errHandler.sync(this)
            switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
            case 1:
                _localctx = new DictEmptyContext(_localctx)
                this.enterOuterAlt(_localctx, 1)
                {
                this.state = 188
                this.match(ARCParser.T__10)
                this.state = 192
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                while (_la === ARCParser.Semicolon || _la === ARCParser.Comma) {
                    {
                    {
                    this.state = 189
                    this.empty()
                    }
                    }
                    this.state = 194
                    this._errHandler.sync(this)
                    _la = this._input.LA(1)
                }
                this.state = 195
                this.match(ARCParser.T__11)
                }
                break

            case 2:
                _localctx = new DictStatementContext(_localctx)
                this.enterOuterAlt(_localctx, 2)
                {
                this.state = 196
                this.match(ARCParser.T__10)
                this.state = 200
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ARCParser.T__1) | (1 << ARCParser.T__2) | (1 << ARCParser.T__3) | (1 << ARCParser.T__4) | (1 << ARCParser.T__12) | (1 << ARCParser.T__14) | (1 << ARCParser.Semicolon) | (1 << ARCParser.Comma) | (1 << ARCParser.Identifier) | (1 << ARCParser.Integer) | (1 << ARCParser.StringEscapeBlock) | (1 << ARCParser.StringEscapeSingle) | (1 << ARCParser.StringLiteralBlock) | (1 << ARCParser.StringLiteralSingle))) !== 0)) {
                    {
                    {
                    this.state = 197
                    this.statement()
                    }
                    }
                    this.state = 202
                    this._errHandler.sync(this)
                    _la = this._input.LA(1)
                }
                this.state = 203
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
        this.enterRule(_localctx, 34, ARCParser.RULE_dict_scope)
        try {
            let _alt: number
            _localctx = new DictScopeContext(_localctx)
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 206
            this.match(ARCParser.T__12)
            this.state = 207;
            (_localctx as DictScopeContext)._header = this.key()
            this.state = 208
            this.match(ARCParser.T__13)
            this.state = 220
            this._errHandler.sync(this)
            _alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx)
            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    this.state = 218
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
                        this.state = 209
                        this.record()
                        }
                        break
                    case ARCParser.T__12:
                        {
                        this.state = 210
                        this.dict_inherit()
                        }
                        break
                    case ARCParser.T__14:
                        {
                        this.state = 211
                        this.list_inherit()
                        this.state = 215
                        this._errHandler.sync(this)
                        _alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx)
                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                {
                                this.state = 212
                                this.empty()
                                }
                                }
                            }
                            this.state = 217
                            this._errHandler.sync(this)
                            _alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx)
                        }
                        }
                        break
                    default:
                        throw new NoViableAltException(this)
                    }
                    }
                }
                this.state = 222
                this._errHandler.sync(this)
                _alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx)
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
    public dict_inherit(): Dict_inheritContext {
        let _localctx: Dict_inheritContext = new Dict_inheritContext(this._ctx, this.state)
        this.enterRule(_localctx, 36, ARCParser.RULE_dict_inherit)
        try {
            let _alt: number
            _localctx = new DictInheritContext(_localctx)
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 223
            this.match(ARCParser.T__12)
            this.state = 224
            this.match(ARCParser.T__0)
            this.state = 225;
            (_localctx as DictInheritContext)._header = this.key()
            this.state = 226
            this.match(ARCParser.T__13)
            this.state = 234
            this._errHandler.sync(this)
            _alt = 1
            do {
                switch (_alt) {
                case 1:
                    {
                    {
                    this.state = 227
                    this.record()
                    this.state = 231
                    this._errHandler.sync(this)
                    _alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx)
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                            {
                            this.state = 228
                            this.empty()
                            }
                            }
                        }
                        this.state = 233
                        this._errHandler.sync(this)
                        _alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx)
                    }
                    }
                    }
                    break
                default:
                    throw new NoViableAltException(this)
                }
                this.state = 236
                this._errHandler.sync(this)
                _alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx)
            } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER)
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
        this.enterRule(_localctx, 38, ARCParser.RULE_list_scope)
        let _la: number
        try {
            let _alt: number
            _localctx = new ListScopeContext(_localctx)
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 238
            this.match(ARCParser.T__14)
            this.state = 239;
            (_localctx as ListScopeContext)._header = this.key()
            this.state = 240
            this.match(ARCParser.T__15)
            this.state = 248
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            do {
                {
                {
                this.state = 241
                this.group()
                this.state = 245
                this._errHandler.sync(this)
                _alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx)
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 242
                        this.empty()
                        }
                        }
                    }
                    this.state = 247
                    this._errHandler.sync(this)
                    _alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx)
                }
                }
                }
                this.state = 250
                this._errHandler.sync(this)
                _la = this._input.LA(1)
            } while (_la === ARCParser.T__16 || _la === ARCParser.T__17)
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
    public list_inherit(): List_inheritContext {
        let _localctx: List_inheritContext = new List_inheritContext(this._ctx, this.state)
        this.enterRule(_localctx, 40, ARCParser.RULE_list_inherit)
        let _la: number
        try {
            let _alt: number
            _localctx = new ListInheritContext(_localctx)
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 252
            this.match(ARCParser.T__14)
            this.state = 253
            this.match(ARCParser.T__0)
            this.state = 254;
            (_localctx as ListInheritContext)._header = this.key()
            this.state = 255
            this.match(ARCParser.T__15)
            this.state = 263
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            do {
                {
                {
                this.state = 256
                this.group()
                this.state = 260
                this._errHandler.sync(this)
                _alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx)
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 257
                        this.empty()
                        }
                        }
                    }
                    this.state = 262
                    this._errHandler.sync(this)
                    _alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx)
                }
                }
                }
                this.state = 265
                this._errHandler.sync(this)
                _la = this._input.LA(1)
            } while (_la === ARCParser.T__16 || _la === ARCParser.T__17)
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
        this.enterRule(_localctx, 42, ARCParser.RULE_group)
        try {
            let _alt: number
            this.state = 285
            this._errHandler.sync(this)
            switch (this._input.LA(1)) {
            case ARCParser.T__16:
                _localctx = new DictGroupContext(_localctx)
                this.enterOuterAlt(_localctx, 1)
                {
                this.state = 267
                this.match(ARCParser.T__16)
                this.state = 275
                this._errHandler.sync(this)
                _alt = 1
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 268
                        this.record()
                        this.state = 272
                        this._errHandler.sync(this)
                        _alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx)
                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                {
                                this.state = 269
                                this.empty()
                                }
                                }
                            }
                            this.state = 274
                            this._errHandler.sync(this)
                            _alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx)
                        }
                        }
                        }
                        break
                    default:
                        throw new NoViableAltException(this)
                    }
                    this.state = 277
                    this._errHandler.sync(this)
                    _alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx)
                } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER)
                }
                break
            case ARCParser.T__17:
                _localctx = new DataGroupContext(_localctx)
                this.enterOuterAlt(_localctx, 2)
                {
                this.state = 279
                this.match(ARCParser.T__17)
                this.state = 281
                this._errHandler.sync(this)
                _alt = 1
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 280
                        this.data()
                        }
                        }
                        break
                    default:
                        throw new NoViableAltException(this)
                    }
                    this.state = 283
                    this._errHandler.sync(this)
                    _alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx)
                } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER)
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
        '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03%\u0122\x04\x02' +
        '\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07' +
        '\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04' +
        '\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04' +
        '\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x03' +
        '\x02\x07\x020\n\x02\f\x02\x0E\x023\v\x02\x03\x02\x03\x02\x03\x03\x03\x03' +
        '\x03\x03\x03\x03\x05\x03;\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04' +
        '\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04' +
        '\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04Q\n\x04\x03\x05' +
        '\x03\x05\x03\x06\x03\x06\x03\x06\x05\x06X\n\x06\x03\x07\x03\x07\x03\x07' +
        '\x03\x07\x05\x07^\n\x07\x03\b\x03\b\x03\b\x07\bc\n\b\f\b\x0E\bf\v\b\x03' +
        '\t\x03\t\x03\n\x05\nk\n\n\x03\n\x03\n\x03\v\x05\vp\n\v\x03\v\x03\v\x03' +
        '\f\x05\fu\n\f\x03\f\x03\f\x03\f\x05\fz\n\f\x03\f\x05\f}\n\f\x03\f\x03' +
        '\f\x05\f\x81\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r' +
        '\x03\r\x03\r\x03\r\x05\r\x8F\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E' +
        '\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\x9B\n\x0E\x03\x0F\x03' +
        '\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03' +
        '\x10\x05\x10\xA8\n\x10\x03\x11\x03\x11\x07\x11\xAC\n\x11\f\x11\x0E\x11' +
        '\xAF\v\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\xB5\n\x11\x07\x11\xB7' +
        '\n\x11\f\x11\x0E\x11\xBA\v\x11\x03\x11\x05\x11\xBD\n\x11\x03\x12\x03\x12' +
        '\x07\x12\xC1\n\x12\f\x12\x0E\x12\xC4\v\x12\x03\x12\x03\x12\x03\x12\x07' +
        '\x12\xC9\n\x12\f\x12\x0E\x12\xCC\v\x12\x03\x12\x05\x12\xCF\n\x12\x03\x13' +
        '\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13\xD8\n\x13\f\x13' +
        '\x0E\x13\xDB\v\x13\x07\x13\xDD\n\x13\f\x13\x0E\x13\xE0\v\x13\x03\x14\x03' +
        '\x14\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14\xE8\n\x14\f\x14\x0E\x14\xEB' +
        '\v\x14\x06\x14\xED\n\x14\r\x14\x0E\x14\xEE\x03\x15\x03\x15\x03\x15\x03' +
        '\x15\x03\x15\x07\x15\xF6\n\x15\f\x15\x0E\x15\xF9\v\x15\x06\x15\xFB\n\x15' +
        '\r\x15\x0E\x15\xFC\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x07' +
        '\x16\u0105\n\x16\f\x16\x0E\x16\u0108\v\x16\x06\x16\u010A\n\x16\r\x16\x0E' +
        '\x16\u010B\x03\x17\x03\x17\x03\x17\x07\x17\u0111\n\x17\f\x17\x0E\x17\u0114' +
        '\v\x17\x06\x17\u0116\n\x17\r\x17\x0E\x17\u0117\x03\x17\x03\x17\x06\x17' +
        '\u011C\n\x17\r\x17\x0E\x17\u011D\x05\x17\u0120\n\x17\x03\x17\x02\x02\x02' +
        '\x18\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02' +
        '\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02"\x02$\x02&\x02' +
        '(\x02*\x02,\x02\x02\x03\x03\x02\x16\x17\x02\u0144\x021\x03\x02\x02\x02' +
        '\x04:\x03\x02\x02\x02\x06P\x03\x02\x02\x02\bR\x03\x02\x02\x02\nW\x03\x02' +
        '\x02\x02\f]\x03\x02\x02\x02\x0E_\x03\x02\x02\x02\x10g\x03\x02\x02\x02' +
        '\x12j\x03\x02\x02\x02\x14o\x03\x02\x02\x02\x16\x80\x03\x02\x02\x02\x18' +
        '\x8E\x03\x02\x02\x02\x1A\x9A\x03\x02\x02\x02\x1C\x9C\x03\x02\x02\x02\x1E' +
        '\xA7\x03\x02\x02\x02 \xBC\x03\x02\x02\x02"\xCE\x03\x02\x02\x02$\xD0\x03' +
        '\x02\x02\x02&\xE1\x03\x02\x02\x02(\xF0\x03\x02\x02\x02*\xFE\x03\x02\x02' +
        '\x02,\u011F\x03\x02\x02\x02.0\x05\x04\x03\x02/.\x03\x02\x02\x0203\x03' +
        '\x02\x02\x021/\x03\x02\x02\x0212\x03\x02\x02\x0224\x03\x02\x02\x0231\x03' +
        '\x02\x02\x0245\x07\x02\x02\x035\x03\x03\x02\x02\x026;\x05\b\x05\x027;' +
        '\x05\x06\x04\x028;\x05$\x13\x029;\x05(\x15\x02:6\x03\x02\x02\x02:7\x03' +
        '\x02\x02\x02:8\x03\x02\x02\x02:9\x03\x02\x02\x02;\x05\x03\x02\x02\x02' +
        '<=\x05\x0E\b\x02=>\x07\x15\x02\x02>?\x05\f\x07\x02?Q\x03\x02\x02\x02@' +
        'A\x05\x0E\b\x02AB\x07\x15\x02\x02BC\x05 \x11\x02CQ\x03\x02\x02\x02DE\x05' +
        '\x0E\b\x02EF\x07\x15\x02\x02FG\x05"\x12\x02GQ\x03\x02\x02\x02HI\x05\x0E' +
        '\b\x02IJ\x07\x15\x02\x02JK\x05\x1C\x0F\x02KQ\x03\x02\x02\x02LM\x05\x0E' +
        '\b\x02MN\x07\x15\x02\x02NO\x05\x1A\x0E\x02OQ\x03\x02\x02\x02P<\x03\x02' +
        '\x02\x02P@\x03\x02\x02\x02PD\x03\x02\x02\x02PH\x03\x02\x02\x02PL\x03\x02' +
        '\x02\x02Q\x07\x03\x02\x02\x02RS\x05\x10\t\x02S\t\x03\x02\x02\x02TX\x07' +
        '\x1A\x02\x02UX\x05\x18\r\x02VX\x07\x19\x02\x02WT\x03\x02\x02\x02WU\x03' +
        '\x02\x02\x02WV\x03\x02\x02\x02X\v\x03\x02\x02\x02Y^\x05\x12\n\x02Z^\x05' +
        '\x16\f\x02[^\x05\x14\v\x02\\^\x05\x18\r\x02]Y\x03\x02\x02\x02]Z\x03\x02' +
        '\x02\x02][\x03\x02\x02\x02]\\\x03\x02\x02\x02^\r\x03\x02\x02\x02_d\x05' +
        '\n\x06\x02`a\x07\x03\x02\x02ac\x05\n\x06\x02b`\x03\x02\x02\x02cf\x03\x02' +
        '\x02\x02db\x03\x02\x02\x02de\x03\x02\x02\x02e\x0F\x03\x02\x02\x02fd\x03' +
        '\x02\x02\x02gh\t\x02\x02\x02h\x11\x03\x02\x02\x02ik\x07\x1C\x02\x02ji' +
        '\x03\x02\x02\x02jk\x03\x02\x02\x02kl\x03\x02\x02\x02lm\x07\x1A\x02\x02' +
        'm\x13\x03\x02\x02\x02np\x07\x1C\x02\x02on\x03\x02\x02\x02op\x03\x02\x02' +
        '\x02pq\x03\x02\x02\x02qr\x07\x19\x02\x02r\x15\x03\x02\x02\x02su\x07\x1C' +
        '\x02\x02ts\x03\x02\x02\x02tu\x03\x02\x02\x02uv\x03\x02\x02\x02vw\x07\x1A' +
        '\x02\x02wy\x07\x18\x02\x02xz\x07\x1A\x02\x02yx\x03\x02\x02\x02yz\x03\x02' +
        '\x02\x02z\x81\x03\x02\x02\x02{}\x07\x1C\x02\x02|{\x03\x02\x02\x02|}\x03' +
        '\x02\x02\x02}~\x03\x02\x02\x02~\x7F\x07\x18\x02\x02\x7F\x81\x07\x1A\x02' +
        '\x02\x80t\x03\x02\x02\x02\x80|\x03\x02\x02\x02\x81\x17\x03\x02\x02\x02' +
        '\x82\x8F\x07\x1D\x02\x02\x83\x8F\x07\x1E\x02\x02\x84\x8F\x07\x1F\x02\x02' +
        '\x85\x8F\x07 \x02\x02\x86\x87\x07\x04\x02\x02\x87\x8F\x07\x04\x02\x02' +
        '\x88\x89\x07\x05\x02\x02\x89\x8F\x07\x05\x02\x02\x8A\x8B\x07\x06\x02\x02' +
        '\x8B\x8F\x07\x06\x02\x02\x8C\x8D\x07\x07\x02\x02\x8D\x8F\x07\x07\x02\x02' +
        '\x8E\x82\x03\x02\x02\x02\x8E\x83\x03\x02\x02\x02\x8E\x84\x03\x02\x02\x02' +
        '\x8E\x85\x03\x02\x02\x02\x8E\x86\x03\x02\x02\x02\x8E\x88\x03\x02\x02\x02' +
        '\x8E\x8A\x03\x02\x02\x02\x8E\x8C\x03\x02\x02\x02\x8F\x19\x03\x02\x02\x02' +
        '\x90\x91\x07\b\x02\x02\x91\x92\x07\x19\x02\x02\x92\x9B\x07\x1F\x02\x02' +
        '\x93\x94\x07\b\x02\x02\x94\x95\x07\x19\x02\x02\x95\x9B\x07"\x02\x02\x96' +
        '\x97\x07\b\x02\x02\x97\x98\x07\x19\x02\x02\x98\x99\x07\t\x02\x02\x99\x9B' +
        '\x07\t\x02\x02\x9A\x90\x03\x02\x02\x02\x9A\x93\x03\x02\x02\x02\x9A\x96' +
        '\x03\x02\x02\x02\x9B\x1B\x03\x02\x02\x02\x9C\x9D\x07\n\x02\x02\x9D\x9E' +
        '\x05\x0E\b\x02\x9E\x1D\x03\x02\x02\x02\x9F\xA8\x05\x12\n\x02\xA0\xA8\x05' +
        '\x16\f\x02\xA1\xA8\x05\x14\v\x02\xA2\xA8\x05\x18\r\x02\xA3\xA8\x05 \x11' +
        '\x02\xA4\xA8\x05"\x12\x02\xA5\xA8\x05\x1C\x0F\x02\xA6\xA8\x05\x1A\x0E' +
        '\x02\xA7\x9F\x03\x02\x02\x02\xA7\xA0\x03\x02\x02\x02\xA7\xA1\x03\x02\x02' +
        '\x02\xA7\xA2\x03\x02\x02\x02\xA7\xA3\x03\x02\x02\x02\xA7\xA4\x03\x02\x02' +
        '\x02\xA7\xA5\x03\x02\x02\x02\xA7\xA6\x03\x02\x02\x02\xA8\x1F\x03\x02\x02' +
        '\x02\xA9\xAD\x07\v\x02\x02\xAA\xAC\x05\b\x05\x02\xAB\xAA\x03\x02\x02\x02' +
        '\xAC\xAF\x03\x02\x02\x02\xAD\xAB\x03\x02\x02\x02\xAD\xAE\x03\x02\x02\x02' +
        '\xAE\xB0\x03\x02\x02\x02\xAF\xAD\x03\x02\x02\x02\xB0\xBD\x07\f\x02\x02' +
        '\xB1\xB8\x07\v\x02\x02\xB2\xB4\x05\x1E\x10\x02\xB3\xB5\x05\x10\t\x02\xB4' +
        '\xB3\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB7\x03\x02\x02\x02\xB6' +
        '\xB2\x03\x02\x02\x02\xB7\xBA\x03\x02\x02\x02\xB8\xB6\x03\x02\x02\x02\xB8' +
        '\xB9\x03\x02\x02\x02\xB9\xBB\x03\x02\x02\x02\xBA\xB8\x03\x02\x02\x02\xBB' +
        '\xBD\x07\f\x02\x02\xBC\xA9\x03\x02\x02\x02\xBC\xB1\x03\x02\x02\x02\xBD' +
        '!\x03\x02\x02\x02\xBE\xC2\x07\r\x02\x02\xBF\xC1\x05\b\x05\x02\xC0\xBF' +
        '\x03\x02\x02\x02\xC1\xC4\x03\x02\x02\x02\xC2\xC0\x03\x02\x02\x02\xC2\xC3' +
        '\x03\x02\x02\x02\xC3\xC5\x03\x02\x02\x02\xC4\xC2\x03\x02\x02\x02\xC5\xCF' +
        '\x07\x0E\x02\x02\xC6\xCA\x07\r\x02\x02\xC7\xC9\x05\x04\x03\x02\xC8\xC7' +
        '\x03\x02\x02\x02\xC9\xCC\x03\x02\x02\x02\xCA\xC8\x03\x02\x02\x02\xCA\xCB' +
        '\x03\x02\x02\x02\xCB\xCD\x03\x02\x02\x02\xCC\xCA\x03\x02\x02\x02\xCD\xCF' +
        '\x07\x0E\x02\x02\xCE\xBE\x03\x02\x02\x02\xCE\xC6\x03\x02\x02\x02\xCF#' +
        '\x03\x02\x02\x02\xD0\xD1\x07\x0F\x02\x02\xD1\xD2\x05\x0E\b\x02\xD2\xDE' +
        '\x07\x10\x02\x02\xD3\xDD\x05\x06\x04\x02\xD4\xDD\x05&\x14\x02\xD5\xD9' +
        '\x05*\x16\x02\xD6\xD8\x05\b\x05\x02\xD7\xD6\x03\x02\x02\x02\xD8\xDB\x03' +
        '\x02\x02\x02\xD9\xD7\x03\x02\x02\x02\xD9\xDA\x03\x02\x02\x02\xDA\xDD\x03' +
        '\x02\x02\x02\xDB\xD9\x03\x02\x02\x02\xDC\xD3\x03\x02\x02\x02\xDC\xD4\x03' +
        '\x02\x02\x02\xDC\xD5\x03\x02\x02\x02\xDD\xE0\x03\x02\x02\x02\xDE\xDC\x03' +
        '\x02\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF%\x03\x02\x02\x02\xE0\xDE\x03' +
        '\x02\x02\x02\xE1\xE2\x07\x0F\x02\x02\xE2\xE3\x07\x03\x02\x02\xE3\xE4\x05' +
        '\x0E\b\x02\xE4\xEC\x07\x10\x02\x02\xE5\xE9\x05\x06\x04\x02\xE6\xE8\x05' +
        '\b\x05\x02\xE7\xE6\x03\x02\x02\x02\xE8\xEB\x03\x02\x02\x02\xE9\xE7\x03' +
        '\x02\x02\x02\xE9\xEA\x03\x02\x02\x02\xEA\xED\x03\x02\x02\x02\xEB\xE9\x03' +
        '\x02\x02\x02\xEC\xE5\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02\xEE\xEC\x03' +
        "\x02\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF\'\x03\x02\x02\x02\xF0\xF1\x07" +
        '\x11\x02\x02\xF1\xF2\x05\x0E\b\x02\xF2\xFA\x07\x12\x02\x02\xF3\xF7\x05' +
        ',\x17\x02\xF4\xF6\x05\b\x05\x02\xF5\xF4\x03\x02\x02\x02\xF6\xF9\x03\x02' +
        '\x02\x02\xF7\xF5\x03\x02\x02\x02\xF7\xF8\x03\x02\x02\x02\xF8\xFB\x03\x02' +
        '\x02\x02\xF9\xF7\x03\x02\x02\x02\xFA\xF3\x03\x02\x02\x02\xFB\xFC\x03\x02' +
        '\x02\x02\xFC\xFA\x03\x02\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD)\x03\x02' +
        '\x02\x02\xFE\xFF\x07\x11\x02\x02\xFF\u0100\x07\x03\x02\x02\u0100\u0101' +
        '\x05\x0E\b\x02\u0101\u0109\x07\x12\x02\x02\u0102\u0106\x05,\x17\x02\u0103' +
        '\u0105\x05\b\x05\x02\u0104\u0103\x03\x02\x02\x02\u0105\u0108\x03\x02\x02' +
        '\x02\u0106\u0104\x03\x02\x02\x02\u0106\u0107\x03\x02\x02\x02\u0107\u010A' +
        '\x03\x02\x02\x02\u0108\u0106\x03\x02\x02\x02\u0109\u0102\x03\x02\x02\x02' +
        '\u010A\u010B\x03\x02\x02\x02\u010B\u0109\x03\x02\x02\x02\u010B\u010C\x03' +
        '\x02\x02\x02\u010C+\x03\x02\x02\x02\u010D\u0115\x07\x13\x02\x02\u010E' +
        '\u0112\x05\x06\x04\x02\u010F\u0111\x05\b\x05\x02\u0110\u010F\x03\x02\x02' +
        '\x02\u0111\u0114\x03\x02\x02\x02\u0112\u0110\x03\x02\x02\x02\u0112\u0113' +
        '\x03\x02\x02\x02\u0113\u0116\x03\x02\x02\x02\u0114\u0112\x03\x02\x02\x02' +
        '\u0115\u010E\x03\x02\x02\x02\u0116\u0117\x03\x02\x02\x02\u0117\u0115\x03' +
        '\x02\x02\x02\u0117\u0118\x03\x02\x02\x02\u0118\u0120\x03\x02\x02\x02\u0119' +
        '\u011B\x07\x14\x02\x02\u011A\u011C\x05\x1E\x10\x02\u011B\u011A\x03\x02' +
        '\x02\x02\u011C\u011D\x03\x02\x02\x02\u011D\u011B\x03\x02\x02\x02\u011D' +
        '\u011E\x03\x02\x02\x02\u011E\u0120\x03\x02\x02\x02\u011F\u010D\x03\x02' +
        '\x02\x02\u011F\u0119\x03\x02\x02\x02\u0120-\x03\x02\x02\x02%1:PW]djot' +
        'y|\x80\x8E\x9A\xA7\xAD\xB4\xB8\xBC\xC2\xCA\xCE\xD9\xDC\xDE\xE9\xEE\xF7' +
        '\xFC\u0106\u010B\u0112\u0117\u011D\u011F'
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
    public empty(): EmptyContext | undefined {
        return this.tryGetRuleContext(0, EmptyContext)
    }
    public record(): RecordContext | undefined {
        return this.tryGetRuleContext(0, RecordContext)
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
export class AtomAssignContext extends RecordContext {
    public _left: KeyContext
    public _right: AtomContext
    public Assign(): TerminalNode { return this.getToken(ARCParser.Assign, 0) }
    public key(): KeyContext {
        return this.getRuleContext(0, KeyContext)
    }
    public atom(): AtomContext {
        return this.getRuleContext(0, AtomContext)
    }
    constructor(ctx: RecordContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterAtomAssign) {
            listener.enterAtomAssign(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitAtomAssign) {
            listener.exitAtomAssign(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitAtomAssign) {
            return visitor.visitAtomAssign(this)
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
    public _right: CiteContext
    public Assign(): TerminalNode { return this.getToken(ARCParser.Assign, 0) }
    public key(): KeyContext {
        return this.getRuleContext(0, KeyContext)
    }
    public cite(): CiteContext {
        return this.getRuleContext(0, CiteContext)
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


export class EmptyContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return ARCParser.RULE_empty }
    public copyFrom(ctx: EmptyContext): void {
        super.copyFrom(ctx)
    }
}
export class EmptyStatementContext extends EmptyContext {
    public eos(): EosContext {
        return this.getRuleContext(0, EosContext)
    }
    constructor(ctx: EmptyContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterEmptyStatement) {
            listener.enterEmptyStatement(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitEmptyStatement) {
            listener.exitEmptyStatement(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitEmptyStatement) {
            return visitor.visitEmptyStatement(this)
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


export class AtomContext extends ParserRuleContext {
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
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return ARCParser.RULE_atom }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterAtom) {
            listener.enterAtom(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitAtom) {
            listener.exitAtom(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitAtom) {
            return visitor.visitAtom(this)
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


export class CiteContext extends ParserRuleContext {
    public key(): KeyContext {
        return this.getRuleContext(0, KeyContext)
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return ARCParser.RULE_cite }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterCite) {
            listener.enterCite(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitCite) {
            listener.exitCite(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitCite) {
            return visitor.visitCite(this)
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
    public cite(): CiteContext | undefined {
        return this.tryGetRuleContext(0, CiteContext)
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
export class ListEmptyContext extends ListContext {
    public empty(): EmptyContext[]
    public empty(i: number): EmptyContext
    public empty(i?: number): EmptyContext | EmptyContext[] {
        if (i === undefined) {
            return this.getRuleContexts(EmptyContext)
        } else {
            return this.getRuleContext(i, EmptyContext)
        }
    }
    constructor(ctx: ListContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterListEmpty) {
            listener.enterListEmpty(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitListEmpty) {
            listener.exitListEmpty(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitListEmpty) {
            return visitor.visitListEmpty(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class ListStatementContext extends ListContext {
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
        if (listener.enterListStatement) {
            listener.enterListStatement(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitListStatement) {
            listener.exitListStatement(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitListStatement) {
            return visitor.visitListStatement(this)
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
export class DictEmptyContext extends DictContext {
    public empty(): EmptyContext[]
    public empty(i: number): EmptyContext
    public empty(i?: number): EmptyContext | EmptyContext[] {
        if (i === undefined) {
            return this.getRuleContexts(EmptyContext)
        } else {
            return this.getRuleContext(i, EmptyContext)
        }
    }
    constructor(ctx: DictContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterDictEmpty) {
            listener.enterDictEmpty(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitDictEmpty) {
            listener.exitDictEmpty(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitDictEmpty) {
            return visitor.visitDictEmpty(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class DictStatementContext extends DictContext {
    public statement(): StatementContext[]
    public statement(i: number): StatementContext
    public statement(i?: number): StatementContext | StatementContext[] {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext)
        } else {
            return this.getRuleContext(i, StatementContext)
        }
    }
    constructor(ctx: DictContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterDictStatement) {
            listener.enterDictStatement(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitDictStatement) {
            listener.exitDictStatement(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitDictStatement) {
            return visitor.visitDictStatement(this)
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
export class DictScopeContext extends Dict_scopeContext {
    public _header: KeyContext
    public key(): KeyContext {
        return this.getRuleContext(0, KeyContext)
    }
    public record(): RecordContext[]
    public record(i: number): RecordContext
    public record(i?: number): RecordContext | RecordContext[] {
        if (i === undefined) {
            return this.getRuleContexts(RecordContext)
        } else {
            return this.getRuleContext(i, RecordContext)
        }
    }
    public dict_inherit(): Dict_inheritContext[]
    public dict_inherit(i: number): Dict_inheritContext
    public dict_inherit(i?: number): Dict_inheritContext | Dict_inheritContext[] {
        if (i === undefined) {
            return this.getRuleContexts(Dict_inheritContext)
        } else {
            return this.getRuleContext(i, Dict_inheritContext)
        }
    }
    public list_inherit(): List_inheritContext[]
    public list_inherit(i: number): List_inheritContext
    public list_inherit(i?: number): List_inheritContext | List_inheritContext[] {
        if (i === undefined) {
            return this.getRuleContexts(List_inheritContext)
        } else {
            return this.getRuleContext(i, List_inheritContext)
        }
    }
    public empty(): EmptyContext[]
    public empty(i: number): EmptyContext
    public empty(i?: number): EmptyContext | EmptyContext[] {
        if (i === undefined) {
            return this.getRuleContexts(EmptyContext)
        } else {
            return this.getRuleContext(i, EmptyContext)
        }
    }
    constructor(ctx: Dict_scopeContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterDictScope) {
            listener.enterDictScope(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitDictScope) {
            listener.exitDictScope(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitDictScope) {
            return visitor.visitDictScope(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class Dict_inheritContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return ARCParser.RULE_dict_inherit }
    public copyFrom(ctx: Dict_inheritContext): void {
        super.copyFrom(ctx)
    }
}
export class DictInheritContext extends Dict_inheritContext {
    public _header: KeyContext
    public key(): KeyContext {
        return this.getRuleContext(0, KeyContext)
    }
    public record(): RecordContext[]
    public record(i: number): RecordContext
    public record(i?: number): RecordContext | RecordContext[] {
        if (i === undefined) {
            return this.getRuleContexts(RecordContext)
        } else {
            return this.getRuleContext(i, RecordContext)
        }
    }
    public empty(): EmptyContext[]
    public empty(i: number): EmptyContext
    public empty(i?: number): EmptyContext | EmptyContext[] {
        if (i === undefined) {
            return this.getRuleContexts(EmptyContext)
        } else {
            return this.getRuleContext(i, EmptyContext)
        }
    }
    constructor(ctx: Dict_inheritContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterDictInherit) {
            listener.enterDictInherit(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitDictInherit) {
            listener.exitDictInherit(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitDictInherit) {
            return visitor.visitDictInherit(this)
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
export class ListScopeContext extends List_scopeContext {
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
    public empty(): EmptyContext[]
    public empty(i: number): EmptyContext
    public empty(i?: number): EmptyContext | EmptyContext[] {
        if (i === undefined) {
            return this.getRuleContexts(EmptyContext)
        } else {
            return this.getRuleContext(i, EmptyContext)
        }
    }
    constructor(ctx: List_scopeContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterListScope) {
            listener.enterListScope(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitListScope) {
            listener.exitListScope(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitListScope) {
            return visitor.visitListScope(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class List_inheritContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return ARCParser.RULE_list_inherit }
    public copyFrom(ctx: List_inheritContext): void {
        super.copyFrom(ctx)
    }
}
export class ListInheritContext extends List_inheritContext {
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
    public empty(): EmptyContext[]
    public empty(i: number): EmptyContext
    public empty(i?: number): EmptyContext | EmptyContext[] {
        if (i === undefined) {
            return this.getRuleContexts(EmptyContext)
        } else {
            return this.getRuleContext(i, EmptyContext)
        }
    }
    constructor(ctx: List_inheritContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: ARCListener): void {
        if (listener.enterListInherit) {
            listener.enterListInherit(this)
        }
    }
    // @Override
    public exitRule(listener: ARCListener): void {
        if (listener.exitListInherit) {
            listener.exitListInherit(this)
        }
    }
    // @Override
    public accept<Result>(visitor: ARCVisitor<Result>): Result {
        if (visitor.visitListInherit) {
            return visitor.visitListInherit(this)
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
    public record(): RecordContext[]
    public record(i: number): RecordContext
    public record(i?: number): RecordContext | RecordContext[] {
        if (i === undefined) {
            return this.getRuleContexts(RecordContext)
        } else {
            return this.getRuleContext(i, RecordContext)
        }
    }
    public empty(): EmptyContext[]
    public empty(i: number): EmptyContext
    public empty(i?: number): EmptyContext | EmptyContext[] {
        if (i === undefined) {
            return this.getRuleContexts(EmptyContext)
        } else {
            return this.getRuleContext(i, EmptyContext)
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
    public data(): DataContext[]
    public data(i: number): DataContext
    public data(i?: number): DataContext | DataContext[] {
        if (i === undefined) {
            return this.getRuleContexts(DataContext)
        } else {
            return this.getRuleContext(i, DataContext)
        }
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


