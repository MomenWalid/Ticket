import { Component, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexYAxis,
  ApexDataLabels,
  ApexFill,
  ApexStroke,
  ApexTooltip,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
  fill: ApexFill;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
};

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      dataLabels: {
        enabled: false,
      },
      series: [
        {
          name: 'استخدام',
          data: [70, 150, 40, 130, 250, 150, 170, 190, 100, 120, 50, 200],
        },
      ],

      fill: {
        colors: ['#8a74f9'],
      },

      chart: {
        height: 250,
        type: 'area',
        zoom: {
          enabled: false,
        },
        foreColor: '#8a74f9',
      },

      stroke: {
        curve: 'smooth',
        colors: ['#8a74f9'],
      },
      xaxis: {
        categories: [
          'ديسمبر',
          'نوفمبر',
          'اكتوبر',
          'سبتمبر',
          'أغسطس',
          'يوليو',
          'يونيو',
          'مايو',
          'ابريل',
          'مارس',
          'فبراير',
          'يناير',
        ],
      },
      yaxis: {
        show: false,
      },
      tooltip: {
        theme: 'dark',
        style: {
          fontSize: '16px',
        },
      },
    };
  }

  ngOnInit(): void {}
}
