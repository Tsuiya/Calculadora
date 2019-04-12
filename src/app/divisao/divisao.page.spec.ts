import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisaoPage } from './divisao.page';

describe('DivisaoPage', () => {
  let component: DivisaoPage;
  let fixture: ComponentFixture<DivisaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivisaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
