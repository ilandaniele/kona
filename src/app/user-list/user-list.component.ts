import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '../models/user';
import { DataService } from '../shared/data.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  usersList : User[];
  categories: string[];
  selectedCategory = 'All';
  search = '';

  constructor(private data: DataService, private usersService: UserService) {
    this.usersList = [];
    this.categories = [];
   }
  
  ngOnInit(): void {
    this.data.fetchUsers();
    this.usersList = this.usersService.getUsers();
    this.categories = this.usersService.getCategories();

    this.usersService.usersChanged.subscribe( (u: User[]) => {
      this.usersList = u;
      u.forEach(user => {
        if(this.categories.indexOf(user.profession.type) === -1) {
          this.categories.push(user.profession.type);
        }
      });
    });
    
  }

  setCategory(category: string){
    this.selectedCategory = category;
  }

  setSearch(search: string){
    this.search = search;
  }

  getCategories(){
    return this.categories;
  }

  getLowerHalf(): any[]{
    return this.usersList.slice(0,this.usersList.length/2);
  }
  
  
  getUpperHalf(): any[]{
    return this.usersList.slice(this.usersList.length/2,this.usersList.length);
  }
}
