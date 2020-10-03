import { CoverageAvailableComponent } from './coverage-available/coverage-available.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { VehicleDataComponent } from './vehicle-data/vehicle-data.component';
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {path:'information', component:PersonalInformationComponent},
  {path:'vehicle', component:VehicleDataComponent},
  {path:'coverage', component:CoverageAvailableComponent},
  {path:'**', pathMatch:'full', redirectTo:'information'}
];