/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JrodapeComponent } from './jrodape.component';

describe('JrodapeComponent', () => {
  let component: JrodapeComponent;
  let fixture: ComponentFixture<JrodapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JrodapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JrodapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
