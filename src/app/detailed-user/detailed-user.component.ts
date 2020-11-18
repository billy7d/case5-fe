import { ActivatedRoute } from '@angular/router';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailed-user',
  templateUrl: './detailed-user.component.html',
  styleUrls: ['./detailed-user.component.css']
})
export class DetailedUserComponent implements OnInit {
  idUser:number;
  user:any = {
    name:'',
    address:''
  }


  constructor(private userService:UserService,private actRoute:ActivatedRoute) {
    this.idUser = parseInt(actRoute.snapshot.params.id);
    this.showUserById(this.idUser);
  }

  showUserById(id){
    this.userService.getUserById(id).then
    (res =>{this.user = res},
      err =>window.alert('error')
      );
  }

  ngOnInit(): void {
  }



}
