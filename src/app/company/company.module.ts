import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { CompanyRoutingModule } from './company-routing.module';

import { FormsModule }   from '@angular/forms';

//
import { CompanyBasicInfoModule } from './company-basic-info/company-basic-info.module';
import { ActionModule } from 'patternfly-ng/action';
import { ListModule } from 'patternfly-ng/list';

@NgModule({
  imports: [
    CommonModule,
    CompanyRoutingModule,
    FormsModule,

    CompanyBasicInfoModule,
    ActionModule,
    ListModule
  ],
  declarations: [SearchComponent]
})
export class CompanyModule { }
