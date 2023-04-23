import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './sharedModule/component/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: ()=> import('./featuresModule/featuresModule.module').then(m=>m.FeaturesModuleModule)
  },
  {
    path:"**",
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
