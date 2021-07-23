import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DictionaryService} from '../../service/dictionary.service';
import {Word} from '../../model/word';

@Component({
  selector: 'app-dictionary-create',
  templateUrl: './dictionary-create.component.html',
  styleUrls: ['./dictionary-create.component.css']
})
export class DictionaryCreateComponent implements OnInit {
  wordForm: FormGroup = new FormGroup({
    word: new FormControl(),
    mean: new FormControl()
  });
  successMsg: string;
  constructor(private dictionaryService: DictionaryService) {
  }

  ngOnInit() {
  }

  saveWord() {
    const newWord: Word = this.wordForm.value;
    this.dictionaryService.saveWord(newWord);
    this.successMsg = 'Word added';
  }
}
