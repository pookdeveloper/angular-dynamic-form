import { Directive, ElementRef, inject, InjectionToken, Input } from '@angular/core';

// the injection token
export const COLOR_TOKEN: InjectionToken<ColorDirective['color']> = new InjectionToken<
  ColorDirective['color']
>('COLOR_TOKEN');

@Directive({
  standalone: true,
  selector: '[appColor]'
})
export class ColorDirective {
  currentColor = inject(COLOR_TOKEN, {optional: true});


  @Input('appColor') set color(value: string) {
    this.el.nativeElement.style.backgroundColor = value;
  }

  constructor(private el: ElementRef) {
    console.log('===> currentColor ', this.currentColor);
    this.el.nativeElement.style.backgroundColor = this.currentColor;

  }

}
