import { Component, Input, OnInit } from '@angular/core';
import { Image } from '../cats/image.model';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {
  @Input() imageUrl: string = '';
  @Input() imageId: string = '';
  imageStatus: string = 'unlike';

  catsFavouriteImages: Image[] = [];


  constructor() { }

  ngOnInit(): void {
  }

  addToFavourites(){
    let favouriteImg = new Image(this.imageUrl, this.imageId);
    this.catsFavouriteImages.push(favouriteImg);

    console.log(this.catsFavouriteImages);

  }

}
