import { Component } from '@angular/core';
import { imageData } from './imagen';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent {
  listImagen = imageData;
}
