import {AfterViewInit, Component, OnInit} from '@angular/core';
import $ from 'jquery';
import VanillaTilt from 'vanilla-tilt';
import {TranslateService} from './pipes/translate.service';
//import { fairyDustCursor } from "./test";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit,AfterViewInit{
  title = 'angular';
  constructor(private translate:TranslateService) {
  }
  ngAfterViewInit() {


    document.addEventListener('mousemove', (e) => {
      createRandomDot(e.pageX, e.pageY);
      createRandomLine(e.pageX, e.pageY);
    });

    function createRandomDot(x:any, y:any) {
      const dot = document.createElement('div');
      dot.classList.add('cursor-element');
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
      document.body.appendChild(dot);
      setTimeout(() => dot.remove(), 2000); // Remove after 2 seconds
    }

    function createRandomLine(x:any, y:any) {
      const line = document.createElement('div');
      line.classList.add('line');
      const length = Math.random() * 100 + 30;  // Random length between 30 and 130px
      const angle = Math.random() * 360; // Random angle
      const offsetX = Math.random() * 30 - 15; // Random offset from cursor
      const offsetY = Math.random() * 30 - 15; // Random offset from cursor

      line.style.width = `${length}px`;
      line.style.transform = `rotate(${angle}deg)`;
      line.style.left = `${x + offsetX}px`;
      line.style.top = `${y + offsetY}px`;

      document.body.appendChild(line);
      setTimeout(() => line.remove(), 2000); // Remove after 2 seconds
    }








    // new fairyDustCursor();
    setInterval(() => {
      const elements = document.querySelectorAll('[data-tilt]:not([data-tilt-initialized])');
      if (elements.length > 0) {
        // @ts-ignore
        VanillaTilt.init(elements, {
          max: 15,
          speed: 400,
          glare: true,
          'max-glare': 0.5,
        });
        elements.forEach((element) => {
          element.setAttribute('data-tilt-initialized', 'true');
        });
        // @ts-ignore

      }
    }, 1000);


  }
  ngOnInit(){
    this.translate.getLanguageFile("en")
    // // @ts-ignore
    // $(".marquee").marquee({
    //   duration: 11000,
    //   gap: 50,
    //   delayBeforeStart: 0,
    //   direction: "left",
    //   duplicated: true,
    // });
    //
    // // @ts-ignore
    // $(".bigmarquee").marquee({
    //   duration: 11000,
    //   gap: 50,
    //   delayBeforeStart: 0,
    //   direction: "left",
    //   duplicated: true,
    // });
    //
    // // @ts-ignore
    // $(".bigmarqueeSlow").marquee({
    //   duration: 18000,
    //   gap: 50,
    //   delayBeforeStart: 0,
    //   direction: "left",
    //   duplicated: true,
    // });
  }
}
