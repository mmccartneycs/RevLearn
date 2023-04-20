import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent {

  constructor(private router: Router) { }

  onLogout() {
    this.router.navigateByUrl('/');
  }

}
