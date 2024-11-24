import {AfterViewInit, Component, OnInit} from '@angular/core';
import VanillaTilt from 'vanilla-tilt';
import {TranslateService} from './pipes/translate.service';
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


    setInterval(() => {
      const elements = document.querySelectorAll('[data-tilt]:not([data-tilt-initialized])');
      if (elements.length > 0) {
        // @ts-ignore
        VanillaTilt.init(elements, {
          max: 15,
          speed: 400,
          glare: true,
          'max-glare': 0.2,
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
