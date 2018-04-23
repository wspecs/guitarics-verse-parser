import {WordParser} from './word-parser';

export const LINE_DELIMITER = '\n';
export const REPLACEMENT_REGEX = new RegExp(' ' + LINE_DELIMITER + ' ', 'gi');

export class VerseParser {
  words: WordParser[] = [];

  constructor(text: string) {
    for (const line of text.split(LINE_DELIMITER)) {
      const words = line.split(' ');
      const isLyricsLine = !words.filter(x => x.length > 0).every(
        x => new WordParser(x).isValidChord());
      for (const word of words) {
        this.words.push(new WordParser(word, isLyricsLine));
      }
      this.words.push(new WordParser(LINE_DELIMITER));
    }
    this.words.pop();  // Remove the last line delimiter.
  }

  sharpen() {
    this.words.map(x => x.sharpen());
  }

  flatten() {
    this.words.map(x => x.flatten());
  }

  getText() {
    return this.words.join(' ').replace(REPLACEMENT_REGEX, LINE_DELIMITER);
  }
}