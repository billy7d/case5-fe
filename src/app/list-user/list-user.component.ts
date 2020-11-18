import { Router } from '@angular/router';
// import { IUser } from './../iuser';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
})
export class ListUserComponent implements OnInit {
  userList: any = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    // this.userService.getAllUser().then(
    //   (res) => (this.userList = res),
    //   (err) => window.alert('Errorr!')
    // );
    this.getUsers();
  }

  getUsers(){
    this.userService.getAllUser().then(
      (res) => {this.userList = res}

    ).catch(
      (err) =>window.alert("error")
    );
  }

  deleteUser(id) {

    if(window.confirm('Are you sure?')){
      this.userService.deleteUser(id).then(
        (res) => {

        this.userList = res;
        this.getUsers();
      })
    } else{
      this.userService.deleteUser(id).catch(
        err => window.alert('error')
      )
    }
  }
}
