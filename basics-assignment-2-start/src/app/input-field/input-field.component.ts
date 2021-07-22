import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {
  username = '';

  constructor() { }

  ngOnInit(): void {
  }

  isEnable(){
    return this.username.length > 0;
  }

  click(){
    this.username='';
  }

}
