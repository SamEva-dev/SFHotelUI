import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {

  constructor() { }
 
  ngOnInit(): void {
  }

}
