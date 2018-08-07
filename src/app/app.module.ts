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
import { FooterComponent } from './layout/footer/footer.component';

// Config
import { searchpeUIConfigProvider } from './config/searchpe-ui-config.service';
import { ApiLocatorService } from './config/api-locator.service';
import { searchpeApiUrlProvider } from './config/searchpe-api.provider';

@NgModule({
  declarations: [
    AppComponent,

    // Footer & Header
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Custom modules
    AboutModalModule,
    NgxSearchpeModule.forRoot()
  ],
  providers: [
    // Config
    searchpeUIConfigProvider,
    ApiLocatorService,
    searchpeApiUrlProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
