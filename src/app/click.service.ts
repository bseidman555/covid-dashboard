import { Injectable } from '@angular/core';
import {TourService} from 'ng3-tour';

@Injectable({
  providedIn: 'root'
})
export class ClickService {

  constructor(private readonly tourService: TourService) { }
  onClick() {
    this.tourService.startTour(tour);
  }
  
}

const tour = {
  steps: [
      {
          stepName: "first",
          route: "dashboard",
          title: 'Heat Map',
          description: "Hover over the map to see more data. Click on North America to see cases by state. You can also use the slider at the bottom to filter by case load", 
          options: {placement: 'right'}
      },
      {
          stepName: "second",
          route: "dashboard",
          title: "Data Cards",
          description: "The cards display the latest global data.",
          options:{placement: 'left'},
          tourEvents: 'tour end'
      },
      {
        stepName: "third",
        route: "dashboard",
        title: "Pie Chart",
        description: "The Pie Chart displays the top 9 countries by confirmed cases. Click the radio buttons on the bottom to toggle the metrics",
        options:{placement: 'left'},
        tourEvents: 'tour end'
    },
      {
        stepName: "fourth",
        route: "dashboard",
        title: "Bar Graph",
        description: "The Bar Graph displays the top 5 countries ranked by confirmed cases. The square buttons on the bottom can be used to hide/show each metric ",
        options:{placement: 'right'},
        tourEvents: 'tour end'
    },
      
  ],
  tourOptions: {
      backdrop: false,
  }
}
