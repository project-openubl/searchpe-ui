import { Routes } from '@angular/router';
import { UiComponent } from './ui.component';

export const SearchpUIRoutes: Routes = [
    {
        path: '',
        component: UiComponent,
        data: { breadcrumbs: true, text: 'Sunat' },
        children: [
            { path: '', redirectTo: 'sunat', pathMatch: 'full' },
            { path: 'sunat', loadChildren: '../ui/search/search.module#SearchModule', data: { breadcrumbs: true, text: 'Sunat' } }           
        ]
    }  
];
