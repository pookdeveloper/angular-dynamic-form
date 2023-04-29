import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextRenderComponent } from './text-render.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextModule } from '../text/text.module';
import { WrapperFormControlModule } from '../wrapper-form-control/wrapper-form-control.module';


@NgModule({
  declarations: [TextRenderComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextModule,
    WrapperFormControlModule
  ],
  exports: [TextRenderComponent]
})
export class TextRenderModule {
}
