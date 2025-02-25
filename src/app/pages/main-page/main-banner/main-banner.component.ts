import { Component, HostListener, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ChatPageComponent} from '../../chat-page/chat-page.component';
import { Router, RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { NgIcon } from '@ng-icons/core';
import { AccessibilityComponent } from '../../../fetures/accessibility/accessibility.component';
import { TrPipe } from '../../../pipes/translate.pipe';

@Component({
    selector: 'app-main-banner',
    templateUrl: './main-banner.component.html',
    styleUrls: ['./main-banner.component.scss'],
    imports: [NgClass, RouterLink, NgIcon, AccessibilityComponent, TrPipe]
})
export class MainBannerComponent implements OnInit {

  secondTheme=false; // Default background color

  constructor(private router_:Router) {}

  ngOnInit(): void {}

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

  protected readonly navigator = navigator;

  openAibotChatModal() {

   this.router_.navigate(['/chatBot'])  }
}
