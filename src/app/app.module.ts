import { RouterModule } from '@angular/router';
import { UserprofileService } from './userprofile.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GhUsersComponent } from './gh-users/gh-users.component';
import { GithubService } from './github.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GhUsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [GithubService, UserprofileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
