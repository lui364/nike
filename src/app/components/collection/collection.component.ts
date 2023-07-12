import { Component } from '@angular/core';
import { imageData } from './imagen';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent {
  listImagen = imageData;
}
