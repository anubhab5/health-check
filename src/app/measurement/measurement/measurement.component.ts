import { ChartDataModel } from './../../pattern/graph/graph.model';
import { UtilityService } from './../../service/utility.service';
import { MeasurementService } from './../../service/measurement.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-measurement',
  templateUrl: './measurement.component.html',
  styleUrls: ['./measurement.component.scss']
})
export class MeasurementComponent implements OnInit {

  /**
   * 
   */
  date: string[] = [];
  /**
   * 
   */
  chartData: ChartDataModel[] = [];
  waistChartData: ChartDataModel[] = [];
  quadChartData: ChartDataModel[] = [];
  chestChartData: ChartDataModel[] = [];
  rightArmFlexedChartData: ChartDataModel[] = [];
  hipChartData: ChartDataModel[] = [];
  neckChartData: ChartDataModel[] = [];
  bodyFatPercentChartData: ChartDataModel[] = [];

  chartLabels: string[] = [];
  /**
   * 
   * @param measurementSvc 
   * @param utilSvc 
   */
  constructor(private measurementSvc: MeasurementService, private utilSvc: UtilityService) { }
  /**
   * 
   */
  ngOnInit(): void {
    this.getData();
  }
  /**
   * 
   */
  getData() {
    this.measurementSvc.getData()
      .subscribe((resp: any) => {
        this.segregateData(this.utilSvc.convertExcelToJSON(resp));
      });
  }
  /**
   * 
   * @param workBookData 
   */
  segregateData(workBookData: any): void {
    for (const sheetName in workBookData) {
      let data = workBookData[sheetName];

      let weightData: number[] = [];
      let waistData: number[] = [];
      let bodyFatPercentData: number[] = [];
      let chestData: number[] = [];
      let quadData: number[] = [];
      let rightArmFlexedData: number[] = [];
      let neckData: number[] = [];
      let hipData: number[] = [];

      data.forEach((item: any) => {
        this.date.push(item.date);
        weightData.push(item['weight_kg']);
        waistData.push(item['waist_cm']);
        bodyFatPercentData.push(item['body_fat_%']);
        chestData.push(item['chest_cm']);
        quadData.push(item['quad_cm']);
        rightArmFlexedData.push(item['right_arm_flexed_cm']);
        neckData.push(item['Neck']);
        hipData.push(item['Hip']);
      });

      this.chartLabels = this.date;

      this.drawWeightChart(weightData);

      this.drawWaistChart(waistData);

      this.drawQuadChart(quadData);

      this.drawChestChart(chestData);

      this.drawRightArmFlexedChart(rightArmFlexedData);

      this.drawHipChart(hipData);

      this.drawBodyFatPercentChart(bodyFatPercentData);

      this.drawNeckChart(neckData);

    }
  }

  drawNeckChart(neckData: number[]) {
    this.neckChartData = [
      {
        data: neckData,
        label: 'Neck',
        fill: true,
        backgroundColor: '#a6cee3',
      }
    ];
  }

  drawBodyFatPercentChart(bodyFatPercentData: number[]) {
    this.bodyFatPercentChartData = [
      {
        data: bodyFatPercentData,
        label: 'Body Fat %'
      }
    ];
  }

  drawHipChart(hipData: number[]) {
    this.hipChartData = [
      {
        data: hipData,
        label: 'Hip'
      }
    ];
  }

  drawRightArmFlexedChart(rightArmFlexData: number[]) {
    this.rightArmFlexedChartData = [
      {
        data: rightArmFlexData,
        label: 'Right Arm Flexed'
      }
    ];
  }

  drawChestChart(chestData: number[]) {
    this.chestChartData = [
      {
        data: chestData,
        label: 'Chest'
      }
    ];
  }

  drawQuadChart(quadData: number[]) {
    this.quadChartData = [
      {
        data: quadData,
        label: 'Quad'
      }
    ];
  }

  drawWeightChart(weight: number[]): void {
    this.chartData = [
      {
        data: weight,
        label: 'Weight'
      }
    ];
  }

  drawWaistChart(waistData: number[]): void {
    this.waistChartData = [
      {
        data: waistData,
        label: 'Waist'
      }
    ];
  }

}
