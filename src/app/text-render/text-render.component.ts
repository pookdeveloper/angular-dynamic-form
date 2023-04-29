import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NoopValueAccessorDirective } from '../noop-value-accessor/noop-value-accessor.directive';
import { NewWrapperFormControlComponent } from '../new-wrapper-form-control/new-wrapper-form-control.component';

@Component({
  selector: 'app-text-render',
  templateUrl: './text-render.component.html',
  styleUrls: ['./text-render.component.scss'],
  hostDirectives: [
    NoopValueAccessorDirective
  ],
  /*providers: [
    {
      provide: COLOR_TOKEN,
      useValue: 'blue',
    },
  ]*/
})
export class TextRenderComponent extends NewWrapperFormControlComponent {

  @Input() label: string;
  @Input() field: any;
  @Input() form: any;
  @Output() valueChange = new EventEmitter<any>();

  constructor() {
    super();
    // console.log('===> TEXT RENDER ', inject(DIRECTIVE_TOKEN, {optional: true}));

  }

  ngOnInit(): void {
    this.control.valueChanges.subscribe((value) => {
      this.valueChange.emit(value);
    });
  }
}
