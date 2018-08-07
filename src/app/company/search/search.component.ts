import { ListConfig } from 'patternfly-ng/list';
import { CompanyService } from './../../ngx/ngx-searchpe/companies/company.service';
import { Component, OnInit } from '@angular/core';

import { Company } from './../../ngx/ngx-searchpe/models/company';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  filterText = '';
  items: Company[];

  // List
  listConfig: ListConfig;

  constructor(private companyService: CompanyService) {
  }

  ngOnInit(): void {
    this.items = [];
    // List
    this.listConfig = {
      dblClick: false,
      multiSelect: false,
      selectItems: false,
      selectionMatchProp: 'name',
      showCheckbox: true,
      useExpandItems: true
    } as ListConfig;
  }

  // Handle filter changes
  search(): void {
    this.companyService.search(this.filterText).subscribe((data) => {
      this.items = data;
    });
  }

}
