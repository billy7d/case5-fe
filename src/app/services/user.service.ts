
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';
import { resolve } from 'dns';
import { rejects } from 'assert';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL ='http://localhost:8080/users';

  constructor(public http:HttpClient) { }

  getAllUser = (): Promise<Object> => {
    return new Promise((resolve,rejects) =>{
      let url ="http://localhost:8080/users"
      this.http.get(url).subscribe(res =>{
        resolve(res);
      }, err =>{
        rejects(err);
      })
      })
  }




  createUser= (user): Promise<Object> => {
        return new Promise((resolve, reject) => {
            let url = "http://localhost:8080/users/create";
            this.http.post(url, user)
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }

    deleteUser(id:number):Promise<Object>{
      return new Promise((resolve, reject) => {
        let url = "http://localhost:8080/users/delete/" +id;
        this.http.delete(url)
            .subscribe(res => {
                resolve(res);
            }, err => {
                reject(err);
            })
    })
    }

    getUpdateFormUser(id):Promise<Object> {
      return new Promise((resolve, reject) => {
        let url = "http://localhost:8080/users/"+id;
        this.http.get(url)
            .subscribe(res => {
                resolve(res);
            }, err => {
                reject(err);
            })
    })
    }

    updateUser(id,user):Promise<Object> {
      return new Promise((resolve, reject) => {
        let url = "http://localhost:8080/users/edit/"+id;
        this.http.put(url,user)
            .subscribe(res => {
                resolve(res);
            }, err => {
                reject(err);
            })
    })
    }

}
