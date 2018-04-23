export interface ChordType {
    flatten: () => void;
    sharpen: () => void;
    getChord: () => string;
    variation: string;
}
export declare class WordParser {
    word: string;
    private chord?;
    constructor(word: string, isLyricsLine?: boolean);
    flatten(): void;
    sharpen(): void;
    updateWord(word?: string): void;
    toString(): string;
    isValidChord(): boolean;
}
