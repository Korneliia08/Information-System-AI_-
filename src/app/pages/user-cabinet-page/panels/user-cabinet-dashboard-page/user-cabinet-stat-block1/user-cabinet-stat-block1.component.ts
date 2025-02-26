import {Component} from '@angular/core';
import {LottieComponent} from 'ngx-lottie';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-user-cabinet-stat-block1',
  standalone: true,

  templateUrl: './user-cabinet-stat-block1.component.html',
  imports: [
    LottieComponent,
    NgStyle
  ],
  styleUrl: './user-cabinet-stat-block1.component.scss'
})
export class UserCabinetStatBlock1Component {

}
