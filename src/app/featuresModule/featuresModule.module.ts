import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesModuleRoutingModule } from './featuresModule-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    FeaturesModuleRoutingModule
  ]
})
export class FeaturesModuleModule { }
