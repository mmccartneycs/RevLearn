import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/account';
import { Student } from 'src/app/models/student';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService, private accountService: AccountService) { }

  userInput: any = this.accountService.accInfo;
  loginEmail: string = this.accountService.loginEmail;
  loginPassword: string = this.accountService.loginPassword;


  id: number = 0;
  firstname: string = "";
  lastname: string = "";
  phone_number: string = "";
  dob: string = "";
  address: string = "";

  showMessage = true;
  message: string | null = null;

  hide = true;

  email: string = ""
  password: string = ""

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);


  ngOnInit() {
    this.email = this.loginEmail;
    this.password = this.loginPassword;
    this.id = this.userInput.id;
    this.firstname = this.userInput.firstname;
    this.lastname = this.userInput.lastname;
    this.phone_number = this.userInput.phone_number;
    this.dob = this.userInput.dob;
    this.address = this.userInput.address;
    localStorage.setItem("userId", this.id.toString());
  }

  isValidForm(): boolean {
    return !!this.email && !!this.password && !!this.firstname && !!this.lastname && !!this.phone_number && !!this.dob && !!this.address;
  }

  onLogout() {
    this.accountService.accInfo = null;
    this.accountService.loginEmail = null;
    this.accountService.loginPassword = null;
    this.userInput = null;
    this.router.navigateByUrl('/');
    this.authService.isLoggedIn = false;
  }

  showProfileForm = true;

  toggleProfileForm() {
    this.showProfileForm = !this.showProfileForm;
  }

  patchInfo() {
    let account: Account = { email: this.email, password: this.password }
    this.accountService.patchCredentialsAPI(account, this.id).subscribe((credentials: Account) => {
      console.log(credentials);
      this.accountService.loginEmail = credentials.email;
      this.accountService.loginPassword = this.password;
      this.message = "Account information updated!"
      setTimeout(() => {
        this.message = null;
      }, 15000)
    });

    let student: Student = { id: this.id, firstname: this.firstname, lastname: this.lastname, address: this.address, phone_number: this.phone_number, dob: this.dob }
    this.accountService.patchInfoAPI(student, this.id).subscribe((info: Student) => {
      console.log(info);
      this.accountService.accInfo = info;
      this.message = "Account information updated!"
      setTimeout(() => {
        this.message = null;
      }, 15000)
    });
  }

  clearFields() {
    this.firstname = '';
    this.lastname = '';
    this.phone_number = '';
    this.dob = '';
    this.address = '';
  }

}
