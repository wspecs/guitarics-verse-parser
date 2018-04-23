"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var word_parser_1 = require("./word-parser");
exports.LINE_DELIMITER = '\n';
exports.REPLACEMENT_REGEX = new RegExp(' ' + exports.LINE_DELIMITER + ' ', 'gi');
var VerseParser = /** @class */ (function () {
    function VerseParser(text) {
        this.words = [];
        for (var _i = 0, _a = text.split(exports.LINE_DELIMITER); _i < _a.length; _i++) {
            var line = _a[_i];
            var words = line.split(' ');
            var isLyricsLine = !words.filter(function (x) { return x.length > 0; }).every(function (x) { return new word_parser_1.WordParser(x).isValidChord(); });
            for (var _b = 0, words_1 = words; _b < words_1.length; _b++) {
                var word = words_1[_b];
                this.words.push(new word_parser_1.WordParser(word, isLyricsLine));
            }
            this.words.push(new word_parser_1.WordParser(exports.LINE_DELIMITER));
        }
        this.words.pop(); // Remove the last line delimiter.
    }
    VerseParser.prototype.sharpen = function () {
        this.words.map(function (x) { return x.sharpen(); });
    };
    VerseParser.prototype.flatten = function () {
        this.words.map(function (x) { return x.flatten(); });
    };
    VerseParser.prototype.getText = function () {
        return this.words.join(' ').replace(exports.REPLACEMENT_REGEX, exports.LINE_DELIMITER);
    };
    return VerseParser;
}());
exports.VerseParser = VerseParser;
