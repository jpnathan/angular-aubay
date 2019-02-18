import { AbstractControl, FormGroup } from '@angular/forms';
import { ILoginFormControl } from './ILoginFormControl';

export interface ILoginFormValues {
  username: string;
  password: string;
}

export interface ILoginForm {
  setFormInstance (): void;
  getFormInstance (): FormGroup;
  getFormControls (): ILoginFormControl;
  checkValidValue (param: AbstractControl): boolean;
  checkValueIsRequired (param: AbstractControl): boolean;
  onSubmit (): ILoginFormValues;
}
