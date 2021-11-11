import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HasRoleGuard } from '../has-role.guard';
import { isLoggedIn } from '../isLogged.guard';
import { CoworkingEditComponent } from './coworking-edit/coworking-edit.component';
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
      },
      {
        path: 'coworking-edit',
        component: CoworkingEditComponent,
        canActivate: [isLoggedIn, HasRoleGuard],
        data: {
          expectedRole: ['worker']
        }
      },
      {
        path: 'coworking-edit/:id',
        component: CoworkingEditComponent,
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
export class CoworkingsRoutingModule { }
