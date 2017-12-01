import { BrowserModule }   from '@angular/platform-browser';
import { NgModule }        from '@angular/core';
import { AppRoutingModule} from './routing/app-routing/app-routing.module';
import { HttpModule }      from '@angular/http';
import { CookieModule }      from 'ngx-cookie';

import { AppComponent }    from './app.component';
import { NgbModule }       from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule}   from './module/material/material.module';

import { BaseService }     from './services/api/base.service';
import { LayoutComponent }               from './layout/layout.component';
import { HeaderComponent }               from './layout/header/header.component';
import { SideNavComponent }              from './layout/side-nav/side-nav.component';
import { SidebarModule } from 'ng-sidebar';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    SideNavComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpModule,
    CookieModule.forRoot(),
    SidebarModule.forRoot()
  ],
  providers: [BaseService],
  bootstrap: [
    AppComponent,
  ],
  exports:[],
})
export class AppModule { }
