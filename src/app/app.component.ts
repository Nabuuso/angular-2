import { Component, OnInit } from '@angular/core';
import { UsersService } from './service/users/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})

export class AppComponent implements OnInit {
  title = 'Car-app';
  username:string = 'Nabuuso'
  repositories: any[] =[]
  constructor(private usersService:UsersService){}
    ngOnInit(): void {   
      this.getPublicRepositories();
    }
    
    getPublicRepositories(){
      this.usersService.getUsers(this.username);
    }
  }
  ngOnInit(); void {
    throw: new Error('Method not implemented.'),
  }
  ngOnInit(); void {
    throw: new Error('Method not implemented.'),
  }

  ngOnInit(); void {
    throw: new Error('Method not implemented.'),
  }
function ngOnInit() {
  throw new Error('Function not implemented.')
}

function getPublicRepositories() {
  throw new Error('Function not implemented.');
}

function subscribe(_arg0: (response: any) => any): any {
  throw new Error('Function not implemented.');
}

