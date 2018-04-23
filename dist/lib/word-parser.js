"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var guitarics_chordify_1 = require("guitarics-chordify");
var utils_1 = require("./utils");
var WordParser = /** @class */ (function () {
    function WordParser(word, isLyricsLine) {
        if (isLyricsLine === void 0) { isLyricsLine = false; }
        this.word = '';
        this.chord = undefined;
        if (!isLyricsLine) {
            try {
                this.chord = new guitarics_chordify_1.Chord(word);
                if (this.chord.variation && !utils_1.CHORD_TYPES.has(this.chord.variation)) {
                    throw new Error(word + " is not a chord.");
                }
            }
            catch (_a) {
                this.chord = undefined;
            }
        }
        this.updateWord(this.chord === undefined ? word : this.chord.getChord());
    }
    WordParser.prototype.flatten = function () {
        if (this.chord !== undefined) {
            this.chord.flatten();
            this.updateWord();
        }
    };
    WordParser.prototype.sharpen = function () {
        if (this.chord !== undefined) {
            this.chord.sharpen();
            this.updateWord();
        }
    };
    WordParser.prototype.updateWord = function (word) {
        this.word = this.chord === undefined ? (word || '') : this.chord.getChord();
    };
    WordParser.prototype.toString = function () {
        return this.word;
    };
    WordParser.prototype.isValidChord = function () {
        return this.chord !== undefined;
    };
    return WordParser;
}());
exports.WordParser = WordParser;
