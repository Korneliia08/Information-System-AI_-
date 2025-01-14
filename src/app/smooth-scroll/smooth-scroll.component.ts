import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-smooth-scroll',
  templateUrl: './smooth-scroll.component.html',
  standalone: false,
  styleUrls: ['./smooth-scroll.component.scss']
})
export class SmoothScrollComponent implements OnInit, OnDestroy {
  isScrolling = false;

  private targetScroll = 0;
  private startTime: number = 0;
  private scrollDuration = 500;
  private startScroll = 0;
  private scrollContainer: HTMLElement | null = null;
  private wheelHandler: (event: WheelEvent) => void;

  constructor() {
    this.wheelHandler = this.onWheel.bind(this);
  }

  ngOnInit(): void {
    this.scrollContainer = document.getElementById('contentManager');
    if (this.scrollContainer) {
      this.scrollContainer.addEventListener('wheel', this.wheelHandler, {passive: false});
    }
  }

  ngOnDestroy(): void {
    if (this.scrollContainer) {
      this.scrollContainer.removeEventListener('wheel', this.wheelHandler);
    }
  }

  private roundToFullHeight(scrollY: number): number {
    if (!this.scrollContainer) return 0;
    const elementHeight = this.scrollContainer.offsetHeight;
    return Math.round(scrollY / elementHeight) * elementHeight;
  }

  private onWheel(event: WheelEvent): void {
    if (!this.scrollContainer) return;

    if (this.isScrolling) {
      event.preventDefault();
      return;
    }

    const currentScroll = this.scrollContainer.scrollTop;
    const elementHeight = this.scrollContainer.offsetHeight;

    if (event.deltaY > 0 && currentScroll >= this.scrollContainer.scrollHeight - elementHeight) {
      return;
    }
    if (event.deltaY < 0 && currentScroll <= 0) {
      return;
    }

    event.preventDefault();
    this.isScrolling = true;

    const roundedScroll = this.roundToFullHeight(currentScroll);

    this.targetScroll = event.deltaY > 0
      ? roundedScroll + elementHeight
      : roundedScroll - elementHeight;

    this.startScroll = currentScroll;
    this.startTime = performance.now();
    this.animateScroll();
  }

  private animateScroll(): void {
    if (!this.scrollContainer) return;

    const currentTime = performance.now();
    const elapsedTime = currentTime - this.startTime;
    const progress = Math.min(elapsedTime / this.scrollDuration, 1);

    const currentScroll = this.easeInOutQuad(progress) * (this.targetScroll - this.startScroll) + this.startScroll;
    this.scrollContainer.scrollTo(0, currentScroll);

    if (progress < 1) {
      requestAnimationFrame(this.animateScroll.bind(this));
    } else {
      this.isScrolling = false;
    }
  }

  private easeInOutQuad(t: number): number {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }
}
