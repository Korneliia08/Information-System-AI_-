import {Component} from '@angular/core';
import {AnimationOptions} from 'ngx-lottie';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {UserCabinetNavGroupComponent} from './user-cabinet-nav-group/user-cabinet-nav-group.component';
import {faSolidDesktop, faSolidGauge, faSolidLock, faSolidNetworkWired, faSolidPerson, faSolidShield} from '@ng-icons/font-awesome/solid';
import {NgIcon} from '@ng-icons/core';
import {faBrandSpeakerDeck} from '@ng-icons/font-awesome/brands';
import {faNoteSticky} from '@ng-icons/font-awesome/regular';

@Component({
  selector: 'app-user-cabinet-nav',
  standalone: true,

  templateUrl: './user-cabinet-nav.component.html',
  styleUrl: './user-cabinet-nav.component.scss',
  imports: [
    RouterLinkActive,
    RouterLink,
    UserCabinetNavGroupComponent,
    NgIcon,
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
  protected readonly faBrandSpeakerDeck = faBrandSpeakerDeck;
  protected readonly faSolidGauge = faSolidGauge;
  protected readonly faNoteSticky = faNoteSticky;
}
