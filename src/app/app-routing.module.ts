import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { InfoComponent } from './components/pages/info/info.component';
import { FourOFourComponent } from './components/shared/four-o-four/four-o-four.component';

const routes: Routes = [
  {path: '',redirectTo:'/home', pathMatch: 'full'},
  {path : 'home', component : HomeComponent},
  {path : 'info/:id', component : InfoComponent},


  {path:'notfound', component: FourOFourComponent},
  {path: '**', redirectTo:'/notfound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
