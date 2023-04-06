import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-exercise-0';
  oddWordParent: string = '';
  evenWordParent: string = '';

  onSubmitWord(sb: string) {
    sb = sb.trim()
    if (sb.length % 2 === 0) {
      this.evenWordParent = sb
    } else {
      this.oddWordParent = sb
    }
  }
}
