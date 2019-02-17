import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ButtonComponent, InputComponent } from './form';

@NgModule({
  imports: [
    RouterModule,
    BrowserModule
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
