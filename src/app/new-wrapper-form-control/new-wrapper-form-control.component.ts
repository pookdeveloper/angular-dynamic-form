import { Component, Input, OnDestroy } from '@angular/core';
import { injectNgControl } from '../noop-value-accessor/noop-value-accessor.directive';
import { Subject, takeUntil } from 'rxjs';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-new-wrapper-form-control',
  templateUrl: './new-wrapper-form-control.component.html',
  styleUrls: ['./new-wrapper-form-control.component.scss'],
  //hostDirectives: [NoopValueAccessorDirective]
})
export class NewWrapperFormControlComponent implements OnDestroy {
  //
  _control;
  _destroyed: Subject<any> = new Subject();

  @Input('control') set setControl(value: any) {
    this._control = value;
  }

  constructor() {
    this._control = injectNgControl();
    if (this._control instanceof NgModel) {
      this._control.control.valueChanges
        .pipe(takeUntil(this._destroyed))
        .subscribe(newValue => {
          if (this._control.model !== newValue || this._control.viewModel !== newValue) {
            this._control.viewToModelUpdate(newValue);
          }
        });
    }
  }

  ngOnDestroy() {
    this._destroyed.next({});
    this._destroyed.complete();
  }

  get control() {
    console.log('===>  GET CONTROL 1', this._control?.control);
    console.log('===>  GET CONTROL 2', this._control);
    return this._control?.control || this._control;
  }
}
