import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscussionsRoutingModule } from './discussions-routing.module';
import { DiscussionsComponent } from './discussions.component';
import { DiscussionsListComponent } from './discussions-list/discussions-list.component';
import { DiscussionsEditComponent } from './discussions-edit/discussions-edit.component';


@NgModule({
  declarations: [DiscussionsComponent, DiscussionsListComponent, DiscussionsEditComponent],
  imports: [
    CommonModule,
    DiscussionsRoutingModule
  ]
})
export class DiscussionsModule { }
