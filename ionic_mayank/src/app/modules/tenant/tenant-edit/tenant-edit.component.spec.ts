import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantEditPage } from './tenant-edit.page';

describe('TenantEditPage', () => {
  let component: TenantEditPage;
  let fixture: ComponentFixture<TenantEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
