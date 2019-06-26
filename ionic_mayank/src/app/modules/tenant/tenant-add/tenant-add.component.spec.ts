import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantAddPage } from './tenant-add.page';

describe('TenantAddPage', () => {
  let component: TenantAddPage;
  let fixture: ComponentFixture<TenantAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantAddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
