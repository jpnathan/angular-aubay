import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  ILoginForm,
  LoginForm,
  ILoginFormControl
} from '../../forms/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: ILoginForm;
  public formInstance: FormGroup;
  public formControls: ILoginFormControl;

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.form = new LoginForm();
    this.formInstance = this.form.getFormInstance();
    this.formControls = this.form.getFormControls();
  }

  public async onSubmit() {
    const values = await this.form.onSubmit();

    if (!this.formInstance.valid) {
      return this.markAsTouchedWhenFormIsInvalid(this.formInstance);
    }
  }

  public markAsTouchedWhenFormIsInvalid (formInstance: FormGroup) {
    formInstance.markAsTouched();

    Object.keys(formInstance.controls).forEach(field => {
      const control = formInstance.controls[field];
      control.markAsTouched({ onlySelf: true });
    });

    window.scroll(0, 0);
  }
}
