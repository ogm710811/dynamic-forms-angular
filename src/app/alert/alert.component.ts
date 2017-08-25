import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @ViewChild('alertContainer', {read: ViewContainerRef }) container;

  constructor() { }
  @Input() type = 'success';
  @Output() output = new EventEmitter();

  ngOnInit() {
  }
}
