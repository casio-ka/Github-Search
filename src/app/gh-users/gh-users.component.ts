import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gh-users',
  templateUrl: './gh-users.component.html',
  styleUrls: ['./gh-users.component.css']
})
export class GhUsersComponent implements OnInit {
  profile: any[]=[];

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getUserInfo()
      .subscribe((profile:any)=>{
        this.profile = profile;
        console.log ('Data',profile);
      });
  }

}
