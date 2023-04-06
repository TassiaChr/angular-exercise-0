import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {
  @Output() submitWord = new EventEmitter<string>(); 
  userInput = '';

  onUserInput(event: Event) {
    const target = event.target as HTMLInputElement
    this.userInput = target.value
  }

  onSubmitButtonClick(sb: string) {
    this.submitWord.emit(sb)
    this.userInput = ''
  }
}
