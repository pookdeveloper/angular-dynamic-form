import { Component, inject, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { ControlValueAccessor, FormControlDirective, FormControlName, NgControl, NgModel } from '@angular/forms';

// TODO (not necessary use in Directive)
export class NoopValueAccessor implements ControlValueAccessor {
  writeValue() {
  }

  registerOnChange() {
  }

  registerOnTouched() {
  }
}


@Component({
  selector: 'app-wrapper-form-control',
  // Not in use
  templateUrl: './wrapper-form-control.component.html',
  // Not in use
  styleUrls: ['./wrapper-form-control.component.scss']
})
export class WrapperFormControlComponent implements OnDestroy {
  // For unsubscribe observables on destroy component
  protected _destroyed = new Subject<void>();
  // Access to the ng control of parent component
  public _control = this.injectNgControl();

  injectNgControl() {
    const _control = inject(NgControl, {self: true, optional: true});
    if (!_control) {
      throw new Error('_control is not available.');
    }
    if (_control instanceof FormControlDirective || _control instanceof FormControlName || _control instanceof NgModel) {
      _control.valueAccessor = new NoopValueAccessor();
      if (_control instanceof NgModel) {
        _control.control.valueChanges.subscribe(newValue => {
          console.log('===> ', newValue);
          // The viewToModelUpdate updates the directive and triggers the ngModelChange.
          // So we want to called it when the value changes except when it comes from the parent (ngModel input).
          // The `if` checks if the newValue is different from the value on the ngModel input or from the current value.
          if (_control.model !== newValue || _control.viewModel !== newValue) {
            console.log('===> no parent ');
            _control.viewToModelUpdate(newValue);
          }
        });
      }
      return _control;
    }
    throw new Error('Invalid _control instance.');
  }

  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }
}
