import { Router, RouterModule } from '@angular/router';
import { UserService } from './../services/user.service';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user = {
    name: '',
    address: ''
  };


  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  createUser() {
    this.userService.createUser(this.user)
        .then(res => {
          window.alert('create success');
          this.router.navigateByUrl('/users');
        }, error => window.alert('errorr'));

  }


}
