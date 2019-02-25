import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantRemovePage } from './tenant-remove.page';

describe('TenantRemovePage', () => {
  let component: TenantRemovePage;
  let fixture: ComponentFixture<TenantRemovePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantRemovePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantRemovePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
