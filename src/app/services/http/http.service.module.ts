import { NgModule, ModuleWithProviders } from '@angular/core';
import {
  LoginHttpService
} from './login/login.http.service';

@NgModule({
  providers: [
    LoginHttpService
  ]
})
export class HttpServiceModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HttpServiceModule
    };
  }
}
