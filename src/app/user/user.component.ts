import { Component, OnInit } from '@angular/core';
import User from '../models/user';
import { UserService } from '../shared/user.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  bgImage:any;
  constructor(private userService: UserService, private sanitization: DomSanitizer) { }

  ngOnInit() {
    this.userService.activeUser.subscribe(user =>{
      this.user = user
      this.bgImage = this.sanitization.bypassSecurityTrustStyle('url('+user.picture.large+')')
    });
  }

}
