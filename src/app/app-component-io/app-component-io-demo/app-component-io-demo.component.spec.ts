import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponentIoDemoComponent } from './app-component-io-demo.component';

describe('AppComponentIoDemoComponent', () => {
  let component: AppComponentIoDemoComponent;
  let fixture: ComponentFixture<AppComponentIoDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponentIoDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponentIoDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
