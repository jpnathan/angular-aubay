import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    InputComponent
  ],
  declarations: [
    InputComponent
  ]
})
export class ComponentsModule {}
