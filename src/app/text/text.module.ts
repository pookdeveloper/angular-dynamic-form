import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from './text.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TextComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ], exports: [TextComponent]
})
export class TextModule {
}
