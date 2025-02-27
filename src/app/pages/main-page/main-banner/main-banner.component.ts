import {Component, HostListener, inject} from '@angular/core';
import {Router} from '@angular/router';
import {NgClass} from '@angular/common';
import {NgIcon} from '@ng-icons/core';
import {AccessibilityComponent} from '../../../fetures/accessibility/accessibility.component';
import {TrPipe} from '../../../pipes/translate.pipe';
import {MatDialog} from '@angular/material/dialog';
import {LoginModalComponent} from './login-modal/login-modal.component';
import {AnimationOptions, LottieComponent} from 'ngx-lottie';
import {AnimationItem} from 'lottie-web';

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.scss'],
  imports: [NgClass, NgIcon, AccessibilityComponent, TrPipe, LottieComponent]
})
export class MainBannerComponent {
  secondTheme = false; // Default background color
  options: AnimationOptions = {
    path: 'assets/lottie/header.json',
    autoplay: true,
    loop: true,
  };
  protected readonly navigator = navigator;
  private ngbModal = inject(MatDialog)
  private animation!: AnimationItem;

  constructor(private router_: Router) {
  }

  animationCreated(anim: AnimationItem): void {
    this.animation = anim;
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const banner = document.querySelector('.man');
    if (!banner) return;

    const rect = banner.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

    if (isVisible) {
      this.animation.play();
      console.log(1);
    } else {
      console.log(2);
      this.animation.pause();
    }

    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Log scroll position (for debugging purposes)
    //console.log('Scroll position:', scrollPosition);

    // Change background color when scroll position is greater than 100px
    if (scrollPosition > 100) {
      this.secondTheme = true;
    } else {
      this.secondTheme = false;
    }
  }

  openAibotChatModal() {
    this.ngbModal.open(LoginModalComponent)
  }
}
