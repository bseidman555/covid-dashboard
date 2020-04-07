import { Component, OnInit, NgZone } from "@angular/core";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"],
})
export class MapComponent implements OnInit {
  chartInstance: any = {};

  constructor(private zone: NgZone) {}

  ngOnInit(): void {}

  initialized(e) {
    this.chartInstance = e.chart; // Save it for further use

    // Configure Drilldown attributes
    // See this : https://www.fusioncharts.com/dev/api/fusioncharts/fusioncharts-methods#configureLink
    this.chartInstance.configureLink([
      {
        type: "maps/usa",
        overlayButton: {
          message: "Back",
          fontColor: "FFF",
          bgColor: "000",
          borderColor: "000",
          padding: "20",
        },
      },
      {
        type: "maps/virginia",
        overlayButton: {
          message: "Back",
          fontColor: "880000",
          bgColor: "000",
          borderColor: "000",
          padding: "20",
        },
      },
    ]);
  }

  dataSource = {
    chart: {
      caption: "Worldwide Infections",
      subcaption: "Number of people infected per continent",
      theme: "candy",
      formatNumberScale: "0",
      showLabels: "0",
      nullEntityColor: "#C2C2D6",
      nullEntityAlpha: "50",
      hoverOnNull: "0",
      useSNameInLabels: "0",
      entityFillColor: "#A8A8A8",
      entityFillHoverColor: "#E5E5E9",
      bgColor: "#191B1F",
    },
    colorrange: {
      startlabel: "Low",
      endlabel: "High",
      code: "#e44a00",
      minvalue: "0",
      gradient: "1",
      color: [
        {
          maxvalue: "60",
          displayvalue: "Average",
          code: "#f8bd19",
        },
        {
          maxvalue: "300",
          code: "#6baa01",
        },
      ],
    },
    data: [
      {
        id: "NA",
        displayValue: "North America",
        value: "57.2",
        link: "newchart-json-NA",
      },
      {
        id: "SA",
        value: "57.1",
        showLabel: "0",
      },
      {
        id: "AS",
        value: "247",
        showLabel: "0",
      },
      {
        id: "EU",
        value: "188.5",
        showLabel: "0",
      },
      {
        id: "AF",
        value: "87.2",
        showLabel: "0",
      },
      {
        id: "AU",
        value: "8.32",
        showLabel: "0",
      },
    ],
    /* linked data for states chart */
    linkeddata: [
      {
        id: "NA",
        linkedchart: {
          chart: {
            caption: "Infections by state",
            subcaption: "Number of people infected by state",
            entityFillHoverColor: "#E5E5E9",
            showLabels: "0",
            entityFillColor: "#A8A8A8",
            theme: "candy",
            showBorder: "1",
            bordercolor: "#FFFFFF",
            entityborderThickness: "1",
            bgColor: "#191B1F",
          },
          colorrange: {
            startlabel: "Low",
            endlabel: "High",
            code: "#e44a00",
            minvalue: "0",
            gradient: "1",
            color: [
              {
                maxvalue: "150",
                displayvalue: "Average",
                code: "#f8bd19",
              },
              {
                maxvalue: "600",
                code: "#6baa01",
              },
            ],
          },
          data: [
            {
              id: "HI",
              value: "99",
            },
            {
              id: "DC",
              value: "99",
            },
            {
              id: "MD",
              value: "90",
            },
            {
              id: "DE",
              value: "96",
            },
            {
              id: "RI",
              value: "90",
            },
            {
              id: "WA",
              value: "228",
            },
            {
              id: "OR",
              value: "105",
            },
            {
              id: "CA",
              value: "221",
            },
            {
              id: "AK",
              value: "260",
            },
            {
              id: "ID",
              value: "396",
            },
            {
              id: "NV",
              value: "169",
            },
            {
              id: "AZ",
              value: "435",
            },
            {
              id: "MT",
              value: "445",
            },
            {
              id: "WY",
              value: "455",
            },
            {
              id: "UT",
              value: "227",
            },
            {
              id: "CO",
              value: "214",
            },
            {
              id: "NM",
              value: "196",
            },
            {
              id: "ND",
              value: "331",
            },
            {
              id: "SD",
              value: "374",
            },
            {
              id: "NE",
              value: "329",
            },
            {
              id: "KS",
              value: "231",
            },
            {
              id: "OK",
              value: "150",
            },
            {
              id: "TX",
              value: "202",
            },
            {
              id: "MN",
              value: "137",
            },
            {
              id: "IA",
              value: "143",
            },
            {
              id: "MO",
              value: "424",
            },
            {
              id: "AR",
              value: "485",
            },
            {
              id: "LA",
              value: "124",
            },
            {
              id: "WI",
              value: "181",
            },
            {
              id: "IL",
              value: "120",
            },
            {
              id: "KY",
              value: "309",
            },
            {
              id: "TN",
              value: "250",
            },
            {
              id: "MS",
              value: "351",
            },
            {
              id: "AL",
              value: "271",
            },
            {
              id: "GA",
              value: "124",
            },
            {
              id: "MI",
              value: "120",
            },
            {
              id: "IN",
              value: "205",
            },
            {
              id: "OH",
              value: "476",
            },
            {
              id: "PA",
              value: "445",
            },
            {
              id: "NY",
              value: "369",
            },
            {
              id: "VT",
              value: "322",
            },
            {
              id: "NH",
              value: "216",
            },
            {
              id: "ME",
              value: "404",
            },
            {
              id: "MA",
              value: "165",
            },
            {
              id: "CT",
              value: "316",
            },
            {
              id: "NJ",
              value: "553",
            },
            {
              id: "WV",
              value: "560",
            },
            {
              id: "VA",
              value: "565",
              link: "newchart-json-VA",
            },
            {
              id: "NC",
              value: "534",
            },
            {
              id: "SC",
              value: "503",
            },
            {
              id: "FL",
              value: "503",
            },
          ],
          /* linked data for counties chart */
          linkeddata: [
            {
              id: "VA",
              linkedchart: {
                chart: {
                  caption: "COVID-19 Cases By County",
                  subcaption: "Number of confirmed positive cases",
                  entityFillHoverColor: "#E5E5E9",
                  showLabels: "0",
                  entityFillColor: "#A8A8A8",
                  theme: "candy",
                  showBorder: "1",
                  bordercolor: "#FFFFFF",
                  entityborderThickness: "1",
                  bgColor: "#191B1F",
                },
                colorrange: {
                  startlabel: "Low",
                  endlabel: "High",
                  code: "#e44a00",
                  minvalue: "0",
                  gradient: "1",
                  color: [
                    {
                      maxvalue: "150",
                      displayvalue: "Average",
                      code: "#f8bd19",
                    },
                    {
                      maxvalue: "600",
                      code: "#6baa01",
                    },
                  ],
                },
                data: [
                  {
                    id: "059",
                    value: "99",
                  },
                  {
                    id: "013",
                    value: "99",
                  },
                ],
              },
            },
          ],
          /* END TEST */
        },
      },
    ],
  };
}
