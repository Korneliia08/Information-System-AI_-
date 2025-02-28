import {Component} from '@angular/core';
import {AnimationOptions} from 'ngx-lottie';
import {UserCabinetDashboardPageTopPartComponent} from './user-cabinet-dashboard-page-top-part/user-cabinet-dashboard-page-top-part.component';
import {UserCabinetStatBlock1Component} from './user-cabinet-stat-block1/user-cabinet-stat-block1.component';
import {UserCabinetStatBlock2Component} from './user-cabinet-stat-block2/user-cabinet-stat-block2.component';
import {faSolidFilter, faSolidGauge, faSolidMagnifyingGlass} from '@ng-icons/font-awesome/solid';
import {NgIcon} from '@ng-icons/core';
import {UserCabinetTopBeltComponent} from '../../components/user-cabinet-top-belt/user-cabinet-top-belt.component';
import {remixFilterLine} from '@ng-icons/remixicon';
import {faBookmark} from '@ng-icons/font-awesome/regular';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatOption} from '@angular/material/core';
import {MatSelect} from '@angular/material/select';


@Component({
  selector: 'app-user-cabinet-dashboard-page',
  templateUrl: './user-cabinet-dashboard-page.component.html',
  styleUrl: './user-cabinet-dashboard-page.component.scss',
  standalone: true,
  imports: [UserCabinetDashboardPageTopPartComponent, UserCabinetStatBlock1Component, UserCabinetStatBlock2Component, NgIcon, UserCabinetTopBeltComponent, MatFormField, MatOption, MatSelect, MatLabel]
})
export class UserCabinetDashboardPageComponent {
  options: AnimationOptions = {
    path: 'assets/lottie/dashLottie.json',
    autoplay: false,
    initialSegment: [50, 100]

  };
  protected readonly faSolidFilter = faSolidFilter;
  protected readonly faSolidMagnifyingGlass = faSolidMagnifyingGlass;
  protected readonly remixFilterLine = remixFilterLine;
  protected readonly faBookmark = faBookmark;
  protected readonly faSolidGauge = faSolidGauge;
}
