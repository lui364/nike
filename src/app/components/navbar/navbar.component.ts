import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public active : boolean = true;
  public icon = 'fa-solid fa-bars';

   
  setActive(){
    this.active = !this.active;

    if (this.active === false) {
        this.icon = "fa-solid fa-x";
    }else{
      this.icon = 'icon fa-solid fa-bars';
    }
  }
  
  setMenu(){
     this.active = true;

     this.icon = 'icon fa-solid fa-bars';
  }
}
