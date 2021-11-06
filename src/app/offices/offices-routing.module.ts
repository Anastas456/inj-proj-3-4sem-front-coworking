import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfficesListComponent } from './offices-list/offices-list.component';
import { OfficesComponent } from './offices.component';

const routes: Routes = [
  {
    path:'',
    component:OfficesComponent,
    children:[
      {
        path:'',
        component: OfficesListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfficesRoutingModule { }
