import { Component, OnInit, } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../service/users/users.service';
import { RepositoryService } from '../services/repository/repository.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userProfile: any;
  userRepositories: any;
  isLoading = true;

  searchForm = new FormGroup({
  username: new FormControl(''),
  });

  constructor(private usersService:UsersService, private repositoryService:RepositoryService){}
    ngOnInit(): void {   
      // this.getUserProfile();
    }
    
    getUserProfile(){
      // try{
      //   this.isLoading = false
      // }
      (this.searchForm.getRawValue().username)
      console.log()
      this.usersService.getUsers(this.searchForm.getRawValue().username).then((response:any)=>{
        // console.log(response)
        this.userProfile = response;
        this.repositoryService.getRepositories(response.repos_url).then((repositoryResponse:any)=>{
          this.userRepositories = repositoryResponse
          console.log(repositoryResponse)
          this.repositoryService.repositories.next(repositoryResponse)
        })

      }).catch(console.log);
    
    }
  }