/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditCasesComponent } from './edit-cases.component';

describe('EditCasesComponent', () => {
  let component: EditCasesComponent;
  let fixture: ComponentFixture<EditCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
