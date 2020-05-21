import { Component, OnInit } from '@angular/core';
import { users } from '../models/users.model'
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  usuario: users;
  usuarioArray: users[];
  response: any;

  constructor( private userService: UserService ) { 
  }

   async ngOnInit() {
    this.response = await this.userService.getUsers();
    this.usuarioArray = this.response;
  }

}
