import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from "@angular/cdk/layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { NavigationComponent } from "./navigation/navigation.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MapComponent } from "./map/map.component";
import { PieComponent } from "./pie/pie.component";
import { BarComponent } from "./bar/bar.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";
import { LoginComponent } from "./auth/login/login.component";
import { MatSelectModule } from "@angular/material/select";
import { MatRadioModule } from "@angular/material/radio";
import { BarService } from "./bar/bar.service"; 
import { HttpClientModule } from "@angular/common/http";

/* Fusion Charts Imports */
import { FusionChartsModule } from "angular-fusioncharts";
import * as FusionCharts from "fusioncharts";
import * as Maps from "fusioncharts/fusioncharts.maps";
import * as World from "fusioncharts/maps/fusioncharts.world";
import * as USA from "fusioncharts/maps/fusioncharts.usa";
import * as virginia from "../assets/maps/fusioncharts.virginia";
import * as Charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import * as Candy from "fusioncharts/themes/fusioncharts.theme.candy";

// Add dependencies for FusionChartsModule
FusionChartsModule.fcRoot(
  FusionCharts,
  Charts,
  USA,
  virginia,
  Maps,
  World,
  Candy,
  FusionTheme
);

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MapComponent,
    PieComponent,
    BarComponent,
    DashboardComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FusionChartsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    HttpClientModule
  ],
  providers: [BarService],
  bootstrap: [AppComponent],
})
export class AppModule {}
