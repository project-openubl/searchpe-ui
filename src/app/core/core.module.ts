import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  EmptyStateModule,
  NavigationModule,
  TableModule,
  CardModule,
  NotificationService,
  NotificationModule
} from "patternfly-ng";

import { McBreadcrumbsModule } from "ngx-breadcrumbs";
import { BsDropdownModule } from "ngx-bootstrap";
import { DataService } from "./data/data.service";


@NgModule({
  imports: [
    CommonModule,
    McBreadcrumbsModule.forRoot(),
    NavigationModule,
    NotificationModule,
    EmptyStateModule,
    TableModule,
    CardModule,
    BsDropdownModule.forRoot()
  ],
  declarations: [],
  providers: [
    NotificationService,
    DataService
  ],
  exports: [
    McBreadcrumbsModule,
    NavigationModule,
    NotificationModule,
    EmptyStateModule,
    TableModule,
    BsDropdownModule,
    CardModule
  ]
})
export class CoreModule { }
