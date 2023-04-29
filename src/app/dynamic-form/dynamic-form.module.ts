import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormFieldDirective } from './dynamic-form-field.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicModule } from 'ng-dynamic-component';
import { TextModule } from '../text/text.module';


@NgModule({
  declarations: [
    DynamicFormComponent,
    DynamicFormFieldDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DynamicModule,
    TextModule
  ], exports: [DynamicFormComponent]
})
export class DynamicFormModule {
}
