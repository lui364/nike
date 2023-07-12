import { Component } from '@angular/core';
import { imageData } from './imagen';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent {

  listImagen = imageData;
}
