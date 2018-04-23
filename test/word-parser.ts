import {WordParser} from '../lib/word-parser';
import { expect } from 'chai';

describe('word parser', () => {
  let word: WordParser;

  beforeEach(() => {
    word = new WordParser('Cm');
  });

  it('initializes', () => {
    expect(word.toString()).to.equal('Cm');
  });

  it('flattens', () => {
    word.flatten();
    expect(word.toString()).to.equal('Bm');
  });

  it('sharpens', () => {
    word.sharpen();
    expect(word.toString()).to.equal('Dbm');
  });

  it('ignores natural words', () => {
    word = new WordParser('Best');
    word.sharpen();
    expect(word.toString()).to.equal('Best');

    word.flatten();
    word.flatten();
    expect(word.toString()).to.equal('Best');
  });
});
