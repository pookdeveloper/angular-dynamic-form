import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWrapperFormControlComponent } from './new-wrapper-form-control.component';

describe('NewWrapperFormControlComponent', () => {
  let component: NewWrapperFormControlComponent;
  let fixture: ComponentFixture<NewWrapperFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewWrapperFormControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewWrapperFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
