import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { HighlighterDirective } from './directives/highlighter.directive';

@NgModule({
  declarations: [
  
    HighlighterDirective
  ],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class SharedModule { 

}
