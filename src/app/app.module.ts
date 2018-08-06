import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Custom modules
import { AboutModalModule } from './layout/about-modal/about-modal.module';

// Footer & Header
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,

    // Footer & Header
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Custom modules
    AboutModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
