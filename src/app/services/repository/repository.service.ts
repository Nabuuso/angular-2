import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'; 
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
 repositories:Subject<any> = new Subject<any>();

  constructor(private HttpClient:HttpClient) { }

getRepositories(repositoryUrl: string){

  const endpoint = 'repos';
return this.HttpClient.get<any[]>(repositoryUrl,{
}).toPromise();
}
}
