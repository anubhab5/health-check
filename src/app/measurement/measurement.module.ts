import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeasurementService } from '../service/measurement.service';
import { MeasurementComponent } from './measurement/measurement.component';
import { PatternModule } from '../pattern/pattern.module';

@NgModule({
  declarations: [
    MeasurementComponent
  ],
  imports: [
    CommonModule,
    PatternModule
  ],
  providers: [
    MeasurementService
  ],
  exports: [
    MeasurementComponent
  ]
})
export class MeasurementModule { }
