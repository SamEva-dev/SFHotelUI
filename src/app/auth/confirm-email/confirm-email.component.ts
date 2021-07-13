import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.scss']
})
export class ConfirmEmailComponent implements OnInit {

 emailConfirmed:boolean = true;
 urlParam: any={};

  constructor(private route: ActivatedRoute,private authService: AuthService) { }

  ngOnInit(): void {
    this.urlParam.token =  this.route.snapshot.queryParamMap.get('token');
    this.urlParam.token =  this.route.snapshot.queryParamMap.get('userid');
    this.confirmEmail();
  }

  confirmEmail(){
    this.authService.confirmEmail(this.urlParam).subscribe(()=>{
      console.log("success");
      this.emailConfirmed = true;
    }, error =>{
      console.log(error);
      this.emailConfirmed = false;
    });
  }

}
