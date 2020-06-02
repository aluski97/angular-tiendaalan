import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent implements OnInit {
  showconditions = false;

    changeText(){
    this.showconditions = !this.showconditions;
  }
  constructor() { }

  ngOnInit() {
  }

}