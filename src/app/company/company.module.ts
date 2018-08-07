import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { CompanyRoutingModule } from './company-routing.module';

//
import { ActionModule } from 'patternfly-ng/action';
import { FilterModule } from 'patternfly-ng/filter';
import { SortModule } from 'patternfly-ng/sort';
import { ToolbarModule } from 'patternfly-ng/toolbar';

@NgModule({
  imports: [
    CommonModule,
    CompanyRoutingModule,

    ActionModule,
    FilterModule,
    SortModule,
    ToolbarModule
  ],
  declarations: [SearchComponent]
})
export class CompanyModule { }
