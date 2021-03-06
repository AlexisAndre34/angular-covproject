/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CasesStatComponent } from './cases-stat.component';

describe('CasesStatComponent', () => {
  let component: CasesStatComponent;
  let fixture: ComponentFixture<CasesStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasesStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasesStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
