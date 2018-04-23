"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var guitarics_verse_parser_1 = require("../lib/guitarics-verse-parser");
var chai_1 = require("chai");
describe('verse parser', function () {
    var verse;
    var text = 'C   Dm   A\nA new goes Chord, A new song';
    beforeEach(function () {
        verse = new guitarics_verse_parser_1.VerseParser(text);
    });
    it('initializes', function () {
        chai_1.expect(verse.getText()).to.equal(text);
    });
    it('flattens', function () {
        verse.flatten();
        chai_1.expect(verse.getText()).to.equal('B   Dbm   Ab\nA new goes Chord, A new song');
    });
    it('sharpens', function () {
        verse.sharpen();
        chai_1.expect(verse.getText()).to.equal('Db   Ebm   Bb\nA new goes Chord, A new song');
    });
});
