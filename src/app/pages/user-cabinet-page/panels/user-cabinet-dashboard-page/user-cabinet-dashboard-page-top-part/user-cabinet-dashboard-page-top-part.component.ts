import {Component} from '@angular/core';
import {CabinetBlockComponent} from './cabinet-block/cabinet-block.component';

@Component({
  selector: 'app-user-cabinet-dashboard-page-top-part',
  standalone: true,

  templateUrl: './user-cabinet-dashboard-page-top-part.component.html',
  imports: [
    CabinetBlockComponent
  ],
  styleUrl: './user-cabinet-dashboard-page-top-part.component.scss'
})
export class UserCabinetDashboardPageTopPartComponent {

}
