import {Component, OnDestroy, OnInit} from '@angular/core';
import {ChooseLanguageComponent} from '../../../ui/choose-language/choose-language.component';
import {TrPipe} from '../../../pipes/translate.pipe';
import {NgIcon} from '@ng-icons/core';
import {LottieComponent} from 'ngx-lottie';
import {AnimationItem} from 'lottie-web';
import {faBrandFacebook, faBrandGithub, faBrandInstagram, faBrandThreads, faBrandTiktok, faBrandViber} from '@ng-icons/font-awesome/brands';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  imports: [
    ChooseLanguageComponent,
    TrPipe,
    NgIcon,
    LottieComponent
  ],
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  options = {
    path: '/assets/lottie/bottom.json',  // Ścieżka do pliku animacji
    autoplay: true,
    loop: true,
    animationSpeed: 0.5,  // Spowolniona animacja
  };
  protected readonly faBrandGithub = faBrandGithub;
  protected readonly faBrandViber = faBrandViber;
  protected readonly faBrandFacebook = faBrandFacebook;
  protected readonly faBrandInstagram = faBrandInstagram;
  protected readonly faBrandTiktok = faBrandTiktok;
  protected readonly faBrandThreads = faBrandThreads;
  private visibilityInterval: any;
  private lottieElement: HTMLElement | null = null;

  ngOnInit(): void {
    // Uzyskujemy element Lottie po załadowaniu komponentu
    this.lottieElement = document.querySelector('.footer');
    //this.startVisibilityCheck();
  }

  ngOnDestroy(): void {
    // Czyszczenie interwału, gdy komponent jest niszczony
    if (this.visibilityInterval) {
      clearInterval(this.visibilityInterval);
    }
  }

  animationCreated(animation: AnimationItem): void {
    animation.setSpeed(0.5); // Ustawiamy prędkość animacji na 50% prędkości
  }

  // Rozpoczynamy monitorowanie widoczności
  startVisibilityCheck(): void {
    this.visibilityInterval = setInterval(() => {
      if (this.lottieElement) {
        if (this.isInView(this.lottieElement)) {
          // Jeśli element jest widoczny, wznawiamy animację
          this.resumeAnimation();
        } else {
          // Jeśli element nie jest widoczny, zatrzymujemy animację
          this.pauseAnimation();
        }
      }
    }, 200);  // Sprawdzanie co 200ms
  }

  // Sprawdzamy, czy element jest w obrębie widocznego obszaru okna
  isInView(element: HTMLElement): boolean {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }

  // Zatrzymywanie animacji
  pauseAnimation(): void {
    if (this.lottieElement) {
      this.options = {...this.options, autoplay: false};
    }
  }

  // Wznawianie animacji
  resumeAnimation(): void {
    if (this.lottieElement) {
      this.options = {...this.options, autoplay: true};
    }
  }
}
