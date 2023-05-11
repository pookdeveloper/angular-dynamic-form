import {
  Directive,
  EventEmitter,
  Injector,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewContainerRef,
} from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormGroupDirective,
} from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form.component';

@Directive({
  selector: '[appDynamicFormField]',
})
export class DynamicFormFieldDirective implements OnInit, OnChanges, OnDestroy {
  @Input() field!: any;
  @Input() control!: FormControl;
  @Input() config: any;
  @Input() form: FormGroup | FormArray;
  @Output() onDestroyComponent = new EventEmitter<any>();

  constructor(
    private formGroupDirective: FormGroupDirective,
    private viewContainerRef: ViewContainerRef,
    private dynamicFormComponent: DynamicFormComponent,
    private injector: Injector
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    console.log('DIRECT ===> changes', changes); // @ts-ignore
    if (changes.form) {
      /*const componentFactory = this.resolver.resolveComponentFactory(this.component);
     // const componentRef: ComponentRef<any> = this.container.createComponent(componentFactory);
      ...*/
    }
  }

  ngOnInit() {
    console.log('===>  ngOnInit DIRECTIVE');
    this.bindToForm();
  }

  bindToForm() {
    let newInjector = Injector.create({
      providers: [],
      parent: this.injector,
    });
    console.log('DIRECT ===>  this.field', this.field);
    const componentRef = this.viewContainerRef.createComponent(
      this.field.component,
      {
        injector: newInjector,
      }
    );
    // componentRef.instance.config = this.field;
    // @ts-ignore
    componentRef.instance.setControl = this.form.controls[this.field.key];
    // this.form.controls[this.field.key].setValue('test');

    const inputs = this.field.inputs || {};
    for (const input of Object.keys(inputs)) {
      if (componentRef.instance[input]) {
        componentRef.instance[input] = inputs[input];
      } else {
        console.warn('===> ', 'Input not found: ', input);
      }
    }
    const outputs = this.field.outputs || {};
    for (const output of Object.keys(outputs)) {
      if (componentRef.instance[output]) {
        componentRef.instance[output].subscribe(outputs[output]);
      } else {
        console.warn('===> Output not found: ', output);
      }
    }
  }

  ngOnDestroy(): void {
    this.onDestroyComponent.emit({
      form: this.form,
      control: this.control,
      field: this.field,
    });
  }

  /*
    createDynamicComponent(componentType: Type<any>, props: any) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
      const componentRef = componentFactory.create(this.injector);
      Object.assign(componentRef.instance, props);
      this.ngZone.run(() => {
        this.appRef.attachView
      });
    }
  */
}
