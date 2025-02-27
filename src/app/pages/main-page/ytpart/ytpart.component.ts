import {Component, ViewChild} from '@angular/core';
import {SlickCarouselComponent, SlickCarouselModule} from 'ngx-slick-carousel';
import {NgForOf} from '@angular/common';
import {NgIcon} from '@ng-icons/core';
import {faSolidAngleLeft, faSolidAngleRight} from '@ng-icons/font-awesome/solid';

@Component({
  selector: 'app-ytpart',
  standalone: true,
  imports: [
    SlickCarouselModule,
    NgForOf,
    NgIcon
  ],
  templateUrl: './ytpart.component.html',
  styleUrl: './ytpart.component.scss'
})
export class YTpartComponent {
  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;

  slideConfig = {
    infinite: true,
    draggable: false,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1
  };

  protected readonly faSolidAngleLeft = faSolidAngleLeft;
  protected readonly faSolidAngleRight = faSolidAngleRight;

  prevSlide() {
    this.slickModal.slickPrev();
  }

  nextSlide() {
    this.slickModal.slickNext();
  }
}
