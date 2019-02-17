import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './input.component.html',
  styleUrls: [ './input.component.sass' ]
})
export class InputComponent {
  @Input() public id: string;
  @Input() public type: string;
  @Input() public label: string;
  @Input() public placeholder: string;
  @Input() public className?: string;

  constructor() {}
}
