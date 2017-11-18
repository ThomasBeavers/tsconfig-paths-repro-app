import { Component, ViewChild } from '@angular/core';
import { PathTestComponent } from './path1/path-test/path-test.component';
import { PathTest2Component } from '@pathTest/path-test2/path-test2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @ViewChild(PathTestComponent)pathTest: PathTestComponent;
  @ViewChild(PathTest2Component)pathTest2: PathTest2Component;
}
