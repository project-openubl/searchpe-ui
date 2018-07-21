import { SearchRoutes } from './search.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchSunatComponent } from './search-sunat/search-sunat.component';
import { FormsModule, ReactiveFormsModule } from '../../../../node_modules/@angular/forms';
import { RouterModule } from '../../../../node_modules/@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(SearchRoutes),
    SharedModule,
    CoreModule
  ],
  declarations: [SearchSunatComponent],
  exports:[SearchSunatComponent]
})
export class SearchModule { }
