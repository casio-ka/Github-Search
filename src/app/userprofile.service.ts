import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {user } from './user'

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {



  constructor(private http:HttpClient) { }

  getUserInfo(username:string) {
    return this.http.get<user[]>(`https://api.github.com/users/username?access_token=${environment.GIT_Api_Key}`);
  
}

}
