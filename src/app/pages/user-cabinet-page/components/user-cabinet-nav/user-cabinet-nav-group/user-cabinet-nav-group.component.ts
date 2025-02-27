import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';
import {AnimationOptions, LottieComponent} from 'ngx-lottie';
import {NgIcon} from '@ng-icons/core';
import {faSolidArrowDown} from '@ng-icons/font-awesome/solid';

@Component({
  selector: 'app-user-cabinet-nav-group',
  templateUrl: './user-cabinet-nav-group.component.html',
  styleUrl: './user-cabinet-nav-group.component.scss',
  imports: [
    NgClass,
    LottieComponent,
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

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
