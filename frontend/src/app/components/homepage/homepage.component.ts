import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Account } from 'src/app/models/account';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  email: string = ""
  password: string = ""
  reg_email: string = ""
  reg_password: string = ""

  message: string = "";
  messageVisible: boolean = true;

  constructor(private accountService: AccountService, private authService: AuthService) { }


  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  reg_emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  hide = true;

  postLogin(): void {
    let account: Account = { email: this.email, password: this.password }
    this.accountService.postLoginAPI(account).subscribe(
      (acc: any) => {
        console.log(acc);
        this.authService.isLoggedIn = true;
      },
      error => {
        if (error.status === 401) {
          this.message = "Invalid email or password. Please try again."
        }
      });
  }

  postRegister(): void {
    let account: Account = { email: this.reg_email, password: this.reg_password }
    this.accountService.postRegisterAPI(account).subscribe((acc: Account) => {
      console.log(acc);
    });
  }

}
