import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-smooth-scroll',
  templateUrl: './smooth-scroll.component.html',
  styleUrls: ['./smooth-scroll.component.scss'],
  standalone: false
})
export class SmoothScrollComponent {
  // isScrolling = false;
  // scrollCount = 0;
  //
  // private roundToFullHeight(scrollY: number): number {
  //   return Math.round(scrollY / window.innerHeight) * window.innerHeight;
  // }
  //
  // @HostListener('window:wheel', ['$event'])
  // onWheel(event: WheelEvent): void {
  //   if (this.isScrolling) {
  //     event.preventDefault(); // Zapobiegamy domyślnemu przewijaniu, gdy przewijanie jest w toku
  //     return;
  //   }
  //
  //   let currentScroll = window.scrollY; // Zaokrąglona aktualna pozycja przewinięcia
  //
  //   // Jeśli przewijanie jest w toku, zatrzymujemy je, zapobiegając domyślnemu działaniu
  //   if (this.scrollCount < 3) {
  //     event.preventDefault(); // Zapobiegamy domyślnemu przewijaniu
  //     this.isScrolling = true; // Zablokowanie dalszego przewijania
  //
  //     currentScroll = this.roundToFullHeight(currentScroll);
  //     const targetScroll = event.deltaY > 0
  //       ? currentScroll + window.innerHeight // Przewijanie w dół o 100vh
  //       : currentScroll - window.innerHeight; // Przewijanie w górę o 100vh
  //
  //     window.scrollTo({
  //       top: targetScroll,
  //       behavior: 'smooth'
  //     });
  //
  //     this.scrollCount++; // Zwiększamy licznik przewinięć
  //
  //     // Po 700ms odblokowujemy przewijanie
  //     setTimeout(() => {
  //       this.isScrolling = false;
  //     }, 700);
  //   } else {
  //     // Po 3 przewinięciach, zachowanie domyślne (normalne przewijanie)
  //     this.scrollCount = 0; // Resetujemy licznik przewinięć
  //   }
  // }
}
