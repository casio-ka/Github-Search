import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GhUsersComponent } from './gh-users/gh-users.component';

const routes: Routes = [
  {path: 'Users', component: GhUsersComponent}
  {path: 'Users', component: GhUsersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
