import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagesalesComponent } from './managesales.component';

describe('ManagesalesComponent', () => {
  let component: ManagesalesComponent;
  let fixture: ComponentFixture<ManagesalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagesalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagesalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
