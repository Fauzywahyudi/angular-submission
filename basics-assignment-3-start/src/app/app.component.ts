import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showWord = false;
  log = [];

  onShowDisplay(){
    this.showWord = !this.showWord;
    this.log.push(this.log.length + 1);
  }
}
