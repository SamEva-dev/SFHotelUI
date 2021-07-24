import { Component, OnInit } from '@angular/core';
import { ToolbarService } from '../shared/services/toolbar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private toolbarService: ToolbarService) { }

  ngOnInit(): void {
  }

  toggleSidebarPin() {
    this.toolbarService.toggleSidebarPin();
  }
}
