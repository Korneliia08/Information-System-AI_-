import {AfterViewInit, Component, ElementRef, QueryList, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-ytpart',
  standalone: true,
  templateUrl: './ytpart.component.html',
  imports: [],
  styleUrl: './ytpart.component.scss'
})
export class YTpartComponent implements AfterViewInit {
  videos = [
    "",
    "",
    ""
  ];

  visibleVideos = new Set<string>();

  @ViewChildren('videoContainer') videoContainers!: QueryList<ElementRef>;

  ngAfterViewInit() {

  }
}
