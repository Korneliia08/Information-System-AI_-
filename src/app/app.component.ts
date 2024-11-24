import {AfterViewInit, Component, OnInit} from '@angular/core';
import $ from 'jquery';
import VanillaTilt from 'vanilla-tilt';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit,AfterViewInit{
  title = 'angular';
  ngAfterViewInit() {

    // @ts-ignore
    VanillaTilt.init(document.querySelectorAll('[data-tilt]'), {
      max: 25, // Maksymalny kąt
      speed: 400, // Czas trwania animacji
      glare: true, // Efekt poświaty
      'max-glare': 0.5, // Maksymalna poświata
    });


  }
  ngOnInit(){
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
