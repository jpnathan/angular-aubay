import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule],
  exports: [],
  providers: [],
})
export class PagesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PagesModule
    };
  }
}
