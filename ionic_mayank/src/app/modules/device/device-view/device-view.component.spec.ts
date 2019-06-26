import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceViewPage } from './device-view.page';

describe('DeviceViewPage', () => {
  let component: DeviceViewPage;
  let fixture: ComponentFixture<DeviceViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
