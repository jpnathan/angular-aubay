import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing.module';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: []
})
export class LoginModule {}
