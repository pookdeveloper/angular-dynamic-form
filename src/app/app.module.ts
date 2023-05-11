import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EmailComponent } from './email/email.component';
import { SelectComponent } from './select/select.component';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextRenderModule } from './text-render/text-render.module';
import { CommonModule } from '@angular/common';
import { ColorDirective } from './color.directive';
import { PruebaModule } from './prueba/prueba.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [AppComponent, EmailComponent, SelectComponent],
  imports: [
    CommonModule,
    BrowserModule,
    DynamicFormModule,
    FormsModule,
    ReactiveFormsModule,
    TextRenderModule,
    ColorDirective,
    PruebaModule,
    BrowserAnimationsModule,
    MatInputModule,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
