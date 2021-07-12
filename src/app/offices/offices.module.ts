import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfficesRoutingModule } from './offices-routing.module';
import { OfficesComponent } from './offices.component';
import { OfficesListComponent } from './offices-list/offices-list.component';
import { OfficesEditComponent } from './offices-edit/offices-edit.component';


@NgModule({
  declarations: [OfficesComponent, OfficesListComponent, OfficesEditComponent],
  imports: [
    CommonModule,
    OfficesRoutingModule
  ]
})
export class OfficesModule { }
