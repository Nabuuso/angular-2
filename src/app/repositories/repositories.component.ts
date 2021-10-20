import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RepositoryService } from '../services/repository/repository.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  repositories: any[]=[];
  isLoading = true;

 repositoryForm = new FormGroup({
  repositories: new FormControl(''),
  username: new FormControl(''),
  });

  constructor(private reposService: RepositoryService){}
    ngOnInit(): void {   
      // this.getPublicRepositories();
      this.reposService.repositories.subscribe(repositories=>this.repositories=repositories)
    }
    
    async getPublicRepositories(){
      // try{
      //   this.isLoading = false
      // }
    //  const username = this.repositoryForm.getRawValue().username();
    //  const repository = this.repositoryForm.getRawValue().username();
    //  const response = await this.reposService.getRepositories(username, repository);
    //  this.repositories = response
    }
  }


