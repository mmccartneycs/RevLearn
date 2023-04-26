import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from '../models/account';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  account: Account = { email: "", password: "" }
  student: Student = { id: 0, firstname: "", lastname: "", address: "", phone_number: "", dob: "" }

  constructor(private http: HttpClient) { }

  ev = "http://localhost:9000"

  accInfo: any
  loginEmail: any
  loginPassword: any

  updateBalance(newBalance: number) {
    this.accInfo.balance = newBalance;
  }

  postLoginAPI(account: Account) {
    let header: HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.post<Account>(`${this.ev}/login`, account, { headers: header });
  }

  postRegisterAPI(account: Account) {
    let header: HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.post<Account>(`${this.ev}/register`, account, { headers: header });
  }

  patchInfoAPI(student: Student, id: number) {
    let header: HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    console.log(student);
    return this.http.patch<Student>(`${this.ev}/student/${id}`, { firstname: student.firstname, lastname: student.lastname, address: student.address, phone_number: student.phone_number, dob: student.dob }, { headers: header });
  }

  postPasswordAPI(account: Account) {
    let header: HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.post<Account>(`${this.ev}/password`, account, { headers: header });
  }

  patchCredentialsAPI(account: Account, id: number) {
    let header: HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.patch<Account>(`${this.ev}/login/${id}`, account, { headers: header });
  }

  patchBalanceAPI(id: number) {
    let header: HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.patch<Student>(`${this.ev}/student/${id}/pay`, { headers: header });
  }

  resetAccInfo() {
    this.accInfo = {
      id: 0,
      firstname: '',
      lastname: '',
      address: '',
      phone_number: '',
      dob: '',
      balance: 0
    };
  }

}
