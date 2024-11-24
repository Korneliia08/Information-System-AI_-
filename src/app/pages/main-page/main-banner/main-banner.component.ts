import { Component } from '@angular/core';
import {faEye} from '@ng-icons/font-awesome/regular';

@Component({
  selector: 'app-main-banner',
  standalone: false,

  templateUrl: './main-banner.component.html',
  styleUrl: './main-banner.component.scss'
})
export class MainBannerComponent {

  protected readonly faEye = faEye;
}
