import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperFormControlComponent } from './wrapper-form-control.component';

describe('WrapperFormControlComponent', () => {
  let component: WrapperFormControlComponent;
  let fixture: ComponentFixture<WrapperFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapperFormControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrapperFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
