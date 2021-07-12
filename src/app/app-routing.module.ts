import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
