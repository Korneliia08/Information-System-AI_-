import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-modal',
  imports: [],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.scss'
})
export class LoginModalComponent {
  private router_ = inject(Router)

  goToAdmin() {

    this.router_.navigate(['/userCabinet/dashboard'])
  }
}
