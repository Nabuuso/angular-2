import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl = environment.BASE_URL;

  constructor(private HttpClient:HttpClient) { }

getUsers(username: string){

  const endpoint = `${this.baseUrl}/users/${username}?client_secret=${environment.Apikey}&client_id=${environment.ClientId}`;
console.log(endpoint)
return this.HttpClient.get<any[]>(endpoint,{
}).toPromise();
}
}
