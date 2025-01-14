import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-row-information',
  standalone: false,

  templateUrl: './row-information.component.html',
  styleUrl: './row-information.component.scss'
})
export class RowInformationComponent {
  @Input() row!: number;

  @Input() text!: string;
  @Input() title!: string;
}
