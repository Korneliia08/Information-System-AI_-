import {Component} from '@angular/core';

@Component({
  selector: 'app-grid-panel-customer',
  standalone: false,

  templateUrl: './grid-panel-customer.component.html',
  styleUrl: './grid-panel-customer.component.scss'
})
export class GridPanelCustomerComponent {
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};
}
