import {Component} from '@angular/core';

@Component({
  selector: 'app-horizontal-person',
  standalone: false,

  templateUrl: './horizontal-person.component.html',
  styleUrl: './horizontal-person.component.scss'
})
export class HorizontalPersonComponent {
  slideConfig = {"arrows": false, "slidesToShow": 2, "slidesToScroll": 1};
}
