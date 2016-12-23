/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CadprojetoComponent } from './cadprojeto.component';

describe('CadprojetoComponent', () => {
  let component: CadprojetoComponent;
  let fixture: ComponentFixture<CadprojetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadprojetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadprojetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
