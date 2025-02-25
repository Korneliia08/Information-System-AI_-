import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-user-cabinet-nav-group',
  templateUrl: './user-cabinet-nav-group.component.html',
  styleUrl: './user-cabinet-nav-group.component.scss',
  standalone: true
})
export class UserCabinetNavGroupComponent {
  @Input() elements!: number[];
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
