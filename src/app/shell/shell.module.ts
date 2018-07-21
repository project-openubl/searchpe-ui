import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellContentComponent } from './shell-content/shell-content.component';
import { ShellFooterComponent } from './shell-footer/shell-footer.component';
import { ShellHeaderComponent } from './shell-header/shell-header.component';
import { ShellNotificationComponent } from './shell-notification/shell-notification.component';
import { ShellSidebarComponent } from './shell-sidebar/shell-sidebar.component';
import { RouterModule } from '../../../node_modules/@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    CoreModule
  ],
  declarations: [ShellContentComponent, ShellFooterComponent, ShellHeaderComponent, ShellNotificationComponent, ShellSidebarComponent],
  exports: [ShellContentComponent, ShellFooterComponent, ShellHeaderComponent, ShellNotificationComponent, ShellSidebarComponent]
})
export class ShellModule { }
