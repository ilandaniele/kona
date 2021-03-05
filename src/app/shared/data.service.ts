import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { ExtraDataService } from './extra-data.service';

@Injectable()
export class DataService {

  constructor(private http: HttpClient, private usersService: UserService,private extraDataService: ExtraDataService) { }
  
  url: string = "https://randomuser.me/api/?results=30&inc=name,email,phone,picture&noinfo";

  fetchUsers(){
    this.http.get<any>(this.url)
    .subscribe(users=>{
      let fullyLoadedUsers= this.extraDataService.addExtraUserData(users.results);
      this.usersService.addUsers(fullyLoadedUsers);
      this.usersService.addCategories(fullyLoadedUsers);
    }),err=>{this.fetchUsers()};
  }


}
