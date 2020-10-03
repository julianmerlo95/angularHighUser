import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HighUserComponent } from './components/high-user/high-user.component';
import {ROUTES} from './components/high-user/high-user.routes';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'home',component: HomeComponent},
  {
    path: 'high',
    component: HighUserComponent,
    children: ROUTES
  },
  {path:'**', pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
