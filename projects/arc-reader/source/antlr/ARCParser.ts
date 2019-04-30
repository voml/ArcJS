// Generated from ../../node_modules/@nyar/arc-antlr/ARC.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { ARCListener } from "./ARCListener";
import { ARCVisitor } from "./ARCVisitor";


export class ARCParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly Semicolon = 19;
	public static readonly Comma = 20;
	public static readonly Assign = 21;
	public static readonly Dot = 22;
	public static readonly Identifier = 23;
	public static readonly Integer = 24;
	public static readonly Underline = 25;
	public static readonly Sign = 26;
	public static readonly StringEscapeBlock = 27;
	public static readonly StringEscapeSingle = 28;
	public static readonly StringLiteralBlock = 29;
	public static readonly StringLiteralSingle = 30;
	public static readonly NewLine = 31;
	public static readonly MacroEscape = 32;
	public static readonly LineComment = 33;
	public static readonly PartComment = 34;
	public static readonly WhiteSpace = 35;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_empty = 2;
	public static readonly RULE_eos = 3;
	public static readonly RULE_recordEOS = 4;
	public static readonly RULE_record = 5;
	public static readonly RULE_key = 6;
	public static readonly RULE_symbol = 7;
	public static readonly RULE_integer = 8;
	public static readonly RULE_specialID = 9;
	public static readonly RULE_decimal = 10;
	public static readonly RULE_string = 11;
	public static readonly RULE_macro = 12;
	public static readonly RULE_reference = 13;
	public static readonly RULE_data = 14;
	public static readonly RULE_list = 15;
	public static readonly RULE_dict = 16;
	public static readonly RULE_dict_scope = 17;
	public static readonly RULE_list_scope = 18;
	public static readonly RULE_scopes = 19;
	public static readonly RULE_group = 20;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "empty", "eos", "recordEOS", "record", "key", 
		"symbol", "integer", "specialID", "decimal", "string", "macro", "reference", 
		"data", "list", "dict", "dict_scope", "list_scope", "scopes", "group",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'/'", "'\"\"\"'", "'''''", "'\"'", "'''", "'@'", "'`'", "'$'", 
		"'['", "']'", "'{'", "'}'", "'('", "')'", "'<'", "'>'", "'*'", "'&'", 
		"';'", "','", undefined, "'.'", undefined, undefined, "'_'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "Semicolon", "Comma", 
		"Assign", "Dot", "Identifier", "Integer", "Underline", "Sign", "StringEscapeBlock", 
		"StringEscapeSingle", "StringLiteralBlock", "StringLiteralSingle", "NewLine", 
		"MacroEscape", "LineComment", "PartComment", "WhiteSpace",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ARCParser._LITERAL_NAMES, ARCParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ARCParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "ARC.g4"; }

	// @Override
	public get ruleNames(): string[] { return ARCParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ARCParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ARCParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ARCParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 45;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ARCParser.T__1) | (1 << ARCParser.T__2) | (1 << ARCParser.T__3) | (1 << ARCParser.T__4) | (1 << ARCParser.T__12) | (1 << ARCParser.T__14) | (1 << ARCParser.Semicolon) | (1 << ARCParser.Comma) | (1 << ARCParser.Identifier) | (1 << ARCParser.Integer) | (1 << ARCParser.StringEscapeBlock) | (1 << ARCParser.StringEscapeSingle) | (1 << ARCParser.StringLiteralBlock) | (1 << ARCParser.StringLiteralSingle))) !== 0)) {
				{
				{
				this.state = 42;
				this.statement();
				}
				}
				this.state = 47;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 48;
			this.match(ARCParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ARCParser.RULE_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 54;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ARCParser.Semicolon:
			case ARCParser.Comma:
				{
				this.state = 50;
				this.empty();
				}
				break;
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
				this.state = 51;
				this.recordEOS();
				}
				break;
			case ARCParser.T__12:
				{
				this.state = 52;
				this.dict_scope();
				}
				break;
			case ARCParser.T__14:
				{
				this.state = 53;
				this.list_scope();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public empty(): EmptyContext {
		let _localctx: EmptyContext = new EmptyContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ARCParser.RULE_empty);
		try {
			_localctx = new EmptyStatementContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 56;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eos(): EosContext {
		let _localctx: EosContext = new EosContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ARCParser.RULE_eos);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 58;
			_la = this._input.LA(1);
			if (!(_la === ARCParser.Semicolon || _la === ARCParser.Comma)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public recordEOS(): RecordEOSContext {
		let _localctx: RecordEOSContext = new RecordEOSContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ARCParser.RULE_recordEOS);
		try {
			_localctx = new RecordStatementContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 60;
			this.record();
			this.state = 62;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				this.state = 61;
				this.eos();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public record(): RecordContext {
		let _localctx: RecordContext = new RecordContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ARCParser.RULE_record);
		try {
			this.state = 96;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				_localctx = new IntegerAssignContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 64;
				(_localctx as IntegerAssignContext)._left = this.key();
				this.state = 65;
				this.match(ARCParser.Assign);
				this.state = 66;
				(_localctx as IntegerAssignContext)._right = this.integer();
				}
				break;

			case 2:
				_localctx = new DecimalAssignContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 68;
				(_localctx as DecimalAssignContext)._left = this.key();
				this.state = 69;
				this.match(ARCParser.Assign);
				this.state = 70;
				(_localctx as DecimalAssignContext)._right = this.decimal();
				}
				break;

			case 3:
				_localctx = new SpecialAssignContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 72;
				(_localctx as SpecialAssignContext)._left = this.key();
				this.state = 73;
				this.match(ARCParser.Assign);
				this.state = 74;
				(_localctx as SpecialAssignContext)._right = this.specialID();
				}
				break;

			case 4:
				_localctx = new StringAssignContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 76;
				(_localctx as StringAssignContext)._left = this.key();
				this.state = 77;
				this.match(ARCParser.Assign);
				this.state = 78;
				(_localctx as StringAssignContext)._right = this.string();
				}
				break;

			case 5:
				_localctx = new ListAssignContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 80;
				(_localctx as ListAssignContext)._left = this.key();
				this.state = 81;
				this.match(ARCParser.Assign);
				this.state = 82;
				(_localctx as ListAssignContext)._right = this.list();
				}
				break;

			case 6:
				_localctx = new DictAssignContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 84;
				(_localctx as DictAssignContext)._left = this.key();
				this.state = 85;
				this.match(ARCParser.Assign);
				this.state = 86;
				(_localctx as DictAssignContext)._right = this.dict();
				}
				break;

			case 7:
				_localctx = new CiteAssignContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 88;
				(_localctx as CiteAssignContext)._left = this.key();
				this.state = 89;
				this.match(ARCParser.Assign);
				this.state = 90;
				(_localctx as CiteAssignContext)._right = this.reference();
				}
				break;

			case 8:
				_localctx = new MacroAssignContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 92;
				(_localctx as MacroAssignContext)._left = this.key();
				this.state = 93;
				this.match(ARCParser.Assign);
				this.state = 94;
				(_localctx as MacroAssignContext)._right = this.macro();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public key(): KeyContext {
		let _localctx: KeyContext = new KeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ARCParser.RULE_key);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 98;
			this.symbol();
			this.state = 103;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ARCParser.T__0) {
				{
				{
				this.state = 99;
				this.match(ARCParser.T__0);
				this.state = 100;
				this.symbol();
				}
				}
				this.state = 105;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public symbol(): SymbolContext {
		let _localctx: SymbolContext = new SymbolContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, ARCParser.RULE_symbol);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 109;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ARCParser.Integer:
				{
				this.state = 106;
				this.match(ARCParser.Integer);
				}
				break;
			case ARCParser.T__1:
			case ARCParser.T__2:
			case ARCParser.T__3:
			case ARCParser.T__4:
			case ARCParser.StringEscapeBlock:
			case ARCParser.StringEscapeSingle:
			case ARCParser.StringLiteralBlock:
			case ARCParser.StringLiteralSingle:
				{
				this.state = 107;
				this.string();
				}
				break;
			case ARCParser.Identifier:
				{
				this.state = 108;
				this.match(ARCParser.Identifier);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public integer(): IntegerContext {
		let _localctx: IntegerContext = new IntegerContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ARCParser.RULE_integer);
		let _la: number;
		try {
			_localctx = new IntegerLiteralContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 112;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ARCParser.Sign) {
				{
				this.state = 111;
				this.match(ARCParser.Sign);
				}
			}

			this.state = 114;
			this.match(ARCParser.Integer);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public specialID(): SpecialIDContext {
		let _localctx: SpecialIDContext = new SpecialIDContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, ARCParser.RULE_specialID);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 117;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ARCParser.Sign) {
				{
				this.state = 116;
				this.match(ARCParser.Sign);
				}
			}

			this.state = 119;
			this.match(ARCParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public decimal(): DecimalContext {
		let _localctx: DecimalContext = new DecimalContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, ARCParser.RULE_decimal);
		let _la: number;
		try {
			this.state = 134;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				_localctx = new DecimalLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 122;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ARCParser.Sign) {
					{
					this.state = 121;
					this.match(ARCParser.Sign);
					}
				}

				this.state = 124;
				(_localctx as DecimalLiteralContext)._left = this.match(ARCParser.Integer);
				this.state = 125;
				this.match(ARCParser.Dot);
				this.state = 127;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
				case 1:
					{
					this.state = 126;
					(_localctx as DecimalLiteralContext)._right = this.match(ARCParser.Integer);
					}
					break;
				}
				}
				break;

			case 2:
				_localctx = new DecimalZeroContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 130;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ARCParser.Sign) {
					{
					this.state = 129;
					this.match(ARCParser.Sign);
					}
				}

				this.state = 132;
				this.match(ARCParser.Dot);
				this.state = 133;
				(_localctx as DecimalZeroContext)._right = this.match(ARCParser.Integer);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public string(): StringContext {
		let _localctx: StringContext = new StringContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, ARCParser.RULE_string);
		try {
			this.state = 148;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ARCParser.StringEscapeBlock:
				_localctx = new StringEscapeBlockContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 136;
				this.match(ARCParser.StringEscapeBlock);
				}
				break;
			case ARCParser.StringEscapeSingle:
				_localctx = new StringEscapeSingleContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 137;
				this.match(ARCParser.StringEscapeSingle);
				}
				break;
			case ARCParser.StringLiteralBlock:
				_localctx = new StringLiteralBlockContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 138;
				this.match(ARCParser.StringLiteralBlock);
				}
				break;
			case ARCParser.StringLiteralSingle:
				_localctx = new StringLiteralSingleContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 139;
				this.match(ARCParser.StringLiteralSingle);
				}
				break;
			case ARCParser.T__1:
				_localctx = new StringEmptyContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 140;
				this.match(ARCParser.T__1);
				this.state = 141;
				this.match(ARCParser.T__1);
				}
				break;
			case ARCParser.T__2:
				_localctx = new StringEmptyContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 142;
				this.match(ARCParser.T__2);
				this.state = 143;
				this.match(ARCParser.T__2);
				}
				break;
			case ARCParser.T__3:
				_localctx = new StringEmptyContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 144;
				this.match(ARCParser.T__3);
				this.state = 145;
				this.match(ARCParser.T__3);
				}
				break;
			case ARCParser.T__4:
				_localctx = new StringEmptyContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 146;
				this.match(ARCParser.T__4);
				this.state = 147;
				this.match(ARCParser.T__4);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public macro(): MacroContext {
		let _localctx: MacroContext = new MacroContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, ARCParser.RULE_macro);
		try {
			this.state = 160;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				_localctx = new LiteralMacroContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 150;
				this.match(ARCParser.T__5);
				this.state = 151;
				(_localctx as LiteralMacroContext)._apply = this.match(ARCParser.Identifier);
				this.state = 152;
				(_localctx as LiteralMacroContext)._value = this.match(ARCParser.StringLiteralBlock);
				}
				break;

			case 2:
				_localctx = new SimpleMacroContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 153;
				this.match(ARCParser.T__5);
				this.state = 154;
				(_localctx as SimpleMacroContext)._apply = this.match(ARCParser.Identifier);
				this.state = 155;
				this.match(ARCParser.MacroEscape);
				}
				break;

			case 3:
				_localctx = new EmptyMacroContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 156;
				this.match(ARCParser.T__5);
				this.state = 157;
				(_localctx as EmptyMacroContext)._apply = this.match(ARCParser.Identifier);
				this.state = 158;
				this.match(ARCParser.T__6);
				this.state = 159;
				this.match(ARCParser.T__6);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public reference(): ReferenceContext {
		let _localctx: ReferenceContext = new ReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, ARCParser.RULE_reference);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 162;
			this.match(ARCParser.T__7);
			this.state = 163;
			this.match(ARCParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public data(): DataContext {
		let _localctx: DataContext = new DataContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, ARCParser.RULE_data);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 173;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				this.state = 165;
				this.integer();
				}
				break;

			case 2:
				{
				this.state = 166;
				this.decimal();
				}
				break;

			case 3:
				{
				this.state = 167;
				this.specialID();
				}
				break;

			case 4:
				{
				this.state = 168;
				this.string();
				}
				break;

			case 5:
				{
				this.state = 169;
				this.list();
				}
				break;

			case 6:
				{
				this.state = 170;
				this.dict();
				}
				break;

			case 7:
				{
				this.state = 171;
				this.reference();
				}
				break;

			case 8:
				{
				this.state = 172;
				this.macro();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public list(): ListContext {
		let _localctx: ListContext = new ListContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, ARCParser.RULE_list);
		let _la: number;
		try {
			this.state = 188;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				_localctx = new EmptyListContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 175;
				this.match(ARCParser.T__8);
				this.state = 176;
				this.match(ARCParser.T__9);
				}
				break;

			case 2:
				_localctx = new FilledListContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 177;
				this.match(ARCParser.T__8);
				this.state = 182;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 178;
					this.data();
					this.state = 180;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ARCParser.Semicolon || _la === ARCParser.Comma) {
						{
						this.state = 179;
						this.eos();
						}
					}

					}
					}
					this.state = 184;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ARCParser.T__1) | (1 << ARCParser.T__2) | (1 << ARCParser.T__3) | (1 << ARCParser.T__4) | (1 << ARCParser.T__5) | (1 << ARCParser.T__7) | (1 << ARCParser.T__8) | (1 << ARCParser.T__10) | (1 << ARCParser.Dot) | (1 << ARCParser.Identifier) | (1 << ARCParser.Integer) | (1 << ARCParser.Sign) | (1 << ARCParser.StringEscapeBlock) | (1 << ARCParser.StringEscapeSingle) | (1 << ARCParser.StringLiteralBlock) | (1 << ARCParser.StringLiteralSingle))) !== 0));
				this.state = 186;
				this.match(ARCParser.T__9);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dict(): DictContext {
		let _localctx: DictContext = new DictContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, ARCParser.RULE_dict);
		let _la: number;
		try {
			this.state = 208;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				_localctx = new EmptyDictContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 190;
				this.match(ARCParser.T__10);
				this.state = 191;
				this.match(ARCParser.T__11);
				}
				break;

			case 2:
				_localctx = new FilledDictContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 192;
				this.match(ARCParser.T__10);
				this.state = 194;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 193;
					this.recordEOS();
					}
					}
					this.state = 196;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ARCParser.T__1) | (1 << ARCParser.T__2) | (1 << ARCParser.T__3) | (1 << ARCParser.T__4) | (1 << ARCParser.Identifier) | (1 << ARCParser.Integer) | (1 << ARCParser.StringEscapeBlock) | (1 << ARCParser.StringEscapeSingle) | (1 << ARCParser.StringLiteralBlock) | (1 << ARCParser.StringLiteralSingle))) !== 0));
				this.state = 198;
				this.match(ARCParser.T__11);
				}
				break;

			case 3:
				_localctx = new NestedDictContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 200;
				this.match(ARCParser.T__10);
				this.state = 202;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 201;
					this.scopes();
					}
					}
					this.state = 204;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === ARCParser.T__12 || _la === ARCParser.T__14);
				this.state = 206;
				this.match(ARCParser.T__11);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dict_scope(): Dict_scopeContext {
		let _localctx: Dict_scopeContext = new Dict_scopeContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, ARCParser.RULE_dict_scope);
		try {
			let _alt: number;
			this.state = 222;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				_localctx = new FilledDictScopeContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 210;
				this.match(ARCParser.T__12);
				this.state = 211;
				(_localctx as FilledDictScopeContext)._header = this.key();
				this.state = 212;
				this.match(ARCParser.T__13);
				this.state = 214;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 213;
						this.recordEOS();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 216;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;

			case 2:
				_localctx = new EmptyDictScopeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 218;
				this.match(ARCParser.T__12);
				this.state = 219;
				(_localctx as EmptyDictScopeContext)._header = this.key();
				this.state = 220;
				this.match(ARCParser.T__13);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public list_scope(): List_scopeContext {
		let _localctx: List_scopeContext = new List_scopeContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, ARCParser.RULE_list_scope);
		let _la: number;
		try {
			this.state = 236;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				_localctx = new FilledListScopeContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 224;
				this.match(ARCParser.T__14);
				this.state = 225;
				(_localctx as FilledListScopeContext)._header = this.key();
				this.state = 226;
				this.match(ARCParser.T__15);
				this.state = 228;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 227;
					this.group();
					}
					}
					this.state = 230;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === ARCParser.T__16 || _la === ARCParser.T__17);
				}
				break;

			case 2:
				_localctx = new EmptyListScopeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 232;
				this.match(ARCParser.T__14);
				this.state = 233;
				(_localctx as EmptyListScopeContext)._header = this.key();
				this.state = 234;
				this.match(ARCParser.T__15);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scopes(): ScopesContext {
		let _localctx: ScopesContext = new ScopesContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, ARCParser.RULE_scopes);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 240;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ARCParser.T__12:
				{
				this.state = 238;
				this.dict_scope();
				}
				break;
			case ARCParser.T__14:
				{
				this.state = 239;
				this.list_scope();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public group(): GroupContext {
		let _localctx: GroupContext = new GroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, ARCParser.RULE_group);
		try {
			let _alt: number;
			this.state = 250;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ARCParser.T__16:
				_localctx = new DictGroupContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 242;
				this.match(ARCParser.T__16);
				this.state = 244;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 243;
						this.recordEOS();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 246;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case ARCParser.T__17:
				_localctx = new DataGroupContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 248;
				this.match(ARCParser.T__17);
				this.state = 249;
				this.data();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03%\xFF\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x03\x02\x07\x02." +
		"\n\x02\f\x02\x0E\x021\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x05\x039\n\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x05" +
		"\x06A\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07c\n\x07\x03" +
		"\b\x03\b\x03\b\x07\bh\n\b\f\b\x0E\bk\v\b\x03\t\x03\t\x03\t\x05\tp\n\t" +
		"\x03\n\x05\ns\n\n\x03\n\x03\n\x03\v\x05\vx\n\v\x03\v\x03\v\x03\f\x05\f" +
		"}\n\f\x03\f\x03\f\x03\f\x05\f\x82\n\f\x03\f\x05\f\x85\n\f\x03\f\x03\f" +
		"\x05\f\x89\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x05\r\x97\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xA3\n\x0E\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x05\x10\xB0\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\xB7" +
		"\n\x11\x06\x11\xB9\n\x11\r\x11\x0E\x11\xBA\x03\x11\x03\x11\x05\x11\xBF" +
		"\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x06\x12\xC5\n\x12\r\x12\x0E\x12" +
		"\xC6\x03\x12\x03\x12\x03\x12\x03\x12\x06\x12\xCD\n\x12\r\x12\x0E\x12\xCE" +
		"\x03\x12\x03\x12\x05\x12\xD3\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x06" +
		"\x13\xD9\n\x13\r\x13\x0E\x13\xDA\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13" +
		"\xE1\n\x13\x03\x14\x03\x14\x03\x14\x03\x14\x06\x14\xE7\n\x14\r\x14\x0E" +
		"\x14\xE8\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\xEF\n\x14\x03\x15\x03" +
		"\x15\x05\x15\xF3\n\x15\x03\x16\x03\x16\x06\x16\xF7\n\x16\r\x16\x0E\x16" +
		"\xF8\x03\x16\x03\x16\x05\x16\xFD\n\x16\x03\x16\x02\x02\x02\x17\x02\x02" +
		"\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16" +
		"\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02\x02" +
		"\x03\x03\x02\x15\x16\x02\u011C\x02/\x03\x02\x02\x02\x048\x03\x02\x02\x02" +
		"\x06:\x03\x02\x02\x02\b<\x03\x02\x02\x02\n>\x03\x02\x02\x02\fb\x03\x02" +
		"\x02\x02\x0Ed\x03\x02\x02\x02\x10o\x03\x02\x02\x02\x12r\x03\x02\x02\x02" +
		"\x14w\x03\x02\x02\x02\x16\x88\x03\x02\x02\x02\x18\x96\x03\x02\x02\x02" +
		"\x1A\xA2\x03\x02\x02\x02\x1C\xA4\x03\x02\x02\x02\x1E\xAF\x03\x02\x02\x02" +
		" \xBE\x03\x02\x02\x02\"\xD2\x03\x02\x02\x02$\xE0\x03\x02\x02\x02&\xEE" +
		"\x03\x02\x02\x02(\xF2\x03\x02\x02\x02*\xFC\x03\x02\x02\x02,.\x05\x04\x03" +
		"\x02-,\x03\x02\x02\x02.1\x03\x02\x02\x02/-\x03\x02\x02\x02/0\x03\x02\x02" +
		"\x0202\x03\x02\x02\x021/\x03\x02\x02\x0223\x07\x02\x02\x033\x03\x03\x02" +
		"\x02\x0249\x05\x06\x04\x0259\x05\n\x06\x0269\x05$\x13\x0279\x05&\x14\x02" +
		"84\x03\x02\x02\x0285\x03\x02\x02\x0286\x03\x02\x02\x0287\x03\x02\x02\x02" +
		"9\x05\x03\x02\x02\x02:;\x05\b\x05\x02;\x07\x03\x02\x02\x02<=\t\x02\x02" +
		"\x02=\t\x03\x02\x02\x02>@\x05\f\x07\x02?A\x05\b\x05\x02@?\x03\x02\x02" +
		"\x02@A\x03\x02\x02\x02A\v\x03\x02\x02\x02BC\x05\x0E\b\x02CD\x07\x17\x02" +
		"\x02DE\x05\x12\n\x02Ec\x03\x02\x02\x02FG\x05\x0E\b\x02GH\x07\x17\x02\x02" +
		"HI\x05\x16\f\x02Ic\x03\x02\x02\x02JK\x05\x0E\b\x02KL\x07\x17\x02\x02L" +
		"M\x05\x14\v\x02Mc\x03\x02\x02\x02NO\x05\x0E\b\x02OP\x07\x17\x02\x02PQ" +
		"\x05\x18\r\x02Qc\x03\x02\x02\x02RS\x05\x0E\b\x02ST\x07\x17\x02\x02TU\x05" +
		" \x11\x02Uc\x03\x02\x02\x02VW\x05\x0E\b\x02WX\x07\x17\x02\x02XY\x05\"" +
		"\x12\x02Yc\x03\x02\x02\x02Z[\x05\x0E\b\x02[\\\x07\x17\x02\x02\\]\x05\x1C" +
		"\x0F\x02]c\x03\x02\x02\x02^_\x05\x0E\b\x02_`\x07\x17\x02\x02`a\x05\x1A" +
		"\x0E\x02ac\x03\x02\x02\x02bB\x03\x02\x02\x02bF\x03\x02\x02\x02bJ\x03\x02" +
		"\x02\x02bN\x03\x02\x02\x02bR\x03\x02\x02\x02bV\x03\x02\x02\x02bZ\x03\x02" +
		"\x02\x02b^\x03\x02\x02\x02c\r\x03\x02\x02\x02di\x05\x10\t\x02ef\x07\x03" +
		"\x02\x02fh\x05\x10\t\x02ge\x03\x02\x02\x02hk\x03\x02\x02\x02ig\x03\x02" +
		"\x02\x02ij\x03\x02\x02\x02j\x0F\x03\x02\x02\x02ki\x03\x02\x02\x02lp\x07" +
		"\x1A\x02\x02mp\x05\x18\r\x02np\x07\x19\x02\x02ol\x03\x02\x02\x02om\x03" +
		"\x02\x02\x02on\x03\x02\x02\x02p\x11\x03\x02\x02\x02qs\x07\x1C\x02\x02" +
		"rq\x03\x02\x02\x02rs\x03\x02\x02\x02st\x03\x02\x02\x02tu\x07\x1A\x02\x02" +
		"u\x13\x03\x02\x02\x02vx\x07\x1C\x02\x02wv\x03\x02\x02\x02wx\x03\x02\x02" +
		"\x02xy\x03\x02\x02\x02yz\x07\x19\x02\x02z\x15\x03\x02\x02\x02{}\x07\x1C" +
		"\x02\x02|{\x03\x02\x02\x02|}\x03\x02\x02\x02}~\x03\x02\x02\x02~\x7F\x07" +
		"\x1A\x02\x02\x7F\x81\x07\x18\x02\x02\x80\x82\x07\x1A\x02\x02\x81\x80\x03" +
		"\x02\x02\x02\x81\x82\x03\x02\x02\x02\x82\x89\x03\x02\x02\x02\x83\x85\x07" +
		"\x1C\x02\x02\x84\x83\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85\x86\x03" +
		"\x02\x02\x02\x86\x87\x07\x18\x02\x02\x87\x89\x07\x1A\x02\x02\x88|\x03" +
		"\x02\x02\x02\x88\x84\x03\x02\x02\x02\x89\x17\x03\x02\x02\x02\x8A\x97\x07" +
		"\x1D\x02\x02\x8B\x97\x07\x1E\x02\x02\x8C\x97\x07\x1F\x02\x02\x8D\x97\x07" +
		" \x02\x02\x8E\x8F\x07\x04\x02\x02\x8F\x97\x07\x04\x02\x02\x90\x91\x07" +
		"\x05\x02\x02\x91\x97\x07\x05\x02\x02\x92\x93\x07\x06\x02\x02\x93\x97\x07" +
		"\x06\x02\x02\x94\x95\x07\x07\x02\x02\x95\x97\x07\x07\x02\x02\x96\x8A\x03" +
		"\x02\x02\x02\x96\x8B\x03\x02\x02\x02\x96\x8C\x03\x02\x02\x02\x96\x8D\x03" +
		"\x02\x02\x02\x96\x8E\x03\x02\x02\x02\x96\x90\x03\x02\x02\x02\x96\x92\x03" +
		"\x02\x02\x02\x96\x94\x03\x02\x02\x02\x97\x19\x03\x02\x02\x02\x98\x99\x07" +
		"\b\x02\x02\x99\x9A\x07\x19\x02\x02\x9A\xA3\x07\x1F\x02\x02\x9B\x9C\x07" +
		"\b\x02\x02\x9C\x9D\x07\x19\x02\x02\x9D\xA3\x07\"\x02\x02\x9E\x9F\x07\b" +
		"\x02\x02\x9F\xA0\x07\x19\x02\x02\xA0\xA1\x07\t\x02\x02\xA1\xA3\x07\t\x02" +
		"\x02\xA2\x98\x03\x02\x02\x02\xA2\x9B\x03\x02\x02\x02\xA2\x9E\x03\x02\x02" +
		"\x02\xA3\x1B\x03\x02\x02\x02\xA4\xA5\x07\n\x02\x02\xA5\xA6\x07\x19\x02" +
		"\x02\xA6\x1D\x03\x02\x02\x02\xA7\xB0\x05\x12\n\x02\xA8\xB0\x05\x16\f\x02" +
		"\xA9\xB0\x05\x14\v\x02\xAA\xB0\x05\x18\r\x02\xAB\xB0\x05 \x11\x02\xAC" +
		"\xB0\x05\"\x12\x02\xAD\xB0\x05\x1C\x0F\x02\xAE\xB0\x05\x1A\x0E\x02\xAF" +
		"\xA7\x03\x02\x02\x02\xAF\xA8\x03\x02\x02\x02\xAF\xA9\x03\x02\x02\x02\xAF" +
		"\xAA\x03\x02\x02\x02\xAF\xAB\x03\x02\x02\x02\xAF\xAC\x03\x02\x02\x02\xAF" +
		"\xAD\x03\x02\x02\x02\xAF\xAE\x03\x02\x02\x02\xB0\x1F\x03\x02\x02\x02\xB1" +
		"\xB2\x07\v\x02\x02\xB2\xBF\x07\f\x02\x02\xB3\xB8\x07\v\x02\x02\xB4\xB6" +
		"\x05\x1E\x10\x02\xB5\xB7\x05\b\x05\x02\xB6\xB5\x03\x02\x02\x02\xB6\xB7" +
		"\x03\x02\x02\x02\xB7\xB9\x03\x02\x02\x02\xB8\xB4\x03\x02\x02\x02\xB9\xBA" +
		"\x03\x02\x02\x02\xBA\xB8\x03\x02\x02\x02\xBA\xBB\x03\x02\x02\x02\xBB\xBC" +
		"\x03\x02\x02\x02\xBC\xBD\x07\f\x02\x02\xBD\xBF\x03\x02\x02\x02\xBE\xB1" +
		"\x03\x02\x02\x02\xBE\xB3\x03\x02\x02\x02\xBF!\x03\x02\x02\x02\xC0\xC1" +
		"\x07\r\x02\x02\xC1\xD3\x07\x0E\x02\x02\xC2\xC4\x07\r\x02\x02\xC3\xC5\x05" +
		"\n\x06\x02\xC4\xC3\x03\x02\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6\xC4\x03" +
		"\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\xC8\x03\x02\x02\x02\xC8\xC9\x07" +
		"\x0E\x02\x02\xC9\xD3\x03\x02\x02\x02\xCA\xCC\x07\r\x02\x02\xCB\xCD\x05" +
		"(\x15\x02\xCC\xCB\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE\xCC\x03" +
		"\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD1\x07" +
		"\x0E\x02\x02\xD1\xD3\x03\x02\x02\x02\xD2\xC0\x03\x02\x02\x02\xD2\xC2\x03" +
		"\x02\x02\x02\xD2\xCA\x03\x02\x02\x02\xD3#\x03\x02\x02\x02\xD4\xD5\x07" +
		"\x0F\x02\x02\xD5\xD6\x05\x0E\b\x02\xD6\xD8\x07\x10\x02\x02\xD7\xD9\x05" +
		"\n\x06\x02\xD8\xD7\x03\x02\x02\x02\xD9\xDA\x03\x02\x02\x02\xDA\xD8\x03" +
		"\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB\xE1\x03\x02\x02\x02\xDC\xDD\x07" +
		"\x0F\x02\x02\xDD\xDE\x05\x0E\b\x02\xDE\xDF\x07\x10\x02\x02\xDF\xE1\x03" +
		"\x02\x02\x02\xE0\xD4\x03\x02\x02\x02\xE0\xDC\x03\x02\x02\x02\xE1%\x03" +
		"\x02\x02\x02\xE2\xE3\x07\x11\x02\x02\xE3\xE4\x05\x0E\b\x02\xE4\xE6\x07" +
		"\x12\x02\x02\xE5\xE7\x05*\x16\x02\xE6\xE5\x03\x02\x02\x02\xE7\xE8\x03" +
		"\x02\x02\x02\xE8\xE6\x03\x02\x02\x02\xE8\xE9\x03\x02\x02\x02\xE9\xEF\x03" +
		"\x02\x02\x02\xEA\xEB\x07\x11\x02\x02\xEB\xEC\x05\x0E\b\x02\xEC\xED\x07" +
		"\x12\x02\x02\xED\xEF\x03\x02\x02\x02\xEE\xE2\x03\x02\x02\x02\xEE\xEA\x03" +
		"\x02\x02\x02\xEF\'\x03\x02\x02\x02\xF0\xF3\x05$\x13\x02\xF1\xF3\x05&\x14" +
		"\x02\xF2\xF0\x03\x02\x02\x02\xF2\xF1\x03\x02\x02\x02\xF3)\x03\x02\x02" +
		"\x02\xF4\xF6\x07\x13\x02\x02\xF5\xF7\x05\n\x06\x02\xF6\xF5\x03\x02\x02" +
		"\x02\xF7\xF8\x03\x02\x02\x02\xF8\xF6\x03\x02\x02\x02\xF8\xF9\x03\x02\x02" +
		"\x02\xF9\xFD\x03\x02\x02\x02\xFA\xFB\x07\x14\x02\x02\xFB\xFD\x05\x1E\x10" +
		"\x02\xFC\xF4\x03\x02\x02\x02\xFC\xFA\x03\x02\x02\x02\xFD+\x03\x02\x02" +
		"\x02\x1E/8@biorw|\x81\x84\x88\x96\xA2\xAF\xB6\xBA\xBE\xC6\xCE\xD2\xDA" +
		"\xE0\xE8\xEE\xF2\xF8\xFC";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ARCParser.__ATN) {
			ARCParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ARCParser._serializedATN));
		}

		return ARCParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(ARCParser.EOF, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ARCParser.RULE_program; }
	// @Override
	public enterRule(listener: ARCListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: ARCListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ARCVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public empty(): EmptyContext | undefined {
		return this.tryGetRuleContext(0, EmptyContext);
	}
	public recordEOS(): RecordEOSContext | undefined {
		return this.tryGetRuleContext(0, RecordEOSContext);
	}
	public dict_scope(): Dict_scopeContext | undefined {
		return this.tryGetRuleContext(0, Dict_scopeContext);
	}
	public list_scope(): List_scopeContext | undefined {
		return this.tryGetRuleContext(0, List_scopeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ARCParser.RULE_statement; }
	// @Override
	public enterRule(listener: ARCListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ARCListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ARCVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmptyContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ARCParser.RULE_empty; }
	public copyFrom(ctx: EmptyContext): void {
		super.copyFrom(ctx);
	}
}
export class EmptyStatementContext extends EmptyContext {
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	constructor(ctx: EmptyContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ARCListener): void {
		if (listener.enterEmptyStatement) {
			listener.enterEmptyStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ARCListener): void {
		if (listener.exitEmptyStatement) {
			listener.exitEmptyStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ARCVisitor<Result>): Result {
		if (visitor.visitEmptyStatement) {
			return visitor.visitEmptyStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EosContext extends ParserRuleContext {
	public Semicolon(): TerminalNode | undefined { return this.tryGetToken(ARCParser.Semicolon, 0); }
	public Comma(): TerminalNode | undefined { return this.tryGetToken(ARCParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ARCParser.RULE_eos; }
	// @Override
	public enterRule(listener: ARCListener): void {
		if (listener.enterEos) {
			listener.enterEos(this);
		}
	}
	// @Override
	public exitRule(listener: ARCListener): void {
		if (listener.exitEos) {
			listener.exitEos(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ARCVisitor<Result>): Result {
		if (visitor.visitEos) {
			return visitor.visitEos(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RecordEOSContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ARCParser.RULE_recordEOS; }
	public copyFrom(ctx: RecordEOSContext): void {
		super.copyFrom(ctx);
	}
}
export class RecordStatementContext extends RecordEOSContext {
	public record(): RecordContext {
		return this.getRuleContext(0, RecordContext);
	}
	public eos(): EosContext | undefined {
		return this.tryGetRuleContext(0, EosContext);
	}
	constructor(ctx: RecordEOSContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ARCListener): void {
		if (listener.enterRecordStatement) {
			listener.enterRecordStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ARCListener): void {
		if (listener.exitRecordStatement) {
			listener.exitRecordStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ARCVisitor<Result>): Result {
		if (visitor.visitRecordStatement) {
			return visitor.visitRecordStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RecordContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ARCParser.RULE_record; }
	public copyFrom(ctx: RecordContext): void {
		super.copyFrom(ctx);
	}
}
export class IntegerAssignContext extends RecordContext {
	public _left: KeyContext;
	public _right: IntegerContext;
	public Assign(): TerminalNode { return this.getToken(ARCParser.Assign, 0); }
	public key(): KeyContext {
		return this.getRuleContext(0, KeyContext);
	}
	public integer(): IntegerContext {
		return this.getRuleContext(0, IntegerContext);
	}
	constructor(ctx: RecordContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ARCListener): void {
		if (listener.enterIntegerAssign) {
			listener.enterIntegerAssign(this);
		}
	}
	// @Override
	public exitRule(listener: ARCListener): void {
		if (listener.exitIntegerAssign) {
			listener.exitIntegerAssign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ARCVisitor<Result>): Result {
		if (visitor.visitIntegerAssign) {
			return visitor.visitIntegerAssign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DecimalAssignContext extends RecordContext {
	public _left: KeyContext;
	public _right: DecimalContext;
	public Assign(): TerminalNode { return this.getToken(ARCParser.Assign, 0); }
	public key(): KeyContext {
		return this.getRuleContext(0, KeyContext);
	}
	public decimal(): DecimalContext {
		return this.getRuleContext(0, DecimalContext);
	}
	constructor(ctx: RecordContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ARCListener): void {
		if (listener.enterDecimalAssign) {
			listener.enterDecimalAssign(this);
		}
	}
	// @Override
	public exitRule(listener: ARCListener): void {
		if (listener.exitDecimalAssign) {
			listener.exitDecimalAssign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ARCVisitor<Result>): Result {
		if (visitor.visitDecimalAssign) {
			return visitor.visitDecimalAssign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SpecialAssignContext extends RecordContext {
	public _left: KeyContext;
	public _right: SpecialIDContext;
	public Assign(): TerminalNode { return this.getToken(ARCParser.Assign, 0); }
	public key(): KeyContext {
		return this.getRuleContext(0, KeyContext);
	}
	public specialID(): SpecialIDContext {
		return this.getRuleContext(0, SpecialIDContext);
	}
	constructor(ctx: RecordContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ARCListener): void {
		if (listener.enterSpecialAssign) {
			listener.enterSpecialAssign(this);
		}
	}
	// @Override
	public exitRule(listener: ARCListener): void {
		if (listener.exitSpecialAssign) {
			listener.exitSpecialAssign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ARCVisitor<Result>): Result {
		if (visitor.visitSpecialAssign) {
			return visitor.visitSpecialAssign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringAssignContext extends RecordContext {
	public _left: KeyContext;
	public _right: StringContext;
	public Assign(): TerminalNode { return this.getToken(ARCParser.Assign, 0); }
	public key(): KeyContext {
		return this.getRuleContext(0, KeyContext);
	}
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	constructor(ctx: RecordContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ARCListener): void {
		if (listener.enterStringAssign) {
			listener.enterStringAssign(this);
		}
	}
	// @Override
	public exitRule(listener: ARCListener): void {
		if (listener.exitStringAssign) {
			listener.exitStringAssign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ARCVisitor<Result>): Result {
		if (visitor.visitStringAssign) {
			return visitor.visitStringAssign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ListAssignContext extends RecordContext {
	public _left: KeyContext;
	public _right: ListContext;
	public Assign(): TerminalNode { return this.getToken(ARCParser.Assign, 0); }
	public key(): KeyContext {
		return this.getRuleContext(0, KeyContext);
	}
	public list(): ListContext {
		return this.getRuleContext(0, ListContext);
	}
	constructor(ctx: RecordContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ARCListener): void {
		if (listener.enterListAssign) {
			listener.enterListAssign(this);
		}
	}
	// @Override
	public exitRule(listener: ARCListener): void {
		if (listener.exitListAssign) {
			listener.exitListAssign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ARCVisitor<Result>): Result {
		if (visitor.visitListAssign) {
			return visitor.visitListAssign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DictAssignContext extends RecordContext {
	public _left: KeyContext;
	public _right: DictContext;
	public Assign(): TerminalNode { return this.getToken(ARCParser.Assign, 0); }
	public key(): KeyContext {
		return this.getRuleContext(0, KeyContext);
	}
	public dict(): DictContext {
		return this.getRuleContext(0, DictContext);
	}
	constructor(ctx: RecordContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ARCListener): void {
		if (listener.enterDictAssign) {
			listener.enterDictAssign(this);
		}
	}
	// @Override
	public exitRule(listener: ARCListener): void {
		if (listener.exitDictAssign) {
			listener.exitDictAssign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ARCVisitor<Result>): Result {
		if (visitor.visitDictAssign) {
			return visitor.visitDictAssign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CiteAssignContext extends RecordContext {
	public _left: KeyContext;
	public _right: ReferenceContext;
	public Assign(): TerminalNode { return this.getToken(ARCParser.Assign, 0); }
	public key(): KeyContext {
		return this.getRuleContext(0, KeyContext);
	}
	public reference(): ReferenceContext {
		return this.getRuleContext(0, ReferenceContext);
	}
	constructor(ctx: RecordContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ARCListener): void {
		if (listener.enterCiteAssign) {
			listener.enterCiteAssign(this);
		}
	}
	// @Override
	public exitRule(listener: ARCListener): void {
		if (listener.exitCiteAssign) {
			listener.exitCiteAssign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ARCVisitor<Result>): Result {
		if (visitor.visitCiteAssign) {
			return visitor.visitCiteAssign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MacroAssignContext extends RecordContext {
	public _left: KeyContext;
	public _right: MacroContext;
	public Assign(): TerminalNode { return this.getToken(ARCParser.Assign, 0); }
	public key(): KeyContext {
		return this.getRuleContext(0, KeyContext);
	}
	public macro(): MacroContext {
		return this.getRuleContext(0, MacroContext);
	}
	constructor(ctx: RecordContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ARCListener): void {
		if (listener.enterMacroAssign) {
			listener.enterMacroAssign(this);
		}
	}
	// @Override
	public exitRule(listener: ARCListener): void {
		if (listener.exitMacroAssign) {
			listener.exitMacroAssign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ARCVisitor<Result>): Result {
		if (visitor.visitMacroAssign) {
			return visitor.visitMacroAssign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeyContext extends ParserRuleContext {
	public symbol(): SymbolContext[];
	public symbol(i: number): SymbolContext;
	public symbol(i?: number): SymbolContext | SymbolContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SymbolContext);
		} else {
			return this.getRuleContext(i, SymbolContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ARCParser.RULE_key; }
	// @Override
	public enterRule(listener: ARCListener): void {
		if (listener.enterKey) {
			listener.enterKey(this);
		}
	}
	// @Override
	public exitRule(listener: ARCListener): void {
		if (listener.exitKey) {
			listener.exitKey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ARCVisitor<Result>): Result {
		if (visitor.visitKey) {
			return visitor.visitKey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SymbolContext extends ParserRuleContext {
	public Integer(): TerminalNode | undefined { return this.tryGetToken(ARCParser.Integer, 0); }
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(ARCParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ARCParser.RULE_symbol; }
	// @Override
	public enterRule(listener: ARCListener): void {
		if (listener.enterSymbol) {
			listener.enterSymbol(this);
		}
	}
	// @Override
	public exitRule(listener: ARCListener): void {
		if (listener.exitSymbol) {
			listener.exitSymbol(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ARCVisitor<Result>): Result {
		if (visitor.visitSymbol) {
			return visitor.visitSymbol(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntegerContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ARCParser.RULE_integer; }
	public copyFrom(ctx: IntegerContext): void {
		super.copyFrom(ctx);
	}
}
export class IntegerLiteralContext extends IntegerContext {
	public Integer(): TerminalNode { return this.getToken(ARCParser.Integer, 0); }
	public Sign(): TerminalNode | undefined { return this.tryGetToken(ARCParser.Sign, 0); }
	constructor(ctx: IntegerContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ARCListener): void {
		if (listener.enterIntegerLiteral) {
			listener.enterIntegerLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: ARCListener): void {
		if (listener.exitIntegerLiteral) {
			listener.exitIntegerLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ARCVisitor<Result>): Result {
		if (visitor.visitIntegerLiteral) {
			return visitor.visitIntegerLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SpecialIDContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(ARCParser.Identifier, 0); }
	public Sign(): TerminalNode | undefined { return this.tryGetToken(ARCParser.Sign, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ARCParser.RULE_specialID; }
	// @Override
	public enterRule(listener: ARCListener): void {
		if (listener.enterSpecialID) {
			listener.enterSpecialID(this);
		}
	}
	// @Override
	public exitRule(listener: ARCListener): void {
		if (listener.exitSpecialID) {
			listener.exitSpecialID(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ARCVisitor<Result>): Result {
		if (visitor.visitSpecialID) {
			return visitor.visitSpecialID(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DecimalContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ARCParser.RULE_decimal; }
	public copyFrom(ctx: DecimalContext): void {
		super.copyFrom(ctx);
	}
}
export class DecimalLiteralContext extends DecimalContext {
	public _left: Token;
	public _right: Token;
	public Dot(): TerminalNode { return this.getToken(ARCParser.Dot, 0); }
	public Integer(): TerminalNode[];
	public Integer(i: number): TerminalNode;
	public Integer(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ARCParser.Integer);
		} else {
			return this.getToken(ARCParser.Integer, i);
		}
	}
	public Sign(): TerminalNode | undefined { return this.tryGetToken(ARCParser.Sign, 0); }
	constructor(ctx: DecimalContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ARCListener): void {
		if (listener.enterDecimalLiteral) {
			listener.enterDecimalLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: ARCListener): void {
		if (listener.exitDecimalLiteral) {
			listener.exitDecimalLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ARCVisitor<Result>): Result {
		if (visitor.visitDecimalLiteral) {
			return visitor.visitDecimalLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DecimalZeroContext extends DecimalContext {
	public _right: Token;
	public Dot(): TerminalNode { return this.getToken(ARCParser.Dot, 0); }
	public Integer(): TerminalNode { return this.getToken(ARCParser.Integer, 0); }
	public Sign(): TerminalNode | undefined { return this.tryGetToken(ARCParser.Sign, 0); }
	constructor(ctx: DecimalContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ARCListener): void {
		if (listener.enterDecimalZero) {
			listener.enterDecimalZero(this);
		}
	}
	// @Override
	public exitRule(listener: ARCListener): void {
		if (listener.exitDecimalZero) {
			listener.exitDecimalZero(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ARCVisitor<Result>): Result {
		if (visitor.visitDecimalZero) {
			return visitor.visitDecimalZero(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ARCParser.RULE_string; }
	public copyFrom(ctx: StringContext): void {
		super.copyFrom(ctx);
	}
}
export class StringEscapeBlockContext extends StringContext {
	public StringEscapeBlock(): TerminalNode { return this.getToken(ARCParser.StringEscapeBlock, 0); }
	constructor(ctx: StringContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ARCListener): void {
		if (listener.enterStringEscapeBlock) {
			listener.enterStringEscapeBlock(this);
		}
	}
	// @Override
	public exitRule(listener: ARCListener): void {
		if (listener.exitStringEscapeBlock) {
			listener.exitStringEscapeBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ARCVisitor<Result>): Result {
		if (visitor.visitStringEscapeBlock) {
			return visitor.visitStringEscapeBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringEscapeSingleContext extends StringContext {
	public StringEscapeSingle(): TerminalNode { return this.getToken(ARCParser.StringEscapeSingle, 0); }
	constructor(ctx: StringContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ARCListener): void {
		if (listener.enterStringEscapeSingle) {
			listener.enterStringEscapeSingle(this);
		}
	}
	// @Override
	public exitRule(listener: ARCListener): void {
		if (listener.exitStringEscapeSingle) {
			listener.exitStringEscapeSingle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ARCVisitor<Result>): Result {
		if (visitor.visitStringEscapeSingle) {
			return visitor.visitStringEscapeSingle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringLiteralBlockContext extends StringContext {
	public StringLiteralBlock(): TerminalNode { return this.getToken(ARCParser.StringLiteralBlock, 0); }
	constructor(ctx: StringContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ARCListener): void {
		if (listener.enterStringLiteralBlock) {
			listener.enterStringLiteralBlock(this);
		}
	}
	// @Override
	public exitRule(listener: ARCListener): void {
		if (listener.exitStringLiteralBlock) {
			listener.exitStringLiteralBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ARCVisitor<Result>): Result {
		if (visitor.visitStringLiteralBlock) {
			return visitor.visitStringLiteralBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringLiteralSingleContext extends StringContext {
	public StringLiteralSingle(): TerminalNode { return this.getToken(ARCParser.StringLiteralSingle, 0); }
	constructor(ctx: StringContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ARCListener): void {
		if (listener.enterStringLiteralSingle) {
			listener.enterStringLiteralSingle(this);
		}
	}
	// @Override
	public exitRule(listener: ARCListener): void {
		if (listener.exitStringLiteralSingle) {
			listener.exitStringLiteralSingle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ARCVisitor<Result>): Result {
		if (visitor.visitStringLiteralSingle) {
			return visitor.visitStringLiteralSingle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringEmptyContext extends StringContext {
	constructor(ctx: StringContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ARCListener): void {
		if (listener.enterStringEmpty) {
			listener.enterStringEmpty(this);
		}
	}
	// @Override
	public exitRule(listener: ARCListener): void {
		if (listener.exitStringEmpty) {
			listener.exitStringEmpty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ARCVisitor<Result>): Result {
		if (visitor.visitStringEmpty) {
			return visitor.visitStringEmpty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MacroContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ARCParser.RULE_macro; }
	public copyFrom(ctx: MacroContext): void {
		super.copyFrom(ctx);
	}
}
export class LiteralMacroContext extends MacroContext {
	public _apply: Token;
	public _value: Token;
	public Identifier(): TerminalNode { return this.getToken(ARCParser.Identifier, 0); }
	public StringLiteralBlock(): TerminalNode { return this.getToken(ARCParser.StringLiteralBlock, 0); }
	constructor(ctx: MacroContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ARCListener): void {
		if (listener.enterLiteralMacro) {
			listener.enterLiteralMacro(this);
		}
	}
	// @Override
	public exitRule(listener: ARCListener): void {
		if (listener.exitLiteralMacro) {
			listener.exitLiteralMacro(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ARCVisitor<Result>): Result {
		if (visitor.visitLiteralMacro) {
			return visitor.visitLiteralMacro(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SimpleMacroContext extends MacroContext {
	public _apply: Token;
	public MacroEscape(): TerminalNode { return this.getToken(ARCParser.MacroEscape, 0); }
	public Identifier(): TerminalNode { return this.getToken(ARCParser.Identifier, 0); }
	constructor(ctx: MacroContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ARCListener): void {
		if (listener.enterSimpleMacro) {
			listener.enterSimpleMacro(this);
		}
	}
	// @Override
	public exitRule(listener: ARCListener): void {
		if (listener.exitSimpleMacro) {
			listener.exitSimpleMacro(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ARCVisitor<Result>): Result {
		if (visitor.visitSimpleMacro) {
			return visitor.visitSimpleMacro(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EmptyMacroContext extends MacroContext {
	public _apply: Token;
	public Identifier(): TerminalNode { return this.getToken(ARCParser.Identifier, 0); }
	constructor(ctx: MacroContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ARCListener): void {
		if (listener.enterEmptyMacro) {
			listener.enterEmptyMacro(this);
		}
	}
	// @Override
	public exitRule(listener: ARCListener): void {
		if (listener.exitEmptyMacro) {
			listener.exitEmptyMacro(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ARCVisitor<Result>): Result {
		if (visitor.visitEmptyMacro) {
			return visitor.visitEmptyMacro(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReferenceContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(ARCParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ARCParser.RULE_reference; }
	// @Override
	public enterRule(listener: ARCListener): void {
		if (listener.enterReference) {
			listener.enterReference(this);
		}
	}
	// @Override
	public exitRule(listener: ARCListener): void {
		if (listener.exitReference) {
			listener.exitReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ARCVisitor<Result>): Result {
		if (visitor.visitReference) {
			return visitor.visitReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DataContext extends ParserRuleContext {
	public integer(): IntegerContext | undefined {
		return this.tryGetRuleContext(0, IntegerContext);
	}
	public decimal(): DecimalContext | undefined {
		return this.tryGetRuleContext(0, DecimalContext);
	}
	public specialID(): SpecialIDContext | undefined {
		return this.tryGetRuleContext(0, SpecialIDContext);
	}
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public list(): ListContext | undefined {
		return this.tryGetRuleContext(0, ListContext);
	}
	public dict(): DictContext | undefined {
		return this.tryGetRuleContext(0, DictContext);
	}
	public reference(): ReferenceContext | undefined {
		return this.tryGetRuleContext(0, ReferenceContext);
	}
	public macro(): MacroContext | undefined {
		return this.tryGetRuleContext(0, MacroContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ARCParser.RULE_data; }
	// @Override
	public enterRule(listener: ARCListener): void {
		if (listener.enterData) {
			listener.enterData(this);
		}
	}
	// @Override
	public exitRule(listener: ARCListener): void {
		if (listener.exitData) {
			listener.exitData(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ARCVisitor<Result>): Result {
		if (visitor.visitData) {
			return visitor.visitData(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ARCParser.RULE_list; }
	public copyFrom(ctx: ListContext): void {
		super.copyFrom(ctx);
	}
}
export class EmptyListContext extends ListContext {
	constructor(ctx: ListContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ARCListener): void {
		if (listener.enterEmptyList) {
			listener.enterEmptyList(this);
		}
	}
	// @Override
	public exitRule(listener: ARCListener): void {
		if (listener.exitEmptyList) {
			listener.exitEmptyList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ARCVisitor<Result>): Result {
		if (visitor.visitEmptyList) {
			return visitor.visitEmptyList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FilledListContext extends ListContext {
	public data(): DataContext[];
	public data(i: number): DataContext;
	public data(i?: number): DataContext | DataContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DataContext);
		} else {
			return this.getRuleContext(i, DataContext);
		}
	}
	public eos(): EosContext[];
	public eos(i: number): EosContext;
	public eos(i?: number): EosContext | EosContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EosContext);
		} else {
			return this.getRuleContext(i, EosContext);
		}
	}
	constructor(ctx: ListContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ARCListener): void {
		if (listener.enterFilledList) {
			listener.enterFilledList(this);
		}
	}
	// @Override
	public exitRule(listener: ARCListener): void {
		if (listener.exitFilledList) {
			listener.exitFilledList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ARCVisitor<Result>): Result {
		if (visitor.visitFilledList) {
			return visitor.visitFilledList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DictContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ARCParser.RULE_dict; }
	public copyFrom(ctx: DictContext): void {
		super.copyFrom(ctx);
	}
}
export class EmptyDictContext extends DictContext {
	constructor(ctx: DictContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ARCListener): void {
		if (listener.enterEmptyDict) {
			listener.enterEmptyDict(this);
		}
	}
	// @Override
	public exitRule(listener: ARCListener): void {
		if (listener.exitEmptyDict) {
			listener.exitEmptyDict(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ARCVisitor<Result>): Result {
		if (visitor.visitEmptyDict) {
			return visitor.visitEmptyDict(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FilledDictContext extends DictContext {
	public recordEOS(): RecordEOSContext[];
	public recordEOS(i: number): RecordEOSContext;
	public recordEOS(i?: number): RecordEOSContext | RecordEOSContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RecordEOSContext);
		} else {
			return this.getRuleContext(i, RecordEOSContext);
		}
	}
	constructor(ctx: DictContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ARCListener): void {
		if (listener.enterFilledDict) {
			listener.enterFilledDict(this);
		}
	}
	// @Override
	public exitRule(listener: ARCListener): void {
		if (listener.exitFilledDict) {
			listener.exitFilledDict(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ARCVisitor<Result>): Result {
		if (visitor.visitFilledDict) {
			return visitor.visitFilledDict(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NestedDictContext extends DictContext {
	public scopes(): ScopesContext[];
	public scopes(i: number): ScopesContext;
	public scopes(i?: number): ScopesContext | ScopesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScopesContext);
		} else {
			return this.getRuleContext(i, ScopesContext);
		}
	}
	constructor(ctx: DictContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ARCListener): void {
		if (listener.enterNestedDict) {
			listener.enterNestedDict(this);
		}
	}
	// @Override
	public exitRule(listener: ARCListener): void {
		if (listener.exitNestedDict) {
			listener.exitNestedDict(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ARCVisitor<Result>): Result {
		if (visitor.visitNestedDict) {
			return visitor.visitNestedDict(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dict_scopeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ARCParser.RULE_dict_scope; }
	public copyFrom(ctx: Dict_scopeContext): void {
		super.copyFrom(ctx);
	}
}
export class FilledDictScopeContext extends Dict_scopeContext {
	public _header: KeyContext;
	public key(): KeyContext {
		return this.getRuleContext(0, KeyContext);
	}
	public recordEOS(): RecordEOSContext[];
	public recordEOS(i: number): RecordEOSContext;
	public recordEOS(i?: number): RecordEOSContext | RecordEOSContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RecordEOSContext);
		} else {
			return this.getRuleContext(i, RecordEOSContext);
		}
	}
	constructor(ctx: Dict_scopeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ARCListener): void {
		if (listener.enterFilledDictScope) {
			listener.enterFilledDictScope(this);
		}
	}
	// @Override
	public exitRule(listener: ARCListener): void {
		if (listener.exitFilledDictScope) {
			listener.exitFilledDictScope(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ARCVisitor<Result>): Result {
		if (visitor.visitFilledDictScope) {
			return visitor.visitFilledDictScope(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EmptyDictScopeContext extends Dict_scopeContext {
	public _header: KeyContext;
	public key(): KeyContext {
		return this.getRuleContext(0, KeyContext);
	}
	constructor(ctx: Dict_scopeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ARCListener): void {
		if (listener.enterEmptyDictScope) {
			listener.enterEmptyDictScope(this);
		}
	}
	// @Override
	public exitRule(listener: ARCListener): void {
		if (listener.exitEmptyDictScope) {
			listener.exitEmptyDictScope(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ARCVisitor<Result>): Result {
		if (visitor.visitEmptyDictScope) {
			return visitor.visitEmptyDictScope(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class List_scopeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ARCParser.RULE_list_scope; }
	public copyFrom(ctx: List_scopeContext): void {
		super.copyFrom(ctx);
	}
}
export class FilledListScopeContext extends List_scopeContext {
	public _header: KeyContext;
	public key(): KeyContext {
		return this.getRuleContext(0, KeyContext);
	}
	public group(): GroupContext[];
	public group(i: number): GroupContext;
	public group(i?: number): GroupContext | GroupContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GroupContext);
		} else {
			return this.getRuleContext(i, GroupContext);
		}
	}
	constructor(ctx: List_scopeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ARCListener): void {
		if (listener.enterFilledListScope) {
			listener.enterFilledListScope(this);
		}
	}
	// @Override
	public exitRule(listener: ARCListener): void {
		if (listener.exitFilledListScope) {
			listener.exitFilledListScope(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ARCVisitor<Result>): Result {
		if (visitor.visitFilledListScope) {
			return visitor.visitFilledListScope(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EmptyListScopeContext extends List_scopeContext {
	public _header: KeyContext;
	public key(): KeyContext {
		return this.getRuleContext(0, KeyContext);
	}
	constructor(ctx: List_scopeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ARCListener): void {
		if (listener.enterEmptyListScope) {
			listener.enterEmptyListScope(this);
		}
	}
	// @Override
	public exitRule(listener: ARCListener): void {
		if (listener.exitEmptyListScope) {
			listener.exitEmptyListScope(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ARCVisitor<Result>): Result {
		if (visitor.visitEmptyListScope) {
			return visitor.visitEmptyListScope(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScopesContext extends ParserRuleContext {
	public dict_scope(): Dict_scopeContext | undefined {
		return this.tryGetRuleContext(0, Dict_scopeContext);
	}
	public list_scope(): List_scopeContext | undefined {
		return this.tryGetRuleContext(0, List_scopeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ARCParser.RULE_scopes; }
	// @Override
	public enterRule(listener: ARCListener): void {
		if (listener.enterScopes) {
			listener.enterScopes(this);
		}
	}
	// @Override
	public exitRule(listener: ARCListener): void {
		if (listener.exitScopes) {
			listener.exitScopes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ARCVisitor<Result>): Result {
		if (visitor.visitScopes) {
			return visitor.visitScopes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ARCParser.RULE_group; }
	public copyFrom(ctx: GroupContext): void {
		super.copyFrom(ctx);
	}
}
export class DictGroupContext extends GroupContext {
	public recordEOS(): RecordEOSContext[];
	public recordEOS(i: number): RecordEOSContext;
	public recordEOS(i?: number): RecordEOSContext | RecordEOSContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RecordEOSContext);
		} else {
			return this.getRuleContext(i, RecordEOSContext);
		}
	}
	constructor(ctx: GroupContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ARCListener): void {
		if (listener.enterDictGroup) {
			listener.enterDictGroup(this);
		}
	}
	// @Override
	public exitRule(listener: ARCListener): void {
		if (listener.exitDictGroup) {
			listener.exitDictGroup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ARCVisitor<Result>): Result {
		if (visitor.visitDictGroup) {
			return visitor.visitDictGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DataGroupContext extends GroupContext {
	public data(): DataContext {
		return this.getRuleContext(0, DataContext);
	}
	constructor(ctx: GroupContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ARCListener): void {
		if (listener.enterDataGroup) {
			listener.enterDataGroup(this);
		}
	}
	// @Override
	public exitRule(listener: ARCListener): void {
		if (listener.exitDataGroup) {
			listener.exitDataGroup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ARCVisitor<Result>): Result {
		if (visitor.visitDataGroup) {
			return visitor.visitDataGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


