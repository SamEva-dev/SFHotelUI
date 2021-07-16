import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { NgProgress } from '@ngx-progressbar/core';

import { SidebarService } from './side-bar/shared/sidebar.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SFHotelUI';
@ViewChild(MatSidenav) sidenav! :MatSidenav;
public menus:any[] = [];
panelOpenState = false;
constructor(private breakpointObserver: BreakpointObserver,
  public sidebarService: SidebarService) {
    this.menus = sidebarService.getMenuList();
  }
  isExpanded :boolean = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

ngAfterViewInit(){
  this.breakpointObserver.observe(['(max-width : 800px']).subscribe((res)=>{
    if ( res.matches){
      this.sidenav.mode="over";
      this.sidenav.close();
    }
    else{
      this.sidenav.mode = 'side';
      this.sidenav.open();
    }
  }
  );
}
getSideBarState() {
  return this.sidebarService.getSidebarState();
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
  return this.sidebarService.hasBackgroundImage;
}

}
