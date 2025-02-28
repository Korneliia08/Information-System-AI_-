import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';
import {AnimationOptions} from 'ngx-lottie';
import {NgIcon} from '@ng-icons/core';
import {faSolidArrowDown, faSolidBox} from '@ng-icons/font-awesome/solid';
import {faAddressBook} from '@ng-icons/font-awesome/regular';

@Component({
  selector: 'app-user-cabinet-nav-group',
  templateUrl: './user-cabinet-nav-group.component.html',
  styleUrl: './user-cabinet-nav-group.component.scss',
  imports: [
    NgClass,
    NgIcon
  ],
  standalone: true
})
export class UserCabinetNavGroupComponent {
  @Input() elements!: string[];
  isOpen = true;
  options: AnimationOptions = {
    path: 'assets/lottie/dashLottie.json',
  };
  @Input() icons!: string[];
  protected readonly faSolidArrowDown = faSolidArrowDown;
  protected readonly faSolidBox = faSolidBox;
  protected readonly faAddressBook = faAddressBook;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
