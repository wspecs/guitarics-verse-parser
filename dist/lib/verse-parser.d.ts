import { WordParser } from './word-parser';
export declare const LINE_DELIMITER = "\n";
export declare const REPLACEMENT_REGEX: RegExp;
export declare class VerseParser {
    words: WordParser[];
    constructor(text: string);
    sharpen(): void;
    flatten(): void;
    getText(): string;
}
