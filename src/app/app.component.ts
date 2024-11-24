import {Component, OnInit} from '@angular/core';
import $ from 'jquery'; // Import jQuery
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'angular';

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
