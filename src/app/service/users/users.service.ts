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
getUsers(username: string): Observable <any[]>{
  const endpoint = 'users';
return this.HttpClient.get<any[]>(`${this.baseUrl}/${endpoint}/${username}/repos`,{
  withCredentials:true
})
}
}

