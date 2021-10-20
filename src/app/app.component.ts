import { Component, OnInit } from '@angular/core';
import { UsersService } from './service/users/users.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})

export class AppComponent implements OnInit {
  title = 'Api-request';
  username:string = 'nabuuso'
  repositories: any[] =[]
  constructor(private usersService:UsersService){}
    ngOnInit(): void {   
      // this.getPublicRepositories();
    }
    
    // async getPublicRepositories(){
    //  const response = await this.usersService.getUsers(this.username);
    //  this.repositories = response
    // }
  }



