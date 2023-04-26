import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/account';
import { Student } from 'src/app/models/student';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';
import { QuizService } from 'src/app/services/quiz.service';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  @ViewChild('profile') profileRef!: ElementRef;

  constructor(private router: Router, private authService: AuthService, private accountService: AccountService, private quizService: QuizService) { }

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


  handler: any = null;

  coursesByStudentId: any[] = [];
  balance: number = 0;

  paid: String = ""


  ngOnInit() {
    this.loadStripe();
    this.email = this.loginEmail;
    this.password = this.loginPassword;
    this.id = this.userInput.id;
    this.firstname = this.userInput.firstname;
    this.lastname = this.userInput.lastname;
    this.phone_number = this.userInput.phone_number;
    this.dob = this.userInput.dob;
    this.address = this.userInput.address;
    localStorage.setItem("userId", this.id.toString());
    console.log(this.balance);

    this.balance = this.userInput.balance;
    console.log(this.balance);

    this.quizService.getCoursesByStudentId(this.accountService.accInfo.id).subscribe(json => {
      this.coursesByStudentId = json as any[];
      console.log(this.coursesByStudentId);
    });
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

  showProfile = true;

  toggleProfileForm() {
    this.showProfile = !this.showProfile;
    this.profileRef.nativeElement.style.display = 'none';
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

  newAccount() {

  }

  clearFields() {
    this.firstname = '';
    this.lastname = '';
    this.phone_number = '';
    this.dob = '';
    this.address = '';
  }

  pay(amount: any) {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51N0oSPG8zIX7CVBsbSZuOhDeiVCZzMn2jf54jb0Ab0eGoXWLGuk3oBg6kWZGNE6aNXXtJgNMj7ubiPPpPpgJfsPU00vGOnGy0V',
      locale: 'auto',
      token: (token: any) => {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        this.accountService.patchBalanceAPI(this.id).subscribe((student: Student) => {
          console.log(student)
          this.balance = student.balance as any
          this.accountService.accInfo.balance = this.balance;
          this.coursesByStudentId = [];
          this.paid = "You have no pending charges!"
        })
        alert('Payment received');
      }
    });

    handler.open({
      name: 'RevLearn',
      description: 'Course Payment',
      amount: amount * 100
    });


  }

  loadStripe() {

    if (!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51N0oSPG8zIX7CVBsbSZuOhDeiVCZzMn2jf54jb0Ab0eGoXWLGuk3oBg6kWZGNE6aNXXtJgNMj7ubiPPpPpgJfsPU00vGOnGy0V',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Payment Success!!');
          }
        });
      }

      window.document.body.appendChild(s);
    }
  }


}
