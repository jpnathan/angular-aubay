import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, InputComponent } from './form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    InputComponent,
    ButtonComponent
  ],
  declarations: [
    InputComponent,
    ButtonComponent
  ]
})
export class ComponentsModule {}
