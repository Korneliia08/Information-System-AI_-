import {Component} from '@angular/core';
import {NgStyle} from '@angular/common';
import {faSolidExclamation} from '@ng-icons/font-awesome/solid';
import {NgIcon} from '@ng-icons/core';

@Component({
  selector: 'app-user-cabinet-stat-block1',
  standalone: true,

  templateUrl: './user-cabinet-stat-block1.component.html',
  imports: [
    NgStyle,
    NgIcon
  ],
  styleUrl: './user-cabinet-stat-block1.component.scss'
})
export class UserCabinetStatBlock1Component {
  public lines = [
    {color: 'red', icon: faSolidExclamation, value: 0, direction: 0},
    {color: 'red', icon: faSolidExclamation, value: 0, direction: 0},
    {color: 'red', icon: faSolidExclamation, value: 0, direction: 0},
    {color: 'red', icon: faSolidExclamation, value: 0, direction: 0},
    {color: 'red', icon: faSolidExclamation, value: 0, direction: 0},
    {color: 'red', icon: faSolidExclamation, value: 0, direction: 0},
    {color: 'red', icon: faSolidExclamation, value: 0, direction: 0}
  ];
  protected readonly faSolidExclamation = faSolidExclamation;

  constructor() {
    this.startRandomUpdates();
  }

  private startRandomUpdates() {
    this.lines.forEach((line, index) => {
      this.updateValueSmoothly(line, index);
    });
  }

  private updateValueSmoothly(line: { value: number, direction: number }, index: number) {

    let currentValue = 0;

    const update = () => {
      currentValue += line.direction * Math.random() + index * 0.1; // Zmiana wartości co 100ms
      if (currentValue >= 100 || currentValue <= 0) {
        line.direction *= -1; // Odwrócenie kierunku przy osiągnięciu 0 lub 100
      }

      line.value = Math.round(currentValue); // Zaokrąglamy do pełnej liczby

      setTimeout(update, 100); // Aktualizacja co 100ms
    };

    update();
  }

}
