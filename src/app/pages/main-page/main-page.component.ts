import {Component} from '@angular/core';
import {MainBannerComponent} from './main-banner/main-banner.component';
import {RowInformationsComponent} from './row-informations/row-informations.component';
import {PanelTextWithImageComponent} from './panel-text-with-image/panel-text-with-image.component';
import {FooterComponent} from './footer/footer.component';
import {HorizontalBlocksComponent} from './horizontal-blocks/horizontal-blocks.component';
import {LottieComponent} from 'ngx-lottie';
import {YTpartComponent} from './ytpart/ytpart.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  imports: [MainBannerComponent, RowInformationsComponent, PanelTextWithImageComponent, FooterComponent, HorizontalBlocksComponent, LottieComponent, YTpartComponent]
})
export class MainPageComponent {

}
