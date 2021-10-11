import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* import { FormComponent } from './form/form.component'; */

@NgModule({
  declarations: [
    AppComponent
/*     FormComponent */
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent ]
  
})
export class AppModule { }
