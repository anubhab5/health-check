import { ChartDataModel } from './graph.model';
import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Color } from 'ng2-charts';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  @Input()
  chartData: ChartDataModel[] = [];

  @Input()
  chartLabelList: any = [];

  lineChartType: ChartType = 'line';

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(): void { }

  public chartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          min: 0
        }
      }]
    },
    legend: {
      labels: {
        usePointStyle: true,
        boxWidth: 6
      }
    }
  };

  lineChartColors: Color[] = [
    {
      borderColor: '#86beda',
      backgroundColor: 'rgba(255,255,255,0.28)',
    },
  ];

  newDataPoint(dataArr = [100, 100, 100], label: string) {
    this.chartData.forEach((dataset: any, index: number) => {
      this.chartData[index] = Object.assign({}, this.chartData[index], {
        data: [...this.chartData[index].data, dataArr[index]]
      });
    });

    this.chartLabelList = [...this.chartLabelList, label];
  }

}
