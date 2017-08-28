import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-append-html',
  templateUrl: './append-html.component.html',
  styleUrls: ['./append-html.component.css']
})
export class AppendHtmlComponent implements OnInit {
  // myHtml: string = '<div><i>basic initial HTML</i></div>';
  // appendedHtml: string = '<div><b>this appended html</b></div>';
  // prenpendHtml: string = '<div><b>this prepended html</b></div>';
  
  myHtml: string = '<div></div>';
  myHtmls: string[] = [];
  appendedHtml: string = '';
  inputName: string = ''

  

  constructor() { }

  ngOnInit() {
  }

  createHTML(): void {
    this.inputName = 'example' + this.myHtmls.length;
    this.appendedHtml = 
    '<div class="form-group col-5 d-inline">' +
    '<input type="text" name="' + this.inputName + '" [(ngModel)]="' +  this.inputName + '" class="form-control" id="formGroupExampleInput" placeholder="Example input">' +
    '</div>' +
    '<div class="col-1 d-inline"></div>' +
    '<div class="col-1 d-inline"></div>';
    this.myHtml = this.appendedHtml;
    this.myHtmls.push(this.myHtml);
    
    console.log(this.myHtml);
  }

  // prepend(): void {
  //   this.myHtml = this.prenpendHtml + this.myHtml;
  // }

  removeHTML(): void {
    this.myHtml = '<div></div>';
    this.myHtmls.pop();
  }

  submitForm(myForm) {
    console.log(myForm.value);
  }

}
