import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TenantEditComponent } from './tenant-edit/tenant-edit.component';
import { TenantListComponent } from './tenant-list/tenant-list.component';
import { TenantsComponent } from './tenants.component';

const routes: Routes = [
  {
    path:'',
    component:TenantsComponent,
    children:[
      {
        path:'',
        component: TenantListComponent
      },
      {
        path:'tenantprofile',
        component: TenantEditComponent
      },
      {
        path:'tenantprofile/:id',
        component:TenantEditComponent
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenantsRoutingModule { }