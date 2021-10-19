import { Component, OnInit } from '@angular/core';
import { UsersService } from './service/users/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})

export class AppComponent implements OnInit {
  title = 'Api-request';
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
//   ngOnInit(); void {
//     throw: new Error('Method not implemented.'),
//   }
//   ngOnInit(); void {
//     throw: new Error('Method not implemented.'),
//   }

//   ngOnInit(); void {
//     throw: new Error('Method not implemented.'),
//   }
//   function ngOnInit(): void {
//   throw new Error('Function not implemented.')
// }



