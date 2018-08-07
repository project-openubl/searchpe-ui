import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyBasicInfoComponent } from './company-basic-info.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CompanyBasicInfoComponent],
  exports: [CompanyBasicInfoComponent]
})
export class CompanyBasicInfoModule { }
