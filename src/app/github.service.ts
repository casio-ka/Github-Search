import { environment } from './../environments/environment';
import { repo } from './repo';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { 

  }

  getUserRepos(username:string){
    return this.http.get<repo[]>(`https://api.github.com/users/username/repos?access_token=${environment.GIT_Api_Key}`);

  }
}
