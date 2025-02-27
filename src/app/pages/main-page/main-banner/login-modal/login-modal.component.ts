import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-login-modal',
  imports: [],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.scss'
})
export class LoginModalComponent {
  readonly dialogRef = inject(MatDialogRef<LoginModalComponent>);
  private router_ = inject(Router)

  goToAdmin() {
    this.dialogRef.close();
    this.router_.navigate(['/userCabinet/dashboard'])
  }
}
