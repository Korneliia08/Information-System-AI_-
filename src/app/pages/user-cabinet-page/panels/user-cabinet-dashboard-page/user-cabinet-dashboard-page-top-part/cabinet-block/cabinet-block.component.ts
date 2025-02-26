import {Component, Input} from '@angular/core';
import {LottieComponent} from 'ngx-lottie';
import {NgIcon} from '@ng-icons/core';
import {faSolidCircleQuestion} from '@ng-icons/font-awesome/solid';
import {faCircleQuestion} from '@ng-icons/font-awesome/regular';

@Component({
  selector: 'app-cabinet-block',
  imports: [
    LottieComponent,
    NgIcon
  ],
  templateUrl: './cabinet-block.component.html',
  standalone: true,
  styleUrl: './cabinet-block.component.scss'
})
export class CabinetBlockComponent {
  @Input() path!: string;
  @Input() text!: string;

  protected readonly faSolidCircleQuestion = faSolidCircleQuestion;
  protected readonly faCircleQuestion = faCircleQuestion;

  animationCreated($event: import("lottie-web").AnimationItem) {
    $event.setSpeed(0.7)
  }
}
