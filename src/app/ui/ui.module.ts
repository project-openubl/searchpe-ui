import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './ui.component';
import { FormsModule, ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { SearchpUIRoutes } from './ui.routes';
import { RouterModule } from '../../../node_modules/@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ShellModule } from '../shell/shell.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(SearchpUIRoutes),
    SharedModule,
    ShellModule
  ],
  declarations: [UiComponent],
  exports: [RouterModule]
})
export class SearchpUIModule { }
