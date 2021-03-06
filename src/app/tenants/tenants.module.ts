import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenantsComponent } from './tenants.component';
import { TenantListComponent } from './tenant-list/tenant-list.component';
import { TenantEditComponent } from './tenant-edit/tenant-edit.component';
import { TenantsRoutingModule } from './tenants-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { SearchByTenantTypePipe } from '../shared/pipes/search-by-tenant-type.pipe';



@NgModule({
  declarations: [TenantsComponent, TenantListComponent, TenantEditComponent, SearchByTenantTypePipe],
  imports: [
    CommonModule,
    TenantsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    TextMaskModule
  ]
})
export class TenantsModule { }
