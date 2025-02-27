import {Component, OnInit} from '@angular/core';
import {LottieComponent} from 'ngx-lottie';

@Component({
  selector: 'app-user-cabinet-stat-block2',
  standalone: true,

  templateUrl: './user-cabinet-stat-block2.component.html',
  imports: [
    LottieComponent
  ],
  styleUrl: './user-cabinet-stat-block2.component.scss'
})
export class UserCabinetStatBlock2Component implements OnInit {
  public score = 35;
  public counter = 1

  ngOnInit() {
    setInterval(() => {
      this.score = Math.round((Math.random() * 100))
    }, 1000)
    setInterval(() => {
      this.counter++
    }, 400)
  }
}
