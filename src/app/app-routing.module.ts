import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { WorksComponent } from './pages/works/works.component';
import { HomeComponent } from './pages/home/home.component';
import { CenzorComponent } from './pages/works/cenzor/cenzor.component';
import { TasklistComponent } from './pages/works/tasklist/tasklist.component';
import { UserlistComponent } from './pages/works/userlist/userlist.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  { path: 'works', component: WorksComponent, children: [
    { path: 'cenzor', component: CenzorComponent },
    { path: 'tasklist', component: TasklistComponent },
    { path: 'userlist', component: UserlistComponent }
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
