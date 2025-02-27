import {AfterViewInit, Component, ElementRef, QueryList, ViewChildren} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-ytpart',
  standalone: true,
  templateUrl: './ytpart.component.html',
  imports: [
    NgForOf
  ],
  styleUrl: './ytpart.component.scss'
})
export class YTpartComponent implements AfterViewInit {
  videos = [
    "https://www.youtube.com/embed/VaA9Fw2sUB4?si=2fKOiaGtCU7Hv78b",
    "https://www.youtube.com/embed/VaA9Fw2sUB4?si=2fKOiaGtCU7Hv78b",
    "https://www.youtube.com/embed/VaA9Fw2sUB4?si=2fKOiaGtCU7Hv78b"
  ];

  visibleVideos = new Set<string>();

  @ViewChildren('videoContainer') videoContainers!: QueryList<ElementRef>;

  ngAfterViewInit() {

  }
}
