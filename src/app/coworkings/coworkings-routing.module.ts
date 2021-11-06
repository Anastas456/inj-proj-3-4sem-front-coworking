import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoworkingListComponent } from './coworking-list/coworking-list.component';
import { CoworkingsComponent } from './coworkings.component';

const routes: Routes = [
  {
    path:'',
    component:CoworkingsComponent,
    children:[
      {
        path:'',
        component: CoworkingListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoworkingsRoutingModule { }
