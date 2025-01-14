import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-smooth-scroll',
  templateUrl: './smooth-scroll.component.html',
  styleUrls: ['./smooth-scroll.component.scss'],
  standalone: false
})
export class SmoothScrollComponent implements OnInit, OnDestroy {
  isScrolling = false;

  private targetScroll = 0;
  private startTime: number = 0;
  private scrollDuration = 500;
  private startScroll = 0;

  ngOnInit(): void {
    //document.addEventListener('wheel', this.onWheel.bind(this), { passive: false });
  }

  ngOnDestroy(): void {
    //  document.removeEventListener('wheel', this.onWheel.bind(this));
  }

  private roundToFullHeight(scrollY: number): number {
    return Math.round(scrollY / window.innerHeight) * window.innerHeight;
  }

  private onWheel(event: WheelEvent): void {

    if (this.isScrolling) {
      event.preventDefault();
      return;
    }

    let currentScroll = window.scrollY;

    if (event.deltaY > 0) {
      if (currentScroll >= window.innerHeight * 2) {
        return;
      }
    } else {
      if (currentScroll > window.innerHeight * 2) {
        return;
      }
    }


    event.preventDefault();
    this.isScrolling = true;

    currentScroll = this.roundToFullHeight(currentScroll);


    this.targetScroll = event.deltaY > 0
      ? currentScroll + window.innerHeight
      : currentScroll - window.innerHeight;


    this.startScroll = currentScroll;
    this.startTime = performance.now();
    this.animateScroll();
  }

  private animateScroll(): void {
    const currentTime = performance.now();
    const elapsedTime = currentTime - this.startTime;
    const progress = Math.min(elapsedTime / this.scrollDuration, 1);

    const currentScroll = this.easeInOutQuad(progress) * (this.targetScroll - this.startScroll) + this.startScroll;

    window.scrollTo(0, currentScroll);

    if (progress < 1) {

      requestAnimationFrame(this.animateScroll.bind(this));
    } else {

      this.isScrolling = false;
      document.body.style.overflow = 'auto';
    }
  }

  private easeInOutQuad(t: number): number {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }
}
