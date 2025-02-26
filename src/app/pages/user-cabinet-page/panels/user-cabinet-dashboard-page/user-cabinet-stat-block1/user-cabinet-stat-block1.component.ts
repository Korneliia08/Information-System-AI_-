import {Component} from '@angular/core';
import {NgStyle} from '@angular/common';
import {faSolidExclamation} from '@ng-icons/font-awesome/solid';
import {NgIcon} from '@ng-icons/core';

@Component({
  selector: 'app-user-cabinet-stat-block1',
  standalone: true,
  templateUrl: './user-cabinet-stat-block1.component.html',
  imports: [NgStyle, NgIcon],
  styleUrl: './user-cabinet-stat-block1.component.scss'
})
export class UserCabinetStatBlock1Component {
  public lines = Array(7).fill(null).map(() => ({
    color: 'red',
    icon: faSolidExclamation,
    value: Math.random() * 100, // Startowa wartość losowa
    direction: Math.random() > 0.5 ? 1 : -1 // Losowy kierunek początkowy
  }));

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
      const speed = Math.random() * 2 + 0.2; // Losowa prędkość od 0.2 do 2
      line.value += line.direction * speed;

      if (line.value >= 100) {
        line.value = 100;
        line.direction = -1;
      } else if (line.value <= 0) {
        line.value = 0;
        line.direction = 1;
      }

      setTimeout(update, 100); // Płynna aktualizacja co 100ms
    };

    update();
  }
}
