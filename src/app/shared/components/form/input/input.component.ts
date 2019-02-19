import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ILoginForm } from '../../../../forms/login';

@Component({
  selector: 'app-form-input',
  templateUrl: './input.component.html',
  styleUrls: [ './input.component.scss' ]
})
export class InputComponent {
  @Input() public form: ILoginForm;
  @Input() public formGroup: FormGroup;
  @Input() public controlName: string;
  @Input() public type: string;
  @Input() public label: string;
  @Input() public placeholder: string;
  @Input() public required: boolean;
  @Input() public validValueMessage: boolean;
  @Input() public valueRequiredMessage: boolean;
}
