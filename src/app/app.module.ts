import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { DataService } from './data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GsearchComponent } from './gsearch/gsearch.component';
import { GhUsersComponent } from './gh-users/gh-users.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GsearchComponent,
    GhUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
