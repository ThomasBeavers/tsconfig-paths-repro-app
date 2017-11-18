import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathTest2Component } from './path-test2.component';

describe('PathTest2Component', () => {
  let component: PathTest2Component;
  let fixture: ComponentFixture<PathTest2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathTest2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathTest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
