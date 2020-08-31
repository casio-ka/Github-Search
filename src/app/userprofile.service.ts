import { Observable } from 'rxjs';
import { environment } from './../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


import {user } from './user'

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {


fromURL: string = 'https://api.github.com'
  constructor(private http:HttpClient) { }

  getUserInfo(username:string): Observable<user[]> {
    return this.http.get<user[]>(this.fromURL + '/users/' + username);
  
}

}
