import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-even-length-words',
  templateUrl: './even-length-words.component.html',
  styleUrls: ['./even-length-words.component.css']
})
export class EvenLengthWordsComponent implements OnInit{
  @Input() evenWord: string = '';
  evenWords: string[] = [];

  ngOnInit() {
    this.evenWords.push(this.evenWord)
  }

  ngOnChanges() {
    this.evenWords.push(this.evenWord)
  }
}
