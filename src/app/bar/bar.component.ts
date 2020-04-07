import { Component, OnInit } from "@angular/core";
import { BarService } from "./bar.service";

@Component({
  selector: "app-bar",
  templateUrl: "./bar.component.html",
  styleUrls: ["./bar.component.css"],
})
export class BarComponent implements OnInit {
  ngOnInit(){

    this.getConfirmed();
    this.getDeaths();
    this.getRecovered();
  }

  getConfirmed(){
    this.service.getConfirmed()
    .subscribe(res => {
    let confirmedArray = res['data'].map(res => res.latest_data.confirmed);
    confirmedArray.sort((n1,n2) => n1 - n2);
  
    //console.log(confirmedArray);

    let topfiveArray = confirmedArray.slice(-5);
    //console.log(topfiveArray);

     //this.dataSource.dataset.push({seriesname: "Confirmed", data: [{value: sliceArray}] })

    this.dataSource.dataset.push({seriesname: "Confirmed", data: [{value: topfiveArray[4] }, 
    {value: topfiveArray[3]},
    {value: topfiveArray[2]},
    {value: topfiveArray[1]},
    {value: topfiveArray[0]}
    
    ] })

    
   })
  }


  getDeaths(){
    this.service.getConfirmed()
    .subscribe(res => {
    let deathArray = res['data'].map(res => res.latest_data.deaths);
    deathArray.sort((n1,n2) => n1 - n2);

    let topfiveArray = deathArray.slice(-5);

    console.log(deathArray);
    console.log(topfiveArray);

    this.dataSource.dataset.push({seriesname: "Deaths", data: [{value: topfiveArray[4] }, 
    {value: topfiveArray[3]},
    {value: topfiveArray[2]},
    {value: topfiveArray[1]},
    {value: topfiveArray[0]}
    
    ] })

    })
  }

  getRecovered(){
    this.service.getConfirmed()
    .subscribe(res => {
    let recoveredArray = res['data'].map(res => res.latest_data.recovered);
    recoveredArray.sort((n1,n2) => n1 - n2);

    let topfiveArray = recoveredArray.slice(-5);

    console.log(recoveredArray);
    console.log(topfiveArray);

    this.dataSource.dataset.push({seriesname: "Recovered", data: [{value: topfiveArray[4] }, 
    {value: topfiveArray[3]},
    {value: topfiveArray[2]},
    {value: topfiveArray[1]},
    {value: topfiveArray[0]}
    
    ] })

    })
  }


  //stringArray: Object;
  chartConfig: Object;

  constructor( private service: BarService) { }
  
   dataSource = {
    chart: {
      caption: "Global Coronavirus Cases",
      subcaption: "Confirmed, Recovered, Deceased",
      xaxisname: "Countries",
      yaxisname: "Cases in Thousands",
      yAxisMaxValue: "500000",
      formatnumberscale: "1",
      plottooltext:
        "<b>$dataValue</b> cases were <b>$seriesName</b> in $label",
      theme: "candy",
      bgColor: "#191B1F",
      drawcrossline: "1"
    },
    categories: [
      {
        category: [
          {
            label: "United States"
          },
          {
            label: "Spain"
          },
          {
            label: "Italy"
          },
          {
            label: "Germany"
          },
          {
            label: "France"
          }
        ]
      }
    ],
    dataset: [
      {
        seriesname: {},
        data: [

        ]
      },
      {
        seriesname: {},
        data: [

        ]
      },
      {
        seriesname: {},
        data: [

        ]
      }
    ]
  };
}