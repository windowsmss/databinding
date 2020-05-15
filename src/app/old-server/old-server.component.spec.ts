import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldServerComponent } from './old-server.component';

describe('OldServerComponent', () => {
  let component: OldServerComponent;
  let fixture: ComponentFixture<OldServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
