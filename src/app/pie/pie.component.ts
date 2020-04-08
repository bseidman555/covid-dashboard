import { Component, OnInit, NgZone } from '@angular/core';
import { ArgumentOutOfRangeError } from 'rxjs';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  dataSource: any;
  selectedSlice = 'none';
  chart: any;
  constructor(private zone: NgZone) {
    this.dataSource = {
      "chart": {
        "caption": "Countries with the highest number of cases",
        "subCaption": "by percentage of total infections reported",
        "animation": true,
        "animateClockwise": true,
        "bgColor": '#000000',
        "baseFontSize": 10,
        "plottooltext": "<b>$percentValue</b> of coronavirus infections are in $label at $value cases",
        "showPercentValues": "1",
        "captionOnTop": true,
        "captionFontSize": 14,
        "captionPadding": 10,
        "captionFontColor": "#FFD700",
        "enablemultislicing": "0",
        "hoverGradientColor": "#00FF7F #0000FF",
        "legendPosition": "bottom",
        "legendItemFontBold": true,
        "legendCaption": "Hover over country name for details",
        "legendBgColor": "#ffffff",
        "legendIconBorderColor": "#000000",
        "legendBgAlpha": "90",
        "labelFont": "Arial",
        "labelFontBold": false,
        "labelFontSize": 12,
        "labelFontItalic": true,
        "labelBorderPadding": 10,
        "legendNumColumns": 3,
        "useDataPlotColorForLabels": "1",
        "formatNumber": 1,
        "pieRadius": 140,
        "enableRotation": true,
        "hoverAlpha": 30,
        "theme": "fusion",
        "showTooltip": 1,
        "showValues": true,
        "slicingDistance": 50,
        "showLegend": true,
        "showRealTimeValue": 1,
        "pieYScale": 60,
        "pieSliceDepth": 20,
        "enableSmartLabels": true,
        "showPlotBorder": true,
        "showBorder": 1,
        "subCaptionFontSize": 10,
        "subCaptionFontColor": "FFE4B5",
        "user3DLighting": true,
        "plotGradientColor": "#ffffff",
        "usePlotGradientColor": 1,
        "plotHoverEffect": 1,
        "plotBorderHoverThickness": 1,
        "plotBorderHoverColor": "#000000",
        "plotBorderHoverDashed": 1,
        "plotBorderHoverDashLen": 6,
        "plotBorderHoverDashGap": 2,
        "plotHighlightEffect": "fadeout|color=#000000, alpha=60",
        "thousandSeparatorPosition": "2,3"  
      },
      "data": [{
        "label": "Italy",
        "value": "135586",
        "color": "#00FF7F"
      }, {
        "label": "Spain",
        "value": "140000",
        "color":"#9932CC"
      }, {
        "label": "United States",
        "value": "379000",
        "color": "#FF6347"
        
      }, {
        "label": "China",
        "value": "82509",
        "color": "#FFD700"
      },
      {
        "label": "Germany",
        "value": "105000",
        "color": "#B22222"
      },
      {
        "label": "France",
        "value": "99000",
        "color": "#1E90FF"
      },
      {
        "label": "Iran",
        "value": "62509",
        "color": "#008080"
      },{
        "label": "United Kingdom",
        "value": "55940",
        "color": "#8B4513"
      },{
        "label": "Turkey",
        "value": "34125",
        "color": "#808080"
      },
      {
        "label": "Rest of the World",
        "value": "50000",
        "color": "#EE82EE"
      }
    ]
    };
  }

  // FusionCharts initialized listener to get the chart instance
  initialized($event) {
    this.chart = $event.chart; // saving chart instance
  }

  // Change listener for radio buttons
  onRadioOptionChange(option) {
    this.selectedSlice = option;
    // For each data element , see if it is selected, if none then slice in all elements
    this.dataSource.data.forEach((d, index) => {
      if (option == 'none') {
        this.chart.slicePlotItem(index, false);
      } else if (option === d.label.toLowerCase()) {
        this.chart.slicePlotItem(index, true);
      }
    });
  }

  // Get data item label
  getLabel(index) {
    return this.dataSource.data[index].label;
  }

  // FusionCharts Component dataPlot click listener
  dataplotClick($event) {
    let dataIndex = $event.dataObj.dataIndex;
    let isSliced = $event.dataObj.isSliced;
    this.zone.run(() => {
      this.selectedSlice = isSliced ? 'none' : this.getLabel(dataIndex).toLowerCase();
    })
  }

  ngOnInit() {
    setTimeout(() => {
      //SelectedSingleton.change(this.sampleCode['ex24'].title);
    })
  }

}
