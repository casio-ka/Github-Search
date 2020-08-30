import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient ) {}

  getUserInfo(){
    return this.http.get(`https://api.github.com/users/daneden?access_token=${environment.GIT_Api_Key}`);

  }

}
