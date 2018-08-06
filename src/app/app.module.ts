import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Custom modules
import { AboutModalModule } from './layout/about-modal/about-modal.module';
import { NgxSearchpeModule } from './ngx/ngx-searchpe/searchpe.module';

// Footer & Header
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

// Ngx
import { searchpeApiUrlProvider } from './config/searchpe-api.provider';

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
    AboutModalModule,
    NgxSearchpeModule.forRoot()
  ],
  providers: [
    //
    searchpeApiUrlProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
