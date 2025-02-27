import {AfterViewInit, Component, ElementRef, QueryList, ViewChildren} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-ytpart',
  standalone: true,
  templateUrl: './ytpart.component.html',
  imports: [
    NgIf,
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
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        console.log(1);
        const videoSrc = entry.target.getAttribute('data-src');
        if (entry.isIntersecting && videoSrc) {

          this.visibleVideos.add(videoSrc);
        }
      });
    }, {threshold: 0.3});

    this.videoContainers.forEach(video => observer.observe(video.nativeElement));
  }
}
