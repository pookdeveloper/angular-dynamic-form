import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperFormControlComponent } from './wrapper-form-control.component';


@NgModule({
  declarations: [WrapperFormControlComponent],
  imports: [
    CommonModule
  ], exports: [WrapperFormControlComponent]
})
export class WrapperFormControlModule {
}
