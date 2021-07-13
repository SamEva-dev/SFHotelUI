import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private route: ActivatedRoute,private authService: AuthService) { }

  passwordConfirmed:boolean = true;
  model : any= {};

  ngOnInit(): void {
    this.model.token =  this.route.snapshot.queryParamMap.get('token');
    this.model.userid =  this.route.snapshot.queryParamMap.get('userid');
  }
  onSubmit(){
    this.authService.changePassword(this.model).subscribe(()=>{
      console.log("success");
      this.passwordConfirmed = true;
    }, error =>{
      console.log(error);
      this.passwordConfirmed = false;
    });
  }
}


