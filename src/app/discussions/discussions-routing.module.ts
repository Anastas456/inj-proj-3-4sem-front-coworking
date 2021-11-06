import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiscussionsListComponent } from './discussions-list/discussions-list.component';
import { DiscussionsComponent } from './discussions.component';

const routes: Routes = [
  {
    path:'',
    component:DiscussionsComponent,
    children:[
      {
        path:'',
        component: DiscussionsListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscussionsRoutingModule { }
