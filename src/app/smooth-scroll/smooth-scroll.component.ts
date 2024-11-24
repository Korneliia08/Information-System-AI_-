import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-smooth-scroll',
  templateUrl: './smooth-scroll.component.html',
  styleUrls: ['./smooth-scroll.component.scss'],
  standalone: false
})
export class SmoothScrollComponent implements OnInit, OnDestroy {
  isScrolling = false; // Flaga do kontrolowania przewijania

  // Funkcja zaokrąglająca scrollY do najbliższego pełnego 100vh
  private roundToFullHeight(scrollY: number): number {
    return Math.round(scrollY / window.innerHeight) * window.innerHeight;
  }

  ngOnInit(): void {
    // Dodanie nasłuchiwania na zdarzenie 'wheel' po inicjalizacji komponentu
    document.addEventListener('wheel', this.onWheel.bind(this), { passive: false });
  }

  ngOnDestroy(): void {
    // Usuwanie nasłuchiwania na zdarzenie 'wheel' po zniszczeniu komponentu
    document.removeEventListener('wheel', this.onWheel.bind(this));
  }

  private onWheel(event: WheelEvent): void {

    // Jeśli przewijanie jest już w toku, zapobiegamy dalszemu przewijaniu
    if (this.isScrolling) {
      event.preventDefault(); // Zapobiegamy domyślnemu przewijaniu
      return;
    }

    let currentScroll = window.scrollY; // Aktualna pozycja przewinięcia

    // Sprawdzamy, czy ekran jest poniżej 300vh
    if (event.deltaY > 0) {
      if (currentScroll >= window.innerHeight * 2) {
        // Jeśli jesteśmy poniżej 300vh, scroll działa normalnie
        return;
      }
    } else {
      if (currentScroll > window.innerHeight * 2) {
        // Jeśli jesteśmy poniżej 300vh, scroll działa normalnie
        return;
      }
    }

    // Zablokowanie dalszego przewijania
    event.preventDefault(); // Zapobiegamy domyślnemu przewijaniu
    this.isScrolling = true; // Zablokowanie przewijania

    // Zaokrąglamy pozycję przewinięcia do pełnego 100vh
    currentScroll = this.roundToFullHeight(currentScroll);

    // Obliczamy cel przewijania w zależności od kierunku scrolla
    const targetScroll = event.deltaY > 0
      ? currentScroll + window.innerHeight // Przewijanie w dół o 100vh
      : currentScroll - window.innerHeight; // Przewijanie w górę o 100vh

    // Płynne przewijanie do celu
    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth',
    });

    // Ustawiamy overflow na hidden, żeby zablokować przewijanie


    // Ustalanie opóźnienia w ms (700ms)
    setTimeout(() => {
      this.isScrolling = false; // Po zakończeniu animacji odblokowujemy przewijanie

    },300);
  }
}
