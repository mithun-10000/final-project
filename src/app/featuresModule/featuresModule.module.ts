import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesModuleRoutingModule } from './featuresModule-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    // AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    FeaturesModuleRoutingModule,
    
  ]
})
export class FeaturesModuleModule { }
