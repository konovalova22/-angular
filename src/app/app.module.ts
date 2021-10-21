import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './pages/main/main.component';
import { AppRoutingModule } from './app-routing.module';
import {
  ShopComponent,
  DialogOverviewExampleDialog,
} from './pages/shop/shop.component';
import { PostComponent } from './pages/main/post/post.component';
/* import {DialogOverviewExampleDialog} from './pages/shop/shop.component' */
/* import { FormComponent } from './form/form.component'; */

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ShopComponent,
    PostComponent,
    DialogOverviewExampleDialog,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
