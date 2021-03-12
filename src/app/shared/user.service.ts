import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { User } from '../models/user';


@Injectable()
export class UserService {

  usersChanged = new Subject<User[]>();
  activeUser = new Subject<User>();

  constructor() { }

  private users: User[] = [];
  private categories: string[] = [];

  setActiveUser(user: User){
    this.activeUser.next(user);
  }

  getUsers(){
    return this.users;
  }

  addUsers(users:User[]){
    this.users = users;
    this.usersChanged.next(this.users);
  }

  addCategories(users:User[]){
    this.categories.push('All');
    users.forEach(user => {
      if(this.categories.indexOf(user.profession.type) === -1) {
        this.categories.push(user.profession.type);
      }
    });
    this.categories.sort((a,b) => a.localeCompare(b)); 
  }

  getCategories(){
    return this.categories;
  }
}
