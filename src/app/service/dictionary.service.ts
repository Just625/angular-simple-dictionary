import {Injectable} from '@angular/core';
import {Word} from '../model/word';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  wordList: Word[] = [{
    word: 'happy',
    mean: 'hạnh phúc'
  },
    {
      word: 'genshin impact',
      mean: 'waifu impact'
    },
    {
      word: 'dota2',
      mean: 'anything'
    },
    {
      word: 'howllow knight',
      mean: 'nice'
    }];

  constructor() {
  }

  translate(w: string) {
    for (let word of this.wordList) {
      if (word.word === w) {
        return word.mean;
      }
    }
  }

  getAll() {
    return this.wordList;
  }

  findByWord(word: string) {
    for (let w of this.wordList) {
      if (w.word === word) {
        return w;
      }
    }
  }

  saveWord(word: Word) {
    this.wordList.push(word);
  }

  searchForWord(word: string) {
    let words: Word[] = [];
    for (let w of this.wordList) {
      if (w.word.includes(word)) {
          words.push(w);
      }
    }
    return words;
  }
}
