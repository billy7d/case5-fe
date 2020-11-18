import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  idUser:number;
  user:any = {
    name: '',
    address: ''
  };


  constructor(private userService:UserService, private router:Router,private actRouter:ActivatedRoute) {
    this.idUser = parseInt(this.actRouter.snapshot.params.id);
    this.getUserById(this.idUser)
   }

  ngOnInit(): void {
  }

  getUserById(id) {
    this.userService.getUpdateFormUser(id)
        .then(res => {
          this.user = res;

        }, error => window.alert('errorr'));

  }

  editUser(id){
    this.userService.updateUser(id,this.user)
    .then(res => {
      this.user = res;

    }, error => window.alert('errorr'));
  }
}
