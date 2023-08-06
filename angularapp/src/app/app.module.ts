import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Add this line

import { AppComponent } from './app.component';
import { ForexPipe } from './forex.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ForexPipe
  ],
  imports: [
    BrowserModule,
    FormsModule // Add this line
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
