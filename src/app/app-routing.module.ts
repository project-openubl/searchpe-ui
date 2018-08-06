import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './company/company.module#CompanyModule',
    pathMatch: 'full'
  },

  // Error Pages
  {
    path: '_error',
    loadChildren: './layout/error/error.module#ErrorModule',
    data: {
      title: 'Error'
    }
  },

  {
    path: '**',
    redirectTo: '/_error'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
