import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  // { path: 'activity/:id', component: ViewComponent },
  { path: 'page/:id', component: ViewComponent },
  { path: 'view', component: ViewComponent },
  {path: '', redirectTo: '/9487', pathMatch: 'full'},
  // {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: MainComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
