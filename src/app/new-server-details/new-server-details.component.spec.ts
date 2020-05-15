import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewServerDetailsComponent } from './new-server-details.component';

describe('NewServerDetailsComponent', () => {
  let component: NewServerDetailsComponent;
  let fixture: ComponentFixture<NewServerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewServerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewServerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
