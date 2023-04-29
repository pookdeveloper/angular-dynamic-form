import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit, OnChanges {
  
  @Input() form: FormGroup;

  _formConfig: any;
  @Input('formConfig') set formConfig(data) {
    this._formConfig = Object.assign({}, data);
    console.log('===>  formConfig', this, this._formConfig);
    debugger
  };

  @Output() onDestroyComponent = new EventEmitter<any>();

  fields: any[]; // DynamicFormField[];
  // dynamicFormInjector: Injector;

  constructor(private fb: FormBuilder) {
    /*this.dynamicFormInjector = Injector.create({
      providers: [
        {provide: 'COMPONENTS_CONFIG', useValue: this._formConfig},
      ]
    })*/
  }

  // When all inputs are filled
  ngOnChanges(changes: SimpleChanges): void {
    // this.createForm();
    console.log('===> changes ', changes);
    debugger
    // TODO Recusivamente ver que inputs ya no estan
    this.createForm()
  }

  ngOnInit() {
    /*this.form.valueChanges.subscribe((value) => {
      console.log('******', value)
    });*/
  }

  createForm() {
    this.fields = this._formConfig.fields;
    //  this.form = this._formConfig.formGroup || this.createFormGroup();
    this.addControlsToForm(this.fields, this.form);
    console.log('===>  CREADOOOO !', this.form.controls);
    console.log('===>  CREADOOOO valor !', this.form.value);
  }


  addControlsToForm(fields: any, form: FormGroup) {
    fields.forEach((field: any) => {
      // FORM ARRAY
      if (field.controlType === 'FormArray') {
        const formArray = new FormArray([]);
        if (field.fields) {
          let form = new FormGroup({})
          this.addControlsToForm(field.fields, form);
          formArray.push(form);
        }
        //form.setControl(field.key, formArray);
        this.addControlToForm(form, formArray, field)
        // FORM GROUP
      } else if (field.controlType === 'FormGroup') {
        const formGroup = new FormGroup({});
        if (field.fields) {
          this.addControlsToForm(field.fields, formGroup);
        }
        //form.setControl(field.key, formGroup);
        this.addControlToForm(form, formGroup, field)
        // FORM CONTROL
      } else {
        const control = new FormControl(field.value || '', field.validators);
        this.addControlToForm(form, control, field);
      }
    });
  }

  addControlToForm(form: FormGroup, control: FormControl | FormGroup | FormArray, field: any) {
    if (!form.get(field.key)) {
      form.setControl(field.key, control);
    }
  }

  /** Send params to component */
  getInputsComponent(field: any): any {
    return {...field.inputs, field: field, form: this.form, control: this.form.controls[field.key]}
  }

  removeControl(event: any) {
    (event.form as FormGroup).removeControl(event.field.key);
  }

}
