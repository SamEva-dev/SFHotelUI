import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(f :NgForm){
    const loginObserver = {
      next: (x: any)=> console.log('Observer next', x),
      error: (err: any) =>console.log('observer error',err),
      complete:() => console.log("complete"),
    };
    this.authService.login(f.value).subscribe(loginObserver);
    console.log("f",f.value)
  }
}
