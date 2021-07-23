import {Component, OnInit} from '@angular/core';
import {Word} from '../../model/word';
import {DictionaryService} from '../../service/dictionary.service';

@Component({
  selector: 'app-dictionary-list',
  templateUrl: './dictionary-list.component.html',
  styleUrls: ['./dictionary-list.component.css']
})
export class DictionaryListComponent implements OnInit {
  wordList: Word[] = [];
  searchWord = '';

  constructor(private dictionaryService: DictionaryService) {
    this.wordList = this.dictionaryService.getAll();
  }

  ngOnInit() {
  }

  searchForWord() {
    console.log(this.searchWord);
    this.wordList = this.dictionaryService.searchForWord(this.searchWord);
  }
}
