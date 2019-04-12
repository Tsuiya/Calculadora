import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplicacaoPage } from './multiplicacao.page';

describe('MultiplicacaoPage', () => {
  let component: MultiplicacaoPage;
  let fixture: ComponentFixture<MultiplicacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiplicacaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplicacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
