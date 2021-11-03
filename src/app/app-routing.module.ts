import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { RentFormComponent } from './rent-form/rent-form.component';

const routes: Routes = [
  {
    path:'',
    component: MainPageComponent
  },
  {
    path:'coworkings',
    loadChildren: ()=>
      import('./coworkings/coworkings.module').then((m) => m.CoworkingsModule),
  },
  {
    path:'offices',
    loadChildren: ()=>
      import('./offices/offices.module').then((m) => m.OfficesModule),
  },
  {
    path: 'discussions',
    loadChildren: ()=>
      import('./discussions/discussions.module').then((m) => m.DiscussionsModule),
  },
  {
    path:'rent-form',
    component: RentFormComponent
  },
  {
    path:'registration',
    component: RegisterPageComponent
  },
  {
    path:'tenants',
    loadChildren: ()=>
      import('./tenants/tenants.module').then((m) => m.TenantsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
