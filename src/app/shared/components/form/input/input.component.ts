import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './input.component.html',
  styleUrls: [ './input.component.scss' ]
})
export class InputComponent {
  @Input() public formGroup: string;
  @Input() public controlName: string;
  @Input() public type: string;
  @Input() public label: string;
  @Input() public placeholder: string;

  constructor() {}
}
