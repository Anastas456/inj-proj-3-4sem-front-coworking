import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoworkingsComponent } from './coworkings.component';

const routes: Routes = [
  {
    path:'',
    component:CoworkingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoworkingsRoutingModule { }
