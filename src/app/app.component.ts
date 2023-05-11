import { Component, InjectionToken, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TextRenderComponent } from './text-render/text-render.component';

// the injection token
export const DIRECTIVE_TOKEN: InjectionToken<any> = new InjectionToken<any>('DIRECTIVE_TOKEN');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  datoPrueba = {
    fields: [{
      key: 'name',
      label: 'Name',
      value: 1,
      component: TextRenderComponent,
      validators: [Validators.required]
    }]
  };
  // currentColor = inject(DIRECTIVE_TOKEN, {optional: true});

  title = 'angular-dynamic-form';
  form: FormGroup = new FormGroup({});
  
  aa = new FormGroup({
    emailFormControl: new FormControl('', [Validators.required]),
  });

  formAaa = new FormGroup({
    aaa: new FormControl({}),
  });

  form2 = new FormGroup({
    name: new FormControl({}),
    email: new FormGroup({}),
    surname: new FormControl({}),
  });
  form3 = new FormGroup({
    name: new FormControl({}),
    email: new FormControl({}),
    surname: new FormControl({}),
  });
  CONTACT_FORM_CONFIG: any = {
    fields: [
      {
        key: 'name',
        label: 'Name',
        value: 1,
        component: TextRenderComponent,
        validators: [Validators.required],
        inputs: {
          label: 'nombre',
        },
        outputs: {
          valueChange: (value: string) => console.log(`New value: ${value}`)
        }
      },
      {
        key: 'email',
        label: 'Email',
        component: TextRenderComponent,
        controlType: 'FormGroup',
        validators: [Validators.required, Validators.email],
        fields: [
          {
            key: 'surname',
            label: 'SurName',
            component: TextRenderComponent,
            validators: [Validators.required],
            inputs: {
              label: 'surname',
            }
          }]
      }, {
        key: 'direcciones',
        label: 'Direcciones',
        controlType: 'FormArray',
        component: TextRenderComponent,
        validators: [Validators.required, Validators.email],
        fields: [
          {
            key: 'aaa',
            label: 'aaaa 1',
            component: TextRenderComponent,
            validators: [Validators.required],
            inputs: {
              label: 'surname',
            }
          },
          {
            key: 'bbbb',
            label: 'bbbb 2',
            component: TextRenderComponent,
            validators: [Validators.required],
            inputs: {
              label: 'surname',
            }
          }, {
            key: 'ccc',
            label: 'cccc 3',
            component: TextRenderComponent,
            validators: [Validators.required],
            inputs: {
              label: 'surname',
            }
          }
        ]
      }
    ]
  };


  ngOnInit(): void {
    /*   setTimeout(() => {
         this.form = new FormGroup({
           pepe: new FormControl({}),
         });
       }, 3000);*/
    this.form.valueChanges.subscribe((value) => {
      console.log(value)
    });
  }

  buttonClick() {
    this.CONTACT_FORM_CONFIG.fields.push(
      {
        key: 'surname',
        label: 'SurName',
        component: TextRenderComponent,
        validators: [Validators.required],
        inputs: {
          label: 'surname',
        }
      }
    )
    this.CONTACT_FORM_CONFIG = {...this.CONTACT_FORM_CONFIG};
    console.log('===> this.CONTACT_FORM_CONFIG ', this.CONTACT_FORM_CONFIG);
  }

  buttonClickAdd() {
    this.CONTACT_FORM_CONFIG['dsasd'] = 'dsadsa';
    this.CONTACT_FORM_CONFIG.fields.push(
      {
        key: 'pepe',
        label: 'pepe',
        component: TextRenderComponent,
        validators: [Validators.required],
        inputs: {
          label: 'pepe',
        }
      }
    )
    this.CONTACT_FORM_CONFIG = {...this.CONTACT_FORM_CONFIG};
    console.log('===> this.CONTACT_FORM_CONFIG ', this.CONTACT_FORM_CONFIG);
  }

  buttonClickDelete() {
    this.CONTACT_FORM_CONFIG.fields[2].fields.pop();
    //this.CONTACT_FORM_CONFIG.fields.pop()
    this.CONTACT_FORM_CONFIG = {...this.CONTACT_FORM_CONFIG};
  }


  showForm() {
    console.log('===>showForm this.form.controls ', this.form.controls);

  }

  datoPruebaChange() {
    this.datoPrueba.fields = [
      {
        key: 'namsdfsde',
        label: 'Name',
        value: 1,
        component: TextRenderComponent,
        validators: [Validators.required]
      }, {
        key: 'tryyty',
        label: 'Namasddasde',
        value: 1,
        component: TextRenderComponent,
        validators: [Validators.required]
      }
    ];
    this.datoPrueba = {...this.datoPrueba}
  }
}
