import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-form-button',
  templateUrl: './button.component.html',
  styleUrls: [ './button.component.sass' ]
})
export class ButtonComponent {
  @Input() public id: string;
  @Input() public type: string;
  @Input() public value: string;
  @Input() public className?: string;

  constructor() {}
}
