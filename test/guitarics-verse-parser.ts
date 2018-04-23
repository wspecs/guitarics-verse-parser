import {VerseParser} from '../lib/guitarics-verse-parser';
import { expect } from 'chai';

describe('verse parser', () => {
  let verse: VerseParser;
  const text = 'C   Dm   A\nA new goes Chord, A new song';

  beforeEach(() => {
    verse = new VerseParser(text);
  });
  
  it('initializes', () => {
    expect(verse.getText()).to.equal(text);
  });

  it('flattens', () => {
    verse.flatten();
    expect(verse.getText()).to.equal(
      'B   Dbm   Ab\nA new goes Chord, A new song'
    )
  });

  it('sharpens', () => {
    verse.sharpen();
    expect(verse.getText()).to.equal(
      'Db   Ebm   Bb\nA new goes Chord, A new song'
    )
  });
});
