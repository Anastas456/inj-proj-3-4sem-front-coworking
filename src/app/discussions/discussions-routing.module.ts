import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HasRoleGuard } from '../has-role.guard';
import { isLoggedIn } from '../isLogged.guard';
import { DiscussionsEditComponent } from './discussions-edit/discussions-edit.component';
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
      },
      {
        path: 'discussion-edit',
        component: DiscussionsEditComponent,
        canActivate: [isLoggedIn, HasRoleGuard],
        data: {
          expectedRole: ['worker']
        }
      },
      {
        path: 'discussion-edit/:id',
        component: DiscussionsEditComponent,
        canActivate: [isLoggedIn, HasRoleGuard],
        data: {
          expectedRole: ['worker']
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscussionsRoutingModule { }
