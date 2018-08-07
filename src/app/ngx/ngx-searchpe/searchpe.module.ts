import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CompanyService } from './companies/company.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  declarations: [],
  exports: [],
  providers: []
})
export class NgxSearchpeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxSearchpeModule,
      providers: [CompanyService]
    };
  }
}
