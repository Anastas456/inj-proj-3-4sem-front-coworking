import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { isLoggedIn } from './isLogged.guard';
import { MainPageComponent } from './main-page/main-page.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { RentFormComponent } from './rent-form/rent-form.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

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
    path:'tenants',
    loadChildren: ()=>
      import('./tenants/tenants.module').then((m) => m.TenantsModule),
    canActivate: [isLoggedIn]
  },
  {
    path:'registration-form',
    component: RegistrationFormComponent
  },
  {
    path:'auth-form',
    component: AuthFormComponent
  },
  {
    path:'user-profile',
    component: UserProfileComponent,
    canActivate: [isLoggedIn]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
