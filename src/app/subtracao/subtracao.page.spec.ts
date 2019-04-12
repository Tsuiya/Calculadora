import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtracaoPage } from './subtracao.page';

describe('SubtracaoPage', () => {
  let component: SubtracaoPage;
  let fixture: ComponentFixture<SubtracaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtracaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtracaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
