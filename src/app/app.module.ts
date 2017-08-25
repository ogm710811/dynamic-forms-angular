import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlertComponent } from './alert/alert.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipDirective } from './directives/tooltip.directive';
import { AlertTwoComponent } from './alert-two/alert-two.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    TooltipComponent,
    TooltipDirective,
    AlertTwoComponent
  ],
  entryComponents: [AlertComponent],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
