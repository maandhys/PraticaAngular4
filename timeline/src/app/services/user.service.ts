import { Injectable } from '@angular/core';
import { users } from '../models/users.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  private gitHubUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(
    private http: HttpClient,
  ) { }

  async getUsers() {
    let res = await this.http.get(this.gitHubUrl).toPromise();
    console.log(res);
    return res;
  }

  // async getUsesById(id: number) {
  //   let res = await this.http.get(this.gitHubUrl + id).toPromise();
  //   console.log(res);
  //   return res;
  // }

  // async postUsers(user) {
  //   let res = await this.http.post(this.gitHubUrl, user).toPromise();
  //   console.log(res);
  //   return res;
  // }
}
