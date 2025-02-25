import {Component} from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgFor } from '@angular/common';
import { TrPipe } from '../../../pipes/translate.pipe';

@Component({
    selector: 'app-horizontal-person',
    templateUrl: './horizontal-person.component.html',
    styleUrl: './horizontal-person.component.scss',
    imports: [SlickCarouselModule, NgFor, TrPipe]
})
export class HorizontalPersonComponent {
  slideConfig = {"arrows": false, "slidesToShow": 2, "slidesToScroll": 1};
}
