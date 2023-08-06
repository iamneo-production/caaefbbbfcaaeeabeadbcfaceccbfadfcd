import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForexPipe } from './forex.pipe'; // Import the ForexConversionPipe

@NgModule({
  declarations: [
    AppComponent,
    ForexPipe // Add the ForexConversionPipe to the declarations array
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
