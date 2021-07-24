import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToolbarService } from '../shared/services/toolbar.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  animations: [
    trigger('slide', [
      state('up', style({ height: 0 })),
      state('down', style({ height: '*' })),
      transition('up <=> down', animate(200))
    ])
  ]
})

export class SideBarComponent implements OnInit {

  public menus:any[] = [];
  isCollapsed = true;
  panelOpenState = false;
  constructor(private toolbarService: ToolbarService,
    private router: Router,) {
    this.menus = toolbarService.getMenuList();
   }

  ngOnInit(): void {
  }
  getSideBarState() {
    return this.toolbarService.getSidebarState();
  }

  toggle(currentMenu:any) {
    if (currentMenu.type === 'dropdown') {
      this.menus.forEach(element => {
        if (element === currentMenu) {
          currentMenu.active = !currentMenu.active;
        } else {
          element.active = false;
        }
      });
    }
  }

  getState(currentMenu:any) {

    if (currentMenu.active) {
      return 'down';
    } else {
      return 'up';
    }
  }

  hasBackgroundImage() {
    return this.toolbarService.hasBackgroundImage;
  }

  toggleSidebarPin() {
    this.toolbarService.toggleSidebarPin();
  }
  toggleSidebar() {
    this.toolbarService.toggleSidebar();
  }

  gotoDashboard(){
    this.router.navigate(['/dashboard']);
  }

}
