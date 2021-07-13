import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onParticularSubmit(f :NgForm){
    const loginObserver = {
      next: (x: any)=> console.log('User created', x),
      error: (err: any) =>console.log('observer error',err),
      complete:() => console.log("complete"),
    };
    this.authService.register(f.value).subscribe(loginObserver);
    console.log("f",f.value)
  }

  onCompagniSubmit(f :NgForm){
    const loginObserver = {
      next: (x: any)=> console.log('User created', x),
      error: (err: any) =>console.log('observer error',err),
      complete:() => console.log("complete"),
    };
    this.authService.register(f.value).subscribe(loginObserver);
    console.log("f",f.value)
  }

}
