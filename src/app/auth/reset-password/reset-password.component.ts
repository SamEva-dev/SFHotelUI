import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(f :NgForm){
    const restePasswordObserver = {
      next: (x: any)=> console.log('check email reset password', x),
      error: (err: any) =>console.log('observer error',err),
      complete:() => console.log("complete"),
    };
    this.authService.resetPassword(f.value).subscribe(restePasswordObserver);
    console.log("f",f.value)
  }
}
