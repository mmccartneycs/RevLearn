import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Account } from 'src/app/models/account';
import { AccountService } from 'src/app/services/account.service';

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

  constructor(private accountService: AccountService) { }


  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  reg_emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  hide = true;

  postLogin(): void {
    let account: Account = { email: this.email, password: this.password }
    this.accountService.postLoginAPI(account).subscribe((acc : Object) => {
      console.log(acc);
    });
  }

  postRegister(): void {
    let account: Account = { email: this.reg_email, password: this.reg_password }
    this.accountService.postRegisterAPI(account).subscribe((acc : Account) => {
      console.log(acc);
    });
  }

}
