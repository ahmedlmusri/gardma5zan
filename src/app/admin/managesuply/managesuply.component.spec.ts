import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagesuplyComponent } from './managesuply.component';

describe('ManagesuplyComponent', () => {
  let component: ManagesuplyComponent;
  let fixture: ComponentFixture<ManagesuplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagesuplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagesuplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
