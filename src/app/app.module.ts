import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { AlertComponent } from './alert/alert.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipDirective } from './directives/tooltip.directive';
import { AlertTwoComponent } from './alert-two/alert-two.component';
import { AppendHtmlComponent } from './append-html/append-html.component';
import { SanitizeHtmlPipe } from './pipes/sanitize-html.pipe';
import { MainFormComponent } from './main-form/main-form.component';
import { GroupFormComponent } from './group-form/group-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    TooltipComponent,
    TooltipDirective,
    AlertTwoComponent,
    AppendHtmlComponent,
    SanitizeHtmlPipe,
    MainFormComponent,
    GroupFormComponent
  ],
  entryComponents: [AlertComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
