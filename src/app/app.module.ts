import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HighUserComponent } from './components/high-user/high-user.component';
import { PersonalInformationComponent } from './components/high-user/personal-information/personal-information.component';
import { VehicleDataComponent } from './components/high-user/vehicle-data/vehicle-data.component';
import { CoverageAvailableComponent } from './components/high-user/coverage-available/coverage-available.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './features/input/input.component';
import { SelectComponent } from './features/select/select.component';
import { SummaryComponent } from './components/high-user/summary/summary.component';
import { GoodbyeComponent } from './components/goodbye/goodbye.component';
import { SpinnerComponent } from './features/spinner/spinner.component';
import { CardCoverageComponent } from './features/card-coverage/card-coverage.component';
import { CardSummaryComponent } from './features/card-summary/card-summary.component';
import { CardVehicleComponent } from './features/card-vehicle/card-vehicle.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HighUserComponent,
    PersonalInformationComponent,
    VehicleDataComponent,
    CoverageAvailableComponent,
    InputComponent,
    SelectComponent,
    SummaryComponent,
    GoodbyeComponent,
    SpinnerComponent,
    CardCoverageComponent,
    CardSummaryComponent,
    CardVehicleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
