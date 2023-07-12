import { Component } from '@angular/core';
import { imageData } from './imagen';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent {
  listImagen = imageData;
}
