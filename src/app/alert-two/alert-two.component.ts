import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert-two',
  templateUrl: './alert-two.component.html',
  styleUrls: ['./alert-two.component.css']
})
export class AlertTwoComponent implements OnInit {
  @Input()type = 'success';

  constructor() { }

  ngOnInit() {
  }

  alert() {
    console.log('alert');
  }

}
