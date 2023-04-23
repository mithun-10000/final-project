import { Component } from '@angular/core';
import { SharedService } from 'src/app/sharedModule/service/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private _service: SharedService){}
}
