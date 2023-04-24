import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Account } from 'src/app/models/account';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

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

  message: string | null = null;
  reg_message: string | null = null;
  emailSent: string | null = null;
  passwordEmailSent: string | null = null;
  messageVisible: boolean = true;
  registerVisible: boolean = true;

  constructor(private accountService: AccountService, private authService: AuthService, private router: Router) { }


  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  reg_emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  hide = true;

  ngOnInit() {
    var localStorage = window.localStorage;
  }

  postLogin(): void {
    let account: Account = { email: this.email, password: this.password }
    this.accountService.postLoginAPI(account).subscribe(
      (acc: any) => {
        console.log(acc);
        this.accountService.accInfo = acc;
        this.accountService.loginEmail = this.email;
        this.accountService.loginPassword = this.password;
        this.authService.isLoggedIn = true;
        this.router.navigate(['/account']);
      },
      error => {
        if (error.status === 401) {
          this.message = "Invalid email or password. Please try again."
          setTimeout(() => {
            this.message = null;
          }, 15000)
        }
      });
  }

  postRegister(): void {
    let account: Account = { email: this.reg_email, password: this.reg_password }
    this.accountService.postRegisterAPI(account).subscribe((acc: Account) => {
      console.log(acc);
      this.accountService.accInfo = acc;
      this.emailSent = "Registration was successful! Please login."
      setTimeout(() => {
        this.emailSent = null;
      }, 15000)

    },
      error => {
        if (error.status === 401) {
          this.reg_message = "User associated with email already exists. Please Login or select Forgot Password."
          setTimeout(() => {
            this.reg_message = null;
          }, 15000)
        }
      });

  }

  postPassword(): void {
    let account: Account = { email: this.email, password: this.password }
    this.accountService.postPasswordAPI(account).subscribe(
      (acc: any) => {
        this.passwordEmailSent = "Reset password email sent!"
        setTimeout(() => {
          this.passwordEmailSent = null;
        }, 15000)
      }
    )
  }

}
