import { GithubService } from './../github.service';
import { UserprofileService } from './../userprofile.service';
import { Component, OnInit } from '@angular/core';
import { user } from './../user';
import { repo } from './../repo';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-gh-users',
  templateUrl: './gh-users.component.html',
  styleUrls: ['./gh-users.component.css']
})
export class GhUsersComponent implements OnInit {
  profile: user[];
  repos: repo[];
  username = 'casio-ka';
  
  errorMessage;

  constructor(private Userprofile: UserprofileService, private githubService: GithubService) { }


  public getUserInfo(event: any) {
   
    let promise = new Promise((resolve , reject) => {
     this.Userprofile.getUserInfo(this.username).toPromise().then(response => {
       this.profile = response;
        resolve();
      },
      error => {
        this.errorMessage = 'An error was encountered';
      }
    );
    });
    return promise;
  }

  public getUserRepos(event: any) {
    // tslint:disable-next-line:prefer-const
    let promise = new Promise((resolve , reject) => {
     this.githubService.getUserRepos (this.username).toPromise().then(response => {
       this.repos = response; // this will push all data to array [repo]
        resolve();
      },
      error => {
        this.errorMessage = 'An error was encountered';
      }
    );
    });
    return promise;
  }
 

  ngOnInit(): void {
    
  }


}
