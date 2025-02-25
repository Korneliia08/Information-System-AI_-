import {Component} from '@angular/core';
import {UserCabinetNavComponent} from './components/user-cabinet-nav/user-cabinet-nav.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-user-cabinet-page',
  templateUrl: './user-cabinet-page.component.html',
  styleUrl: './user-cabinet-page.component.scss',
  imports: [RouterOutlet, UserCabinetNavComponent]
})
export class UserCabinetPageComponent {

}
