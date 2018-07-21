import { SearchSunatComponent } from './search-sunat/search-sunat.component';
import { Routes } from '@angular/router';

export const SearchRoutes: Routes = [
    {
        path: '', component: SearchSunatComponent,
        data: { breadcrumbs: true, text: 'Buscar' }
    }
];
