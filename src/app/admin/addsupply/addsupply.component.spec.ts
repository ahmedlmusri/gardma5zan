import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsupplyComponent } from './addsupply.component';

describe('AddsupplyComponent', () => {
  let component: AddsupplyComponent;
  let fixture: ComponentFixture<AddsupplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsupplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsupplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
