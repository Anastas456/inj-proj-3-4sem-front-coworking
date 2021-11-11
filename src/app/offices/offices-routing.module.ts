import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HasRoleGuard } from '../has-role.guard';
import { isLoggedIn } from '../isLogged.guard';
import { OfficesEditComponent } from './offices-edit/offices-edit.component';
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
      },
      {
        path:'office-edit',
        component: OfficesEditComponent,
        canActivate: [isLoggedIn, HasRoleGuard],
        data: {
          expectedRole: ['worker']
        }
      },
      {
        path:'office-edit/:id',
        component: OfficesEditComponent,
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
export class OfficesRoutingModule { }
