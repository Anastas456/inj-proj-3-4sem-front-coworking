import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { TrueFalsePipePipe } from '../pipes/true-false-pipe.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TrueFalsePipePipe
    ],
    exports: [
        TrueFalsePipePipe
    ]
})
export class SharedModule {
}