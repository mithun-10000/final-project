import { Component } from '@angular/core';
import { ServiceService } from 'src/app/sharedModule/service.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  constructor(private _service: ServiceService){}
  
}
