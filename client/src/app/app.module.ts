import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EntryFormComponent } from './entry-form/entry-form.component';


@NgModule({
  declarations: [
    AppComponent,
    EntryFormComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
