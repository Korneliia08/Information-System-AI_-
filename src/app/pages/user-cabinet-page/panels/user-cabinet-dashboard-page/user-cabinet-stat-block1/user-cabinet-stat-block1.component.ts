import {Component} from '@angular/core';
import {NgStyle} from '@angular/common';
import {faSolidCheck, faSolidExclamation, faSolidInfo} from '@ng-icons/font-awesome/solid';
import {NgIcon} from '@ng-icons/core';
import {remixCloseFill, remixVipDiamondLine} from '@ng-icons/remixicon';
import {LottieComponent} from 'ngx-lottie';

@Component({
  selector: 'app-user-cabinet-stat-block1',
  standalone: true,
  templateUrl: './user-cabinet-stat-block1.component.html',
  imports: [NgStyle, NgIcon, LottieComponent],
  styleUrl: './user-cabinet-stat-block1.component.scss'
})
export class UserCabinetStatBlock1Component {
  public lines = [{
    color: '#f63333',
    icon: faSolidExclamation,
    value: Math.random() * 100,
    direction: Math.random() > 0.5 ? 1 : -1
  }, {
    color: '#488ffa',
    icon: remixVipDiamondLine,
    value: Math.random() * 100,
    direction: Math.random() > 0.5 ? 1 : -1
  }, {
    color: '#fa3ce4',
    icon: remixCloseFill,
    value: Math.random() * 100,
    direction: Math.random() > 0.5 ? 1 : -1
  }, {
    color: '#9b31ff',
    icon: faSolidInfo,
    value: Math.random() * 100,
    direction: Math.random() > 0.5 ? 1 : -1
  }, {
    color: '#27d77a',
    icon: faSolidCheck,
    value: Math.random() * 100,
    direction: Math.random() > 0.5 ? 1 : -1
  },];

  protected readonly faSolidExclamation = faSolidExclamation;
  protected readonly Math = Math;

  constructor() {
    this.startRandomUpdates();
  }

  private startRandomUpdates() {
    this.lines.forEach((line) => {
      this.updateValueSmoothly(line);
    });
  }

  private updateValueSmoothly(line: { value: number, direction: number }) {
    const update = () => {
      const speed = Math.random() * 0.85 + 0.70; // Losowa prędkość od 0.2 do 2
      line.value += line.direction * speed;

      if (line.value >= 100) {
        line.value = 100;
        line.direction = -1;
      } else if (line.value <= 0) {
        line.value = 0;
        line.direction = 1;
      }

      setTimeout(update, 0); // Płynna aktualizacja co 100ms
    };

    update();
  }
}
