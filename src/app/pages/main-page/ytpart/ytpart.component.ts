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
    "https://www.youtube.com/watch?v=b67g7WxnUJk",
    "https://www.youtube.com/watch?v=b67g7WxnUJk",
    "https://www.youtube.com/watch?v=b67g7WxnUJk"
  ];

  visibleVideos = new Set<string>();

  @ViewChildren('videoContainer') videoContainers!: QueryList<ElementRef>;

  ngAfterViewInit() {

  }
}
