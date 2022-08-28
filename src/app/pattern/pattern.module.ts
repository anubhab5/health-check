import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { GraphComponent } from './graph/graph.component';
import { BrowserModule } from "@angular/platform-browser";


@NgModule({
    declarations: [
        GraphComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        ChartsModule
    ],
    exports: [GraphComponent],
    providers: []
})
export class PatternModule { }