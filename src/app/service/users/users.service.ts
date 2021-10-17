import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private HttpClient:HttpClient) { }
getUsers(): Observable <any[]>{
return this.HttpClient.get<any[]>( `https://api.github.com/users/Nabuuso/repos`,{
  withCredentials:true
})
}
}

