import {Component} from '@angular/core';
import {AnimationOptions, LottieComponent} from 'ngx-lottie';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {UserCabinetNavGroupComponent} from './user-cabinet-nav-group/user-cabinet-nav-group.component';
import {faSolidDesktop, faSolidLock, faSolidNetworkWired, faSolidPerson, faSolidShield} from '@ng-icons/font-awesome/solid';

@Component({
  selector: 'app-user-cabinet-nav',
  standalone: true,

  templateUrl: './user-cabinet-nav.component.html',
  styleUrl: './user-cabinet-nav.component.scss',
  imports: [
    LottieComponent,
    RouterLinkActive,
    RouterLink,
    UserCabinetNavGroupComponent,
  ],
})
export class UserCabinetNavComponent {
  options: AnimationOptions = {
    path: 'assets/lottie/dashLottie.json',
  };


  protected readonly faSolidPerson = faSolidPerson;
  protected readonly faSolidDesktop = faSolidDesktop;

  protected readonly faSolidNetworkWired = faSolidNetworkWired;
  protected readonly faSolidLock = faSolidLock;
  protected readonly faSolidShield = faSolidShield;
}
