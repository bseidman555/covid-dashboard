import { Component } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { ClickService } from '../click.service'

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"]
})
export class NavigationComponent {
  constructor(private ClickService: ClickService) {}
 
  ontourClick(){

    this.ClickService.onClick()
    console.log('button clicked')
  }
  

}
