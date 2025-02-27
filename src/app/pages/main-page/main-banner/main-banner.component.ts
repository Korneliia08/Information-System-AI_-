import {Component, HostListener, inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgClass} from '@angular/common';
import {NgIcon} from '@ng-icons/core';
import {AccessibilityComponent} from '../../../fetures/accessibility/accessibility.component';
import {TrPipe} from '../../../pipes/translate.pipe';
import {MatDialog} from '@angular/material/dialog';
import {LoginModalComponent} from './login-modal/login-modal.component';

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.scss'],
  imports: [NgClass, NgIcon, AccessibilityComponent, TrPipe]
})
export class MainBannerComponent implements OnInit {
  secondTheme = false; // Default background color
  protected readonly navigator = navigator;
  private ngbModal = inject(MatDialog)

  constructor(private router_: Router) {
  }

  ngOnInit(): void {
  }

  // Listen for the window scroll event
  @HostListener('window:scroll', [])
  onScroll(): void {
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
