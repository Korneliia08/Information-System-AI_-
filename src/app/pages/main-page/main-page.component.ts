import { Component } from '@angular/core';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { GridPanelCustomerComponent } from './grid-panel-customer/grid-panel-customer.component';
import { RowInformationsComponent } from './row-informations/row-informations.component';
import { HorizontalPersonComponent } from './horizontal-person/horizontal-person.component';
import { WheAreWeComponent } from './whe-are-we/whe-are-we.component';
import { PanelTextWithImageComponent } from './panel-text-with-image/panel-text-with-image.component';
import { FooterComponent } from './footer/footer.component';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrl: './main-page.component.scss',
    imports: [MainBannerComponent, GridPanelCustomerComponent, RowInformationsComponent, HorizontalPersonComponent, WheAreWeComponent, PanelTextWithImageComponent, FooterComponent]
})
export class MainPageComponent {

}
