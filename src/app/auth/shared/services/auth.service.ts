import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authtUrl = environment.BASE_URL + 'api/v1/auth';
  private confirmEmailUrl = environment.BASE_URL + '/confirm-email';
  private resetPasswordUrl = environment.BASE_URL + '/change-password';

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
        'confirmationUrl':this.confirmEmailUrl
      })
    };

    return this.http.post(this.authtUrl+'/register',model,optionRequete);
  }

  resetPassword(model : any){
    const optionRequeste = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'resetPasswordUrl':this.resetPasswordUrl
      })
    };

    return this.http.post(this.authtUrl+'/resetPassword',model,optionRequeste);
  }

  confirmEmail(model:any){
    return this.http.post(this.authtUrl+'confirmEmail', model);
  }

  changePassword(model:any){

    return this.http.post(this.authtUrl+'changePassword',model);
  }

}
