"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var word_parser_1 = require("../lib/word-parser");
var chai_1 = require("chai");
describe('word parser', function () {
    var word;
    beforeEach(function () {
        word = new word_parser_1.WordParser('Cm');
    });
    it('initializes', function () {
        chai_1.expect(word.toString()).to.equal('Cm');
    });
    it('flattens', function () {
        word.flatten();
        chai_1.expect(word.toString()).to.equal('Bm');
    });
    it('sharpens', function () {
        word.sharpen();
        chai_1.expect(word.toString()).to.equal('Dbm');
    });
    it('ignores natural words', function () {
        word = new word_parser_1.WordParser('Best');
        word.sharpen();
        chai_1.expect(word.toString()).to.equal('Best');
        word.flatten();
        word.flatten();
        chai_1.expect(word.toString()).to.equal('Best');
    });
});
