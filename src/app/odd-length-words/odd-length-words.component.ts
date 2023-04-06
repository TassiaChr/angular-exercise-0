import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd-length-words',
  templateUrl: './odd-length-words.component.html',
  styleUrls: ['./odd-length-words.component.css']
})
export class OddLengthWordsComponent {
  @Input() oddWord: string = ''; 
  oddWords: string[] = [];

  ngOnInit() {
    this.oddWords.push(this.oddWord)
  }

  ngOnChanges() {
    this.oddWords.push(this.oddWord)
  }
  
}
