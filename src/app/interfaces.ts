import { ValidatorFn } from '@angular/forms';

export interface FormConfig {
  fields: FormField[];
}

export interface FormField {
  key: string;
  label: string;
  type: any;
  validators?: ValidatorFn[];
  options?: SelectOption[];
  inputs?: { [key: string]: any };
  outputs?: { [key: string]: any };
}

export interface SelectOption {
  label: string;
  value: any;
}

/*
export const CONTACT_FORM_CONFIG: FormConfig = {
  fields: [
    {
      key: 'name',
      label: 'Name',
      type: TextComponent,
      validators: [Validators.required],
      inputs: {
        value: 'John Smith'
      },
      outputs: {
        valueChange: (value: string) => console.log(`New value: ${value}`)
      }
    },
    {
      key: 'email',
      label: 'Email',
      type: EmailComponent,
      validators: [Validators.required, Validators.email]
    },
    {
      key: 'message',
      label: 'Message',
      type: SelectComponent,
      validators: [Validators.required],
      options: [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' }
      ]
    }
  ]
};
*/
