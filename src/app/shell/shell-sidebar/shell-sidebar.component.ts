import { Component, OnInit } from '@angular/core';
import { NavigationItemConfig } from 'patternfly-ng';

@Component({
  selector: 'w4-shell-sidebar',
  templateUrl: './shell-sidebar.component.html',
  styleUrls: ['./shell-sidebar.component.scss']
})
export class ShellSidebarComponent implements OnInit {

  
  navigationItems: NavigationItemConfig[] = [
    { title: 'Sunat', iconStyleClass: 'fa fa-dashboard', url: '/search/sunat' }  
  ];

  constructor() { }

  ngOnInit() {
  }

}
