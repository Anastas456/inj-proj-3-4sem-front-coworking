import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoworkingsRoutingModule } from './coworkings-routing.module';
import { CoworkingsComponent } from './coworkings.component';
import { CoworkingListComponent } from './coworking-list/coworking-list.component';
import { CoworkingEditComponent } from './coworking-edit/coworking-edit.component';
import { SharedModule } from '../shared/modules/shared-module';


@NgModule({
  declarations: [CoworkingsComponent, CoworkingListComponent, CoworkingEditComponent],
  imports: [
    CommonModule,
    CoworkingsRoutingModule,
    SharedModule
  ]
})
export class CoworkingsModule { }
