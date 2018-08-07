import { Component, OnInit, Input } from '@angular/core';
import { Company } from './../../ngx/ngx-searchpe/models/company';

@Component({
  selector: 'app-company-basic-info',
  templateUrl: './company-basic-info.component.html',
  styleUrls: ['./company-basic-info.component.scss']
})
export class CompanyBasicInfoComponent implements OnInit {

  @Input() company: Company;

  constructor() { }

  ngOnInit() {
  }

}
