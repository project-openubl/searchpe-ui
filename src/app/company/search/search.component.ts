import { CompanyService } from './../../ngx/ngx-searchpe/companies/company.service';
import { Component, OnInit } from '@angular/core';

import { ActionConfig, Action } from 'patternfly-ng/action';
import { FilterConfig, FilterType, FilterField, Filter, FilterEvent } from 'patternfly-ng/filter';
import { SortConfig, SortField, SortEvent } from 'patternfly-ng/sort';
import { ToolbarConfig, ToolbarView } from 'patternfly-ng/toolbar';

import { Company } from './../../ngx/ngx-searchpe/models/company';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  actionConfig: ActionConfig;
  actionsText: string = '';
  filterConfig: FilterConfig;
  filtersText: string = '';
  items: Company[];
  isAscendingSort: boolean = true;
  separator: Object;
  toolbarConfig: ToolbarConfig;

  constructor(private companyService: CompanyService) {
  }

  ngOnInit(): void {
    this.items = [];

    this.filterConfig = {
      fields: [{
        id: 'search',
        title: 'Search',
        placeholder: 'Filter text...',
        type: FilterType.TEXT
      }] as FilterField[],
      resultsCount: this.items.length,
      appliedFilters: []
    } as FilterConfig;

    this.actionConfig = {
      primaryActions: [],
      moreActions: []
    } as ActionConfig;

    this.toolbarConfig = {
      actionConfig: this.actionConfig,
      filterConfig: this.filterConfig,
      views: [{
        id: 'listView',
        iconStyleClass: 'fa fa-th-list',
        tooltip: 'List View'
      }, {
        id: 'tableView',
        iconStyleClass: 'fa fa-table',
        tooltip: 'Table View'
      }]
    } as ToolbarConfig;
  }

  applyFilters(filters: Filter[]): void {


  }

  // Handle filter changes
  filterChanged($event: FilterEvent): void {
    if ($event.field.id === 'search') {
      this.companyService.getCompanyByRuc('10467793549').subscribe((data) => {
      this.items = data;
    });
    }
  }

}
