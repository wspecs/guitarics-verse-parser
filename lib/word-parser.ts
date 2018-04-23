import {Chord} from 'guitarics-chordify';
import {CHORD_TYPES} from './utils';

export interface ChordType {
  flatten: () => void;
  sharpen: () => void;
  getChord: () => string;
  variation: string;
}

export class WordParser {
  word = '';
  private chord?: Chord = undefined;

  constructor(word: string, isLyricsLine = false){
    if (!isLyricsLine) {
      try {
        this.chord = new Chord(word);
        if (this.chord!.variation && !CHORD_TYPES.has(this.chord!.variation)) {
          throw new Error(`${word} is not a chord.`);
        }
      } catch {
        this.chord = undefined;
      }
    }
    this.updateWord(this.chord === undefined ? word : this.chord.getChord());
  }

  flatten() {
    if (this.chord !== undefined) {
      this.chord.flatten();
      this.updateWord();
    }
  }

  sharpen() {
    if (this.chord !== undefined) {
      this.chord.sharpen();
      this.updateWord();
    }
  }

  updateWord(word?: string) {
    this.word = this.chord === undefined ? (word || '') : this.chord.getChord();
  }

  toString() {
    return this.word;
  }

  isValidChord() {
    return this.chord !== undefined;
  }
}