import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PathTestComponent } from './path1/path-test/path-test.component';
import { PathTest2Component } from '@pathTest/path-test2/path-test2.component';


@NgModule({
  declarations: [
    AppComponent,
    PathTestComponent,
    PathTest2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
