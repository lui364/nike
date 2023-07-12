import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public active: boolean = false;
public icon = "fa-solid fa-bars";
  
  setMenu(){
    this.active = !this.active;

    if(this.active === true){
      this.icon = "fa-solid fa-x";
    }else{
      this.icon = "fa-solid fa-bars";
    }
  }
}
