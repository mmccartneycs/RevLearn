import { Component } from '@angular/core';
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

  constructor(private accountService: AccountService) { }

  postAccount(): void {
    let account: Account = { email: this.email, password: this.password }
    this.accountService.postAccountAPI(account).subscribe();
  }

  getAccount(): void {
    let account: Account = { email: this.email, password: this.password }
    this.accountService.getAccountAPI(account).subscribe();
  }

}
