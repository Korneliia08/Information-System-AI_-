import {Component} from '@angular/core';

@Component({
  selector: 'app-horizontal-person',
  standalone: false,

  templateUrl: './horizontal-person.component.html',
  styleUrl: './horizontal-person.component.scss'
})
export class HorizontalPersonComponent {
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};
}
