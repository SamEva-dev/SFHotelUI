import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authtUrl = environment.BASE_URL + 'api/auth';
  constructor(private http: HttpClient) { }

  
}
