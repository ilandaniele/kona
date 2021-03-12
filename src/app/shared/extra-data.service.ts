import { Injectable } from '@angular/core';
import User from '../models/user';

@Injectable()
export class ExtraDataService {

  biography: string[] = ['I love strawberries', 'I love reading', 'I love playing cards','I play videogames'];
  type: string[] = ['Student','Professor','Doctor','Assistant'];
  field: string[] = ['Tourism','Computer engineering','Medicine','Psychology','Economics','Law','Marketing']
  userList: User[] = [];
  constructor() { }

  getRandomBiography(){
    return this.biography[Math.floor(Math.random() * this.biography.length)];
  }
  getRandomField(){
    return this.field[Math.floor(Math.random() * this.field.length)];
  }
  getRandomType(){
    return this.type[Math.floor(Math.random() * this.type.length)];
  }

  addExtraUserData(users: User[]): User[]{
    
    users.forEach(user => {
      let profession = {type: this.getRandomType(), field: this.getRandomField()};
      this.userList.push(new User(user.id,user.name,user.phone,user.email,user.picture,profession,this.getRandomBiography()));
    });
    
    return this.userList;
  }

}
