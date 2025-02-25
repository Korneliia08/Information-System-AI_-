import {Component} from '@angular/core';
import {AnimationOptions, LottieComponent} from 'ngx-lottie';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-user-cabinet-nav',
  standalone: true,

  templateUrl: './user-cabinet-nav.component.html',
  styleUrl: './user-cabinet-nav.component.scss',
  imports: [
    LottieComponent,
    RouterLinkActive,
    RouterLink,
  ],
})
export class UserCabinetNavComponent {
  options: AnimationOptions = {
    path: '/assets/lottie/dashLottie.json',
  };
}
