import {Component} from '@angular/core';
import {UserCabinetNavComponent} from './components/user-cabinet-nav/user-cabinet-nav.component';
import {RouterLink, RouterOutlet} from '@angular/router';
import {NgIcon} from '@ng-icons/core';
import {faSolidArrowRightFromBracket} from '@ng-icons/font-awesome/solid';

@Component({
  selector: 'app-user-cabinet-page',
  templateUrl: './user-cabinet-page.component.html',
  styleUrl: './user-cabinet-page.component.scss',
  imports: [RouterOutlet, UserCabinetNavComponent, NgIcon, RouterLink]
})
export class UserCabinetPageComponent {

  protected readonly faSolidArrowRightFromBracket = faSolidArrowRightFromBracket;
}
