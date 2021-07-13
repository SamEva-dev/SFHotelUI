import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authtUrl = environment.BASE_URL + 'api/v1/auth';
  private confirmEmailRul = this.authtUrl;

  constructor(private http: HttpClient) { }

  login(model:any){
    return this.http.post(this.authtUrl+'/login',model).pipe(
      map((response :any) =>{
        const user = response;
        console.log("user",user);
        if ( user.success){
          localStorage.setItem('token',user.token)
        }
      })
    )
  }


  register(model : any){
    const optionRequete = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'confrimEmailUrl':this.confirmEmailRul
      })
    };

    return this.http.post(this.authtUrl+'/register',model,optionRequete);
  }
}
