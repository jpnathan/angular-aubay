import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

import { ILoginForm, ILoginFormValues } from './ILoginForm';
import { ILoginFormControl } from './ILoginFormControl';

export class LoginForm implements ILoginForm {
  public formInstance: FormGroup;

  constructor() {
    this.setFormInstance();
  }

  public setFormInstance (): void {
    const username = new FormControl(null, [
      Validators.required,
      Validators.email
    ]);

    const password = new FormControl(null, [
      Validators.required,
      Validators.minLength(5)
    ]);

    this.formInstance = new FormGroup({ username, password });
  }

  public getFormInstance (): FormGroup {
    return this.formInstance;
  }

  public getFormControls (): ILoginFormControl {
    const username = this.formInstance.get('username');
    const password = this.formInstance.get('password');

    return { username, password };
  }

  public checkValidValue (param: AbstractControl): boolean {
    return param.value && param.value.length > 0 && param.valid === false &&
      (param.dirty || param.touched);
  }

  public checkValueIsRequired (param: AbstractControl): boolean {
    return param.getError('required') === true &&
      (param.dirty || param.touched);
  }

  public onSubmit(): ILoginFormValues {
    const { username, password } = this.formInstance.value;

    return { username, password };
  }
}
