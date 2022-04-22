import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { ChartEvent, ChartType } from 'ng-chartist';


export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  barChart: Chart = {
    type: 'Bar',
    data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "June",
          "July",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        "series": [
          [
            5,
            4,
            3,
            7,
            6,
            7,
            3,
            9,
            9,
            6,
            2,
            7
          ],
          [
            3,
            6,
            10,
            5,
            7,
            3,
            8,
            5,
            7,
            5,
            9,
            3
          ]
        ]
    },
    options: {
      fullwidth: true,
      height: '350px',
      seriesBarDistance: 21,
      axisX: {
        showGrid: false, offset: 100
      },

      axisY: {
        scaleMinSpace: 30,
      }
    },
  };

  ngOnInit(): void {
  }

}
