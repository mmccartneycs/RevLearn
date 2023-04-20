import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent {

  constructor(private router: Router, private authService: AuthService) { }

  onLogout() {
    this.router.navigateByUrl('/');
    this.authService.isLoggedIn = false;
  }

  showProfileForm = true;

  toggleProfileForm() {
    this.showProfileForm = !this.showProfileForm;
  }

}
