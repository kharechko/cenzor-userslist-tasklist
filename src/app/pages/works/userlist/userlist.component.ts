import { Component, OnInit } from '@angular/core';
import { IUser } from './../../../shared/interfaces/user.interface';
import { User } from './../../../shared/models/user.model';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})


export class UserlistComponent implements OnInit {
    
  login: string;
  password: string;
  email: string;
  userId: number;
  usersArray: IUser[] = [];
  isEdit: boolean = true;

  constructor() { }

  ngOnInit(): void {}

  addUser(index: number): void{
    const newUser: IUser = new User(this.login, this.password, this.email);
    this.usersArray.push(newUser);
    this.userId = index;
    this.resetUser()
  }

  editUser(index: number): void{
     this.isEdit = false;
     this.userId = index;
     this.login = this.usersArray[index].login;
     this.password = this.usersArray[index].password;
     this.email = this.usersArray[index].email;
    }

  deleteUser(index: number): void{
    this.usersArray.splice(index, 1)
    }

  updateUser(): void{
     this.usersArray[this.userId].login = this.login;
     this.usersArray[this.userId].password = this.password;
     this.usersArray[this.userId].email = this.email;
     this.isEdit = true;
     this.resetUser()
    }

  resetUser(): void{
    this.login = '';
    this.password = '';
    this.email = ''
  }
}
