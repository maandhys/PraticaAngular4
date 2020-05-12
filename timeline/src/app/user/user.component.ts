import { Component, OnInit } from '@angular/core';
import { users } from '../models/users.model'
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user : users = {} as users;
  users: [users];
  usuario: any;

  constructor( private userService: UserService ) { 
  }

   async ngOnInit() {
    this.usuario = await this.userService.getUsers();
     console.log(this.usuario);
  }

}
